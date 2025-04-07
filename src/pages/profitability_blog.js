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
import ProfitabilityImg from "../../public/assests/blog/profitability.jpg";

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
                <title>Achieving Consistent Profitability: Borgo’s Expert Guide</title>
                <meta name="description" content="Discover strategies to build a profitable business, set the right pricing, and shift your mindset to prioritise sustainable financial success with Borgo." />
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
            src={ProfitabilityImg}
            className={styles["top-center-image-mileage"]}
          />
        </Box>
        <Box className={styles["top-image"]}>
          <Image src={ProfitabilityImg} className={styles["top-image-sm"]} />
        </Box>
        <Box className={styles["top-center-text"]}>
          {/* <Box className={styles['top-center-text-1']}>
            Feature Post
          </Box> */}
          <Box className={styles["top-center-text-1"]}>
            Unlocking Consistent Profitability
          </Box>
          {/* <Box className={styles['top-center-text-2-1']}>Everything
            Borgo weekly report</Box> */}

          <Box className={styles["top-center-text-2"]}>
            Borgo’s Guide to Getting There!
          </Box>
          <Box className={styles["top-center-text-3"]}>
            Understanding profit is one thing but turning that understanding
            into consistent financial success is a whole different ball game!
            <br />
            In the complex landscape of business, knowing the concept of profit
            is merely the first step; implementing it effectively requires a
            skill set that often takes years to develop. At Borgo, our mission
            is to help you develop that skill set, and the accompanying mindset
            to get there much faster.
          </Box>
          <Box className={styles["top-center-text-3-1"]}>
            Understanding profit is one thing but turning that understanding
            into consistent financial success is a whole different ball game!
            <br />
            In the complex landscape of business, knowing the concept of profit
            is merely the first step; implementing it effectively requires a
            skill set that often takes years to develop. At Borgo, our mission
            is to help you develop that skill set, and the accompanying mindset
            to get there much faster.
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
            To run a profitable business, mastering the art of selling your good
            or services at the right price is crucial. There are multiple
            methodologies and models often associated with achieving this very
            goal, including the three thirds framework or the 40-40-20 rule.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            In an evolving and increasingly competitive marketplace, keeping
            your pricing competitive to attract your target audience, and indeed
            to retain your existing client base is a tightrope that many
            business owners find themselves walking today, particularly those
            that have faced an increase in their VAT rate recently.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Ensuring cost-effective delivery of products or services also
            demands expertise in operations and a requirement to analyse every
            financial aspect of the business in much greater detail than simply
            reviewing previous accounts that are no longer relevant.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Asking yourself and your team questions around employee
            productivity, efficiency, and fair compensation become paramount.
            Managing people effectively, motivating them, and maintaining
            impeccable records are daily and sometimes even monotonous
            responsibilities, but don’t underestimate them, they can make or
            break profitability.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Our team of experts give some of their tips on how to achieve
            profitability below.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Shaking the Bad Year/Good Year fallacy.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            There is quite a popular saying in the world of accounting and
            beyond, “men lie, women lie, numbers don’t” and it is extremely
            relevant.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Contrary to past trends where startups accepted initial losses for
            market share, today's successful businesses prioritise early
            profitability. Making money from the start and growing at a profit
            is not only the safer and more sustainable path. If you find
            yourself in the position as a business owner or founder looking for
            external investment, we’ll give you a hint - the business
            prioritising profitability over market share is the business that
            walks away happiest.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            If you aren’t a start-up business, it is becoming increasingly
            important not to let yourself fall into the trap of accepting less
            profits. Profits should increase to align and match the growth of
            your business, or the increased level of expertise you have
            acquired.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            In a profitability-focused approach, there is simply no room for the
            concept of good or bad years.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            A recession or a dip in demand through a slower market should not
            automatically translate to financial losses for you the business
            owner, or the business.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            A well-designed business model allows for flexibility, enabling
            adjustments without sacrificing profitability percentages. It isn’t
            always easy to arrive at that percentage given the increase in costs
            and constant change, but it certainly isn’t impossible, particularly
            not with the right accountancy partner supporting you.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Deserving Profit: A Shift in Mindset
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Many business owners often grapple with the idea of deserving a
            profit.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Crazy to think when you consider the risks, challenges, and stress
            we take as business owners. Where there is absence of substantial
            benefits like pensions or healthcare packages, not to mention job
            security, profitability becomes paramount.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            The belief that a decent salary suffices often leads business owners
            to put themselves second when it comes to financial priorities and
            is the type of mindset that needs a fundamental shift. If you're
            creating value and employment opportunities, be it 2 jobs, or 200,
            you deserve to be rewarded and so do your yearly accounts!
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Profit shouldn’t feel like a dirty secret but should instead be
            recognised and thought of as a validation of your efforts.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            If it feels unachievable or unrealistic to have that shift in
            mindset, it's time to get in touch.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Is it time to change how we view and treat profit?
          </Typography>

          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Parkinson's law proves that work expands to fill the available time.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            By prioritising profit upfront, the chances of expenses absorbing it
            decrease.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            To provide a somewhat exaggerated perspective, imagine where profit
            is immediately set aside in a separate account, the spotlight on
            expenses soon brightens when putting profit at the forefront.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Mike Michalowicz provided the same perspective in his book, "Profit
            First." Michalowicz suggests that instead of viewing profit as
            what's left after all expenses, successful business owners make
            profit the priority.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            An exercise to implement yourself is to challenge yourself to think
            differently. Every time money flows into your business, allocate
            your target profit percentage before covering costs.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            This challenges the traditional approach of waiting to see what's
            left at the end of the year and proposes a proactive method to
            ensure your profitability target is delivered.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            While this might not be the only way to focus on profitability, it
            sparks a crucial conversation about how business owners can actively
            shape and prioritise profit in their forecasts and allows for more
            optimistic plans for the future.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-40 font-40-sm line-height-48-sm line-height-72 font-mulish weight-600 color-light-grey">
            Don’t sacrifice yourself!
          </Typography>
          {/* <Typography className='font-32 mt-10 line-height-38 font-mulish weight-600 color-light-grey'>
                    </Typography> */}
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Profit is not just necessary; it's a worthy goal from day one and
            remains that way.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Whilst achieving consistent profitability may take time, skill
            development, processes, and efficiencies, it is crucial not to
            sacrifice your own salary in the process.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            Pay yourself a fair market rate and consider profit as an essential
            addition.
          </Typography>
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify">
            In the intricate world of business, profitability is not just a
            measure of success; it's a testament to your expertise, dedication,
            and the value you bring to the market.
          </Typography>
        </Box>
      </Box>

      <Box className="div-center mt-100">
        <Box className="flex-direction-column width-65 width-90-sm">
          <Typography className="font-24 mt-20 line-height-36 font-mulish color-light-grey text-justify breakword">
            If you feel like your business is not achieving the level of profit
            that it should be, reach out to our team by emailing info@borgo.ie
            to arrange a free consultation with our team and discuss whether
            Borgo is the partner to help you get there.
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
