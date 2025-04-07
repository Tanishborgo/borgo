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
                    <Box className={styles['top-center-text-1']}>Late Annual Return </Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        Consequences of Late Annual Return Filing in Ireland
                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        In Ireland, all Limited Companies are required to file an Annual Return, even if there have been no business transactions. This comprehensive document, submitted to the Companies Registration Office (CRO) using Form B1, includes important financial and legal information. Late filing of the Annual Return can have serious consequences for the company and its directors, with severity depending on whether financial statements are included.
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
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Responsibility for filing the Annual Return falls primarily on the company director, who must ensure accurate and timely submission to the CRO. The company secretary assists with administrative and compliance tasks, while accountants play a crucial role in preparing compliant financial statements.</Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword'>The Annual Return must be filed within 56 days of the effective date, determined by the company's incorporation date. Failure to meet this deadline incurs a late filing fee of €100, with a daily late fee of €3 accumulating thereafter.</Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Consequences for missing the deadline without financial statements include escalating late filing penalties and potential involuntary strike-off from the register after a year of non-compliance. In the case of late filing with financial statements, additional consequences may include loss of audit exemption for the next two years, requiring a statutory audit of financial statements, and the possibility of involuntary strike-off.</Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>If the CRO deadline is missed, options include appealing to the District Court in exceptional circumstances, paying the required fine for first-time filers, engaging a professional company secretary and accountant to prepare the paperwork and financial statements, and paying late filing penalties.</Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword'>It is crucial to recognize the significance of timely and accurate Annual Return filing to maintain compliance, avoid penalties, retain audit exemption, and prevent director disqualification. Seeking professional guidance ensures proper adherence to Irish company law.</Typography>
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Additionally, it is important to note that late filing of income tax returns can also result in fines and penalties. Adhering to income tax return deadlines is essential for maintaining a healthy financial standing and avoiding complications.</Typography>

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
