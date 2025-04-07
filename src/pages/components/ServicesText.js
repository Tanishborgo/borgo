

import { useEffect, useState } from 'react';
import styles from '../../styles/ServicesText.module.css';
import { Box, Typography } from '@mui/material'

export default function ServicesText({ props }) {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        setArr(props);
    }, [])
    return (<>

        <div className={styles['container']}>

            <Typography className={styles['red-text']}>
                {arr[0]}
            </Typography>
            <Typography className={styles['head']}>
                {arr[1]}
            </Typography>
            <Typography className={styles['text']}>
                {arr[2]}
            </Typography>
            <Typography className={styles['red-text']} id={styles['gapper']}>
                {arr[0]}
            </Typography>
            <Typography className={styles['head']}>
                {arr[3]}
            </Typography>
            <Typography className={styles['text']}>
                {arr[4]}
            </Typography>

        </div >

    </>)
}