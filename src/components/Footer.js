import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import styles from "./styles/Footer.module.css";

function Footer() {
	return (
		<Box className={styles.container}>
			<Stack  p='40px' pt='24px' gap='40px' alignItems='center'>
				<img src={Logo} alt='logo' width='200px' heigth='40px' />
				<Typography>
					Creating by Arman Gukasyan😽
				</Typography>
			</Stack>
		</Box>
	);
}

export default Footer;