import React from 'react'
import Navbar from './components/Navbar'
import UpperFooter from './components/UpperFooter'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
import Card from '../../public/assests/propcard.png'
// import backCard3 from '../../public/assests/Rectangle 23.svg'
// import backCard2 from '../../public/assests/Rectangle 23.png'
import backCard1 from '../../public/assests/Rectangle59.svg'
import TopImage from '../../public/assests/news-Top-img.jpg'
import Spike from '../../public/assests/news-spike.svg'
import Image from 'next/image'
import styles from '@/styles/Blog.module.css'
import { Box, Grid, Typography } from '@mui/material'

import TaxImg from '../../public/assests/blog/questions-sarah.jpg';

import Background_sm from '../../public/assests/newsBackground.svg'
// import Typography from '@mui/material'

export default function news() {

    React.useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.document.addEventListener("scroll", reveal)
    }, [])



    return (
        <>
            <Navbar />

            <div className={styles['spike']}>
                <Image src={Spike} />
            </div>

            <div className={styles['background-sm']}>
                <Image src={Background_sm} />
            </div>

            <Box className={styles['top-center-ques']}>

                <Box className={styles['top-center-left']}>
                    <Image src={backCard1} className={styles['top-center-back-incometax']} />
                    <Image src={TaxImg} className={styles['top-center-image']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={TaxImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    {/* <Box className={styles['top-center-text-1']}>Tax Return</Box> */}
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                     <Box className={styles['top-center-text-2-ques']}>
                    Borgo Team Questions and Answers - Sarah

                    </Box>
                    {/*<Box className={styles['top-center-text-3']}>
                        As the October 31st deadline approaches swiftly, it is imperative for all Business owners to file an Income tax return for 2022</Box>
                    <Box className={styles['top-center-text-3-1']}>
                        As the October 31st deadline approaches swiftly, it is imperative for all Business owners to file an Income tax return for 2022</Box> */}
                    {/* <Box className={styles['top-center-text-4']}>
            <div className='box' style={{ marginTop: '30px' }}>
              <Typography className='read-more color-light-grey' style={{ width: '118px', height: '36px', paddingInline: '14px', paddingBlock: '12px' }}>READ MORE</Typography>
            </div>
          </Box> */}
                </Box>

            </Box>

            <Box className='div-center'>
                <Box className='flex-direction-column width-65 width-90-sm'>

                    <Box className='blog-ol'>

                        <ol>

                            <li>What was your first job title? <span style={{ color: '#C54D1F' }}>Front of House in Pizza Hut</span> </li>
                            <li>If you could have any superpower, what would it be and why?  <span style={{ color: '#C54D1F' }}>Be able to talk to animals</span> </li>
                            <li>What's your go-to comfort food? <span style={{ color: '#C54D1F' }}>Chipper</span> </li>
                            <li>If you were stranded on a deserted island, what three items would you want with you? <span style={{ color: '#C54D1F' }}>
                                <ul>
                                    <li>SPF</li>
                                    <li>A tent</li>
                                    <li>My Kindle</li>
                                </ul>
                            </span> </li>
                            <li>If you could switch roles with someone else in the company for a day, who would it be and why?  <span style={{ color: '#C54D1F' }}>No one, I like doing payroll all day</span> </li>
                            <li>What's the best piece of advice you've ever received?  <span style={{ color: '#C54D1F' }}>The man that never made a mistake, never made f*** all</span> </li>
                            <li>What's the most valuable lesson you've learned from your time in the workforce? <span style={{ color: '#C54D1F' }}>Front of House in Pizza Hut</span> </li>
                            <li>What is your favourite holiday destination?  <span style={{ color: '#C54D1F' }}>anywhere sunny</span> </li>
                            <li>Name one thing you can’t live without?  <span style={{ color: '#C54D1F' }}>Hand cream</span> </li>
                            <li>What’s the top item on your bucket list?  <span style={{ color: '#C54D1F' }}>Go to Hawaii & Japan</span> </li>
                            <li>What’s one goal or aspiration you have for the future, either professionally or personally?  <span style={{ color: '#C54D1F' }}>Personally - Deadlift 150kg, professionally – Pass IPASS Phase 2</span> </li>
                            <li>Do you have a secret talent that not many people know about? <span style={{ color: '#C54D1F' }}>I am very good at painting</span> </li>
                            <li>If you had a time machine, where and when would you go?  <span style={{ color: '#C54D1F' }}>Back in time to see dinosaurst</span> </li>


                        </ol>
                    </Box>

                </Box>
            </Box>

            <div style={{ marginBottom: '140px' }}>
            </div>


            <UpperFooter />

            <Box sx={{ marginTop: '90px' }}>
                <Footer />
            </Box>
        </>
    )
}
