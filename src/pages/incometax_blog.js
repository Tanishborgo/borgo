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

import TaxImg from '../../public/assests/blog/incometax1.jpg';

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
                    <Image src={backCard1} className={styles['top-center-back-incometax']} />
                    <Image src={TaxImg} className={styles['top-center-image']} />
                </Box>
                <Box className={styles['top-image']}>
                    <Image src={TaxImg} className={styles['top-image-sm']} />
                </Box>
                <Box className={styles['top-center-text']}>
                    {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
                    <Box className={styles['top-center-text-1']}>Tax Return</Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        Navigating your 2022 Tax Return

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        As the October 31st deadline approaches swiftly, it is imperative for all Business owners to file an Income tax return for 2022</Box>
                    <Box className={styles['top-center-text-3-1']}>
                        As the October 31st deadline approaches swiftly, it is imperative for all Business owners to file an Income tax return for 2022</Box>
                    {/* <Box className={styles['top-center-text-4']}>
            <div className='box' style={{ marginTop: '30px' }}>
              <Typography className='read-more color-light-grey' style={{ width: '118px', height: '36px', paddingInline: '14px', paddingBlock: '12px' }}>READ MORE</Typography>
            </div>
          </Box> */}
                </Box>

            </Box>

            <Box className='div-center'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>When is it Necessary to Submit a Tax Return (Form 11)?
                    </Typography>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>You should consider filing a tax return (Form 11) if you fall into any of the following categories for the 2022 Tax Year:
                    </Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li>If you served as a proprietary director during 2023, </li>
                            <li>If you were a registered sole trader, either for the entire year or a portion of 2022.

                            </li>
                            <li>If you acted as a landlord and received Rental Income in 2013.

                            </li>
                            <li>If you incurred a Capital Gain during that specific tax year.

                            </li>
                            <li>If you had additional sources of non-PAYE Income that require declaration. These sources may encompass Dividend Income, Foreign Earnings, or Deposit Interest. If your non-PAYE sourced income is below €3,174 per annum, you have the option to file a Form 12, which is a condensed version of the Form 11.
                            </li>
                        </ol>
                    </Box>

                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Can I Avail of Tax Credits and Reliefs?

                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword'>
                        In addition to disclosing your income in your tax return, you are also eligible to claim various Tax credits and relief for specific expenditures. These may include Medical Expenses, Tuition fees, Home Carers Credit, and Pension payments. For a comprehensive list of available credits and reliefs, please visit the Revenue website at
                        <br /> https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/tax-relief-charts/index.aspx
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>I Haven't Filed My Return - What Should I Do?
                    </Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        If you have not yet filed your tax return or are uncertain about your obligations, you can reach out to Borgo for guidance. We are more than willing to advise you on the necessary steps and the information needed to complete your return. We will provide you with a checklist to ensure that all your requirements are met when filing your tax return. Following this, Icon Accounting can prepare a tax computation for the 2022 Tax Year for your review and approval.
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>I Have Now Filed My Return - What's the Next Step?
                    </Typography>

                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        Once your tax return is submitted, you will receive a Notice of Assessment from Revenue. This notice will indicate whether you have a tax liability or are entitled to a refund based on the information provided. In the event of a liability, you are required to settle it by October 31st, 2023. If you are due a refund, it will be deposited into your nominated bank account within a few weeks.
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>What Happens if I Fail to File My Return?

                    </Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>
                        Failing to meet the October 31st deadline for filing your tax return may result in penalties for late submission:</Typography>
                    <Box className='blog-ul'>

                        <ul>

                            <li>A penalty of 5% of the tax due, up to a maximum of €12,695, if filed within 2 months of the filing date.
                            </li>
                            <li>A penalty of 10% of the tax due, up to a maximum of €63,485, if filed more than 2 months after the filing date.

                            </li>
                            <li>In certain cases, persistent failure to file can lead to prosecution by the Revenue Commissioners.
                            </li>
                        </ul>
                    </Box>
                    <Typography className='font-24 mt-10 line-height-38 font-mulish color-light-grey'>It's crucial to note that even if you have no additional tax liability and have paid your taxes through the PAYE system, these penalties will apply to your overall tax liability, which includes the taxes paid through the PAYE system. </Typography>

                    <Typography className='font-24 mt-10 line-height-38 font-mulish color-light-grey'>Please Note: If you utilize the online pay and file deadline, Revenue will grant an extension up to November 15th, 2023. To take advantage of this extension, you must file your tax return online and make any outstanding payments online.</Typography>

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
