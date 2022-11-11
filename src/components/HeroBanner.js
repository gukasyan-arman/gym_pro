import React, { Component } from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import classes from "./styles/HeroBanner.module.css"
import HeroBannerImage from "../assets/images/banner.png"

function HeroBanner() {
	return ( 
		<Box className={classes.boxConteiner}>
			<Box className={classes.textBlock}>
				<p className={classes.title}>
					Fitness club
				</p>
				<p className={classes.tagline}>
					Sweat, Smile <br /> And Repeat
				</p>
				<p className={classes.baseText}>
					Check out the most effective exercises
				</p>
				<Button href="#exercises" variant='contained' className={classes.redBtn}>
					Explore Exercises
				</Button>
			</Box>
			<img src={HeroBannerImage} alt="banner" className={classes.heroBanner} />
		</Box>
	);
}

export default HeroBanner;