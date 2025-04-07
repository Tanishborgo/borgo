import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Box, Grid, Typography } from '@mui/material'
import Benefit1 from '../../public/assests/benefitspike.png'
import Benefit2 from '../../public/assests/BenefitGroup.png'
import BlogFeature2 from '../../public/assests/BlogFeature2.png';
import BlogFeature from '../../public/assests/blogfeature.png';
import BlogFeature1 from '../../public/assests/blogfeature-1.png';
import Scheduled from '../../public/assests/ScheduleCopy.png'
import ScheduledMobile from '../../public/assests/ScheduleCopyMobile.png'
import Pie1 from '../../public/assests/Pie1.png'
import Pie2 from '../../public/assests/Pie2.png'
import Pie3 from '../../public/assests/Pie3.png'
import Pie4 from '../../public/assests/Pie4.png'
import Image from 'next/image'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default function benefits() {

  console.log("mmmm", theme.breakpoints.values.mobile)
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Head>
        <title>The Benefits of Working with Borgo Accounting</title>
        <meta name="description" content="See how Borgo’s tech-driven accounting services save time, provide real-time insights, and offer expert financial guidance to grow your business." />
      </Head>
      <Box component="main" className='position-relative height-auto-sm benefit-height div-center'>
        <Box className='margin-auto position-relative'>
          <Box className='display-none-sm position-absolute left-0 benefit-fig-1'>
            <Image src={Benefit1} width='100%' height="100%" className='rotation' />
          </Box>
          <Box className='display-none-sm position-absolute right-0 benefit-fig-2'>
            <Image src={Benefit2} width='100%' height="100%" />
          </Box>
          <Box className='margin-auto flex-direction-column width-65 width-100-sm div-center-sm position-relative' sx={{ zIndex: '5' }}>
            {/* <Typography className='font-18 weight-400 color-orange mt-20-sm'>BENEFITS</Typography> */}
            <Typography className='font-80 font-48-sm weight-700 color-light-grey line-height-88 line-height-60-sm width-80 width-70-sm text-center-sm '>
              What are the benefits to working with us</Typography>
            <Typography className='font-24 font-22-sm weight-600 color-light-grey line-height-36 width-90 width-90-sm bottom-0 text-center-sm mt-20 mt-20-sm'>
              We provide accounting services and advice to help you build and grow your business. We see ourselves as your partner, adding real value to your business.</Typography>

            {/* <div className={` ${styles.scroll} display-none display-block-sm`}>
              <Box className="div-center mt-50-sm">
                <Image src={Scroll} width='100%' height="100%" />
              </Box>
              <Typography className='mt-20 color-grey font-mulish weight-600'>SCROLL TO EXPLORE</Typography>
            </div> */}
          </Box>
        </Box>
      </Box>

      <Box className='mt-200 mt-100-sm position-relative'>
        <Box className="position-relative margin-auto div-center width-80"
          sx={{
            backgroundImage: { mobile: `url(${'/assests/blogfeaturemobile.png'})`, desktop: `url(${'/assests/blogfeature.png'})` },
            flexDirection: 'column',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPosition: 'top center'
          }}>
          <Box sx={{ width: '100%', padding: '30px 10px 10px' }}>
            <Box className='' justifyContent={'flex-start'} alignSelf={'flex-start'}>
              <Typography className='font-16 weight-600 line-height-16 font-mulish color-light-grey' style={{ marginInline: '10px' }}>
                At Borgo what matters most to us, is you, our client.
              </Typography>
            </Box>
            <Image src={BlogFeature1} priority className={`${styles['blog-card-image']} display-none-sm`} />
            <Image src={BlogFeature2} priority className={`${styles['blog-card-image']} display-none display-block-sm`} />
          </Box>
          {/* <Image src={BlogFeature} priority className={`${styles['blog-card']} display-none-sm`} /> */}
        </Box>
      </Box>

      <Box className='div-center mt-100'>
        <Box className='flex-direction-column width-65 width-90-sm'>
          <Typography className='font-60 font-40-sm line-height-48-sm line-height-72 font-mulish weight-300 color-light-grey'>Benefits of working with Borgo</Typography>
          <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography>
          <Typography className='font-24 mt-20 line-height-36 font-mulish weight-600 color-light-grey'> Our company uses the latest accounting software and technology to provide faster, more efficient, and more accurate financial services. We make maximum use of technology to automate time-consuming accounting tasks, so that you can save time and focus on running your business.
            With such technology-driven processes in place, you can quickly scale up or down to meet the evolving needs, whether you are growing rapidly or facing financial challenges. We ensure that we deliver premium services with personalized support and attention to each of our clients so that they receive the best possible financial services.   </Typography>
        </Box>
      </Box>

      <Box className='mt-100'>
        <Box className="div-center">
          <Image src={Pie1} priority height={'100%'} width={'100%'} className={`${styles['blog-card-1']} display-none-sm`} style={{ borderRadius: '20px' }} />
          <Image src={Pie3} priority height={'100%'} width={'100%'} className={`${styles['blog-card-1']} display-none display-block-sm`} style={{ borderRadius: '20px' }} />
        </Box>
      </Box>

      <Box className='div-center mt-100'>
        <Box className='flex-direction-column width-65 width-90-sm'>
          <Typography className='font-60 font-40-sm line-height-48-sm line-height-72 font-mulish weight-300 color-light-grey'>Benefits of working with Borgo</Typography>
          <Typography className='font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey'>Our real-time financial reporting helps identify trends and opportunities.  </Typography>
          <Typography className='font-24 mt-20 line-height-36 font-mulish weight-600 color-light-grey'>We focus on real-time KPIs and positioning them as the best in the industry provides clients with a range of benefits that can help them gain greater insights into their business performance, make more informed financial decisions, and achieve greater success.
            We provide personalized financial advice with expert guidance and support from experienced professionals with a deep understanding of accounting and financial management. This enables your company to maximize the value you get from our services with improved financial outcomes.
          </Typography>
        </Box>
      </Box>

      <Box className='mt-100'>
        <Box className="div-center" >
          <Image src={Pie2} priority height={'100%'} width={'100%'} className={`${styles['blog-card-1']} display-none-sm`} style={{ borderRadius: '20px' }} />
          <Image src={Pie4} priority height={'100%'} width={'100%'} className={`${styles['blog-card-1']} display-none display-block-sm`} style={{ borderRadius: '20px' }} />
        </Box>
      </Box>

      <Box className="div-center position-relative mt-250 mt-100-sm">
        <Box className={styles['schedule']}>
          <Typography className='weight-700 font-60 font-40-sm width-100 width-50-sm font-mulish line-height-72 line-height-48-sm'>
            Schedule a call
          </Typography>
          <Typography className='weight-600 font-24 width-80 font-mulish line-height-36'>
            If you are starting a business we can help you every step of the way.<br></br>
            Let us work with you to get your business started on the right foot.
          </Typography>
          <div className="box-inside" style={{ marginTop: "30px" }}>
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
      </Box>

      <Box sx={{ marginBlock: '100px' }}>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
