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
import grantsImg from "../../public/assests/blog/grants.png";

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
                <title>ICOB Grant 2024: Support for Irish Businesses Explained</title>
                <meta name="description" content="Learn about the Increased Cost of Business (ICOB) Grant, eligibility, payment amounts, and how Irish businesses can apply before the May 1, 2024 deadline." />
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
          <Image src={grantsImg} className={styles["top-center-image-mileage"]} />
        </Box>
        <Box className={styles["top-image"]}>
          <Image src={grantsImg} className={styles["top-image-sm"]} />
        </Box>
        <Box className={styles["top-center-text"]}>
          {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
          <Box className={styles["top-center-text-1"]}>
            The Increased Cost of Business Grant
          </Box>
          {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

          <Box className={styles["top-center-text-2"]}>
            The Increased Cost of Business (ICOB) Grant
          </Box>
          <Box className={styles["top-center-text-3"]}>
            The Increased Cost of Business (ICOB) Grant has been approved by the
            Government as part of Budget 2024, allocating €257 million to
            support small and medium businesses. Your Local County Council and
            funded by the Department of Enterprise, Trade and Employment (DETE),
            will oversee the distribution of the grant to eligible businesses in
            the county.
          </Box>
          <Box className={styles["top-center-text-3-1"]}>
            The Increased Cost of Business (ICOB) Grant has been approved by the
            Government as part of Budget 2024, allocating €257 million to
            support small and medium businesses. Your Local County Council and
            funded by the Department of Enterprise, Trade and Employment (DETE),
            will oversee the distribution of the grant to eligible businesses in
            the county.
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
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Qualifying businesses will receive a one-time grant payment,
            determined based on the Commercial Rates bill they received in 2023.
            It's important to note that while this grant assists with rising
            business costs, it does not waive Commercial Rates obligations;
            businesses are still required to fulfill their Commercial Rates
            payments as usual.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            The primary aim of the grant is to alleviate some of the financial
            burden faced by businesses due to increased costs. However, it is
            not intended to fully cover all additional expenses such as wage
            hikes.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            The grant amount varies depending on the 2023 Commercial Rates bill:
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
          <Box className="blog-ul">
            <ul>
              <li>
                Businesses with a bill of less than €10,000 will receive a grant
                equal to 50% of their 2023 Commercial Rates bill.
              </li>
              <li>
                Those with bills ranging from €10,000 to €30,000 will receive a
                fixed grant of €5,000.
              </li>
              <li>
                Businesses with bills exceeding €30,000 are ineligible for the
                ICOB grant.
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            To qualify for the grant, businesses must meet specific criteria
            outlined by DETE:
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
          <Box className="blog-ul">
            <ul>
              <li>
                Operating as a commercially trading business from a rateable
                property.
              </li>
              <li>
                Active trading status as of February 1, 2024, with an intention
                to continue trading for at least three months after verifying
                information.
              </li>
              <li>Providing valid bank details.</li>
              <li>
                Being up to date with rates payments or on an approved payment
                plan.
              </li>
              <li>
                Tax compliance with a valid Tax Registration Number (TRN).{" "}
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Fingal County Council retains the right to reclaim any incorrectly
            awarded grants, including those based on erroneous information or
            false declarations.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Businesses will soon be able to apply for the grant through an
            online platform currently under development. Detailed instructions
            will be provided by Fingal County Council, including registration
            and verification procedures, expected to be available by mid-March.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            The deadline for businesses to confirm eligibility and submit
            verification details is May 1, 2024.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            For registration, applicants need to provide their property ID (LA
            Id), which can be found on the right side of their rates bill.
            Multiple properties under one customer number cannot be submitted
            for registration in Borgo Accounting's system. Businesses are
            advised to check forthcoming correspondence and online FAQs for
            further guidance before applying.
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
