import * as React from 'react';
import styles from '../../styles/ServiceCards.module.css'
import { Box } from '@mui/material'


export default function ServiceCardRight({ props }) {

    // props 

    let text = '';
    if (props === 1) {
        text = "Each client will have a dedicated accountant who will act as your client manager and ensure that the service you receive from us is of the highest quality. We include phone, email and online support in all our plans and we guarantee to respond to all correspondence within 24 hours. Business growing and you need extra support? Check out our"
    }
    else if (props === 2) {
        text = 'We work closely with our online bookkeeping clients to design an efficient and streamlined process for their business. Each client will have a dedicated online bookkeeper who will act as your relationship support and ensure that the service you receive from us is of the highest quality. We include phone, email and online support in all our plans and we guarantee to respond to all correspondence within 24 hours. Business growing and you need extra support ? Check out our Advisory Services'
    }
    else {
        text = <p>We ensure that the client spends less time working in the business and more time working on the business. Each client will have a dedicated accountant who will act as your client manager and ensure that the service you receive from us is of the highest quality.
            <br />
            We include phone, email and online support in all our plans and we guarantee to respond to all correspondence within 24 hours.</p>
    }



    return (
        <>
            <Box className={styles['main2']}>
                <Box className={styles['cardImage']}>

                    <div className={styles['content']}>
                        <div className={styles['head2']}>Our Approch</div>
                        <div className={styles['text2']}>{text}</div>
                        <div className={styles['red2']}><a href='/services/#3' className={styles['red2']}>Advisory Services</a></div>
                    </div>

                </Box>
            </Box>
        </>)
}