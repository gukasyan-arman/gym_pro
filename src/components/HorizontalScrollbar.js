import React, { Component } from 'react';
import classes from "./styles/HorizontalScrollbar.module.css";
import {Box} from '@mui/material'
import CardBodyPart from './CardBodyPart';
import ExerciseCard from './ExerciseCard';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

function HorizontalScrollbar({ data, bodyPart, setBodyPart, isBodyParts }) {
	
	return (
		<ScrollMenu justifyContent='center'>
			{data.map((item) => 
				<Box
					key={item.id || item}
					itemID={item.id || item}
					title={item.id || item}
					className={classes.card}
				>
					{isBodyParts 
						? <CardBodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
						: <ExerciseCard exercise={item} />
					}
				</Box>
			)}
		</ScrollMenu>
	);
}

export default HorizontalScrollbar;