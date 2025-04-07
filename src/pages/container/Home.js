import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Spike1 from "../../../public/assests/spike1.svg";
import Spike2 from "../../../public/assests/spike2.svg";
import Logo from "../../../public/assests/logoAnimation.gif";
import Fill1 from "../../../public/assests/Fill1.svg";
import Fill2 from "../../../public/assests/Fill2.svg";
import Fill3 from "../../../public/assests/Fill3.svg";
import Fill4 from "../../../public/assests/Fill4.svg";
import Scroll from "../../../public/assests/scroll.png";
import PropCard from "../../../public/assests/propcard.png";
import Arrow from "../../../public/assests/arrow.png";
import Group1 from "../../../public/assests/Group1.png";
import Group2 from "../../../public/assests/Group2.png";
import Bullet from "../../../public/assests/bullet.png";
import Scheduled from "../../../public/assests/scheduled.svg";
import Card1 from "../../../public/assests/blogcard.png";
import Card2 from "../../../public/assests/blogcard1.png";
import Card3 from "../../../public/assests/blogcard2.png";
import Card4 from "../../../public/assests/blogcard10.png";
import Card5 from "../../../public/assests/blogcard20.png";
import Card6 from "../../../public/assests/blogcard30.png";
import Mobilespike from "../../../public/assests/mobilespike.png";
import { Grid } from "@mui/material";
import styles from "@/styles/Home.module.css";
import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";
import Head from 'next/head';
// const Crouseldata = (e) => {
//     return (
//         <>
//             {e === 1 ? <Box className={`${styles["card-scroll"]} display-flex`}>
//                 <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                     <Box className='process-crousel-home position-relative' display={'flex'} justifyContent={'space-between'}>
//                         <Box className=''>
//                             <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                 <Typography
//                                     className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                 >
//                                     Annual Accounts
//                                 </Typography>
//                             </Box>
//                             <Box className=''>
//                                 <Typography
//                                     className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                 >
//                                     Our comprehensive Annual Accounts Service provides businesses with accurate, timely, and compliant financial reporting.
//                                     With our exceptional service and support, you can have confidence in the accuracy and completeness of your financial reporting, allowing you to focus on your business operations and growth.
//                                 </Typography>
//                             </Box>
//                         </Box>
//                         <a className={"div-between mb-50 text-decoration-none"} href="/services/#1">
//                             <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                 Learn more
//                             </Typography>
//                             <Image
//                                 src={Arrow}
//                                 style={{ zIndex: 6, width: '27px', height: '12px' }}
//                             />
//                         </a>
//                     </Box>
//                 </Box>
//                 <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                     <Box className='process-crousel-home1 position-relative' display={'flex'} justifyContent={'space-between'}>
//                         <Box className=''>
//                             <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                 <Typography
//                                     className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                 >
//                                     Company Secretary
//                                 </Typography>
//                             </Box>
//                             <Box className=''>
//                                 <Typography
//                                     className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                 >
//                                     Our comprehensive Advisory and Company Secretarial Service provides businesses with expert guidance and support on all aspects of corporate governance and compliance.
//                                     Our team of experienced advisors and company secretaries will help you navigate the complex legal and regulatory landscape, ensuring that your business is fully compliant and well-governed.
//                                 </Typography>
//                             </Box>
//                         </Box>
//                         <a className={"div-between mb-50 text-decoration-none"} href="/services/#4">
//                             <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                 Learn more
//                             </Typography>
//                             <Image
//                                 src={Arrow}
//                                 style={{ zIndex: 6, width: '27px', height: '12px' }}
//                             />
//                         </a>
//                     </Box>
//                 </Box>
//                 <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                     <Box className='process-crousel-home2 position-relative' display={'flex'} justifyContent={'space-between'}>
//                         <Box className=''>
//                             <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                 <Typography
//                                     className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                 >
//                                     Bookkeeping
//                                 </Typography>
//                             </Box>
//                             <Box className=''>
//                                 <Typography
//                                     className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                 >
//                                     Whether it is Recording of all financial transactions, including sales, purchases, expenses, and payments,
//                                     bank and credit card reconciliations, Accounts payable and receivable management, all our bookkeeping services are designed to save you time and reduce the risk of errors.
//                                 </Typography>
//                             </Box>
//                         </Box>
//                         <a className={"div-between mb-50 text-decoration-none"} href="/services/#2">
//                             <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                 Learn more
//                             </Typography>
//                             <Image
//                                 src={Arrow}
//                                 style={{ zIndex: 6, width: '27px', height: '12px' }}
//                             />
//                         </a>
//                     </Box>
//                 </Box>
//             </Box>
//                 : <Box className={`${styles["card-scroll"]} display-flex`}>
//                     <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                         <Box className='process-crousel-home position-relative' display={'flex'} justifyContent={'space-between'}>
//                             <Box className=''>
//                                 <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                     <Typography
//                                         className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                     >
//                                         Payroll
//                                     </Typography>
//                                 </Box>
//                                 <Box className=''>
//                                     <Typography
//                                         className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                     >
//                                         Our team of payroll specialist can handle calculation and processing of employee paychecks, filing of all relevant payroll taxes, maintenance of accurate employee payroll records,
//                                         preparation of W-2s and other tax forms and other payroll services with ease assuring all your payrolls are accurate and compliant.
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <a className={"div-between mb-50 text-decoration-none"} href="/services/#10">
//                                 <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                     Learn more
//                                 </Typography>
//                                 <Image
//                                     src={Arrow}
//                                     style={{ zIndex: 6, width: '27px', height: '12px' }}
//                                 />
//                             </a>
//                         </Box>
//                     </Box>
//                     <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                         <Box className='process-crousel-home1 position-relative' display={'flex'} justifyContent={'space-between'}>
//                             <Box className=''>
//                                 <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                     <Typography
//                                         className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                     >
//                                         Taxation
//                                     </Typography>
//                                 </Box>
//                                 <Box className=''>
//                                     <Typography
//                                         className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                     >
//                                         Borgo Offers businesses with expert guidance and support on all aspects of tax compliance, including Corporation Tax, Income Tax, VAT, and Relevant Contracts Tax.
//                                         Our team of experienced tax professionals will ensure that your tax affairs are managed effectively and efficiently, while minimizing your tax liability and maximizing your tax savings
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <a className={"div-between mb-50 text-decoration-none"} href="/services/#11">
//                                 <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                     Learn more
//                                 </Typography>
//                                 <Image
//                                     src={Arrow}
//                                     style={{ zIndex: 6, width: '27px', height: '12px' }}
//                                 />
//                             </a>
//                         </Box>
//                     </Box>
//                     <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                         <Box className='process-crousel-home2 position-relative' display={'flex'} justifyContent={'space-between'}>
//                             <Box className=''>
//                                 <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                     <Typography
//                                         className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                     >
//                                         VAT
//                                     </Typography>
//                                 </Box>
//                                 <Box className=''>
//                                     <Typography
//                                         className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                     >
//                                         Our process starts with you. Business is unique, that’s why we design a service and price plan just for you.
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <a className={"div-between mb-50 text-decoration-none"} href="/services/#9">
//                                 <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                     Learn more
//                                 </Typography>
//                                 <Image
//                                     src={Arrow}
//                                     style={{ zIndex: 6, width: '27px', height: '12px' }}
//                                 />
//                             </a>
//                         </Box>
//                     </Box>
//                 </Box>}
//         </>
//     )
// }
// const Crouseldatamd = (e) => {
//     return (
//         <>
//             {e === 1 ? <Box className={`${styles["card-scroll"]} display-flex`}>
//                 <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                     <Box className='process-crousel-home position-relative' display={'flex'} justifyContent={'space-between'}>
//                         <Box className=''>
//                             <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                 <Typography
//                                     className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                 >
//                                     Annual Accounts
//                                 </Typography>
//                             </Box>
//                             <Box className=''>
//                                 <Typography
//                                     className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                 >
//                                     Our comprehensive Annual Accounts Service provides businesses with accurate, timely, and compliant financial reporting.
//                                     With our exceptional service and support, you can have confidence in the accuracy and completeness of your financial reporting, allowing you to focus on your business operations and growth.
//                                 </Typography>
//                             </Box>
//                         </Box>
//                         <a className={"div-between text-decoration-none"} href="/services/#1">
//                             <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                 Learn more
//                             </Typography>
//                             <Image
//                                 src={Arrow}
//                                 style={{ zIndex: 6, width: '27px', height: '12px' }}
//                             />
//                         </a>
//                     </Box>
//                 </Box>
//                 <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                     <Box className='process-crousel-home1 position-relative' display={'flex'} justifyContent={'space-between'}>
//                         <Box className=''>
//                             <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                 <Typography
//                                     className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                 >
//                                     Company Secretary
//                                 </Typography>
//                             </Box>
//                             <Box className=''>
//                                 <Typography
//                                     className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                 >
//                                     Our comprehensive Advisory and Company Secretarial Service provides businesses with expert guidance and support on all aspects of corporate governance and compliance.
//                                     Our team of experienced advisors and company secretaries will help you navigate the complex legal and regulatory landscape, ensuring that your business is fully compliant and well-governed.
//                                 </Typography>
//                             </Box>
//                         </Box>
//                         <a className={"div-between text-decoration-none"} href="/services/#4">
//                             <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                 Learn more
//                             </Typography>
//                             <Image
//                                 src={Arrow}
//                                 style={{ zIndex: 6, width: '27px', height: '12px' }}
//                             />
//                         </a>
//                     </Box>
//                 </Box>
//             </Box>
//                 : e === 2 ? <Box className={`${styles["card-scroll"]} display-flex`}>
//                     <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                         <Box className='process-crousel-home2 position-relative' display={'flex'} justifyContent={'space-between'}>
//                             <Box className=''>
//                                 <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                     <Typography
//                                         className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                     >
//                                         Bookkeeping
//                                     </Typography>
//                                 </Box>
//                                 <Box className=''>
//                                     <Typography
//                                         className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                     >
//                                         Whether it is Recording of all financial transactions, including sales, purchases, expenses, and payments,
//                                         bank and credit card reconciliations, Accounts payable and receivable management, all our bookkeeping services are designed to save you time and reduce the risk of errors.
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <a className={"div-between text-decoration-none"} href="/services/#2">
//                                 <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                     Learn more
//                                 </Typography>
//                                 <Image
//                                     src={Arrow}
//                                     style={{ zIndex: 6, width: '27px', height: '12px' }}
//                                 />
//                             </a>
//                         </Box>
//                     </Box>
//                     <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                         <Box className='process-crousel-home position-relative' display={'flex'} justifyContent={'space-between'}>
//                             <Box className=''>
//                                 <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                     <Typography
//                                         className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                     >
//                                         Payroll
//                                     </Typography>
//                                 </Box>
//                                 <Box className=''>
//                                     <Typography
//                                         className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                     >
//                                         Our team of payroll specialist can handle calculation and processing of employee paychecks, filing of all relevant payroll taxes, maintenance of accurate employee payroll records,
//                                         preparation of W-2s and other tax forms and other payroll services with ease assuring all your payrolls are accurate and compliant.
//                                     </Typography>
//                                 </Box>
//                             </Box>
//                             <a className={"div-between text-decoration-none"} href="/services/#10">
//                                 <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                     Learn more
//                                 </Typography>
//                                 <Image
//                                     src={Arrow}
//                                     style={{ zIndex: 6, width: '27px', height: '12px' }}
//                                 />
//                             </a>
//                         </Box>
//                     </Box>
//                 </Box>
//                     : <Box className={`${styles["card-scroll"]} display-flex`}>
//                         <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                             <Box className='process-crousel-home1 position-relative' display={'flex'} justifyContent={'space-between'}>
//                                 <Box className=''>
//                                     <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                         <Typography
//                                             className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                         >
//                                             Taxation
//                                         </Typography>
//                                     </Box>
//                                     <Box className=''>
//                                         <Typography
//                                             className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                         >
//                                             Borgo Offers businesses with expert guidance and support on all aspects of tax compliance, including Corporation Tax, Income Tax, VAT, and Relevant Contracts Tax.
//                                             Our team of experienced tax professionals will ensure that your tax affairs are managed effectively and efficiently, while minimizing your tax liability and maximizing your tax savings
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                                 <a className={"div-between text-decoration-none"} href="/services/#11">
//                                     <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                         Learn more
//                                     </Typography>
//                                     <Image
//                                         src={Arrow}
//                                         style={{ zIndex: 6, width: '27px', height: '12px' }}
//                                     />
//                                 </a>
//                             </Box>
//                         </Box>
//                         <Box className="div-center position-relative m-inline-40 m-inline-10-sm">
//                             <Box className='process-crousel-home2 position-relative' display={'flex'} justifyContent={'space-between'}>
//                                 <Box className=''>
//                                     <Box className={`display-flex div-flex-start flex-direction-column mt-50-sm`}>
//                                         <Typography
//                                             className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-mulish mt-20-sm"
//                                         >
//                                             VAT
//                                         </Typography>
//                                     </Box>
//                                     <Box className=''>
//                                         <Typography
//                                             className="text-left weight-400 color-light-grey font-18 font-mulish mt-50-sm mt-20"
//                                         >
//                                             Our process starts with you. Business is unique, that’s why we design a service and price plan just for you.
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//                                 <a className={"div-between text-decoration-none"} href="/services/#9">
//                                     <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
//                                         Learn more
//                                     </Typography>
//                                     <Image
//                                         src={Arrow}
//                                         style={{ zIndex: 6, width: '27px', height: '12px' }}
//                                     />
//                                 </a>
//                             </Box>
//                         </Box>
//                     </Box>
//             }
//         </>
//     )
// }

