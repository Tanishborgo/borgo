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

import outsourcingImg from "../../public/assests/blog/outsourcing.jpg";
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
        <title>Outsourced Accounting: Save Time & Costs with Borgo</title>
        <meta name="description" content="Discover how outsourcing your accounting to Borgo can streamline operations, reduce costs, and provide expert financial management for your business." />
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
            src={outsourcingImg}
            className={styles["top-center-image-mileage"]}
          />
        </Box>
        <Box className={styles["top-image"]}>
          <Image
            src={outsourcingImg}
            className={styles["top-image-sm"]}
          />
        </Box>
        <Box className={styles["top-center-text"]}>
          {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
          <Box className={styles["top-center-text-1"]}>
            Unlocking Efficiency with Borgo
          </Box>
          {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

          <Box className={styles["top-center-text-2"]}>
            Outsource Your Financial Requirements Today
          </Box>
          <Box className={styles["top-center-text-3"]}>
            For medium to large enterprises, the financial rationale often
            points towards outsourcing accounting services rather than
            maintaining an in-house team. In this blog post, we take a deep dive
            into the nuances of outsourced accounting, emphasizing the
            importance of differentiating it from traditional bookkeeping to
            fully grasp the enhanced value it contributes to the financial
            landscape.
          </Box>
          <Box className={styles["top-center-text-3-1"]}>
            For medium to large enterprises, the financial rationale often
            points towards outsourcing accounting services rather than
            maintaining an in-house team. In this blog post, we take a deep dive
            into the nuances of outsourced accounting, emphasizing the
            importance of differentiating it from traditional bookkeeping to
            fully grasp the enhanced value it contributes to the financial
            landscape.
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
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Understanding the Internal Accounting Function
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>We offer customized financial solutions with our modern, refreshing and professional approach.  </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Companies boasting a turnover more than €5 million typically
            establish an internal accounting function. This multifaceted team
            comprises key roles:
          </Typography>
          <Box className="outblog-ol">
            <ol>
              <li>
                <b> Financial Controller:</b> Overseeing processes, monthly
                management accounts, reconciliation checks, and analytical
                reporting.
              </li>
              <li>
                <b> Financial Director:</b> Focusing on strategic growth,
                shareholder engagement, and enhancing overall profitability.
              </li>
              <li>
                <b> Accounts Payable and Accounts Receivable: </b>Vigilantly
                managing inflows and outflows to maintain a harmonious balance
                between credit control and cash flow management.
              </li>
              <li>
                <b>Payroll: </b>Ensuring accurate and timely employee
                compensation, factoring in variables like sick days, bonuses,
                and taxes.
              </li>
            </ol>
          </Box>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Despite having a well-equipped internal accounting team, engaging an
            external accountant remains imperative for compliance-related tasks
            such as tax filings, external reporting, and potential auditing,
            necessitating collaboration with the internal accountant.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Is Bookkeeping Sufficient for Your Company?
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            For many small to medium-sized enterprises with growth-oriented
            ambitions, maintaining an internal accounting function may be
            cost-prohibitive.
            <br />
            In such cases, hiring a bookkeeper appears as a viable option.
            <br />
            However, relying solely on bookkeeping services, which might cover
            specific functions like accounts receivable or accounts payable,
            offers only a partial solution, and often causes delays to the
            preparation of the increasingly important management accounts.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Management Accounting for Holistic Oversight
          </Typography>

          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            When entrusting bookkeepers with reporting, the responsibility of
            acting as the internal accounting function falls within your
            company.
            <br />
            This includes evaluating the bookkeeper's work, ensuring procedural
            correctness, and addressing issues as they arise. This setup lacks
            efficiency and reliability, and as such, the number of companies
            that are turning to an outsourced accountant is growing
            month-on-month.
            <br />
            Borgo are equipped to manage the entire accounting function, ensures
            the seamless operation of bookkeeping processes and financial
            reporting as it is required.
            <br />
            In this instance, Borgo assumes the role of their book-keeper
            manager, evaluating the accuracy of bookkeeping, identifying gaps,
            and rectifying discrepancies.
            <br />
            This oversight is critical in validating the precision and
            timeliness of bookkeeping records, akin to the practices observed in
            larger companies with dedicated internal accounting departments.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Borgo’s Outsourced Accounting Solution: A Comprehensive Approach
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            At Borgo, we present an outsourced accounting service that
            transcends traditional boundaries. Addressing both internal and
            external accounting needs, our service stands out by integrating
            seamlessly into your operational framework.
            <br />
            Imagine relinquishing the oversight of accounts payable to Borgo,
            where one of our accountants collaborates with your bookkeeper
            internally.
            <br />
            This synergy creates a complete accounting service, with meticulous
            processes, automated reconciliation checks, and direct
            accountability.
            <br />
            Borgo’s outsourced solution offers a compelling alternative to
            in-house personnel, saving some of our clientele over €30,000 in
            their personnel costs.
            <br />
            Explore the comprehensive benefits of Borgo’s Outsourced Accounting
            service to empower your company with a full-fledged accounts
            department at a fraction of the cost today by scheduling a call
            here, or by emailing info@borgo.ie where a member of our team will
            be delighted to assist.
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
