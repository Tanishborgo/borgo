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
        <title>Business Advisory & Financial Planning Services | Borgo</title>
        <meta name="description" content="Get expert support with management reports, corporate finance, and budgeting. Make informed decisions to grow your business with confidence." />
      </Head>
      <div className={styles['main']}>
        <Image src={leftSpike} className={`${styles['leftSpike']} rotation`} />
        <Image src={rightSpike} className={styles['rightSpike']} />
        <Image className={styles['SF1']} src={SF1} />
        <Image className={styles['SF2']} src={SF2} />
        <Image className={styles['SF3']} src={SF3} />

        <div className={styles['top2']} >

          <div className={styles['topHead']}>
            Advisory
          </div>
          <div className={styles['topText']} style={{ maxWidth: '780px' }}>
            Unlock your business’s potential with our expert business support services
            From management reports to corporate finance and budgeting,
            we provide actionable insights to help you make informed decisions and
            drive growth. Our business support services offers the following benefits:

          </div>
          <div>
            <ul className={styles['topText265']}>
              <li>In-depth management reports for clear financial insights.

              </li>
              <li>Corporate finance advice to guide business expansion</li>
              <li>Budgeting and projections for better financial planning.
              </li>
              <li>Expert support tailored to your business’s needs</li>

            </ul>

          </div>
          <div>

            <p className={styles['topText3']}>With our services, you can confidently navigate growth and achieve your financial goals.</p>
          </div>

          <div >
            <Image className={styles['scroll']} src={scroll} />
          </div>
        </div>

        <div className={styles['ref']} >

          <Grid container className=' mt-100' id='3'>
            <Grid item xs={12} sm={12} md={6} xl={6} className='div-center-sm'>
              <ServiceCardLeft props={3} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} style={{ paddingInline: '20px' }}>
              <ServicesText props={['Advisory ',
                'Management Reports',
                'As your business starts to grow it is important that you have up to date management information available to support your business plans. At Borgowe work directly with client to provide management reports and online management meetings to review the financial performance and cash flows of the business to ensure that clients have access to real time and accurate financial information and management insights to help gorw their business.',
                'Corporate Finance',
                'If you are an established business looking to expand or a start-up looking to grow we understand the difficulties that business face today in accessing credit and managing banking relationships. At Borgowe can support you with securing new credit facilities, by developing your business plan and a funding model to support negotiations with financial institutions. Our experience, gained from working in lending and asset management positions for various financial institutions, allows us to fully understand the policies and procedures which govern the credit process.']} />
            </Grid>
          </Grid>

          <Grid container className='div-center mt-100'>
            <Grid item xs={12} sm={12} md={6} xl={6} id={styles['swap']} className='div-start div-center-sm' >
              <ServicesText props={['Advisory ',
                <>Budgets and <br /> Projections</>,
                'Preparing Budgets and Projections is an important planning and forecasting process to help you manage your business and should be reviewed regularly in conjunction with your management reports. At Borgowe can assist you in preparing your budgets and projections for the year, review your key assumptions and help identify capital and resource needs.',
                <>Pre Year End Review</>,
                'We offer a Pre Year End Review for our clients. This gives the company and its directors the opportunity to review the financial performance of the company for the year to date, forecast for the remainder of the year, plan preliminary tax payments and consider bonuses and pension contributions in advance of the year end. Having this meeting before the year end helps the company maximises any tax reliefs, manage cash flow and achieve your financial goals. ']} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} className='div-center div-center-sm'>
              <ServiceCardRight props={3} />
            </Grid>
          </Grid>



        </div>
      </div >


      <div className={styles['midSection2']}>


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
