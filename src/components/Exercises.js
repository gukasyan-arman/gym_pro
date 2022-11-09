import React, { Component } from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import styles from "./styles/Exercises.module.css";
import ExerciseCard from './ExerciseCard';

function Exercises({exercises, bodyPart, setBodyPart}) {
	console.log(exercises)
	return ( 
		<div id='exercises' className={styles.container}>
			<Typography className={styles.title}>
				Results:
			</Typography>
			<Stack className={styles.exercisesList}>
				{exercises.map((exercise, index) =>(
					<ExerciseCard key={index} exercise={exercise}/>
				))}
			</Stack>
		</div>
	);
}

export default Exercises;