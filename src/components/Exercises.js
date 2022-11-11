import React, { useState, useEffect } from 'react';
import {Box, Stack, Typography, Pagination} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import styles from "./styles/Exercises.module.css";
import ExerciseCard from './ExerciseCard';
import classNamesBind from 'classnames/bind';

const cx = classNamesBind.bind(styles);

function Exercises({exercises, bodyPart, setExercises}) {
	
	const[currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 10;

	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
	const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

	const paginate = (e, val) => {
		setCurrentPage(val);
		window.scrollTo({top: 1180, behavior: 'smooth'});
	}

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];
			if(bodyPart === 'all') {
				exercisesData = await fetchData(
					'https://exercisedb.p.rapidapi.com/exercises',
					exerciseOptions
				);
			} else {
				exercisesData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exerciseOptions
				);
			}

			setExercises(exercisesData);

		}
		fetchExercisesData();
	}, [bodyPart]);

	return ( 
		<div id='exercises' className={cx('container', {'hideBlock' : (exercises.length < 1)})}>
			<Typography className={styles.title}>
				Results
			</Typography>
			<Stack className={styles.exercisesList}>
				{currentExercise.map((exercise, index) =>(
					<ExerciseCard key={index} exercise={exercise}/>
				))}
			</Stack>
			<Stack className={cx('paginationBlock', {'hideBlock' : (exercises.length < exercisesPerPage)})}>
				<Pagination
					color='secondary'
					size='large'
					count={Math.ceil(exercises.length / exercisesPerPage)}
					page={currentPage}
					onChange={paginate}
					defaultPage={1}
				/>
			</Stack>
		</div>
	);
}

export default Exercises;