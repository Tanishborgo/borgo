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
                    <Box className={styles['top-center-text-1']}>Peer-to-peer (P2P) lending</Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        The Advantages of Peer-to-Peer Lending over Bank Debt

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        Peer-to-peer (P2P) lending, also known as social lending or crowd lending, has emerged as a popular alternative method of financing since its inception in 2005. Unlike traditional bank debt, P2P lending allows individuals to lend or borrow money directly from each other without intermediation from financial institutions. In this blog, we will discuss the advantages of P2P lending over bank debt.

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
                    {/* <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Financial Incentives
                    </Typography>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>One of the most appealing aspects of the Bike to Work Scheme is the financial benefits it provides. Here's how it works: </Typography> */}
                    <Box className='blog-ol'>

                        <ol>

                            <li>Cutting out the Middleman: P2P lending eliminates the need for a bank as an intermediary. Borrowers can connect directly with individual investors through P2P lending websites, cutting down on bureaucracy and potentially reducing the costs associated with loan origination.</li>
                            <li>Competitive Interest Rates: P2P lending platforms offer a wide range of interest rates based on the creditworthiness of the applicant. Borrowers with good credit scores can often access lower interest rates compared to traditional bank loans. This allows borrowers to potentially save on interest expenses and pay off debts faster.</li>
                            <li>Accessible for Borrowers: P2P lending provides an alternative for borrowers who may not meet the strict criteria of traditional banks. Individuals with less-than-perfect credit histories or unconventional income sources can still find lending opportunities through P2P platforms. This opens up financing options for small businesses, entrepreneurs, and individuals who may have difficulty obtaining loans from banks.</li>
                            <li>Investment Opportunities: P2P lending also benefits individual investors looking for better returns on their savings than what traditional bank accounts or certificates of deposit offer. By lending money through P2P platforms, investors can generate interest income at higher rates than those offered by conventional savings options.</li>
                            <li>Customizable Investment Profiles: P2P lending platforms allow lenders to choose the profiles of the borrowers they wish to lend to. This gives investors the flexibility to select between higher risk, potentially higher return loans, or more conservative lending options based on their risk appetite.</li>
                            <li>Accessibility with Low Investment Amounts: Some P2P lending platforms have low investment thresholds, allowing individuals to start lending with as little as $25. This lowers the barrier to entry and enables a broader range of investors to participate in P2P lending.</li>
                        </ol>
                    </Box>
                    
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>While P2P lending offers numerous advantages, it's important to consider some key factors. Default rates for P2P loans are generally higher compared to traditional finance, so lenders need to be aware of the potential risks associated with borrower defaults. Additionally, individuals considering P2P lending should carefully review transaction fees, which may be charged to lenders, borrowers, or both.</Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        <b>Below are some of the main Peer to Peer lenders in Ireland</b>
                        <br />
                        <span className='points-ol'>
                            Linked Finance  https://www.linkedfinance.com/
                        </span>
                        <br />
                        <span className='points-ol'>
                            Swoop https://swoopfunding.com/ie/
                        </span>
                        <br />
                        <span className='points-ol'>
                            Flender https://flender.ie/
                        </span>
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>In conclusion, P2P lending presents an attractive alternative to bank debt, offering competitive interest rates, accessibility for borrowers, investment opportunities, and customizable lending profiles for investors. As with any financial transaction, it's crucial to conduct thorough research and understand the potential risks and associated fees before engaging in P2P lending.</Typography>
                </Box>
            </Box >

            <div style={{ marginBottom: '140px' }}>
            </div>


            <UpperFooter />

            <Box sx={{ marginTop: '90px' }}>
                <Footer />
            </Box>
        </>
    )
}
