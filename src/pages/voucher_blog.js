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

import VoucherImg from '../../public/assests/blog/voucher.jpg';

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
                    <Image src={backCard1} className={styles['top-center-back-voucher']} />
                    <Image src={VoucherImg} className={styles['top-center-image-voucher']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={VoucherImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    <Box className={styles['top-center-text-1']}>LEO Trading Online Voucher</Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        Information on the LEO Trading Online Voucher

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        In today's digital age, businesses understand the importance of establishing a strong online presence. The LEO (Local Enterprise Office) Trading Online Voucher scheme continues to be a valuable resource for businesses seeking financial assistance to enhance their online operations. As we step into 2023, let's explore the latest updates and benefits of this initiative.

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
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Financial Boost for Online Ventures</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Under the LEO Trading Online Voucher scheme, eligible businesses can access financial support of up to €2,500. Even better, up to 50% of this funding can come directly from your business, making it a flexible and affordable solution for both startups and established enterprises.
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey align-end'>Second Voucher Eligibility</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>If your business has already received an online trading voucher in the past, here's some good news: you are eligible to apply for a second voucher. This means you can continue to invest in your online presence and further expand your digital reach.
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>The Scheme's Resilience</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>The LEO Trading Online Voucher scheme has been a vital lifeline for countless businesses over the years. As we emerge from the challenges posed by the COVID-19 pandemic, the scheme remains steadfast and relevant. In a world where e-commerce is thriving, this initiative ensures that businesses can adapt and thrive in the digital landscape.
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey align-end'>Eligibility Criteria
                    </Typography>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>To be considered for the scheme in 2023, your business must meet certain criteria: </Typography>

                    <Box className='blog-ul'>

                        <ul>
                            {/* <li>
                                <ol>
                                    <li>Trading Duration: Your business should have been trading for at least six months.</li>
                                </ol>
                            </li> */}
                            <li>Trading Duration: Your business should have been trading for at least six months.</li>
                            <li>Staff Size: Businesses with a staff count ranging from 1 to 10 members are eligible.
                            </li>
                            <li>Training: Attend a Trading Online Seminar organized by your Local Enterprise Office.
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Box>


            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey align-end'>The Power of the Trading Online Voucher
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        Wondering how you can utilize the LEO Trading Online Voucher? Here are some key ways:
                        <br />
                        E-commerce Excellence: Launch a new online store through an e-commerce website or enhance your existing one.
                        <br />
                        Digital Consultancy: Get specialized IT advice and digitalization consultancy to stay competitive in the digital marketplace.
                        <br />
                        Enhanced Functionality: Integrate booking systems and online payment options into your website, offering convenience to your customers.
                        <br />
                        Mobile App Development: Explore the world of mobile apps to engage a wider audience.
                        <br />
                        Online Advertising: Invest in online advertising to boost your brand visibility.
                        <br />
                        Platform Subscription: Consider subscribing to a retail platform solution that aligns with your business goals.
                        <br />
                        For more detailed information on the LEO Trading Online Voucher scheme and its application process, you can visit the official website.

                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey align-end'>Applying for the LEO Trading Online Voucher
                    </Typography>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        Ready to take your business to new heights in the digital realm? Applying for the LEO Trading Online Voucher is straightforward. You can complete your application online through your Local Enterprise Office.

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
