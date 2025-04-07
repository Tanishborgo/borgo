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
                    <Box className={styles['top-center-text-1']}>Invoice Discounting</Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        Simple Guide to Invoice Discounting

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        Invoice discounting is a way for businesses to access the money in their accounts receivable faster. Instead of waiting for customers to pay their invoices, a company can take out a short-term loan from an invoice discounting company. The company lends up to 95% of the value of the invoices, paying the money in days rather than weeks. Once the customers pay, the loan is repaid.

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
                    </Typography> */}
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>Here's how it works in simple steps:</Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li>Sell goods or services to customers as usual.</li>
                            <li>Raise invoices for those goods or services and send them to customers.</li>
                            <li>An invoice discounting company verifies the invoices and lends against the value of the invoices, they will typically lend between 60% - 90 % of the debtors</li>
                            <li>Customers pay according to normal payment terms, and it's the company's responsibility to chase late payments.</li>
                            <li>Once payment is received, the loan is repaid to the invoice discounting company, they will typically charge a finance rate plus an administration fee for handling it.</li>
                        </ol>
                    </Box>
                </Box>
            </Box >

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    {/* <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Financial Incentives
                    </Typography> */}
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>The advantages of invoice discounting are:</Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li>Quick access to payment, improving cash flow.</li>
                            <li>Cheaper and simpler than applying for a bank loan, with higher approval rates.</li>
                            <li>More predictable revenue stream for better business planning.</li>
                            <li>Funds can be used for various purposes, such as hiring temporary staff, buying stock, or investing in the future.</li>
                        </ol>
                    </Box>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Invoice discounting differs from invoice factoring in a few key ways. With discounting, the company maintains credit control and customer perception is not affected. Factoring involves selling the invoices to a factoring company at a discount, with the factoring company managing credit control.</Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>It's also important to note confidential invoice discounting, where the customers are unaware of the arrangement. This option allows companies to maintain control over invoice chasing.</Typography>
                </Box>
            </Box >

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    {/* <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Financial Incentives
                    </Typography> */}
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>To implement invoice discounting:</Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li>Decide whether to discount the entire accounts receivable or specific invoices.</li>
                            <li>Contact multiple invoice discounting providers, comparing services and fees.</li>
                            <li>Seek references and consult with your accountant for advice.</li>
                            <li>Sign up with a chosen provider, who will guide you through the process of setting up payments and linking into your invoicing system.</li>
                        </ol>
                    </Box>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Remember, invoice discounting can improve cash flow and provide flexibility for your business. Consider your options and choose the best fit for your needs.
                    </Typography>
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
