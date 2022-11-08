import React, { useState, useEffect } from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import classes from "./styles/SearchExercises.module.css"

function SearchExercises() {

	const [search, setSearch] = useState('')

	const handleSearch = async () => {
		if(search.trim()) {
			// const exercisesData = await fetchData();
		}
	}

	return ( 
		<Stack className={classes.container}>
			<Typography className={classes.title}>
				Awesome Exercise You <br/> Should Know
			</Typography>
			<Box className={classes.inputWrapper}>
				<TextField 
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					label="Search Exercises" type="search"
					className={classes.searchInput}
				/>
				<Button 
					href="#search" variant='contained' className={classes.redBtn}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
		</Stack>
	);
}

export default SearchExercises;