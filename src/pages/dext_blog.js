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
                    <Box className={styles['top-center-text-1']}>Unlocking Efficiency</Box>
                    {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

                    <Box className={styles['top-center-text-2']}>
                        A Guide to Dext Software for Modern Businesses

                    </Box>
                    <Box className={styles['top-center-text-3']}>
                        In today's rapidly evolving business landscape, traditional methods of accounting and record-keeping are giving way to digital solutions., The shift towards cloud-based accounting software is gaining traction among professionals and businesses alike. Among the array of cloud accounting apps available, one that stands out is Dext.
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
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>What is Dext?</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Dext, formerly known as Receipt Bank, is an award-winning cloud accounting software designed to revolutionize how you manage your financial data. This powerful tool simplifies the process of capturing and organizing data from invoices and receipts, seamlessly integrating with your preferred cloud accounting platform. At Relative, we highly recommend Dext to our clients, as it empowers them to boost productivity, increase profitability, and make more informed business decisions. </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey align-end'>Streamlining Accounting</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Dext's primary goal is to liberate your valuable time and resources. It achieves this through a range of features, including automatic supplier and customer rules, bank matching, and direct connections to over 1,400 suppliers. Additionally, Dext enables easy uploads of sales invoices directly into your accounting system. The result? Real-time, actionable insights that guide the future of your business.
                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Simplifying Accounting Admin</Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Dext takes the pain out of accounting administration. It serves as a dynamic business expense tracker, capable of swiftly capturing, reading, and securely storing receipts and invoices while you're on the move. With Dext, you can reduce the time you spend on financial paperwork, allowing you to focus on growing your business.

                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey align-end'>How Does Dext Work?
                    </Typography>
                    {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
                    <Typography className='font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify'>Submitting documents to Dext is a breeze, ensuring you never misplace a receipt or invoice again. You have several options for uploading documents, whether it's through the Dext App, your email account, or Dropbox. This flexibility ensures that the process is both efficient and convenient.

                    </Typography>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Key Functions of Dext
                    </Typography>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>Dext offers a host of features that empower businesses: </Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li>
                                Seamless Receipt Capture: Simply use your phone's camera to capture receipts, making it effortless to digitize your expenses.
                            </li>
                            <li>Time-Saving: By simplifying expense management, Dext reduces the time spent on financial admin, freeing you to focus on core business activities.
                            </li>
                            <li> Automated Bookkeeping: Say goodbye to manual data entry. Dext automates many bookkeeping tasks, minimizing errors and maximizing efficiency.
                            </li>
                            <li> Effortless Invoice Handling: Easily forward email invoices from your inbox directly to the Dext app, ensuring nothing slips through the cracks.
                            </li>
                            <li> Secure Cloud Storage: Rest easy knowing that all your critical documents are securely stored in the cloud, eliminating the need for physical file storage.
                            </li>
                            <li> Export Flexibility: Dext enables you to export reports in multiple file formats, simplifying data sharing and analysis.
                            </li>
                        </ol>
                    </Box>
                </Box>
            </Box>

            <Box className='div-center mt-100'>
                <Box className='flex-direction-column width-65 width-90-sm'>
                    <Typography className='font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey'>Benefits of Dext
                    </Typography>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>The advantages of adopting Dext for your business are numerous: </Typography>
                    <Box className='blog-ol'>

                        <ol>

                            <li> Time Savings: Dext streamlines the submission and filing of paperwork, allowing you to redirect precious time back into your core business operations.
                            </li>
                            <li> Office Space Optimization: Eliminate the need for physical document storage, freeing up valuable office space.
                            </li>
                            <li> Real-Time Data Access: Stay ahead with up-to-date insights, enabling you to make informed business decisions.
                            </li>
                            <li> Improved Financial Management: Accurate data provides a real-time snapshot of your finances, simplifying financial management.
                            </li>
                        </ol>
                    </Box>
                    <Typography className='font-32 mt-10 line-height-38 font-mulish color-light-grey'>Dext offers various packages tailored to the size of your business. Reach out to our team to explore how Dext can enhance your business's efficiency and financial management.</Typography>
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
