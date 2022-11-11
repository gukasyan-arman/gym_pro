import React, { Component } from 'react';
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import styles from "./styles/SimilarExercises.module.css";


function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
	return (
		<Box className={styles.container}>
			<Typography className={styles.title}>
				Exercises that <span>target</span> the same muscle group
			</Typography>
			<Stack direction='row'sx={{p: '2', position: 'relative'}}>
				{targetMuscleExercises.length ? 
				<HorizontalScrollbar data={targetMuscleExercises} />
				: <Loader />}
			</Stack>
			<Typography className={styles.title}>
				Exercises that use the same <span>equipment</span>
			</Typography>
			<Stack direction='row'sx={{p: '2', position: 'relative'}}>
				{equipmentExercises.length ? 
				<HorizontalScrollbar data={equipmentExercises} />
				: <Loader />}
			</Stack>
		</Box>
	);
}

export default SimilarExercises;