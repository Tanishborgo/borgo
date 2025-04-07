import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Box, Grid, Typography } from '@mui/material'
import Benefit1 from '../../public/assests/benefitspike.png'
import Process from '../../public/assests/Process.png'
import Scheduled from '../../public/assests/ScheduleCopy.png'
import ScheduledMobile from '../../public/assests/ScheduleCopyMobile.png'
import Discovery from '../../public/assests/ProcessCard1.png'
import Technology from '../../public/assests/ProcessCard2.png'
import Pricing from '../../public/assests/ProcessCard3.png'
import Kickoff from '../../public/assests/ProcessCard4.png'
import Go from '../../public/assests/ProcessCard5.png'
import Scroll from '../../public/assests/scroll.png'
import Arrow from '../../public/assests/arrow.png'
import Computer from '../../public/assests/Computer.png'
import CreditCard from '../../public/assests/Creditcard.png'
import ProcessArrow from '../../public/assests/Processarrow.png'
import ProcessBlock from '../../public/assests/ProcessBlock.png'
import ProcessFill from '../../public/assests/ProcessFill.png'
import Mobilespike from '../../public/assests/mobilespike.png';
import BorgoWorkmark from '../../public/assests/BorgoWorkmark.png'
import Frame from '../../public/assests/Frame.png'
import Batch from '../../public/assests/Batch.png'
import mobileFill from '../../public/assests/mobileFill.png'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
const CardGiftcard = [
  {
    id: 1,
    image: Discovery,
    text: 'Discovery',
    display: true,
    bgimage: `url('/assests/process10.png')`,
    heading: 'The Discovery',
    description: 'We will arrange a call or face to face meeting with one of our qualified accountants.\
    We will have a chat about where you are as a business and create a plan around what you need.\
    It\'s also a chance for you to ask the questions your business needs answered.'
  },
  // {
  //   id: 2,
  //   image: Technology,
  //   text: 'Technology',
  //   display: true,
  //   bgimage: `url('/assests/process11.png')`,
  //   heading: 'Technology',
  //   description: 'Next you\'ll have a chat with our tech team - accountants with tech experience to go over the system side of the business.\
  //   We may suggest a number of apps that may help automate or streamline some of the mundane accounting functions.\
  //   Already set up? Then let us help by learning how your systems work.'
  // },
  // {
  //   id: 3,
  //   image: Pricing,
  //   text: 'Pricing',
  //   display: true,
  //   bgimage: `url('/assests/process12.png')`,
  //   heading: 'Pricing',
  //   description: 'At Borgo we are up front and transparent with our pricing.\
  //   We will walk you through our services and pricing to create a plan that is the best fit for you and your business and addresses all of the important issues.'
  // },
  // {
  //   id: 4,
  //   image: Kickoff,
  //   text: 'Kickoff',
  //   display: true,
  //   bgimage: `url('/assests/process13.png')`,
  //   heading: 'Kick off',
  //   description: 'When you find the plan that works for you, we will arrange a kick off meeting where we will set up the systems,\
  //   wrap up the admin and introduce you to your team who will help you get started.'
  // },
  // {
  //   id: 5,
  //   image: Go,
  //   text: 'Go',
  //   display: true,
  //   bgimage: `url('/assests/process10.png')`,
  //   heading: 'Go!',
  //   description: 'We will work together to get you up and running as quickly as possible. We will provide ongoing training, support and advice that help you to get the maximum benefit from our technology and services.\
  //   You will have a dedicated client manager to ensure you are getting what you need, when you need it! It\'s that easy.'
  // },
  // {
  //   id: 6,
  //   image: Go,
  //   text: 'Schedule',
  //   display: false,
  //   bgimage: `url('/assests/process14.png')`,
  //   heading: 'Schedule a call',
  //   description: 'If you are starting a business we can help you every step of the way.\n\n\
  //   Let us work with you to get your business started on the right foot.'
  // }
]


