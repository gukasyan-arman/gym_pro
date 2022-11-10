import React, { Component } from 'react';
import {Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import styles from "./styles/Detail.module.css";

function Detail({exerciseDetail}) {
	const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

	const extraDetail = [
		{	
			icon: BodyPartImage,
			name: bodyPart
		},
		{	
			icon: TargetImage,
			name: target
		},
		{	
			icon: EquipmentImage,
			name: equipment
		},
	]

	return (
		<Stack className={styles.container}>
			<img src={gifUrl} alt={name} loading='lazy' className={styles.detailImage}/>
			<Stack>
				<Typography className={styles.title}>
					{name}
				</Typography>
				<Typography className={styles.description}>
				Exercises keep you strong. 
				{name} is one of the best exercises to target your {target}. 
				It will help you improve your mood and again energy.
				</Typography>
				{extraDetail.map((item) => (
					<Stack key={item.name} className={styles.iconAndTextContainer}>
						<Button className={styles.btnImage}>
							<img src={item.icon} alt={item.name} />
						</Button>
						<Typography className={styles.textForIcon}>
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
}

export default Detail;