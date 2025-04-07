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
import XeroImg from '../../public/assests/blog/xero.jpg';
import Head from 'next/head'
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
                <title>Why Xero Accounting Software is a Smart Choice</title>
                <meta name="description" content="Discover how Xero’s cloud-based accounting software simplifies bookkeeping with automation, integrations, real-time data, and user-friendly features." />
            </Head>
            <div className={styles['spike']}>
                <Image src={Spike} />
            </div>

            <div className={styles['background-sm']}>
                <Image src={Background_sm} />
            </div>

            <Box className={styles['top-center']}>

                <Box className={styles['top-center-left']}>
                    <Image src={backCard1} className={styles['top-center-back-xero']} />
                    <Image src={XeroImg} className={styles['top-center-image']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={XeroImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    <Box className={styles['top-center-text-1']}>Xero Accounting software</Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        Benefits of Using Xero Accounting software

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        "We proudly partner with Xero Accounting software at Borgo, and we highly recommend its use to the majority of our clients, thanks to its numerous benefits. In this post, we've highlighted the key advantages."

                    </Box>
                    <Box className={styles['top-center-text-3-1']}>
                        "We proudly partner with Xero Accounting software at Borgo, and we highly recommend its use to the majority of our clients, thanks to its numerous benefits. In this post, we've highlighted the key advantages."

                    </Box>
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

                            <li><b>Accessibility Anywhere:</b> Xero is a cloud-based accounting software, which means you can access your financial data from anywhere with an internet connection. This flexibility is especially valuable for business owners and accountants who need to work remotely or while on the go.
                            </li>
                            <li><b> User-Friendly Interface:</b> Xero provides an intuitive and user-friendly interface. Its dashboard and menus are easy to navigate, making it accessible to both accounting professionals and business owners with limited accounting experience.
                            </li>
                            <li><b> Time-Saving Features:</b> Xero offers numerous automation features that save time on repetitive tasks such as bank reconciliation, invoicing, and expense categorization. This automation reduces the manual effort required for bookkeeping.
                            </li>
                            <li><b> Integration Capabilities:</b> Xero integrates with over 800 third-party apps and services, allowing you to streamline your financial operations. You can connect Xero to payment gateways, e-commerce platforms, payroll software, and more to create a cohesive financial ecosystem.
                            </li>
                            <li><b> Real-Time Financial Information:</b> By linking your bank accounts and financial transactions to Xero, you can maintain an up-to-date view of your cash flow and financial health. This real-time data helps you make informed business decisions promptly.
                            </li>
                            <li><b> Improved Invoicing:</b> Xero enables you to create professional and customizable sales invoices within the platform. You can set up automatic reminders for customers to encourage timely payments, improving your cash flow.
                            </li>
                            <li><b> Expense Management:</b> Easily manage expenses by uploading receipts, tracking bills, and categorizing expenses. This feature simplifies expense tracking and ensures accurate financial records.
                            </li>
                            <li><b> Multi-Currency Support:</b> If your business operates internationally, Xero supports over 160 currencies and provides automatic currency conversion, making it easier to handle transactions in different currencies.
                            </li>
                            <li><b> Bank Reconciliation Made Simple:</b> Xero offers a quick and easy bank reconciliation feature. It allows you to match bank transactions with corresponding invoices and receipts, reducing the chances of errors.
                            </li>
                            <li><b> Audit Trail and Notes:</b> Xero maintains a detailed digital footprint of all changes made in the system, including who made them and when. This feature enhances transparency and makes it easier to track any alterations to financial data.
                            </li>
                            <li><b> Customizable Reports:</b> Generate a variety of financial reports tailored to your specific needs. Xero's reporting tools help you analyse your business's performance, track trends, and plan for the future.
                            </li>
                            <li><b> Expert Support:</b> Xero offers support through certified advisors, making it easier to get assistance with any accounting or software-related questions. Many accounting professionals are familiar with Xero, which can simplify collaboration.
                            </li>
                            <li><b> Security and Data Backup:</b> Xero prioritizes data security, regularly backing up your financial information. Your data is stored securely in the cloud, reducing the risk of data loss due to hardware failures.
                            </li>
                            <li><b> Scalability:</b> Xero can grow with your business. It's suitable for small businesses and startups but can also accommodate the needs of larger organizations as they expand.
                            </li>
                            <li><b> Cost-Effective:</b> Xero offers different pricing plans to suit various business sizes and requirements, making it an affordable option for many businesses.
                            </li>
                        </ol>
                    </Box>
                    <Typography className='font-24 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>Overall, Xero's combination of accessibility, automation, integration, and user-friendly features makes it a powerful tool for simplifying bookkeeping and financial management for businesses of all sizes.</Typography>

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
