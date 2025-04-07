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

import errImg from "../../public/assests/blog/err.png";
import Head from "next/head";
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
        <title>Enhanced Reporting Requirements (ERR) in Ireland 2024</title>
        <meta name="description" content="Learn about Ireland's Enhanced Reporting Requirements (ERR), key payroll reporting changes, and how businesses must comply from January 2024." />
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
            src={errImg}
            className={styles["top-center-image-mileage"]}
          />
        </Box>
        <Box className={styles["top-image"]}>
          <Image src={errImg} className={styles["top-image-sm"]} />
        </Box>
        <Box className={styles["top-center-text"]}>
          {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
          <Box className={styles["top-center-text-1"]}>
            Enhanced Reporting Requirements (ERR)
          </Box>
          {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

          <Box className={styles["top-center-text-2"]}>
            What You Need to Know in January 2024
          </Box>
          <Box className={styles["top-center-text-3"]}>
            For medium to large-sized business owners grappling with stress and
            overwhelming workloads, staying ahead of regulatory changes is
            crucial for smooth operations.
            <br />
            One significant change on the horizon is the implementation of
            Enhanced Reporting Requirements (ERR) in Ireland, starting January
            1, 2024.
          </Box>
          <Box className={styles["top-center-text-3-1"]}>
            For medium to large-sized business owners grappling with stress and
            overwhelming workloads, staying ahead of regulatory changes is
            crucial for smooth operations.
            <br />
            One significant change on the horizon is the implementation of
            Enhanced Reporting Requirements (ERR) in Ireland, starting January
            1, 2024.
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
            This mandatory framework builds on existing payroll reporting
            obligations, necessitating a more detailed and timely disclosure of
            non-taxable benefits and expenses provided to employees and
            directors.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Understanding Enhanced Reporting Requirements (ERR)
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            ERR represents a landmark development in payroll and tax reporting,
            designed to enhance transparency, ensure compliance, and streamline
            the tax reporting process for employers. These regulations require a
            detailed breakdown of specific non-taxable benefits provided to
            employees and directors, paralleling payroll reporting. Employers
            must link payments to key identifiers such as the PPS number, date
            of birth, and Work ID of the employee.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Covered Payments under ERR
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            The Finance Act 2022, Section 897C, expands reporting obligations to
            encompass additional non-taxable payments made by employers to
            directors and employees (excluding contractors). Starting from
            January 1, 2024, the following three primary categories of payments
            fall under ERR:
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Small Benefit Exemption ERR
          </Typography>

          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            What is it? Allows employers to reward employees with non-cash
            benefits, up to two benefits per year, not exceeding a combined
            value of €1,000.
            <br />
            Reporting Required: Employers must report the date and value of each
            small benefit, ensuring compliance with set limits.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Remote Working (E-Working) Daily Allowance ERR
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            What is it? Tax-free payment for employees working away from the
            company’s office(s), introduced during the pandemic at €3.20 per
            day.
            <br />
            Reporting Required: Employers must report the total number of days
            for which the allowance is paid, the amount for each day, and the
            date of payment.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Travel and Subsistence ERR
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            What is it? Covers payments for business-related travel and
            subsistence costs, vouched and unvouched, including site-based
            allowances, emergency travel, and eating on-site allowances.
            <br />
            Reporting Required: Employers must report the date and amount of
            each payment under this category, including detailed reporting for
            various travel and subsistence expenses.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Purpose of Enhanced Reporting Requirements (ERR)
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            ERR aims to enhance transparency and compliance with tax
            regulations, building on the PAYE Modernisation introduced in 2019.
            This detailed reporting enables Revenue to identify trends and
            anomalies, directing resources toward non-compliant employers.
            Additionally, it informs future tax policy, with the possibility of
            further reporting phases.
            <br />
            ERR submissions operate on a real-time reporting principle,
            requiring all information to be submitted before or on the same day
            as payment. SME owners may face operational challenges with multiple
            submissions in a month, necessitating new processes for accurate and
            timely reporting.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Submitting ERR Details
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            The Revenue Online Services (ROS) platform facilitates ERR
            submissions, similar to current payroll reporting systems. While
            third-party software providers work on integrating ERR requirements,
            manual filing on ROS remains an option.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Preparing for Enhanced Reporting Requirements (ERR)
          </Typography>
          <Typography className="font-32 mt-10 line-height-38 font-mulish weight-300 color-light-grey">
            To prepare for ERR, business owners can take practical steps:
          </Typography>
          <Box className="blog-ol">
            <ol>
              <li>
                <b>Review Data Collection Methods:</b> Evaluate current methods
                of gathering information about non-taxable benefits and consider
                more automated solutions.
              </li>
              <li>
                <b> Engage with Software Providers:</b> Ensure third-party
                payroll or expense management software providers align with the
                updated ERR requirements.
              </li>
              <li>
                <b>Assess Integrations:</b> Explore integration options for
                systems tracking employee payments with ROS or payroll software.
              </li>
              <li>
                <b> Educate Staff:</b> Inform team members responsible for
                processing payments about ERR requirements for accurate data
                entry.
              </li>
              <li>
                <b>Implement Tracking Processes:</b> Develop or refine processes
                for tracking and allocating reportable benefits accurately.
              </li>
              <li>
                <b> Review Payment Timeframes:</b> Adjust non-taxable payment
                processing timelines to align with ERR's 'on or before'
                reporting requirement.
              </li>
            </ol>
          </Box>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            ERR solely pertains to employer-made payments to employees or
            directors. Business expenses directly purchased by the company, such
            as through a company credit card, fall outside ERR's scope. This
            exemption can significantly reduce the reporting burden, especially
            for travel and subsistence expenses.
            <br />
            In conclusion, successfully navigating ERR demands proactive
            readiness, thorough system assessments, and a keen understanding of
            reporting intricacies.
            <br />
            If you would like to discuss how Borgo can assist your payroll
            operations, please feel free to contact our team of experts by
            emailing <a href="mailto:info@borgo.ie">info@borgo.ie</a> or by <a href="https://calendly.com/sean-piggott-borgo/discovery-call" target="_blank">scheduling a call here.</a>
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
