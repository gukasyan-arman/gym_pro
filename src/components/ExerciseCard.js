import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button, Stack, Typography } from'@mui/material';
import styles from "./styles/ExerciseCard.module.css";


function ExerciseCard({exercise}) {
	return ( 
		<Link className={styles.exerciseCard} to={`/exercise/${exercise.id}`}>
			<img src={exercise.gifUrl} alt={exercise.name}/>
		</Link>
	);
}

export default ExerciseCard;