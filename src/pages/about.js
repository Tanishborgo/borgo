import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UpperFooter from './components/UpperFooter'
import { Box, Grid, Typography } from '@mui/material'
import About1 from '../../public/assests/aboutspike1.png'
import Spike1 from '../../public/assests/aboutspike2.png'
import About2 from '../../public/assests/aboutgroup1.png'
import About3 from '../../public/assests/aboutgroup0.png'
import About4 from '../../public/assests/aboutgroup2.png'
import PropCard from '../../public/assests/propcard.png';

import KalcAcc2 from '../../public/assests/team2/OllieDixon.jpg';
import KalcAcc3 from '../../public/assests/team2/LucianeLino.jpg';
import KalcAcc8 from '../../public/assests/team2/Luciane-Lino.jpg';

import KalcAcc1 from '../../public/assests/team2/AllanEgan.jpg';
import KalcAcc4 from '../../public/assests/team2/JulioDomingos.jpg';
import KalcAcc5 from '../../public/assests/team2/MingliSong.jpg';
import KalcAcc6 from '../../public/assests/team2/MichaelMcKenna.jpg';
import KalcAcc7 from '../../public/assests/team2/JelenaPaguba.jpg';


import Arrow from '../../public/assests/arrow.png';
import Scroll from '../../public/assests/scroll.png';
import mobileFill from '../../public/assests/mobileFill.png'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
export default function About() {
  return (
    <Grid className='position-relative'>
      <Head>
        <title>About Us | Expert Accounting Support for Your Business </title>
        <meta name="description" content="Borgo provides expert accounting services, so you can focus on growing your business. Meet our team and see how we support your financial success." />
      </Head>
      <Navbar />

      <Box component="main" className='width-100 position-relative about-height height-auto-sm div-center'>
        <Box className='margin-auto width-100 position-relative'>
          <Box className='display-none-sm position-absolute left-0 about-fig-1'>
            <Image src={About1} width='100%' height="100%" />
          </Box>
          <Box className='display-none-sm position-absolute right-0 about-fig-2'>
            <Image src={About2} width='100%' height="100%" />
          </Box>
          <Box className='margin-auto flex-direction-column width-60 width-100-sm div-center-sm position-relative' sx={{ zIndex: '5' }}>

            <Typography className='display-none-sm font-80 weight-700 color-light-grey font-mulish line-height-88 width-80 '>About Us</Typography>
            <Typography className='display-none display-block-sm font-48-sm weight-700 font-mulish color-light-grey line-height-60 width-60 text-center-sm mt-20-sm'>Who are Borgo?</Typography>
            <Typography className='font-24 font-22-sm weight-600 color-light-grey line-height-36 width-100 width-80-sm bottom-0 text-center-sm mt-50 mt-20-sm font-mulish'>You started your business with a passion to succeed. We did the same.</Typography>

            <div className={` ${styles.scroll} display-none display-block-sm`}>
              <Box className="div-center mt-50-sm">
                <Image src={Scroll} width='100%' height="100%" />
              </Box>
              <Typography className='mt-20 color-grey font-mulish weight-600'>SCROLL TO EXPLORE</Typography>
            </div>
          </Box>
        </Box>
      </Box>

      <Grid container className='flex-direction-column-reverse-sm mt-40-sm mt-80'>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box className={`${styles['card-main-about']} mt-50 div-center animation-cards`} style={{ zIndex: 6 }}>
            <Box className={styles['card-top-box-about']} ></Box>
            <Image src={PropCard} className={styles['card-image-about']} style={{ zIndex: 6 }} />
            <Box className={styles['card-inner']}>
              <Typography className='weight-300 line-height-48 width-100-sm width-80 color-light-grey font-24 font-mulish' sx={{ marginTop: '10px' }}>
                Let's create a plan
              </Typography>
              <Typography className='weight-700 line-height-48 width-100-sm width-100 letter-spacing color-light-grey font-48 font-mulish'>
                Schedule a Call
              </Typography>
              <Typography className='weight-400 color-light-grey font-18 font-mulish' sx={{ marginTop: '20px' }}>
                We will arrange a call or face to face meeting with one of our qualified accountants.
              </Typography>
              <a href='https://calendly.com/d/z84-783-bw8/discovery-call' target='_blank' style={{ textDecoration: 'none', backgroundColor: '#fff', color: '#DDDDDD', cursor: 'pointer' }}>
                <Box className={'div-between'} sx={{ marginTop: '100px' }}>
                  <Typography style={{ zIndex: 6 }} className='weight-700 color-light-grey text-center font-18 font-mulish'>
                    Click here
                  </Typography>
                  <Image src={Arrow} width='100%' height="100%" style={{ zIndex: 6 }} />
                </Box>
              </a>
            </Box>
          </Box>
        </Grid >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box className='margin-auto flex-direction-column width-80 mt-50 mt-20-sm '>
            <Typography className='font-60 font-40-sm font-mulish text-center-sm weight-700 line-height-48-sm color-light-grey line-height-72'>
              At Borgo what matters most to us, is you, our client.
            </Typography>
            <Typography className='display-none-sm font-mulish font-24 weight-600 color-light-grey line-height-36 mt-20'>
              Allow us to manage your accounting and finance function so you can focus your energies on what matters most to you.
              <br></br><br></br>
              All our work is carried out by dedicated accountants and support staff who represent the business to the highest standards of professionalism.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box className='position-relative' style={{ zIndex: 1 }}>
        <Box className='display-none-sm position-absolute left-0 about-fig-3'>
          <Image src={Spike1} width='100%' height="100%" />
        </Box>
      </Box>

      <Box className='width-80 width-80-sm margin-auto position-relative mt-100-sm' >
        <Typography className='font-58 font-24-sm weight-300 weight-600-sm text-center font-mulish color-light-grey mt-20-sm line-height-72 line-height-29-sm' sx={{ marginTop: '200px' }}>
          “Their seamless onboarding process and expertise in Xero made the transition smooth and effortless”
        </Typography>
      </Box>

      <Box className="div-center flex-direction-column position-relative mt-80 mt-50-sm">
        <Box className='display-none-sm position-absolute left-0 about-fig-3'>
          <Image src={About3} width='100%' height="100%" />
        </Box>
        <Box className='display-none-sm position-absolute right-0' sx={{ top: "-280px" }}>
          <Image src={About4} width='100%' height="100%" />
        </Box>
        <Box className='display-block-sm display-none about-spike position-absolute' justifyContent={'flex-end'}>
          <Image src={mobileFill} style={{ width: '100%', height: '100%' }} />
        </Box>
        <div style={{ height: '64px', width: '64px', backgroundColor: '#5E6B7E', borderRadius: '50%' }}></div>
        <Typography className='font-16 weight-400 text-center color-light-grey mt-20 line-height-19'>Padraig Sweeney - Sweeney's D3</Typography>
        <Typography className='font-16 weight-400 text-center mt-10 color-grey line-height-19 display-none'>Borgo Client</Typography>
        <Typography className='font-32 weight-300 text-center mt-100-sm mt-150 color-light-grey line-height-38' sx={{ zIndex: '5' }}>Meet the Borgo team</Typography>
        <Typography className='font-60 font-40-sm width-80-sm weight-700 text-center mt-20 color-light-grey line-height-72 line-height-48-sm'>Our team is your team</Typography>
      </Box>

      <Box className="width-80 width-100-sm" sx={{ margin: 'auto' }}>
        <Grid container className='mt-20-sm mt-100 div-center'>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc1} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Allan Egan</Typography>
                  <Typography className='color-grey weight-400 font-16'>Co-Founder and Managing Director
                  </Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Allan, Managing Director at Borgo, brings over 18 years of experience in accounting and financial services, helping business owners grow and succeed. Passionate about integrating technology into accounting, Allan is dedicated to finding innovative solutions that enhance client experiences. “At Borgo, our goal is to provide an exceptional client experience, and that starts with an exceptional team. I’m proud of the team we’re building and their commitment to delivering outstanding results for our clients.”

              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc2} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Ollie Dixon</Typography>
                  <Typography className='color-grey weight-400 font-16'>Senior Client Manager

                  </Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Ollie, our Senior Client Manager, brings a wealth of experience and knowledge to the team. As a qualified accountant with the Association of Chartered Certified Accountants (ACCA) and a member of Accounting Technicians Ireland (ATI), Ollie is passionate about business and works closely with clients to provide them with the best advice and guidance. His enthusiasm and expertise make him a trusted partner for our clients.

              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc3} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Sarah Learmouth
                  </Typography>
                  <Typography className='color-grey weight-400 font-16'>Client Manager


                  </Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Sarah, a Chartered Tax Adviser (CTA) and qualified accountant with the Association of Chartered Certified Accountants (ACCA), plays a key role as a Client Manager at Borgo. Her extensive expertise in both accounting and tax ensures that clients receive not only professional guidance but also a personal service.

              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc4} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Julio Domingos

                  </Typography>
                  <Typography className='color-grey weight-400 font-16'>Production Manager



                  </Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Julio oversees the quality and delivery of accounting services for his team at Borgo. Before joining Borgo, he worked with RSM Ireland, where he was recognized as the Part-Qualified Accountant of the Year at the Irish Accountancy Awards. Julio brings enthusiasm and energy to his role, working with his team to deliver for every client.

              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc5} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Mingli Song


                  </Typography>
                  <Typography className='color-grey weight-400 font-16'>Production Manager




                  </Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Mingli oversees the quality and timely delivery of all accounting services for her team at Borgo. With valuable experience from her previous roles at Profit Pal and JPA Brenson Lawlor, Mingli ensures that each client receives exceptional service. A true team player, she works closely with her team to maintain high standards and deliver results that meet the different needs of each client.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc6} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Michael McKenna

                  </Typography>
                  <Typography className='color-grey weight-400 font-16'>Trainee Accountant
                  </Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                As a Trainee Accountant at Borgo, Michael assists with a variety of services, including accounting, tax, bookkeeping, and payroll. Eager to develop skills and gain experience, Michael works closely with the team to ensure that clients receive accurate and timely support in managing their financial needs.

              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc7} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Jelena Paguba


                  </Typography>
                  <Typography className='color-grey weight-400 font-16'>Part Qualified Accountant

                  </Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                As a Part-Qualified Accountant at Borgo, Jelena assists with accounting, tax, bookkeeping, and payroll. She supports the senior team with compliance and client support to ensure our clients receive an exceptional service.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className='mt-50 div-center position-relative'>
            <div className='poly-size'>
              <div className={styles['poly-about2']} ></div>
              <Box className='poly'>
                <Box className='poly2'>
                  <Image src={KalcAcc8} width='100%' height="100%" className='responsive-image-about' />
                </Box>
                <Box className='position-absolute' sx={{ bottom: '50px', paddingInline: '20px' }}>
                  <Typography className='color-light-grey font-24 weight-600 font-mulish line-height-28'>Luciane Lino



                  </Typography>
                  <Typography className='color-grey weight-400 font-16'>Office Assistant

                  </Typography>
                </Box>
              </Box>
              <Typography className='content color-light-grey weight-400 font-14'>
                Luciane supports the Borgo team with a variety of admin and company secretarial duties, ensuring smooth day-to-day operations. In addition to her office responsibilities, she is currently studying towards her financial management accounting exams, to developing her skills and contribute even more to the team and our clients.

              </Typography>
            </div>
          </Grid>


        </Grid>


      </Box>

      <Box className='mt-100-sm mt-100'>
        <UpperFooter />
      </Box>
      <Footer />
    </Grid>
  )
}
