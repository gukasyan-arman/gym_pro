import React, { Component } from 'react';
import {Box, Stack, Typography} from '@mui/material';
import styles from "./styles/ExerciseVideos.module.css";

function ExerciseVideos({exerciseVideos, name}) {
	if(!exerciseVideos.length) return 'Loading...' ;
	return (
		<Box className={styles.container}>
			<Typography className={styles.title}>
				Watch <span>{name}</span> exercise videos
			</Typography>
			<Stack className={styles.videoBlock}>
				{exerciseVideos?.slice(0,3).map((item, index) => (
					<a
						key={index}
						className={styles.exerciseVideo}
						href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
						target='_blank'
						rel='noreferrer'
					>
						<img src={item.video.thumbnails[0].url} alt={item.video.title} />
					</a>
				))}
			</Stack>
		</Box>
	);
}

export default ExerciseVideos;