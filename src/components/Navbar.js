import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import classes from "./styles/NavBar.module.css"

function Navbar() {
	return (
		<Stack className={classes.container}>
			<Link to="/">
				<img className={classes.logo} src={Logo} alt='logo' />
			</Link>
			<Stack className={classes.linkList}
			>
				<Link to="/" className={classes.link}>Home</Link>
				<a href="#exercises" className={classes.link}>Exercises</a>
			</Stack>
		</Stack>
	);
}

export default Navbar;