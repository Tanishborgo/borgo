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
import DextImg from '../../public/assests/blog/retirementrelief1.jpg';

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
                <title>Retirement Relief Scheme: Reduce CGT on Business Sales</title>
                <meta name="description" content="Learn how Ireland’s Retirement Relief Scheme can reduce Capital Gains Tax when selling a business, with exemptions up to €750,000 based on age." />
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
                    <Box className={styles['top-center-text-1']}>Retirement Relief Scheme </Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        Understanding the Retirement Relief Scheme for Business Owners

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        Retirement relief is a valuable provision offered by the Irish Revenue to recognize the significance of a person's business as their life's work and often their retirement plan. In normal circumstances, selling a large business asset would trigger a capital gains tax (CGT) liability of 33%. However, retirement relief allows for an exemption on the amount of CGT payable upon the sale of a business.
                    </Box>
                    <Box className={styles['top-center-text-3-1']}>
                        Retirement relief is a valuable provision offered by the Irish Revenue to recognize the significance of a person's business as their life's work and often their retirement plan. In normal circumstances, selling a large business asset would trigger a capital gains tax (CGT) liability of 33%. However, retirement relief allows for an exemption on the amount of CGT payable upon the sale of a business.
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
                    {/* <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>LEO grants</Typography> */}
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>The extent of the CGT exemption under retirement relief depends on the age of the disponer, or the person selling the business. If the disponer is between the ages of 55 and 65, the first €750,000 of the sale proceeds is exempt from CGT. For those aged 66 and over, the exemption is on the first €500,000. This means that if, for instance, you sell your company for €750,000 at the age of 62, you will not be liable to pay any CGT.
                    </Typography>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword'>It's important to note that retirement relief doesn't necessarily require you to step away from the business. However, seeking professional advice before reaching the age threshold is crucial, as the value of the business plays a significant role in determining the tax implications.
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>It is essential to understand that retirement relief is available to all business owners in the event of a chargeable event, such as a sale or liquidation. Moreover, this relief is completely separate from any director pension benefits that may have been accrued over time.
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword'>Retirement relief can be a useful tool for Retirement planning in conjunction with Executive Pensions.
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>For more information, please contact your Client Manager in Borgo Accounting.
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
