import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import classes from "./styles/NavBar.module.css"

function Navbar() {
	return (
		<Stack 
			direction='row' justifyContent='space-around'
			sx={{gap:{sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px='20px'>
			<Link to="/">
				<img className={classes.logo} src={Logo} alt='logo' />
			</Link>
			<Stack 
				direction='row' gap='40px' fontSize='24px' alignItems='flex-end'
				sx={{marginRight:{xs: '10px'}, fontSize: {xs: '18px'}}}
			>
				<Link to="/" className={classes.link}>Home</Link>
				<a href="#exercises" className={classes.link}>Exercises</a>
			</Stack>
		</Stack>
	);
}

export default Navbar;