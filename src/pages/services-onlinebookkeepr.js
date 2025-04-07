import React from 'react'
import Navbar from './components/Navbar'
import ServicesText from './components/ServicesText'
import Image from 'next/image'
import ServiceCardLeft from './components/ServiceCardLeft'
import styles from '../styles/services.module.css'
import ServiceCardRight from './components/ServiceCardRight'
import midCard from '../../public/assests/News/new.png';
import { Box, Grid, Typography } from '@mui/material'
import logo1 from '../../public/assests/News/logo1.png'
import logo2 from '../../public/assests/News/logo2.png'
import Dext from '../../public/assests/News/dext.png'
import scroll from '../../public/assests/News/scroll.svg'
import UpperFooter from './components/UpperFooter'
import rightSpike from '../../public/assests/News/Serviceright.png'
import leftSpike from '../../public/assests/News/Serviceleft.png'
import SF1 from '../../public/assests/News/SF1.svg';
import SF2 from '../../public/assests/News/SF2.svg';
import SF3 from '../../public/assests/News/SF3.svg';
import Footer from './components/Footer'
import Scheduled from '../../public/assests/ScheduleCopy.png'
import ScheduledMobile from '../../public/assests/ScheduleCopyMobile.png'
import Link from 'next/link'
import Head from 'next/head'
export default function services() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Online Bookkeeping Services for Businesses | Borgo</title>
        <meta name="description" content="Keep your finances up to date with professional online bookkeeping. Get real-time reporting, VAT preparation, and dedicated support for your business." />
      </Head>
      <div className={styles['main']}>
        <Image src={leftSpike} className={`${styles['leftSpike']} rotation`} />
        <Image src={rightSpike} className={styles['rightSpike']} />
        <Image className={styles['SF1']} src={SF1} />
        <Image className={styles['SF2']} src={SF2} />
        <Image className={styles['SF3']} src={SF3} />

        <div className={styles['top2']} >
          {/* <div className={styles['topButtons']}>
            <div className={styles['topButtonsText']}>  OUR SERVICES  </div>
            <div className={styles['topButton']}><Link href='/services-accounting/' style={{ textDecoration: 'none', color: '#DDDDDD' }} > ACCOUNTING </Link> </div>
            <div className={styles['topButton']}><Link href='/services-onlinebookkeepr' style={{ textDecoration: 'none', color: '#DDDDDD' }} >ONLINE BOOKKEEPER </Link></div>
            <div className={styles['topButton']}><Link href='/services-advisory' style={{ textDecoration: 'none', color: '#DDDDDD' }} >ADVISORY </Link></div>
          </div> */}
          <div className={styles['topHead']} >
            Online Bookkeeper
          </div>
          <div className={styles['topText']} style={{ maxWidth: '780px', margin: '0 0', }}>
            Maintain accurate and up to date financial information with our
            online bookkeeping services. You will be assigned a dedicated
            bookkeeper to reconcile your accounts and manage your business
            admin tasks. Our online bookkeeping offers the following benefits:
          </div>
          <div>
            <ul className={styles['topText265']}>
              <li>Accessibility: Access your financial data anytime, anywhere.
              </li>
              <li>Efficiency: Streamline processes with digital tools and real-time updates.</li>
              <li>Accuracy: Reduce errors with automated systems and professional oversight.</li>
              <li>	Cost-Effective: Save on overhead costs associated with in-house bookkeeping.
              </li>
              <li>Scalability: Easily adjust services to fit the needs of your growing business.

              </li>
            </ul>

          </div>
          <div>

          </div>

          <div >
            <Image className={styles['scroll']} src={scroll} />
          </div>
        </div>
        <p className={styles['topText3']}>We have partnered with Xero to help automate and streamline traditional bookkeeping practices for our clients and provide a complete outsourcing solution for your business. </p>

        <div className={styles['ref']} >

          <Grid container className='div-center mt-100' id='2' >
            <Grid item xs={12} sm={12} md={6} xl={6} className='div-start div-center-sm'>
              <ServiceCardLeft props={2} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} className='div-flex-start div-center-sm flex-direction-column'>

              <div id='8'>
                <p className={styles['red-text']}>Online Bookkeeper</p>
                <ServicesText props={['',
                  'Realtime Reporting',
                  'Our online bookkeepers deliver real time and accurate financial information for your business including profits and loss, debtors, creditors and cashflows. You can access this information anytime, from anywhere using any device allowing you to plan and budget with confidence.'
                ]} />
              </div>
            </Grid>
          </Grid>

          <Grid container className=' mt-100' id='5'>
            <Grid item xs={12} sm={12} md={6} xl={6} id={styles['swap']} style={{ paddingInline: '20px' }}>
              <div className={`${styles['container'], 'mt-20'}`} id='9'>
                <Typography className={styles['red-text']}>
                  Online Bookkeeper
                </Typography>
                <Typography className={styles['head']}>
                  VAT
                </Typography>
                <Typography className={styles['text']}>
                  Our online bookkeepers will prepare the VAT and RTD Returns for your business and email them to you via DocuSign for signing.
                  Using Xero and DocuSign ensures that all returns are prepared in advance of the deadline and you can authorise the filing of the return from anywhere, anytime, using any device.
                </Typography>
              </div>
              <div className={`${styles['container']} mt-100`} id='10'>
                <Typography className={styles['red-text']}>
                  Online Bookkeeper
                </Typography>
                <Typography className={styles['head']}>
                  Payroll
                </Typography>
                <Typography className={styles['text']}>
                  The introduction of PAYE Modernisation and Enhanced Reporting
                  constant changes in employment legislation and the taxation system means payroll can be complex, time consuming and costly function within a business.
                  At Borgo we offer a high quality and convenient outsourced payroll function in conjunction with our accounting plans. We can help you pay your employees on time and stay compliant.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} className='div-center div-center-sm'>
              <ServiceCardRight props={2} />
            </Grid>
          </Grid>



        </div>
      </div >


      <div className={styles['midSection5']}>


      </div>

      <Box className="div-center position-relative mt-0">
        <Box className={styles['schedule']}>
          <Typography className='weight-700 font-60 font-40-sm width-100 width-50-sm font-mulish line-height-72 line-height-48-sm'>
            Schedule a call
          </Typography>
          <Typography className='weight-600 font-24 width-80 font-mulish line-height-36'>
            If you are starting a business we can help you every step of the way.<br></br>
            Let us work with you to get your business started on the right foot.
          </Typography>
          <div className="box-inside" style={{ marginTop: "10px" }}>
            <Typography
              className="read-more color-light-grey"
              style={{
                width: "158px",
                height: "36px",
                paddingInline: "14px",
                paddingBlock: "12px",
              }}
            >
              <a
                href="https://calendly.com/d/z84-783-bw8/discovery-call"
                target='_blank'
                style={{ textDecoration: "none", color: "#DDDDDD" }}
              >
                {" "}
                Schedule a call{" "}
              </a>
            </Typography>
          </div>
        </Box>
        <Box className="display-none-sm position-absolute right-0">
          <Image src={Scheduled} className={styles['schedule-sphere']} />
        </Box>
        <Box className="display-none display-block-sm position-absolute right-0 fig-schedule">
          <Image src={ScheduledMobile} className={styles['schedule-sphere']} />
        </Box>
      </Box >

      <Box sx={{ marginBlock: '100px' }}>
        <Footer />
      </Box>
    </>
  )
}