export default function process() {

  const [index, setIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Our Process | How Borgo Supports Your Business Growth</title>
        <meta name="description" content="See how our step-by-step process helps streamline your accounting with tailored plans, tech solutions, and dedicated support for your business." />
      </Head>
      <Navbar />

      <Box component="main" className='position-relative height-auto-sm process-height div-center'>
        <Box className='margin-auto position-relative width-100'>
          <Box className='display-none-sm position-absolute left-0 benefit-fig-1'>
            <Image src={Benefit1} width='100%' height="100%" className='rotation' />
          </Box>
          <Box className='display-none-sm position-absolute right-0 process-fig-2'>
            <Image src={Process} width='100%' height="100%" />
          </Box>
          <Box className='margin-auto flex-direction-column width-65 width-100-sm div-center-sm position-relative' sx={{ zIndex: '5' }}>
            <Typography className='font-mulish font-18 weight-400 color-orange mt-20-sm'>GETTING STARTED...</Typography>
            <Typography className='font-mulish font-80 font-48-sm weight-700 color-light-grey line-height-88 line-height-60-sm width-70 width-80-sm text-center-sm '>
              Our Process starts with you</Typography>
            <Typography className='font-mulish font-24 font-22-sm weight-600 color-light-grey line-height-36 width-90 width-90-sm bottom-0 text-center-sm mt-20 mt-20-sm'>
              Your business is unique, that's why we design a service and price plan just for you. Learn how our process works and find the perfect plan for you and your business.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <div className={` ${styles.scroll} div-center display-flex-sm display-none`}>
          <Box className="div-center mt-50-sm">
            <Image src={Scroll} width='100%' height="100%" />
          </Box>
          <Typography className='mt-20 color-grey font-mulish weight-600'>SCROLL TO EXPLORE</Typography>
        </div>
      </Box>

      <Grid container className='mt-100 mt-50-sm flex-direction-column-reverse-sm' >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='position-relative div-center flex-direction-column mt-50-sm'>
          <Box className='display-block-sm display-none step-spike position-absolute' justifyContent={'flex-end'}>
            <Image src={mobileFill} style={{ width: '100%', height: '100%' }} />
          </Box>
          <Box className='margin-auto flex-direction-column width-80 width-90-sm position-relative' sx={{ zIndex: '5' }}>
            <Typography className='font-40-sm font-36 weight-400 weight-300-sm color-orange line-height-48 mt-20-sm font-mulish'>Step {index + 1}</Typography>
            <Typography className='font-60 font-40-sm weight-700 color-light-grey line-height-72 line-height-48-sm width-80 width-90-sm font-mulish'>
              {CardGiftcard?.[index]?.heading}</Typography>
            <Typography className='font-24 weight-600 color-light-grey line-height-36 mt-20 font-mulish' sx={{
              minHeight: '250px'
            }}>
              {CardGiftcard?.[index]?.description}
            </Typography>
            {/* <Box sx={{ borderLeft: '1px solid #C54D1F' }} className='mt-100'>
              <Box className='mt-50 ml-50 ml-20-sm'>
                <Typography className='font-32 weight-400 line-height-42 font-mulish color-light-grey'>
                  "It's not just that it is fast, the scalability and ease of use is simply unparalleled, truly mindblowing"
                </Typography>
                <Box className='div-start mt-20 mt-50-sm'>
                  <div style={{ height: '64px', width: '64px', backgroundColor: '#5E6B7E', borderRadius: '50%' }}></div>
                  <div style={{ marginInline: '20px' }}>
                    <Typography className='font-16 weight-400 weight-600 text-center color-light-grey line-height-19' style={{ marginBlock: '5px' }}>Markus Freeman</Typography>
                    <Typography className='font-16 weight-400 text-center color-grey line-height-19'>Borgo Client</Typography>
                  </div>
                </Box>
              </Box>
            </Box> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='div-center position-relative'>
          <Carousel
            autoPlay={true}
            interval={10000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            // width='500px'
            onChange={(index, item) => {
              setIndex(index)
            }}
            swipeable={true}
            className='crousel-width'
          >
            {
              CardGiftcard.map((e) => {
                return (
                  <Box key={e.id} className='process-crousel-bottom position-relative' sx={{ backgroundImage: e.bgimage }}>
                    {/* <div className={styles['poly-about']} ></div> */}
                    <Box className=''>
                      <Box className={`${e.display === true ? 'display-flex' : 'display-none'} div-flex-start flex-direction-column mt-50`}>
                        <Typography className="font-36 font-36-sm weight-300 weight-400 line-height-36 line-height-48 color-light-grey font-mulish">The Process</Typography>
                        <Typography className="font-50 font-48-sm weight-700 line-height-72 line-height-48 color-light-grey font-mulish">{e.text}</Typography>
                      </Box>
                      <Box className={`${e.display === false ? 'div-center mt-250 mt-200-sm' : 'div-flex-start mt-50'} process-card-inner-gola`}>
                        <Image src={e.image} className={`${e.display === true ? 'display-flex' : 'display-none'} process-card-inner-image`} />
                        <Box className={`${e.display === false ? 'display-flex' : 'display-none'} display-flex-start flex-direction-column`} >
                          <a href='https://calendly.com/d/z84-783-bw8/discovery-call' style={{ textDecoration: 'none', color: '#DDDDDD', cursor: 'pointer' }}>
                            <Typography className='weight-400 line-height-72 line-height-48 font-mulish font-36 font-28-sm font- color-light-grey text-left' >Let's create a plan</Typography>
                            <Typography className='weight-700 line-height-72 line-height-48 font-mulish font-50 font-36-sm color-light-grey text-left width-100' sx={{ marginTop: '-30px', letterSpacing: '-1px' }} >Schedule a Call</Typography>
                          </a>
                        </Box>
                      </Box>
                      <Box className='div-between width-100 mt-50 mt-20-sm mb-50 mb-10-sm position-absolute bottom-0' sx={{ left: '0px', padding: '30px' }}>
                        <Box>
                          <Image src={BorgoWorkmark} width='100%' height="100%" />
                        </Box>
                        <Box>
                          <Image className='display-none-sm' src={Frame} width='100%' height="100%" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )
              })
            }
          </Carousel>
        </Grid>
      </Grid>

      <Box>
        <div className={` ${styles.scroll} div-center display-none-sm`}>
          <Box className="div-center mt-50-sm">
            <Image src={Scroll} width='100%' height="100%" />
          </Box>
          <Typography className='mt-20 color-grey font-mulish weight-600'>SCROLL TO EXPLORE</Typography>
        </div>
      </Box>

      <Box className='display-none display-flex-sm mobile-spike' justifyContent={'flex-end'}>
        <Image src={Mobilespike} />
      </Box>

      <Grid container className='mt--50 position-relative'>
        <Box className='display-none-sm desktop-spike position-absolute' justifyContent={'flex-end'}>
          <Image src={ProcessBlock} style={{ width: '540px', height: '600px' }} />
        </Box>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          className='position-relative div-center-sm flex-direction-column' display={'flex'} alignItems={'flex-end'}>
          <Box className='flex-direction-column process-card-bottom-left'>
            <Box className='flex-direction-column'>
              <Box>
                <Typography className='font-mulish weight-400 font-28 line-height-49 line-height-53-sm color-orange'>Step 2</Typography>
                <Typography className='font-mulish weight-700 font-32-sm font-42 line-height-72 line-height-53-sm color-light-grey'>Technology</Typography>
                <Typography className='font-mulish weight-600 weight-400-sm font-18 line-height-27 color-light-grey process-content-height' >
                  Next you'll have a chat with our tech team - accountants with tech experience to go over the system side of the business.
                  We may suggest a number of apps that may help automate or streamline some of the mundane accounting functions.
                  Already set up? Then let us help by learning how your systems work.
                </Typography>
              </Box>
              <Box className={'div-center-sm div-between width-100'}>
                <Box>
                  <Image src={Computer} style={{ width: '250px', height: '250px' }} />
                </Box>
                <Image className='display-none-sm' src={Arrow} width='100%' height="100%" style={{ zIndex: 6, marginTop: '150px' }} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          className='div-center-sm flex-direction-column ' display={'flex'} alignItems={'flex-start'}>
          <Box className='flex-direction-column mt-200 mt-20-sm process-card-bottom-right'>
            <Box className='flex-direction-column'>
              <Box>
                <Typography className='font-mulish weight-400 font-28 line-height-49 color-orange'>Step 3</Typography>
                <Typography className='font-mulish weight-700 font-32-sm font-42 line-height-72 line-height-53-sm color-light-grey'>Pricing</Typography>
                <Typography className='font-mulish weight-600 weight-400-sm font-18 line-height-27 color-light-grey process-content-height' >At Borgo we are up front and transparent with our pricing.
                  We will walk you through our services and pricing to create a plan that is the best fit for you and your business and addresses all of the important issues.
                </Typography>
              </Box>
              <Box className={'div-center-sm div-between width-100'}>
                <Box>
                  <Image src={CreditCard} style={{ width: '250px', height: '250px' }} />
                </Box>
                <Image className='display-none-sm' src={Arrow} width='100%' height="100%" style={{ zIndex: 6, marginTop: '150px' }} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          className='position-relative div-center-sm flex-direction-column' display={'flex'} alignItems={'flex-end'}>
          <Box className='flex-direction-column mt-minus-300 mt-20-sm process-card-bottom-left'>
            <Box className='flex-direction-column'>
              <Box>
                <Typography className='font-mulish weight-400 font-28 line-height-49 color-orange'>Step 4</Typography>
                <Typography className='font-mulish weight-700 font-32-sm font-42 line-height-72 line-height-53-sm color-light-grey'>Kick off</Typography>
                <Typography className='font-mulish weight-600 weight-400-sm font-18 line-height-27 color-light-grey process-content-height'>
                  When you find the plan that works for you, we will arrange a kick off meeting where we will set up the systems,
                  wrap up the admin and introduce you to your team who will help you get started.
                </Typography>
              </Box>
              <Box className={'div-center-sm div-between width-100'} >
                <Box>
                  <Image src={ProcessArrow} style={{ width: '250px', height: '250px' }} />
                </Box>
                <Image className='display-none-sm' src={Arrow} width='100%' height="100%" style={{ zIndex: 6, marginTop: '150px' }} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          className='div-center-sm flex-direction-column' display={'flex'} alignItems={'flex-start'}>
          <Box className='flex-direction-column mb-50 mt-50 mt-20-sm process-card-bottom-right'>
            <Box className='flex-direction-column'>
              <Box>
                <Typography className='font-mulish weight-400 font-28 line-height-49 color-orange'>Step 5</Typography>
                <Typography className='font-mulish weight-700 font-32-sm font-42 line-height-72 line-height-53-sm color-light-grey'>Go!</Typography>
                <Typography className='font-mulish weight-600 weight-400-sm font-18 line-height-27 color-light-grey process-content-height'>
                  We will work together to get you up and running as quickly as possible. We will provide ongoing training, support and advice that help you to get the maximum benefit from our technology and services.
                  You will have a dedicated client manager to ensure you are getting what you need, when you need it! It's that easy.
                </Typography>
              </Box>
              <Box className={'div-between div-center-sm width-100'}>
                <Box>
                  <Image src={Batch} style={{ width: '250px', height: '250px' }} />
                </Box>
                <Image className='display-none-sm' src={Arrow} width='100%' height="100%" style={{ zIndex: 6, marginTop: '150px' }} />
              </Box>
            </Box>
          </Box>
        </Grid>

      </Grid>

      <Box className="div-center position-relative mt-100 mt-minus-60-sm">
        <Box className='display-none-sm desktop-fill position-absolute' justifyContent={'flex-end'}>
          <Image src={ProcessFill} style={{ width: '540px', height: '556px' }} />
        </Box>
        <Box className={styles['schedule']} sx={{ zIndex: 1 }}>
          <Typography className='weight-700 font-60 font-40-sm width-100 width-50-sm font-mulish line-height-72 line-height-48-sm'>
            Schedule a call
          </Typography>
          <Typography className='weight-600 font-24 width-80 font-mulish line-height-36'>
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
        </Box>

        <Box className="display-none-sm position-absolute right-0" sx={{ zIndex: 2 }}>
          <Image src={Scheduled} className={styles['schedule-sphere']} />
        </Box>
        <Box className="display-none display-block-sm position-absolute right-0 fig-schedule" sx={{ zIndex: 2 }}>
          <Image src={ScheduledMobile} className={styles['schedule-sphere']} />
        </Box>
      </Box>


      <Box sx={{ marginBlock: '100px' }}>
        <Footer />
      </Box>
    </>
  )
}
