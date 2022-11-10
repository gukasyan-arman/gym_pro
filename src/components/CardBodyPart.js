import React from 'react';
import styles from "./styles/CardBodyPart.module.css";
import {Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';
import classNamesBind from 'classnames/bind';

const cx = classNamesBind.bind(styles);

function CardBodyPart({item, setBodyPart, bodyPart}) {
	return (  
		<Stack 
			type='button'
			className={cx('bodyPartCard', {'bodyPartCard_selected' : (item === bodyPart)})}
			onClick={() => {
				setBodyPart(item)
				window.scrollTo({top: 1180, left:100, behavior: 'smooth'});
			}}

		>
			<img alt='dumbell' src={Icon} className={styles.bodyPartCardIcon} />
			<Typography className={styles.titleCard}>{item}</Typography>
		</Stack>
	);
}

export default CardBodyPart;