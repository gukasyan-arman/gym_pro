import React, { useState, useEffect } from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import classes from "./styles/SearchExercises.module.css"
import {exerciseOptions, fetchData} from '../utils/fetchData.js'

function SearchExercises() {

	const [search, setSearch] = useState('')
	const [bodyParts, setBodyParts] = useState([])
	const [exercises, setExercises] = ([])

	useEffect(() => {
        const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
					'https://exercisedb.p.rapidapi.com/exercises/bodyPartList/bodyPartList',
					exerciseOptions
				);
			setBodyParts(['all', ...bodyPartsData]);
		}

		fetchExercisesData();

	}, [])

	const handleSearch = async () => {
		if(search.trim()) {
			const exercisesData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				 exerciseOptions
			);

			const searchedExercises = exercisesData.filter(
				(exercise) => {
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search)
				}
			)

			setSearch('');
			setExercises(searchedExercises);
		}
	}

	return ( 
		<Stack className={classes.container}>
			<Typography className={classes.title}>
				Awesome Exercise You <br/> Should Know
			</Typography>
			<Box className={classes.inputWrapper}>
				<TextField 
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					label="Search Exercises" type="search"
					className={classes.searchInput}
				/>
				<Button 
					href="#search" variant='contained' className={classes.redBtn}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
		</Stack>
	);
}

export default SearchExercises;