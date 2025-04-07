import React from 'react'
import Navbar from './components/Navbar'
import UpperFooter from './components/UpperFooter'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
import Card from '../../public/assests/propcard.png'
// import backCard3 from '../../public/assests/Rectangle 23.svg'
// import backCard2 from '../../public/assests/Rectangle 23.png'
import backCard1 from '../../public/assests/Rectangle59.svg'
// import TopImage from '../../public/assests/news-Top-img.jpg'
import TopImage from '../../public/assests/err_feature.png'
import Spike from '../../public/assests/news-spike.svg'
import Image from 'next/image'
import styles from '@/styles/News.module.css'
import { Box, Grid, Typography } from '@mui/material'
import LeograntImg from '../../public/assests/blog/leogrants-card.jpg';
import BikeImg from '../../public/assests/blog/bike-card.jpg'
import XeroImg from '../../public/assests/blog/xero-card1.jpg'
import VoucherImg from '../../public/assests/blog/voucher-card.jpg'
import MileageImg from '../../public/assests/blog/mileage-card.jpg'
import IncometaxImg from '../../public/assests/blog/incometax1-card.jpg'
import RetirementreliefImg from '../../public/assests/blog/retirementrelief-card.jpg'
import QSArahImg from '../../public/assests/blog/questions-sarah-card.jpg'
import EiisImg from '../../public/assests/blog/eiis-card.png'
import DextImg from '../../public/assests/blog/dext-card.jpg';
import DextImg_sm from '../../public/assests/blog/dext-card-sm.jpg';
import ProfitabilityImg from '../../public/assests/blog/profitability-card.jpg';
import ProfitabilityImg_sm from '../../public/assests/blog/profitability-card-sm.jpg';
import outsourcingImg from '../../public/assests/blog/outsourcing-card.jpg';
import outsourcingImg_sm from '../../public/assests/blog/outsourcing-card-sm.jpg';
import enterpriseIrelandImg from '../../public/assests/blog/enterpriseIreland-card.jpg';

import enterpriseIrelandImg_sm from '../../public/assests/blog/enterpriseIreland-card-sm.jpg';
import grantsImg from '../../public/assests/blog/grants-card.png';

