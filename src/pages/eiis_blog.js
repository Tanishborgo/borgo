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
import Head from 'next/head'
import EiisImg from '../../public/assests/blog/eiis.png';

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
            <Head>
                <title>EIIS Finance Bill 2024: Key Changes & New Relief Rates</title>
                <meta name="description" content="Discover the latest changes to the EIIS in 2024, including new tiered relief rates for businesses and what they mean for investors in Irish enterprises." />
            </Head>
            <div className={styles['spike']}>
                <Image src={Spike} />
            </div>

            <div className={styles['background-sm']}>
                <Image src={Background_sm} />
            </div>

            <Box className={styles['top-center']}>

                <Box className={styles['top-center-left']}>
                    <Image src={backCard1} className={styles['top-center-back']} />
                    <Image src={EiisImg} className={styles['top-center-image']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={EiisImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    <Box className={styles['top-center-text-1']}>Changes to the EIIS Finance bill 2024 </Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                    Changes to the Employment Investment Incentive Scheme (EIIS) Finance bill 2024

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                    Recent announcements in the Finance Bill have outlined significant changes to the Employment Investment Incentive Scheme (EIIS), with the introduction of tiered levels of relief based on the type of business seeking EIIS funding.
                    </Box>
                    <Box className={styles['top-center-text-3-1']}>
                    Recent announcements in the Finance Bill have outlined significant changes to the Employment Investment Incentive Scheme (EIIS), with the introduction of tiered levels of relief based on the type of business seeking EIIS funding.
                    </Box>
                    {/* <Box className={styles['top-center-text-3-1']}>
                        Embarking on a new small business venture in Ireland is an exciting endeavor, but financing can often pose a significant challenge. However, as an ambitious Irish entrepreneur, you have the opportunity to bring your vision to life and scale your business with the financial support of a Local Enterprise Office (LEO) grant.
                    </Box> */}
                    {/* <Box className={styles['top-center-text-4']}>
            <div className='box' style={{ marginTop: '30px' }}>
              <Typography className='read-more color-light-grey' style={{ width: '118px', height: '36px', paddingInline: '14px', paddingBlock: '12px' }}>READ MORE</Typography>
            </div>
          </Box> */}
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    {/* <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>LEO grants</Typography> */}
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>These revisions aim to encourage equity investment in growing Irish businesses, which have heavily relied on the scheme for funding. However, while tax incentives can attract investors, the new restrictions also pose additional risks to these investments.</Typography>
                    

                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>New EIIS Rates:</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Effective from 1st January 2024, the updated EIIS rates will be as follows:</Typography>
                    <Box className='blog-ol'>
                    <ol>

<li>
    <b><u>50% Relief for Businesses Without Prior Market Operation</u> :</b> Companies that have not previously operated in any market will qualify for a 50% EIIS relief. This high rate serves as an incentive for investors to support innovative ventures that are launching into uncharted territory.
    </li>
                        <li><b><u>35% Relief for First-Time EIIS Fundraisers</u> :</b> Businesses entering their initial EIIS fundraise within 7 years of their first sale will be eligible for a 35% relief. This level of relief acknowledges the early-stage nature of these enterprises and helps attract investment during their crucial growth phase.
                        </li>
                        <li><b><u>20% Relief for Subsequent EIIS Fundraisers</u> :</b> For businesses embarking on their second or subsequent EIIS fundraise, the relief drops to 20%. This rate reflects the fact that these companies have already received a level of support through previous funding rounds.
                        </li>
                        <li><b><u>20% Relief for Businesses Expanding into New Markets</u> :</b> Under the updated scheme, businesses venturing into new markets or regions will also qualify for a 20% EIIS relief. This incentivizes entrepreneurs to explore untapped opportunities and diversify their operations.
                        </li>
                        <li><b><u>30% Relief for Investments via a Qualifying Investment Fund</u> :</b> Investments made through a 'Qualifying Investment Fund,' the only one currently available in Ireland, will attract a 30% EIIS relief. This avenue offers a higher rate than subsequent fundraises while ensuring investments are channeled through authorized channels.
                        </li>
                    </ol>
                    </Box>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword'>While the EIIS scheme aims to encourage investment in Irish businesses, the incoming changes may introduce added risks for potential investors. Steve Schwarzman, the founder and chairman of Blackstone, a leading investment firm, recently emphasized the need to incentivize risk capital. He argued that in a low-growth economy, where securing significant returns with minimal loss is challenging, tax incentives play a vital role in motivating investors.</Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>The updated EIIS rates, set to come into effect from January 2024, aim to support Irish businesses in their growth endeavors. However, the tiered relief structure may introduce additional risks for investors. As the scheme evolves, striking a balance between incentivizing investment and mitigating risks will be crucial to maintaining a thriving entrepreneurial ecosystem in Ireland.
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
