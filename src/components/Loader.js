import React, { Component } from 'react';
import {Stack} from '@mui/material';
import { InfinitySpin  } from  'react-loader-spinner'

function Loader() {
	return (
		<Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
			<InfinitySpin 
				width='200'
				color="#ff2526"
				/>
		</Stack>
	);
}

export default Loader;