// const CardGiftcardCurated = [
//     Crouseldata(1),
//     Crouseldata(2)
// ]

// const CardGiftcardCuratedMD = [
//     Crouseldatamd(1),
//     Crouseldatamd(2),
//     Crouseldatamd(3)
// ]

export default function Home() {
    return (
        <>
            <Head>
                <title>Borgo - Accounting Services Designed for Business Growth</title>
                <meta name="description" content="Expert accounting support to help your business grow. Get real-time financial insights, streamlined bookkeeping, and a dedicated client manager." />
            </Head>
            <Box
                component="main"
                className="position-relative overflowx-hidden overflowy-hidden" //margin-auto
            >
                {/* <Toolbar /> */}
                <div className="display-none-sm position-absolute right-0 side-gol">
                    <Image src={Spike2} width="100%" height="100%" />
                </div>

                <Typography style={{ position: "relative" }} className="weight-700  color-orange text-center font-70 font-48-sm font-mulish">
                    WELCOME TO BORGO

                    <Image
                        src={Logo}
                        priority={true}
                        alt="main-spike"
                        className="div-center123"
                    />

                </Typography>
                <Typography
                    className="weight-600 color-light-grey text-center font-18 font-21-sm width-50 width-80-sm margin-auto font-mulish"
                    style={{ margin: "auto" }}
                >
                    We provide accounting services and advice to help you build and grow
                    your business. We see ourselves as your partner, adding real value to
                    your business.
                </Typography>
            </Box>

            <Box className="position-relative">
                <div className="display-none-sm position-absolute left-0 fig-1">
                    <Image src={Fill1} width="100%" height="100%" />
                </div>
                <div className="display-none-sm position-absolute right-0 fig-2">
                    <Image src={Fill3} width="100%" height="100%" />
                </div>
                <div
                    style={{
                        marginBottom: "60px",
                        marginTop: "60px",
                        padding: 10,
                        position: "relative",
                        width: "100%",
                        maxWidth: "560px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                    className="div-center"
                >
                    <video
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            margin: "0 auto",
                        }}
                        controls
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src="https://res.cloudinary.com/dmymftumw/video/upload/v1737604572/swiztr76qwo2llnnacj1.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </Box>

            <Box className="position-relative">
                <div className="display-none-sm position-absolute left-0 fig-3">
                    <Image src={Fill2} width="100%" height="100%" />
                </div>
                <div className="display-none-sm position-absolute right-0 fig-4">
                    <Image src={Fill4} width="100%" height="100%" />
                </div>
                <div
                    className="display-none-sm position-absolute left-0 fig-5"
                    style={{ zIndex: 7 }}
                >
                    <Image src={Spike1} width="100%" height="100%" />
                </div>
                <div className={`${styles.scroll} ${styles["div-center"]}`}>
                    <a href="#1" className="div-center flex-direction-column text-decoration-none">
                        <Image src={Scroll} width="100%" height="100%" />
                        <Typography className="mt-20 color-grey font-mulish weight-600">
                            SCROLL TO EXPLORE
                        </Typography>
                    </a>
                    {/* <Typography
                        className="line-height-72 line-height-48-sm weight-700 m-block-100 m-block-40-sm color-light-grey text-center width-60 width-80-sm font-60 font-40-sm font-mulish"
                        id="1"
                        sx={{ zIndex: 8 }}
                    >
                        Borgo is the brand of complete financial services delivered through
                        our digital platform
                    </Typography> */}
                </div>
            </Box>

            <div id="1" className={`${styles['card-scroll']} ${styles['custom-scroll']}`}>

                <div className='div-center position-relative m-inline-40 m-inline-10-sm animation-cards'>
                    <div className={styles['card-top-box']} ></div>
                    <Image src={PropCard} className={styles['card-image']} style={{ zIndex: 6 }} />
                    <div className={styles['card-inner']}>
                        <Typography className='weight-700 line-height-48 width-100-sm color-light-grey font-46 font-mulish' sx={{ marginTop: '10px' }}>
                            Accounts and Compliance
                        </Typography>
                        <Typography className='weight-400 color-light-grey font-18 font-mulish' sx={{ marginTop: '20px' }}>
                            Our team will prepare your year-end accounts, handle your tax obligations (Revenue), and submit annual returns (CRO).As your registered tax agent, we can manage your registrations, compliance, and any queries, providing peace of mind to you and your business
                        </Typography>
                        {/* <Box className={'div-between'} sx={{ marginTop: '50px' }}> */}
                        <a className={"div-between mt-50 text-decoration-none"} href="/services-accounting/">
                            <Typography className='weight-700 color-light-grey text-center font-18 font-mulish'>
                                Learn more
                            </Typography>
                            <Image src={Arrow} width='100%' height="100%" style={{ zIndex: 6 }} />
                        </a>
                    </div>
                </div>
                <div className='div-center position-relative m-inline-40 m-inline-10-sm animation-cards'>
                    <div className={styles['card-top-box1']} ></div>
                    <Image src={PropCard} className={styles['card-image']} style={{ zIndex: 6 }} />
                    <div className={styles['card-inner']}>
                        <Typography className='weight-700 line-height-48 width-100-sm color-light-grey font-46 font-mulish' sx={{ marginTop: '10px' }}>
                            Online bookkeeper
                        </Typography>
                        <Typography className='weight-400 color-light-grey font-18 font-mulish' sx={{ marginTop: '20px' }}>
                            Maintain accurate and up to date financial information with our online bookkeeping services. You will be assigned a dedicated bookkeeper to reconcile your accounts and manage your business admin tasks.
                        </Typography>
                        {/* <Box className={'div-between'} sx={{ marginTop: '50px' }}> */}
                        <a className={"div-between mt-50 text-decoration-none"} href="/services-onlinebookkeepr/">
                            <Typography className='weight-700 color-light-grey text-center font-18 font-mulish'>
                                Learn more
                            </Typography>
                            <Image src={Arrow} width='100%' height="100%" style={{ zIndex: 6 }} />
                        </a>
                    </div>
                </div>
                <div className='div-center position-relative m-inline-40 m-inline-10-sm animation-cards'>
                    <div className={styles['card-top-box2']} ></div>
                    <Image src={PropCard} className={styles['card-image']} style={{ zIndex: 6 }} />
                    <div className={styles['card-inner']}>
                        <Typography className='weight-700 line-height-48 width-100-sm  color-light-grey font-46 font-mulish' sx={{ marginTop: '10px' }}>
                            Advisory
                        </Typography>
                        <Typography className='weight-400 color-light-grey font-18 font-mulish' sx={{ marginTop: '20px' }}>
                            Unlock your business’s potential with our expert business support services From management reports to corporate finance and budgeting, we provide actionable insights to help you make informed decisions and drive growth
                        </Typography>
                        {/* <Box className={'div-between'} sx={{ marginTop: '50px' }}> */}
                        <a className={"div-between mt-50 text-decoration-none"} href="/services-advisory/">
                            <Typography className='weight-700 color-light-grey text-center font-18 font-mulish'>
                                Learn more
                            </Typography>
                            <Image src={Arrow} width='100%' height="100%" style={{ zIndex: 6 }} />
                        </a>
                    </div>
                </div>


            </div>

            {/* Desktop */}

            {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='display-flex display-none-md display-none-sm'>
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    swipeable={true}
                    className='crousel-width-home'
                >
                    {CardGiftcardCurated.map((e) => {
                        return (
                            e
                        )
                    })}
                </Carousel>
            </Grid> */}

            {/* Tab */}
            {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='display-flex-md display-none display-none-sm'>
                <Carousel
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    swipeable={true}
                    className='crousel-width-home'
                >
                    {CardGiftcardCuratedMD.map((e) => {
                        return (
                            e
                        )
                    })}
                </Carousel>
            </Grid> */}

            {/* Mobile */}

            {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='display-flex-sm display-none-md display-none'>
                <Carousel
                    autoPlay={true}
                    interval={5000}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    swipeable={true}
                    className='crousel-width-home'
                >
                    <Box className='process-crousel-home position-relative' display={'flex'} justifyContent={'space-between'}>
                        <Box className=''>
                            <Box className={`display-flex div-flex-start flex-direction-column mt-50 mt-20-sm`}>
                                <Typography
                                    className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-36-sm font-mulish mt-20"
                                >
                                    Annual Accounts
                                </Typography>
                            </Box>
                            <Box className=''>
                                <Typography
                                    className="text-left weight-400 color-light-grey font-18 font-mulish mt-50 mt-20-sm"
                                >
                                    Our comprehensive Annual Accounts Service provides businesses with accurate, timely, and compliant financial reporting.
                                    With our exceptional service and support, you can have confidence in the accuracy and completeness of your financial reporting, allowing you to focus on your business operations and growth.
                                </Typography>
                            </Box>
                        </Box>
                        <a className={"div-between mb-50 text-decoration-none"} href="/services/#1">
                            <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
                                Learn more
                            </Typography>
                            <Image
                                src={Arrow}
                                style={{ zIndex: 6, width: '27px', height: '12px' }}
                            />
                        </a>
                    </Box>

                    <Box className='process-crousel-home1 position-relative' display={'flex'} justifyContent={'space-between'}>
                        <Box className=''>
                            <Box className={`display-flex div-flex-start flex-direction-column mt-50 mt-20-sm`}>
                                <Typography
                                    className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-36-sm font-mulish mt-20"
                                >
                                    Company Secretary
                                </Typography>
                            </Box>
                            <Box className=''>
                                <Typography
                                    className="text-left weight-400 color-light-grey font-18 font-mulish mt-50 mt-20-sm"
                                >
                                    Our comprehensive Advisory and Company Secretarial Service provides businesses with expert guidance and support on all aspects of corporate governance and compliance.
                                    Our team of experienced advisors and company secretaries will help you navigate the complex legal and regulatory landscape, ensuring that your business is fully compliant and well-governed.
                                </Typography>
                            </Box>
                        </Box>
                        <a className={"div-between mb-50 text-decoration-none"} href="/services/#4">
                            <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
                                Learn more
                            </Typography>
                            <Image
                                src={Arrow}
                                style={{ zIndex: 6, width: '27px', height: '12px' }}
                            />
                        </a>
                    </Box>

                    <Box className='process-crousel-home2 position-relative' display={'flex'} justifyContent={'space-between'}>
                        <Box className=''>
                            <Box className={`display-flex div-flex-start flex-direction-column mt-50 mt-20-sm`}>
                                <Typography
                                    className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-36-sm font-mulish mt-20"
                                >
                                    Bookkeeping
                                </Typography>
                            </Box>
                            <Box className=''>
                                <Typography
                                    className="text-left weight-400 color-light-grey font-18 font-mulish mt-50 mt-20-sm"
                                >
                                    Whether it is Recording of all financial transactions, including sales, purchases, expenses, and payments,
                                    bank and credit card reconciliations, Accounts payable and receivable management, all our bookkeeping services are designed to save you time and reduce the risk of errors.
                                </Typography>
                            </Box>
                        </Box>
                        <a className={"div-between mb-50 text-decoration-none"} href="/services/#2">
                            <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
                                Learn more
                            </Typography>
                            <Image
                                src={Arrow}
                                style={{ zIndex: 6, width: '27px', height: '12px' }}
                            />
                        </a>
                    </Box>

                    <Box className='process-crousel-home position-relative' display={'flex'} justifyContent={'space-between'}>
                        <Box className=''>
                            <Box className={`display-flex div-flex-start flex-direction-column mt-50 mt-20-sm`}>
                                <Typography
                                    className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-36-sm font-mulish mt-20"
                                >
                                    Payroll
                                </Typography>
                            </Box>
                            <Box className=''>
                                <Typography
                                    className="text-left weight-400 color-light-grey font-18 font-mulish mt-50 mt-20-sm"
                                >
                                    Our team of payroll specialist can handle calculation and processing of employee paychecks, filing of all relevant payroll taxes, maintenance of accurate employee payroll records,
                                    preparation of W-2s and other tax forms and other payroll services with ease assuring all your payrolls are accurate and compliant.
                                </Typography>
                            </Box>
                        </Box>
                        <a className={"div-between mb-50 text-decoration-none"} href="/services/#10">
                            <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
                                Learn more
                            </Typography>
                            <Image
                                src={Arrow}
                                style={{ zIndex: 6, width: '27px', height: '12px' }}
                            />
                        </a>
                    </Box>

                    <Box className='process-crousel-home1 position-relative' display={'flex'} justifyContent={'space-between'}>
                        <Box className=''>
                            <Box className={`display-flex div-flex-start flex-direction-column mt-50 mt-20-sm`}>
                                <Typography
                                    className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-36-sm font-mulish mt-20"
                                >
                                    Taxation
                                </Typography>
                            </Box>
                            <Box className=''>
                                <Typography
                                    className="text-left weight-400 color-light-grey font-18 font-mulish mt-50 mt-20-sm"
                                >
                                    Borgo Offers businesses with expert guidance and support on all aspects of tax compliance, including Corporation Tax, Income Tax, VAT, and Relevant Contracts Tax.
                                    Our team of experienced tax professionals will ensure that your tax affairs are managed effectively and efficiently, while minimizing your tax liability and maximizing your tax savings
                                </Typography>
                            </Box>
                        </Box>
                        <a className={"div-between mb-50 text-decoration-none"} href="/services/#11">
                            <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
                                Learn more
                            </Typography>
                            <Image
                                src={Arrow}
                                style={{ zIndex: 6, width: '27px', height: '12px' }}
                            />
                        </a>
                    </Box>

                    <Box className='process-crousel-home2 position-relative' display={'flex'} justifyContent={'space-between'}>
                        <Box className=''>
                            <Box className={`display-flex div-flex-start flex-direction-column mt-50 mt-20-sm`}>
                                <Typography
                                    className="text-left weight-700 line-height-48 width-100-sm width-50 color-light-grey font-48 font-36-sm font-mulish mt-20"
                                >
                                    VAT
                                </Typography>
                            </Box>
                            <Box className=''>
                                <Typography
                                    className="text-left weight-400 color-light-grey font-18 font-mulish mt-50 mt-20-sm"
                                >
                                    Our comprehensive Annual Accounts Service provides businesses with accurate, timely, and compliant financial reporting.
                                    With our exceptional service and support, you can have confidence in the accuracy and completeness of your financial reporting, allowing you to focus on your business operations and growth.
                                </Typography>
                            </Box>
                        </Box>
                        <a className={"div-between mb-50 text-decoration-none"} href="/services/#9">
                            <Typography className="weight-700 color-light-grey text-center font-18 font-mulish">
                                Learn more
                            </Typography>
                            <Image
                                src={Arrow}
                                style={{ zIndex: 6, width: '27px', height: '12px' }}
                            />
                        </a>
                    </Box>
                </Carousel>
            </Grid > */}

            <Grid container className="">
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="margin-120 margin-30-sm">
                        <Typography className="font-60 font-40-sm color-light-grey weight-700 font-mulish line-height-72 line-height-48-sm">
                            Benefits of working with us
                        </Typography>
                        <Typography
                            className="font-24 color-light-grey weight-600 font-mulish"
                            style={{ marginTop: "20px" }}
                        >
                            Accountants with tech experience to go over the system side of the
                            business. We may suggest a number of apps that may help automate
                            or streamline some of the mundane accounting functions. Already
                            set up? Then let us help by learning how your systems work.
                        </Typography>
                        <div
                            className="font-20 color-light-grey"
                            style={{ marginTop: "30px" }}
                        >
                            <div
                                className="display-flex align-item-center"
                                style={{ marginTop: "20px" }}
                            >
                                <Image
                                    src={Bullet}
                                    width="100%"
                                    height="100%"
                                    style={{ marginRight: "20px" }}
                                />
                                <div className="font-20 weight-600 font-mulish">
                                    Automate and streamline bookkeeping and accounting processes
                                </div>
                            </div>
                            <div
                                className="display-flex align-item-center"
                                style={{ marginTop: "20px" }}
                            >
                                <Image
                                    src={Bullet}
                                    width="100%"
                                    height="100%"
                                    style={{ marginRight: "20px" }}
                                />
                                <div className="font-20 weight-600 font-mulish">
                                    Real time and accurate financial information for your business
                                </div>
                            </div>
                            <div
                                className="display-flex align-item-center"
                                style={{ marginTop: "20px" }}
                            >
                                <Image
                                    src={Bullet}
                                    width="100%"
                                    height="100%"
                                    style={{ marginRight: "20px" }}
                                />
                                <div className="font-20 weight-600 font-mulish">
                                    Dedicated client manager and support team
                                </div>
                            </div>
                        </div>
                        <div className="box" style={{ marginTop: "30px" }}>
                            <Typography
                                className="read-more color-light-grey"
                                style={{
                                    width: "118px",
                                    height: "36px",
                                    paddingInline: "14px",
                                    paddingBlock: "12px",
                                }}
                            >
                                <a
                                    href="/benefits"
                                    style={{ textDecoration: "none", color: "#DDDDDD" }}
                                >
                                    {" "}
                                    Read more{" "}
                                </a>
                            </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid
                    className="display-none-sm"
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                >
                    <div className="div-end overflow-hidden">
                        <Image
                            src={Group1}
                            width="100%"
                            height="100%"
                            className={styles["arrow-image"]}
                        />
                    </div>
                </Grid>
                <Grid
                    className="display-none-sm"
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                >
                    <div className="div-start">
                        <Image
                            src={Group2}
                            width="100%"
                            height="100%"
                            className={styles["arrow-image"]}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="margin-120 margin-30-sm">
                        <Typography className="font-60 font-40-sm weight-700 color-light-grey font-mulish line-height-72 line-height-48-sm">
                            What makes Borgo unique?
                        </Typography>
                        <Typography className="font-24 weight-600 color-light-grey font-mulish">
                            We will work together to get you up and running as quickly as
                            possible. We will provide ongoing training, support and advice
                            that help you to get the maximum benefit from our technology and
                            services.
                            <br></br>
                            <br></br>
                            You will have a dedicated client manager to ensure you are
                            getting what you need, when you need it!
                        </Typography>
                        <div className="box position-relative" style={{ marginTop: "50px" }}>
                            <Typography
                                className="read-more color-light-grey btn-11"
                                style={{
                                    width: "118px",
                                    height: "36px",
                                    paddingInline: "14px",
                                    paddingBlock: "12px",
                                }}
                            >
                                <a
                                    href="/process"
                                    style={{ textDecoration: "none", color: "#DDDDDD" }}
                                >
                                    {" "}
                                    Read more{" "}
                                </a>
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Box className="div-center position-relative">
                <div className={styles["fig-6"]}>
                    <Image src={Scheduled} className={styles["schedule-sphere"]} />
                </div>
                <div className={styles["fig-60"]}>
                    <Image src={Mobilespike} className={styles["schedule-sphere"]} />
                </div>
                <div className={styles["schedule"]}>
                    <Typography className="weight-700 font-60 font-40-sm width-100 width-50-sm font-mulish line-height-72 line-height-48-sm">
                        Schedule a call
                    </Typography>
                    <Typography className="weight-600 font-24 width-80 width-100-md font-mulish line-height-36">
                        If you are starting a business we can help you every step of the way.<br></br>
                        Let us work with you to get your business started on the right foot.
                    </Typography>
                    <div className="box-inside" style={{ marginTop: "10px" }}>
                        <Typography
                            className="read-more color-light-grey font-mulish"
                            style={{ width: "158px", height: "36px", paddingInline: "14px", paddingBlock: "12px" }}
                        >
                            <a
                                href="https://calendly.com/d/z84-783-bw8/discovery-call" target='_blank' style={{ textDecoration: "none", color: "#DDDDDD" }}
                            >
                                {" "}
                                Schedule a call{" "}
                            </a>
                        </Typography>
                    </div>
                </div>
            </Box>


            <Grid container className="mt-80 mt-180-sm">
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}
                    className="display-flex flex-direction-column mt-50 pl-100 pl-25-sm"
                >
                    <Typography className="font-60 font-40-sm font-700 color-light-grey width-80">
                        Stay up to date on the latest
                    </Typography>
                    <Typography
                        className="font-24 color-light-grey width-80 width-90-sm"
                        style={{ marginTop: "40px" }}
                    >
                        Stay current on the latest Borgo project developments, news, and
                        content.
                    </Typography>
                    <div className="box" style={{ marginTop: "40px" }}>
                        <Typography
                            className="read-more color-light-grey"
                            style={{
                                width: "118px",
                                height: "36px",
                                paddingInline: "14px",
                                paddingBlock: "12px",
                                zIndex: "14",
                            }}
                        >
                            <a
                                href="/blog"
                                style={{
                                    textDecoration: "none",
                                    color: "#DDDDDD",
                                    zIndex: "14",
                                }}
                            >
                                {" "}
                                Read more{" "}
                            </a>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container className="div-center-sm">
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            className="display-none-sm div-center position-relative"
                            style={{ marginBottom: "30px" }}
                        >
                            <Link href="/outsourcing_blog" className="text-decoration-none">
                                <Image
                                    src={Card1}
                                    width="100%"
                                    height="100%"
                                    style={{ zIndex: 6 }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        width: "558px",
                                        // height: "190px",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            zIndex: 8,
                                            width: "250px",
                                            right: 10,
                                            bottom: 25,
                                        }}
                                    >
                                        <div
                                            className="color-orange div-center font-10 font-mulish background-purple"
                                            style={{
                                                width: "70px",
                                                height: "28px",
                                                marginTop: "10px",
                                                borderRadius: "50px",
                                            }}
                                        >
                                            UPDATES
                                        </div>
                                        <Typography
                                            className="weight-600 color-light-grey font-24 font-mulish"
                                            sx={{ marginTop: "10px" }}
                                        >
                                            Unlocking Efficiency with Borgo
                                        </Typography>
                                        <Box className={"div-between"} sx={{ marginTop: "10px" }}>
                                            <Typography className="color-grey text-center font-18 font-mulish">
                                                07/02/2023
                                            </Typography>
                                            <Image
                                                src={Arrow}
                                                width="100%"
                                                height="100%"
                                                style={{ zIndex: 6 }}
                                            />
                                        </Box>
                                    </div>
                                </div>
                            </Link>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            className="display-none-sm div-center position-relative"
                            style={{ marginBottom: "30px" }}
                        >
                            <Link href="/profitability_blog" className="text-decoration-none">
                                <Image
                                    src={Card2}
                                    width="100%"
                                    height="100%"
                                    style={{ zIndex: 6 }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        width: "558px",
                                        // height: "190px",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            zIndex: 8,
                                            width: "250px",
                                            right: 10,
                                            bottom: 25,
                                        }}
                                    >
                                        <div
                                            className="color-orange div-center font-10 font-mulish background-purple"
                                            style={{
                                                width: "70px",
                                                height: "28px",
                                                marginTop: "10px",
                                                borderRadius: "50px",
                                            }}
                                        >
                                            UPDATES
                                        </div>
                                        <Typography
                                            className="weight-600 color-light-grey font-24 font-mulish"
                                            sx={{ marginTop: "10px" }}
                                        >
                                            Unlocking Consistent Profitability
                                        </Typography>
                                        <Box className={"div-between"} sx={{ marginTop: "10px" }}>
                                            <Typography className="color-grey text-center font-18 font-mulish">
                                                07/02/2023
                                            </Typography>
                                            <Image
                                                src={Arrow}
                                                width="100%"
                                                height="100%"
                                                style={{ zIndex: 6 }}
                                            />
                                        </Box>
                                    </div>
                                </div>
                            </Link>
                        </Grid>

                        <Grid
                            item xs={12} sm={12} md={12} lg={12} xl={12}
                            className="display-none-sm div-center position-relative"
                            style={{ marginBottom: "30px" }}
                        >
                            <Link href="/enterpriseIreland_blog" className="text-decoration-none">
                                <Image
                                    src={Card3}
                                    width="100%"
                                    height="100%"
                                    style={{ zIndex: 6 }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        width: "558px",
                                        // height: "190px",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            zIndex: 8,
                                            width: "250px",
                                            right: 10,
                                            bottom: 25,
                                        }}
                                    >
                                        <div
                                            className="color-orange div-center font-10 font-mulish background-purple"
                                            style={{
                                                width: "70px",
                                                height: "28px",
                                                marginTop: "10px",
                                                borderRadius: "50px",
                                            }}
                                        >
                                            UPDATES
                                        </div>
                                        <Typography
                                            className="weight-600 color-light-grey font-24 font-mulish"
                                            sx={{ marginTop: "10px" }}
                                        >
                                            Irish Business Supports
                                        </Typography>
                                        <Box className={"div-between"} sx={{ marginTop: "10px" }}>
                                            <Typography className="color-grey text-center font-18 font-mulish">
                                                07/02/2023
                                            </Typography>
                                            <Image
                                                src={Arrow}
                                                width="100%"
                                                height="100%"
                                                style={{ zIndex: 6 }}
                                            />
                                        </Box>
                                    </div>
                                </div>
                            </Link>
                        </Grid>

                        {/* mobile */}

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            className="display-none display-flex-sm div-center position-relative"
                            style={{ marginBottom: "20px", marginTop: "50px" }}
                        >
                            <Link href="/outsourcing_blog" className="text-decoration-none position-relative" style={{ width: '320px', height: '380px' }}>
                                <Image
                                    src={Card4}
                                    width="100%"
                                    height="100%"
                                    style={{ zIndex: 6 }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        zIndex: 8,
                                        width: "250px",
                                        bottom: 20,
                                        left: 20
                                    }}
                                >
                                    <div
                                        className="color-orange div-center font-10 font-mulish background-purple"
                                        style={{
                                            width: "70px",
                                            height: "28px",
                                            marginTop: "10px",
                                            borderRadius: "50px",
                                        }}
                                    >
                                        UPDATES
                                    </div>
                                    <Typography
                                        className="weight-600 color-light-grey font-24 font-mulish"
                                        sx={{ marginTop: "10px" }}
                                    >
                                        Unlocking Efficiency with Borgo
                                    </Typography>
                                    <Box
                                        className={"div-between width-80"}
                                        sx={{ marginTop: "20px" }}
                                    >
                                        <Typography className="color-grey text-center font-18 font-14-sm font-mulish">
                                            07/02/2023
                                        </Typography>
                                        <Image
                                            src={Arrow}
                                            width="100%"
                                            height="100%"
                                            style={{ zIndex: 6 }}
                                        />
                                    </Box>
                                </div>
                            </Link>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            className="display-none display-flex-sm div-center position-relative"
                            style={{ marginTop: "50px" }}
                        >
                            <Link href="/profitability_blog" className="text-decoration-none position-relative" style={{ width: '320px', height: '380px' }}>
                                <Image
                                    src={Card5}
                                    width="100%"
                                    height="100%"
                                    style={{ zIndex: 6 }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        zIndex: 8,
                                        width: "250px",
                                        bottom: 20,
                                        left: 20
                                    }}
                                >
                                    <div
                                        className="color-orange div-center font-10 font-mulish background-purple"
                                        style={{
                                            width: "70px",
                                            height: "28px",
                                            marginTop: "10px",
                                            borderRadius: "50px",
                                        }}
                                    >
                                        UPDATES
                                    </div>
                                    <Typography
                                        className="weight-600 color-light-grey font-24 font-mulish"
                                        sx={{ marginTop: "10px" }}
                                    >
                                        Unlocking Consistent Profitability
                                    </Typography>
                                    <Box
                                        className={"div-between width-80"}
                                        sx={{ marginTop: "20px" }}
                                    >
                                        <Typography className="color-grey text-center font-18 font-14-sm font-mulish">
                                            07/02/2023
                                        </Typography>
                                        <Image
                                            src={Arrow}
                                            width="100%"
                                            height="100%"
                                            style={{ zIndex: 6 }}
                                        />
                                    </Box>
                                </div>
                            </Link>
                        </Grid>

                        <Grid
                            item xs={12} sm={12} md={12} lg={12} xl={12}
                            className="display-none display-flex-sm div-center position-relative"
                            style={{ marginTop: "50px" }}
                        >
                            <Link href="/enterpriseIreland_blog" className="text-decoration-none position-relative" style={{ width: '320px', height: '380px' }}>
                                <Image
                                    src={Card6}
                                    width="100%"
                                    height="100%"
                                    style={{ zIndex: 6 }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        zIndex: 8,
                                        width: "250px",
                                        bottom: 20,
                                        left: 20
                                    }}
                                >
                                    <div
                                        className="color-orange div-center font-10 font-mulish background-purple"
                                        style={{
                                            width: "70px",
                                            height: "28px",
                                            marginTop: "10px",
                                            borderRadius: "50px",
                                        }}
                                    >
                                        UPDATES
                                    </div>
                                    <Typography
                                        className="color-light-grey font-24 weight-600 font-mulish"
                                        sx={{ marginTop: "10px" }}
                                    >
                                        Irish Business Supports
                                    </Typography>
                                    <Box
                                        className={"div-between width-80"}
                                        sx={{ marginTop: "20px" }}
                                    >
                                        <Typography className="color-grey text-center font-18 font-14-sm font-mulish">
                                            07/02/2023
                                        </Typography>
                                        <Image
                                            src={Arrow}
                                            width="100%"
                                            height="100%"
                                            style={{ zIndex: 6 }}
                                        />
                                    </Box>
                                </div>
                            </Link>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

            <UpperFooter />
            <Footer />
        </>
    );
}
