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

import DextImg from '../../public/assests/blog/dext.jpg';

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
                    <Image src={DextImg} className={styles['top-center-image']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={DextImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    <Box className={styles['top-center-text-1']}>Entrepreneur Relief </Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        Understanding Entrepreneur Relief: A Guide to Capital Gains Tax

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        Entrepreneur Relief is a valuable tax benefit that entrepreneurs can take advantage of when selling qualifying business assets. It offers a reduced Capital Gains Tax rate of 10%, as opposed to the standard rate of 33%. This relief applies to gains of up to €1 million in an individual's lifetime.
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
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>To grasp the concept of Entrepreneur Relief, it's essential to understand Capital Gains Tax (CGT) in Ireland. CGT is a tax that individuals must consider when parting with personally owned assets, such as property, shares, and valuable items like art. By comprehending CGT, entrepreneurs can make informed financial decisions regarding their transactions.
                    </Typography>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Entrepreneur Relief is particularly beneficial for entrepreneurs at all stages of their lives who wish to dispose of qualifying business assets within the lifetime limit of €1 million. It provides a tax-efficient means of extracting funds from a company for personal use or potential reinvestment into a new business venture.
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        To qualify for Entrepreneur Relief, the following criteria must be met:
                    </Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li>The qualifying business asset must have been owned continuously for three years, with these three years falling within the five years preceding the disposal.
                            </li>
                            <li>If the business is carried out by a company, the disponer must:
                                <ul>
                                    <li>
                                        Own more than 5% of the company shares.
                                    </li>
                                    <li>
                                        Have been a director or employee of the qualifying company, spending over 50% of their time with the company.
                                    </li>
                                    <li>
                                        Ideally hold a managerial or technical position in the company for a continuous period of three years within the five years preceding the disposal.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </Box>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>A qualifying business refers to any business other than those involved in holding securities or other assets as investments, holding development land, or engaging in the letting of land. Meanwhile, qualifying business assets can include assets held by a sole trader for trade purposes, a share of assets held by an active partner in a trading partnership, or shares held by an individual in a trading company.
                    </Typography>

                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    {/* <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>LEO grants</Typography> */}
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>Capital Gains Tax </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>When it comes to claiming the relief, Revenue operates two Capital Gain Tax (CGT) periods: the initial period from January 1st to November 30th, and the later period from December 1st to December 31st. For gains in the initial period, the CGT payment is due by December 15th of the same tax year. For gains in the later period, the payment should be made by January 31st of the following tax year. The details of the gain are declared in the disposer's personal tax return (Form 11) for that tax year.
                    </Typography>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>If you have any further questions or need assistance related to your personal tax situation, we recommend consulting your Client Manager in Borgo to discuss and plan for your sale.
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