import grantsImg_sm from '../../public/assests/blog/grants-card-sm.png';
import LeograntImg_sm from '../../public/assests/blog/leogrants-card-sm.jpg';
import BikeImg_sm from '../../public/assests/blog/bike-card-sm.jpg'
import XeroImg_sm from '../../public/assests/blog/xero-card-sm.jpg'
import VoucherImg_sm from '../../public/assests/blog/voucher-card-sm.jpg'
import MileageImg_sm from '../../public/assests/blog/mileage-card-sm.jpg'
import IncometaxImg_sm from '../../public/assests/blog/incometax1-card-sm.jpg'
import RetirementreliefImg_sm from '../../public/assests/blog/retirementrelief-card-sm.jpg'
import QSArahImg_sm from '../../public/assests/blog/questions-sarah-card-sm.jpg'
import EiisImg_sm from '../../public/assests/blog/eiis-card-sm.png'
import Head from 'next/head'
import Background_sm from '../../public/assests/newsBackground.svg'
import Link from 'next/link'
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
      <Head>
        <title>Borgo Blog: Expert Accounting Insights and Business Advice</title>
        <meta name="description" content="Explore Borgo's blog for expert accounting insights, business advice, and updates on financial regulations to help your business thrive." />
      </Head>
      <div className={styles['spike']}>
        <Image src={Spike} />
      </div>

      <div className={styles['background-sm']}>
        <Image src={Background_sm} />
      </div>

      <Box className={styles['top-center']}>

        <Box className={styles['top-center-left']}>

          <Link href="/err_blog" >
            <Image src={TopImage} className={styles['top-center-image']} />
          </Link>
        </Box>
        <Box className={styles['top-image']}>
          <Link href="/err_blog" >
            <Image src={TopImage} className={styles['top-image-sm']} />
          </Link>
        </Box>
        <Box className={styles['top-center-text']}>
          <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box>
          <Box className={styles['top-center-text-233']}>Enhanced Reporting Requirements</Box>
          <Box className={styles['top-center-text-2-1']}>Enhanced Reporting Requirements</Box>


          <Box className={styles['top-center-text-3']}>
            For medium to large-sized business owners grappling with stress and overwhelming workloads, staying ahead of regulatory changes is crucial for smooth operations.
          </Box>
          <Box className={styles['top-center-text-3-1']}>
            For medium to large-sized business owners grappling with stress and overwhelming workloads, staying ahead of regulatory changes is crucial for smooth operations.
          </Box>
          <Link href="/err_blog" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
            <Box className={styles['top-center-text-4']}>
              <div className='box' style={{ marginTop: '30px' }}>
                <Typography className='read-more color-light-grey' style={{ width: '118px', height: '36px', paddingInline: '14px', paddingBlock: '12px' }}>READ MORE</Typography>
              </div>
            </Box>
          </Link>
        </Box>
      </Box>

      <Box className={styles['mid-box']}>
        <Grid container className={styles['card-box']}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-left']} div-end div-center-sm reveal `}>
              <NewsCard Img={LeograntImg} Img_sm={LeograntImg_sm} Ind={'One'} Side={'left'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <Box className={`${styles['mid-box-right']} div-start div-center-sm reveal `}>
              <NewsCard Img={XeroImg} Img_sm={XeroImg_sm} Ind={'Two'} Side={'right'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-left']} div-end div-center-sm reveal `}>
              <NewsCard Img={RetirementreliefImg} Img_sm={RetirementreliefImg_sm} Ind={'Three'} Side={'left'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-right']} div-start div-center-sm reveal `}>
              <NewsCard Img={MileageImg} Img_sm={MileageImg_sm} Ind={'Four'} Side={'right'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-left']} div-end div-center-sm reveal `}>
              <NewsCard Img={outsourcingImg} Img_sm={outsourcingImg_sm} Ind={'Fifteen'} Side={'left'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-right']} div-start div-center-sm reveal `}>
              <NewsCard Img={EiisImg} Img_sm={EiisImg_sm} Ind={'Six'} Side={'right'} />
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-left']} div-end div-center-sm reveal `}>
              <NewsCard Img={IncometaxImg} Img_sm={IncometaxImg_sm} Ind={'Seven'} Side={'left'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-right']} div-start div-center-sm reveal `}>
              <NewsCard Img={VoucherImg} Img_sm={VoucherImg_sm} Ind={'Eight'} Side={'right'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-left']} div-end div-center-sm reveal `}>
              <NewsCard Img={IncometaxImg} Img_sm={IncometaxImg_sm} Ind={'Nine'} Side={'left'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-right']} div-start div-center-sm reveal `}>
              <NewsCard Img={VoucherImg} Img_sm={VoucherImg_sm} Ind={'Ten'} Side={'right'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-left']} div-end div-center-sm reveal `}>
              <NewsCard Img={DextImg} Img_sm={DextImg_sm} Ind={'Eleven'} Side={'left'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-right']} div-start div-center-sm reveal `}>
              <NewsCard Img={BikeImg} Img_sm={BikeImg_sm} Ind={'Twelve'} Side={'right'} />
            </Box>
          </Grid> */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-left']} div-end div-center-sm reveal `}>
              <NewsCard Img={ProfitabilityImg} Img_sm={ProfitabilityImg_sm} Ind={'Thirteen'} Side={'left'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-right']} div-start div-center-sm reveal `}>
              <NewsCard Img={enterpriseIrelandImg} Img_sm={enterpriseIrelandImg_sm} Ind={'Fourteen'} Side={'right'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-left']} div-end div-center-sm reveal `}>
              <NewsCard Img={outsourcingImg} Img_sm={outsourcingImg_sm} Ind={'Fifteen'} Side={'left'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box className={`${styles['mid-box-right']} div-start div-center-sm reveal `}>
              <NewsCard Img={grantsImg} Img_sm={grantsImg_sm} Ind={'Sixteen'} Side={'right'} />
            </Box>
          </Grid>
        </Grid>
      </Box >

      <div style={{ marginBottom: '140px' }}>
      </div>


      <UpperFooter />

      <Box sx={{ marginTop: '90px' }}>
        <Footer />
      </Box>
    </>
  )
}
