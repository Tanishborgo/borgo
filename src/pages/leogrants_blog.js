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
import DextImg from '../../public/assests/blog/leogrants.jpg';

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
        <title>Unlock LEO Grants: Boost Your Irish Business</title>
        <meta name="description" content="Learn how LEO grants can help fund your Irish business, from startup costs to online growth. Find out what's available and how to apply today." />
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
                    <Image src={DextImg} className={styles['top-center-image']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={DextImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    <Box className={styles['top-center-text-1']}>Financing Your Small Business </Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                    Financing Your Small Business Venture in Ireland with LEO Grants

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        Embarking on a new small business venture in Ireland is an exciting endeavor, but financing can often pose a significant challenge. However, as an ambitious Irish entrepreneur, you have the opportunity to bring your vision to life and scale your business with the financial support of a Local Enterprise Office (LEO) grant.
                    </Box>
                    <Box className={styles['top-center-text-3-1']}>
                        Embarking on a new small business venture in Ireland is an exciting endeavor, but financing can often pose a significant challenge. However, as an ambitious Irish entrepreneur, you have the opportunity to bring your vision to life and scale your business with the financial support of a Local Enterprise Office (LEO) grant.
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
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>LEO grants</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>LEO grants are specifically designed to assist entrepreneurs like yourself in getting their businesses off the ground and thriving. In this article, we will explore four key LEO grants that can help you achieve your goals:</Typography>
                    <Typography className='font-22 mt-20 line-height-36 font-mulish color-light-grey text-justify points-ol'>
                        <b><u>Feasibility Grant</u> :</b> This grant provides support for conducting market research and assessing the long-term viability of your product or service. Eligible expenses under this grant include market research, consultancy costs, technical development, prototype and innovation expenses, salary or labour for research purposes, and miscellaneous expenditure. The maximum grant amount varies depending on the region, but it is either 50% or 60% of the total investment, up to €15,000.
                        <br />
                        To be eligible for the Feasibility Study Grant, your business should be in the manufacturing or internationally traded service sector, employ no more than 10 people, operate in the commercial sphere, and be established within the geographic area covered by the Local Enterprise Office. Additionally, you must demonstrate a market for the product or service you intend to develop.
                        <br />
                        <b><u>Priming Grant</u> :</b> This grant provides crucial support to startups in their first 18 months of operation. It is available to sole traders, partnerships, and limited companies that have the potential for growth in domestic and/or export markets and creating new jobs. The maximum grant amount is either 50% of the investment or €150,000, whichever is lower.
                        <br />
                        Expenses that can be covered by the LEO Priming Grant include tangible and intangible assets necessary for establishing and growing your business, such as equipment, machinery, computer purchases, website development, marketing and consultancy costs, research and development, rental or accommodation costs, and utility costs. It's important to note that you cannot use the Priming Grant to pay for any expenditure incurred before your approved application.

                        <br />
                        <b><u>Trading Online Grant Voucher</u> :</b> The Trading Online Voucher Scheme stands out as a highly sought-after grant for small businesses. This initiative provides financial support, with the potential to receive up to €2,500. However, it's important to note that you are responsible for covering 50% of this amount yourself. For instance, if you receive the maximum grant of €2,500, you will need to contribute €1,250 from your own resources. In most cases, eligibility for LEO (Local Enterprise Office) funding programs necessitates that the business has fewer than 10 employees. This grant is quite
                        <br />
                        <b><u>Business Expansion Grant</u> :</b> Similar to the Priming Grant, the Business Expansion Grant aims to support businesses beyond the initial 18 months of operation. The same criteria and usage restrictions apply.
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword'>To apply for a LEO grant, you should contact your Local Enterprise Office and complete the online grant application form. Supporting documentation required typically includes a strong business plan, audited accounts or financials, projected monthly cash flow and profit and loss accounts, quotations, evidence of matching finance, and a Tax Clearance Certificate Status/Verification. For more information on Local Enterprise office supports click here <a href="https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/">https://www.localenterprise.ie/Discover-Business-Supports/Financial-Supports/</a></Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>At Borgo Accounting, we specialize in providing online accounting services tailored to your needs. We ensure accurate, compliant, and optimized business tax preparation for maximum savings. As registered tax agents with ROS (Revenue Online Service), we can help you navigate Irish tax regulations and stay up-to-date with any changes that may impact your business. Contact us today for more information on how we can assist you.
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
