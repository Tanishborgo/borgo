import Image from "next/image";
import Arrow from "../../../public/assests/NewsArrow.svg";
import Layout_sm from "../../../public/assests/test2.png";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/NewsCard.module.css";
import blueBox from "../../../public/assests/News/sm_box_blue.png";
import redBox from "../../../public/assests/News/sm_box_red.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

export default function NewsCard({ Img, Img_sm, Ind, Side }) {
  const [x, setx] = useState(false);
  let cardStyle = {};
  let cardtitle = "";
  let pagename = "";
  let blogtitle = "";
  let boxStyle = {
    width: "70px",
    height: "70px",
    position: "absolute",
    right: "7px",
    top: "4px",
    zIndex: "-2",
  };
  let boxColor = redBox;
  if (Ind === "Two") {
    cardStyle = { marginTop: "30%" };
    pagename = "/xero_blog";
    blogtitle = "15 Benefits of Using Xero Accounting software";
    cardtitle =
      "Xero is a cloud-based accounting software, which means you can access your financial data from anywhere with an internet connection.";
  }
  if (Ind === "Four") {
    cardStyle = { marginTop: "6%" };
    pagename = "/mileage_blog";
    blogtitle = "Claiming travel and subsistence";
    cardtitle =
      "In this guide, we'll address some of the most frequently asked questions about claiming these expenses while staying compliant with the latest regulations.";
  }
  if (Ind === "One") {
    cardStyle = { marginTop: "6%" };
    boxColor = blueBox;
    pagename = "/leogrants_blog";
    blogtitle = "LEO Grants";
    cardtitle =
      "LEO grants are specifically designed to assist entrepreneurs in getting their businesses off the ground.";
  }
  if (Ind === "Three") {
    cardStyle = { marginTop: "-18%" };
    boxColor = blueBox;
    pagename = "/retirementrelief_blog";
    blogtitle = "Understanding the Retirement Relief Scheme";
    cardtitle =
      "Understanding the Retirement Relief Scheme for Business Owners";
  }
  // if (Ind === "Five") {
  //   cardStyle = { marginTop: "-18%" };
  //   boxColor = blueBox;
  //   pagename = "/questionssarah_blog";
  //   blogtitle = " Borgo Team Questions and Answers - Sarah";
  //   // cardtitle = "The Bike to Work Scheme is a government-backed initiative designed to encourage more people to commute by bicycle."
  // }

  if (Ind === "Six") {
    cardStyle = { marginTop: "6%" };
    pagename = "/eiis_blog";
    blogtitle = " Changes to the EIIS Finance bill 2024";
    cardtitle =
      "Recent announcements in the Finance Bill have outlined significant changes to the Employment Investment Incentive Scheme (EIIS).";
  }

  if (Ind === "Seven") {
    cardStyle = { marginTop: "-18%" };
    boxColor = blueBox;
    pagename = "/latereturn_blog";
    blogtitle = "Consequences of Late Annual Return Filing in Ireland";
    cardtitle = "In Ireland, all Limited Companies are required to file an Annual Return, even if there have been no business transactions."
  }

  if (Ind === "Eight") {
    cardStyle = { marginTop: "6%" };
    pagename = "/peerlending_blog";
    blogtitle = "The Advantages of Peer-to-Peer Lending over Bank Debt";
    cardtitle =
      "Peer-to-peer (P2P) lending, also known as social lending or crowd lending.";
  }
  if (Ind === "Nine") {
    cardStyle = { marginTop: "-18%" };
    boxColor = blueBox;
    pagename = "/erelief_blog";
    blogtitle = " Understanding Entrepreneur Relief";
    cardtitle = "A Guide to Capital Gains Tax."
  }

  if (Ind === "Ten") {
    cardStyle = { marginTop: "6%" };
    pagename = "/invoicediscounting_blog";
    blogtitle = "Simple Guide to Invoice Discounting";
    cardtitle =
      "Invoice discounting is a way for businesses to access the money in their accounts receivable faster.";
  }
  if (Ind === "Eleven") {
    cardStyle = { marginTop: "-18%" };
    boxColor = blueBox;
    pagename = "/dext_blog";
    blogtitle = "Dext";
    cardtitle = "Dext, formerly known as Receipt Bank, is an award-winning cloud accounting software designed to revolutionize how you manage your financial data."
  }

  if (Ind === "Twelve") {
    cardStyle = { marginTop: "6%" };
    pagename = "/bike_blog";
    blogtitle = "Embracing the Bike to Work Scheme";
    cardtitle =
      "The Bike to Work Scheme is a government-backed initiative designed to encourage more people to commute by bicycle.";
  }

  if (Ind === "Thirteen") {
    cardStyle = { marginTop: "-18%" };
    boxColor = blueBox;
    pagename = "/profitability_blog";
    blogtitle = "Unlocking Consistent Profitability";
    cardtitle = "Unlocking Consistent Profitability: Borgo’s Guide to Getting There!"
  }

  if (Ind === "Fourteen") {
    cardStyle = { marginTop: "6%" };
    pagename = "/enterpriseIreland_blog";
    blogtitle = "Irish Business Supports";
    cardtitle = "Irish Business Supports – Enterprise Ireland, a relationship worth building!"
  }
  if (Ind === "Fifteen") {
    cardStyle = { marginTop: "-18%" };
    boxColor = blueBox;
    pagename = "/outsourcing_blog";
    blogtitle = "Unlocking Efficiency with Borgo";
    cardtitle = "Outsource Your Financial Requirements Today"
  }
  if (Ind === "Sixteen") {
    cardStyle = { marginTop: "6%" };
    pagename = "/businessgrant_blog";
    blogtitle = "The Increased Cost of Business Grant";
    cardtitle = "The Increased Cost of Business Grant"
  }
  

  useEffect(() => {
    if (window.innerWidth <= 1250) {
      console.log("true");
      cardStyle = {};
      setx(true);
    }
  }, []);

  if (x) {
    cardStyle = {};
    boxStyle.width = "60px";
    boxStyle.height = "60px";
    boxStyle.right = "6px";
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles["mainCard"]} style={cardStyle}>
        <Image
          src={Layout_sm}
          className={styles["mainImage"]}
          style={{ width: "468px", height: "719.5px" }}
        />

        <Image src={boxColor} style={boxStyle} />

        <Image src={Layout_sm} className={styles["mainImage-sm"]} />

        <Box className={styles["head"]}>{blogtitle}</Box>

        <Box className={styles["text"]}>{cardtitle}</Box>

        <Box className={styles["text-sm"]}>{cardtitle}</Box>

        <Box className={styles["card-image"]}>
          <Image src={Img} />
        </Box>

        <Box className={styles["card-image_sm"]}>
          <Image src={Img_sm} className={styles["card-image_sm_image"]} />
        </Box>

        <Box className={styles["read"]}>
          <Link
            href={pagename}
            style={{ textDecoration: "none", color: "#DDDDDD" }}
          >
            <Typography>Read more</Typography>
          </Link>
        </Box>

        <Box className={styles["arrow"]}>
          <Image src={Arrow} className={styles["arrowImage"]} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
