import React from 'react'
import Endspike from '../../../public/assests/endspike.svg';
import Bottomsphere from '../../../public/assests/sphere3.svg';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'


export default function UpperFooter() {
    return (
        <>
            <Box className="width-100 position-relative div-end height-500 height-580-sm indFix" style={{ marginBlock: '50px', backgroundColor: '#C54D1F' }}>
                <div className=' display-none-sm position-absolute left-0 fig-8 '>
                    <Image src={Endspike} width='100%' height="100%" />
                </div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10} sx={{ zIndex: 2 }}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='display-none-sm div-around flex-direction-column'>
                                <Typography className='font-30 font-26-md color-light-grey width-50 font-mulish weight-900'>
                                    “Their culture of innovation, technology and customer service is at the core of what has helped our business to scale.”
                                </Typography>
                                <Grid className='width-50'>
                                    <Typography className='font-16 color-light-grey font-mulish' style={{ marginTop: '10px' }}>
                                        Robert Whelan - Rockwell
                                    </Typography>
                                    <Typography className='font-16 color-light-grey font-mulish'>
                                        Financial Management
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='flex-direction-column'>
                                <Typography className='font-30 font-26-md color-light-grey width-50 mt-minus-60-sm width-90-sm font-mulish ml-20 weight-900'>
                                    “Their seamless onboarding process and expertise in Xero made the transition smooth and effortless, allowing me to focus on my business with confidence.”
                                </Typography>
                                <Grid className='width-50 width-90-sm'>
                                    <Typography className='font-16 color-light-grey font-mulish ml-20' style={{ marginTop: '10px' }}>
                                        Padraig Sweeney - Sweeney's D3
                                    </Typography>
                                    <Typography className='font-16 color-light-grey font-mulish ml-20 display-none'>
                                        Client Company Name
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2} className='display-none-sm'>
                    </Grid>
                </Grid>
                <div className={styles['fig-7']}>
                    <Image src={Bottomsphere} className={styles['bottom-sphere']} />
                </div>
            </Box>
        </>
    )
}
