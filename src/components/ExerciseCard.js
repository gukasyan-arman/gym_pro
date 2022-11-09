import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button, Stack, Typography } from'@mui/material';
import styles from "./styles/ExerciseCard.module.css";


function ExerciseCard({exercise}) {
	return ( 
		<Link className={styles.exerciseCard} to={`/exercise/${exercise.id}`}>
			<img src={exercise.gifUrl} alt={exercise.name}/>
			<Stack direction='row'>
				<Button className={[styles.btn, styles.firstBtn]}>
					{exercise.bodyPart}
				</Button>
				<Button className={[styles.btn, styles.lastBtn]}>
					{exercise.bodyPart}
				</Button>
			</Stack>
			<Typography className={[styles.exerciseName]}>
				{exercise.name}
			</Typography>
		</Link>
	);
}

export default ExerciseCard;