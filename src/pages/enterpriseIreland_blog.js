import React from "react";
import Navbar from "./components/Navbar";
import UpperFooter from "./components/UpperFooter";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import Card from "../../public/assests/propcard.png";
// import backCard3 from '../../public/assests/Rectangle 23.svg'
// import backCard2 from '../../public/assests/Rectangle 23.png'
import backCard1 from "../../public/assests/Rectangle59.svg";
import TopImage from "../../public/assests/news-Top-img.jpg";
import Spike from "../../public/assests/news-spike.svg";
import Image from "next/image";
import styles from "@/styles/Blog.module.css";
import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";
import enterpriseIrelandImg from "../../public/assests/blog/enterpriseIreland.jpg";

import Background_sm from "../../public/assests/newsBackground.svg";
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

    window.document.addEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <Navbar />
      <Head>
                <title>Enterprise Ireland: Key Supports for Irish Businesses</title>
                <meta name="description" content="Learn how Enterprise Ireland helps Irish businesses grow with funding, mentorship, and global market support. Discover key programs and benefits today." />
            </Head>
      <div className={styles["spike"]}>
        <Image src={Spike} />
      </div>

      <div className={styles["background-sm"]}>
        <Image src={Background_sm} />
      </div>

      <Box className={styles["top-center"]}>
        <Box className={styles["top-center-left"]}>
          <Image src={backCard1} className={styles["top-center-back"]} />
          <Image
            src={enterpriseIrelandImg}
            className={styles["top-center-image-mileage"]}
          />
        </Box>
        <Box className={styles["top-image"]}>
          <Image src={enterpriseIrelandImg} className={styles["top-image-sm"]} />
        </Box>
        <Box className={styles["top-center-text"]}>
          {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
          <Box className={styles["top-center-text-1"]}>
            Irish Business Supports
          </Box>
          {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

          <Box className={styles["top-center-text-2"]}>
            Enterprise Ireland, a relationship worth building!
          </Box>
          <Box className={styles["top-center-text-3"]}>
            Running a business in Ireland offers a multitude of advantages for
            entrepreneurs seeking growth and success. <br />
            For medium to large-sized business owners grappling with the
            pressures of being overstressed and overworked, navigating the Irish
            business landscape can indeed be challenging.
          </Box>
          <Box className={styles["top-center-text-3-1"]}>
            Running a business in Ireland offers a multitude of advantages for
            entrepreneurs seeking growth and success. <br />
            For medium to large-sized business owners grappling with the
            pressures of being overstressed and overworked, navigating the Irish
            business landscape can indeed be challenging.
          </Box>
          {/* <Box className={styles['top-center-text-4']}>
            <div className='box' style={{ marginTop: '30px' }}>
              <Typography className='read-more color-light-grey' style={{ width: '118px', height: '36px', paddingInline: '14px', paddingBlock: '12px' }}>READ MORE</Typography>
            </div>
          </Box> */}
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          {/* <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Understanding Mileage:
          </Typography> */}
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Nonetheless, amid these challenges, Ireland presents a wealth of
            opportunities, positioning it as an ideal location for business
            operations.
            <br />
            Ireland stands out as an English-speaking country within the
            European Union, equipped with a talented and educated workforce.
            <br />
            Coupled with a business-friendly tax system, these factors make
            Ireland an attractive hub for businesses, before mentioning the
            various government agencies and semi-state bodies that provide a
            wide range of programs and support to ease the journey for
            businesses.
            <br />
            For business owners in this category, two primary entities come into
            focus: the Local Enterprise Office (LEO) and Enterprise Ireland
            (EI).
            <br />
            The LEO, with 31 offices across the country, acts as a local support
            network for small businesses, especially those with a domestic
            focus.
            <br />
            On the other hand, Enterprise Ireland, with a national reach and
            international presence, is dedicated to the development and growth
            of Irish enterprises in global markets.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Distinguishing Between LEO and EI:
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            The Local Enterprise Office (LEO) functions as the primary point of
            contact for entrepreneurs seeking guidance and assistance in
            launching or expanding their businesses within Ireland. It primarily
            caters to smaller businesses with a domestic focus.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            On the other hand, Enterprise Ireland commits to fostering the
            growth and expansion of Irish businesses, aiming to position them as
            global leaders in their respective fields. Whether your business is
            a start-up or already a multinational enterprise, Enterprise Ireland
            can extend support to ambitious companies at all phases of their
            development.
            <br />
            The commitment begins domestically, where Enterprise Ireland
            actively contribute to the development of businesses, enabling them
            to effectively compete in global markets.
            <br />
            Through their extensive network of 39 international offices, their
            proficient advisors facilitate connections between Irish businesses
            and international opportunities, catalysing growth on a global
            scale.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Navigating the EI Ecosystem
          </Typography>

          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Enterprise Ireland structures its support according to different
            business phases, ranging from startups to established SMEs and large
            companies.
            <br />
            The New Frontiers program serves as an entry point for many
            entrepreneurs into the EI ecosystem.
            <br />
            Enterprise Ireland's New Frontiers stands as the nationwide
            entrepreneurial development program designed for visionary startup
            founders harbouring innovative business ideas with the potential for
            scalability and job creation. This two-phase program provides
            essential guidance, advice, facilities, training, and mentoring,
            enabling entrepreneurs to develop their ideas effectively.
            <br />
            Subsequently, the Pre-Seed Start Fund (PSSF) offers financial
            support and various startup resources for early-stage startups.
            <br />
            Enterprise Ireland partners with high potential start-ups on their
            journey to international growth, offering an ecosystem of funding
            and support for expansion into untapped global markets. High
            Potential Startups (HPSUs) receive special attention from EI, and
            the Development Advisor (DA) plays a crucial role in keeping them
            informed about additional opportunities.
            <br />
            What makes New Frontiers a little different from accelerator
            programmes is that there is no equity required from your startup.
            Entry to the programme is competitive and keep in mind that
            Enterprise Ireland are equally as interested in you as the founder
            as they are in your business idea.
            <br />
            For businesses in operation for more than five years, transitioning
            from startup to a "core" company status within EI requires
            engagement with a different team. This transition prompts active
            involvement with the Development Advisor to ensure continued support
            and access to necessary resources.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Unlocking the Benefits of Working with EI
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Collaborating with Enterprise Ireland offers access to a diverse
            array of supplementary supports, including but not limited to,
            innovation vouchers, feasibility grants, market research, mentoring,
            consultancy, crisis support, workshops, and employment grants.{" "}
            <br />
            Moreover, engaging with Enterprise Ireland functions as a valuable
            networking tool, unlocking further opportunities for business
            growth.
            <br />
            As business owners, it's crucial to strategically choose the
            supports that align with overall benefits and level of involvement.
            While EI offers an array of programs, businesses can selectively
            participate based on their specific needs and priorities.
            Cultivating relationships within the EI ecosystem not only enhances
            networking opportunities but also connects businesses with
            professional services familiar with EI's processes.
            <br />
            While Enterprise Ireland is a pivotal player in supporting
            businesses, it's essential to recognize that other state-backed
            initiatives exist. Depending on the sector or focus, various
            organizations offer access to both tangible and intangible
            resources. The strong third-level research landscape in Ireland
            further enhances the support available to businesses.
            <br />
            The terminology and acronyms used by EI and the Irish startup/SME
            community may initially pose a learning curve, however, from Borgo’s
            perspective, it is a partnership worth familiarizing yourself with
            and working on.
            <br />
            In conclusion, developing a relationship with Enterprise Ireland
            proves beneficial for medium to large-sized business owners looking
            to navigate the Irish business landscape.
            <br />
            Engaging with the relevant EI programs and supports, while
            strategically building connections, can contribute significantly to
            business growth and success.
            <br />
            If you are an Irish business owner looking to gain further insight
            into the supports available to you and your business, you can
            contact our team of experts by scheduling a call here, or by
            emailing info@borgo.ie where we will be delighted to assist.
          </Typography>
        </Box>
      </Box>

      <div style={{ marginBottom: "140px" }}></div>

      <UpperFooter />

      <Box sx={{ marginTop: "90px" }}>
        <Footer />
      </Box>
    </>
  );
}
