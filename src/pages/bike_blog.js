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
import BikeImg from '../../public/assests/blog/bike.jpg';

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

            <Box className={styles['top-center']}>

                <Box className={styles['top-center-left']}>
                    <Image src={backCard1} className={styles['top-center-back']} />
                    <Image src={BikeImg} className={styles['top-center-image-bike']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={BikeImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    <Box className={styles['top-center-text-1']}>Embracing the Bike to Work Scheme</Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        A Greener, Healthier Commute

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        In today's fast-paced world, the daily commute can be a source of stress and frustration. However, there's a sustainable and healthy solution that not only eases your daily journey but also benefits the environment and your overall well-being. It's called the Bike to Work Scheme, and in this article, we'll explore how this initiative can transform your daily commute into a refreshing and eco-friendly experience.

                    </Box>
                    {/* <Box className={styles['top-center-text-4']}>
            <div className='box' style={{ marginTop: '30px' }}>
              <Typography className='read-more color-light-grey' style={{ width: '118px', height: '36px', paddingInline: '14px', paddingBlock: '12px' }}>READ MORE</Typography>
            </div>
          </Box> */}
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>The Bike to Work Scheme Explained</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>The Bike to Work Scheme is a government-backed initiative designed to encourage more people to commute by bicycle. It offers significant financial incentives to employees and employers, making it an attractive option for those looking to reduce their carbon footprint and improve their health. The limits have been increased to €1,250 for a bicycle and to €1,500 for pedelecs and ebikes. Safety equipment can also be included
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey align-end'>Financial Incentives
                    </Typography>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>One of the most appealing aspects of the Bike to Work Scheme is the financial benefits it provides. Here's how it works: </Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li><b>
                                Tax-Free Bicycles:</b> Under the scheme, employees can purchase a brand new bicycle and any necessary safety equipment tax-free. This can result in savings of up to 52% on the cost of the bike and accessories.
                            </li>
                            <li><b> Salary Sacrifice:</b> Employees can choose to sacrifice a portion of their salary to cover the cost of the bike, spreading the payments over a defined period, typically 12 months. This reduces the upfront financial burden.
                            </li>
                            <li>Health Benefits</li>
                        </ol>
                    </Box>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Health Benefits
                    </Typography>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>Aside from the financial advantages, the Bike to Work Scheme offers numerous health benefits: </Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li> <b> Exercise:</b> Cycling to work provides a daily dose of exercise, helping you stay fit and healthy. It's a great way to incorporate physical activity into your daily routine.
                            </li>
                            <li> <b> Mental Well-being:</b> Cycling can reduce stress and boost your mood, thanks to the release of endorphins during physical activity. It's a refreshing way to start and end your workday.
                            </li>
                            <li> <b> Reduced Sedentary Time: </b>Commuting by bike breaks up long periods of sitting, which has been linked to various health issues. It keeps you active and lessens the risks associated with a sedentary lifestyle.
                            </li>
                        </ol>
                    </Box>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey align-end'>Environmental Benefits
                    </Typography>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>Embracing the Bike to Work Scheme also contributes to a cleaner, greener environment:
                    </Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li> <b> Reduced Emissions:</b> By choosing to cycle instead of driving or using public transport, you reduce your carbon footprint and help decrease air pollution.
                            </li>
                            <li> <b> Less Traffic Congestion: </b>More cyclists mean fewer cars on the road, leading to reduced traffic congestion and shorter commute times for everyone.
                            </li>
                            <li> <b> Sustainable Transportation:</b> Promoting cycling as a means of commuting aligns with sustainability goals, making our cities more environmentally friendly.
                            </li>
                        </ol>
                    </Box>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    {/* <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Environmental Benefits
                    </Typography> */}
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>Conclusion:
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        The Bike to Work Scheme is a win-win solution for employees, employers, and the environment. It offers financial incentives, promotes better health, and contributes to a cleaner planet. So, if you're tired of the daily grind of commuting and want to make a positive change, consider embracing the Bike to Work Scheme – it's a step toward a brighter and greener future.
                    </Typography>
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
