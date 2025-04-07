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
import MileageImg from '../../public/assests/blog/mileage.jpg';

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
                <title>Mileage & Subsistence Tax Relief: What You Need to Know</title>
                <meta name="description" content="Learn how to claim tax relief on mileage and subsistence in Ireland. Understand eligibility, reimbursement options, and Revenue-approved rates." />
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
                    <Image src={MileageImg} className={styles['top-center-image-mileage']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={MileageImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    <Box className={styles['top-center-text-1']}>Tax Relief</Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        Navigating Tax Relief for Mileage and Subsistence Claims in Ireland

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        Are you a Director or an Employee in Ireland looking to maximize your tax relief on mileage and subsistence expenses? In this guide, we'll address some of the most frequently asked questions about claiming these expenses while staying compliant with the latest regulations.
                    </Box>
                    <Box className={styles['top-center-text-3-1']}>
                    Are you a Director or an Employee in Ireland looking to maximize your tax relief on mileage and subsistence expenses? In this guide, we'll address some of the most frequently asked questions about claiming these expenses while staying compliant with the latest regulations.</Box>
                    {/* <Box className={styles['top-center-text-4']}>
            <div className='box' style={{ marginTop: '30px' }}>
              <Typography className='read-more color-light-grey' style={{ width: '118px', height: '36px', paddingInline: '14px', paddingBlock: '12px' }}>READ MORE</Typography>
            </div>
          </Box> */}
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Understanding Mileage:</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Mileage refers to the use of your private car or motorcycle for business purposes. Employers can provide reimbursement for allowable motoring expenses through flat-rate mileage allowances. However, it's crucial to note that you cannot claim mileage for your daily commute between your home and regular workplace; only business-related journeys away from your usual place of work are eligible.
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Exploring Subsistence:
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        Subsistence comes into play when you perform your job duties temporarily away from your usual workplace or while working abroad on an international assignment. These allowable subsistence expenses can be reimbursed to you tax-free. It's essential to emphasize that time spent at your regular workplace or during your commute doesn't count as a qualifying absence.

                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Identifying Your Normal Place of Work:
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        Contractors, take note! The Irish Revenue has released a crucial document called Tax Briefing 03/13, offering valuable insights into how they define your regular place of work. It's essential reading for contractors aiming to determine where their normal place of work stands.

                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Reimbursement Options:
                    </Typography>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        Typically, there are two ways to receive reimbursement for your expenses:
                        <br />
                        Receipt Submission: You can present your employer with expense receipts (e.g., hotel bills), and they will reimburse you for these documented costs.
                        <br />
                        Kilometre and Hours/Nights Tracking: Alternatively, you can keep track of the kilometres travelled and hours or nights spent away. If your employer is satisfied with your documentation, they will reimburse you according to the appropriate mileage and subsistence rates.

                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Calculating Your Business Journey:
                    </Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        When starting a business journey directly from home to a temporary place of work or returning home directly, use the Revenue-approved rates for calculating business kilometres. Mileage rates are determined by the engine capacity of the vehicle used, while subsistence rates vary based on the number of hours spent away from your regular workplace.</Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Pre-Approved Mileage and Subsistence Rates:
                    </Typography>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword'>
                        For the most up-to-date information on mileage and subsistence rates, consult Revenue's official page: Link to Revenue's Mileage and Subsistence Rates https://www.revenue.ie/en/employing-people/employee-expenses/travel-and-subsistence/civil-service-rates.aspx</Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Covered Costs in Pre-Approved Subsistence Rates:
                    </Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify points-ol'>
                        <b><u>Overnight Subsistence Rate:</u></b> This includes the cost of one night's accommodation and three meals.
                        <br />
                        <b><u>Daily Subsistence Rate (Ten Hours or More):</u></b> Covers the cost of two meals.
                        <br />
                        <b><u>Daily Subsistence Rate (Five to Ten Hours):</u></b> Includes the cost of one meal.
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Maintaining Records of Your Claims:
                    </Typography>
                    <Typography className='font-24 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>To ensure smooth processing and compliance, it's vital to keep accurate records of each business trip. The following information should be included:
                        Name and Address</Typography>
                    <Box className='blog-ul'>

                        <ul>

                            <li>Date(s) of the business trip</li>
                            <li>Purpose of the trip (e.g., client meeting)
                            </li>
                            <li>Distance traveled
                            </li>
                            <li>Starting point, destination, and endpoint of the trip
                            </li>
                            <li>Basis for reimbursement (e.g., actual receipts or mileage/subsistence rate)
                            </li>
                            <li>Retain these records for at least six years to satisfy regulatory requirements.
                            </li>
                            <li>Can Sole Traders Claim Mileage and Subsistence?</li>
                        </ul>
                    </Box>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        Sole traders themselves cannot claim mileage and subsistence, but their employees can. Instead, sole traders can claim actual expenses incurred during business trips and should maintain receipts for motor expenses, accommodations, and other travel-related costs. When preparing income tax returns, it might be necessary to allocate a portion of motor expenses to represent private expenditure.
                        <br />
                        For Further Information:
                        <br />
                        For detailed insights into the rules governing mileage and subsistence claims, as well as the criteria for determining your normal place of work, refer to Revenue's resources:
                        <br />
                        Revenue's Leaflet IT51 and IT 54
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
