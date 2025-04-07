import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box, Grid, Typography } from "@mui/material";
import Contact1 from "../../public/assests/aboutspike1.png";
import Contact2 from "../../public/assests/Group32.png";
import Contact3 from "../../public/assests/Fill1.png";
import Contact4 from "../../public/assests/spikecopy.png";
import Contact5 from '../../public/assests/News/contactSpikeMid.svg'
import Image from "next/image";
import styles from "@/styles/Contact.module.css";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import swal from 'sweetalert';
import Link from "next/link";
import Head from "next/head";
const names = [
  {
    id: 'accounts',
    name: 'Accounts',
  },
  {
    id: 'bookkeeping',
    name: 'Bookkeeping',
  },
  {
    id: 'management_reports',
    name: 'Management reports',
  },
  {
    id: 'payroll',
    name: 'Payroll',
  },
  {
    id: 'taxes',
    name: 'Taxes',
  },
  {
    id: 'other',
    name: 'Other',
  }
];

export default function contact() {
  let x = 0;
  const [y, setY] = useState('');
  const [personal_tax, setPersonalTax] = useState(false);
  const [sole_trader, setSoleTrader] = useState(false);
  const [company, setCompany] = useState(false);
  const [name, setName] = useState("");
  const [business_name, setBusinessName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState([]);
  const [discuss, setDiscuss] = useState("");
  const [errorMsg, setErrorMsg] = useState({});



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setServices(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
    x = screen.width;
    setY((x > 700) ? '100px' : '0px');
  }, [])

  const onSubmit = async () => {
    console.log("Submitting form...");

    let errors = {};

    if (!name) errors.name = "Name is required";
    if (!business_name) errors.business_name = "Business name is required";
    if (!phone_number) errors.phone_number = "Phone number is required";
    if (!email) errors.email = "Email is required";
    if (services.length === 0) errors.services = "At least one service is required";
    if (!discuss) errors.discuss = "This field is required";

    // If any errors exist, set state and return
    if (Object.keys(errors).length > 0) {
      setErrorMsg(errors);
      return;
    }

    // Clear errors if all fields are valid
    setErrorMsg({});

    let formdata = {
      personal_tax,
      sole_trader,
      company,
      name,
      business_name,
      phone_number,
      email,
      services,
      discuss
    };

    try {
      await axios.post('https://borgo.riverhousetechnologies.com/v1/details', formdata, {
        headers: { 'Content-Type': 'application/json' }
      });

      swal("Thank you for reaching out to us. Our team will get back soon.");

      // Reset form and errors
      setPersonalTax(false);
      setSoleTrader(false);
      setCompany(false);
      setBusinessName("");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setServices([]);
      setDiscuss("");
      setErrorMsg({});
    } catch (error) {
      console.error(error);
      swal("Something went wrong. Please try again.");
    }
  };


  return (
    <Grid className="position-relative">
      <Navbar />
      <Head>
        <title>Contact Us| Expert Accounting Services in Dublin</title>
        <meta name="description" content="Get in touch for expert accounting support. Send us a message using our contact form or call +353 1 211 8010 to discuss your business needs." />
      </Head>
      <Box component="main" className='width-100 position-relative about-height height-auto-sm div-center'>
        <Box className='margin-auto width-100 position-relative'>
       
          <Box className='display-none-sm position-absolute right-0 contact-fig-2'>
            <Image src={Contact2} width='100%' height="100%" />
          </Box>
          <Box className={styles["contactFill"]}>
            <Image src={Contact3} width="100%" height="100%" />
          </Box>
          <Box className={styles["contactSpikeMid"]}>
            <Image src={Contact5} width="100%" height="100%" />
          </Box>
          <Box className='margin-auto flex-direction-column width-60 width-100-sm div-center-sm position-relative' sx={{ zIndex: '5' }}>
            <Typography className='font-18 weight-400 color-orange mt-20-sm font-mulish'>CONTACT US</Typography>
            <Typography className='display-none-sm font-80 weight-700 color-light-grey font-mulish line-height-88 width-70 '>Let's start a conversation</Typography>
            <Typography className='display-none display-block-sm font-48-sm weight-700 font-mulish color-light-grey line-height-60 width-100 text-center mt-20-sm'>Let's start a conversation</Typography>
            <Typography className='font-24 font-22-sm weight-600 color-light-grey line-height-36 width-90 width-80-sm bottom-0 text-center-sm mt-50 mt-30-sm font-mulish'>To arrange a free, no obligation, consultation please send us a message using the contact form provided.</Typography>
          </Box>
        </Box>
      </Box>

      {/* main section  */}
      <Grid container className={styles['midForm']}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={styles['midForm-left']}>
          <Box>
            <Typography className={styles["contactfirst"]}>
              Please fill out the form
            </Typography>
            <br></br>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <label className="main">Personal Tax
                  <input type="checkbox"
                    checked={personal_tax}
                    onChange={(e) => { setPersonalTax(e.target.checked) }} />
                  <span className="borgocheckbox"></span>
                </label>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <label className="main">Sole Trader
                  <input type="checkbox"
                    checked={sole_trader}
                    onChange={(e) => { setSoleTrader(e.target.checked) }}
                  />
                  <span className="borgocheckbox"></span>
                </label>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <label className="main">Company
                  <input type="checkbox"
                    checked={company}
                    onChange={(e) => { setCompany(e.target.checked) }}
                  />
                  <span className="borgocheckbox"></span>
                </label>
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <label className="color-light-grey">Name</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles["inputBox"]}
                  value={name}
                  required
                  onChange={(e) => { setName(e.target.value) }}
                />
                {errorMsg.name && (
                  <div className="font-family-urbanist" style={{ marginLeft: '20px', marginTop: '10px', color: 'red', fontSize: '12px' }}>
                    {errorMsg.name}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <label className="color-light-grey">Business Name</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Business Name"
                  className={styles["inputBox"]}
                  value={business_name}
                  required
                  onChange={(e) => { setBusinessName(e.target.value) }}
                />
                {errorMsg.business_name && (
                  <div className="font-family-urbanist" style={{ marginLeft: '20px', marginTop: '10px', color: 'red', fontSize: '12px' }}>
                    {errorMsg.business_name}
                  </div>
                )}
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <label className="color-light-grey">Email</label>
                <br></br>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles["inputBox"]}
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                />
                {errorMsg.email && (
                  <div className="font-family-urbanist" style={{ marginLeft: '20px', marginTop: '10px', color: 'red', fontSize: '12px' }}>
                    {errorMsg.email}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <label className="color-light-grey">Phone Number</label>
                <br></br>
                <input
                  type="text"
                  maxLength={15}
                  placeholder="Phone Number"
                  className={styles["inputBox"]}
                  value={phone_number}
                  onChange={(e) => { setPhoneNumber(e.target.value) }}
                />
                {errorMsg.phone_number && (
                  <div className="font-family-urbanist" style={{ marginLeft: '20px', marginTop: '10px', color: 'red', fontSize: '12px' }}>
                    {errorMsg.phone_number}
                  </div>
                )}
              </Grid>
            </Grid>

            <Grid style={{ marginBottom: '20px' }}>
              <div className="display-flex flex-direction-column">
                <label className="color-light-grey">What services are you interested in?</label>
                <Select
                  id="demo-multiple-name"
                  placeholder="select"
                  multiple
                  className={styles["inputBox"]}
                  value={services}
                  onChange={handleChange}
                >
                  {names.map((e, i) => (
                    <MenuItem
                      key={i}
                      value={e.id}
                    >
                      {e.name}
                    </MenuItem>
                  ))}
                </Select>
                {/* <select name="cars" id="cars"
                className={styles["inputBox"]}
                value={services}
                onChange={(e) => { setServices(e.target.value) }}
              >
                <option value="accounts" style={{ paddingBottom: '10px' }}>Accounts</option>
                <option value="bookkeeping">Bookkeeping</option>
                <option value="management_reports">Management Reports</option>
                <option value="payroll">Payroll</option>
                <option value="taxes">Taxes</option>
                <option value="other">Other</option>
              </select> */}
              </div>
              {errorMsg.services && (
                <div className="font-family-urbanist" style={{ marginLeft: '20px', marginTop: '10px', color: 'red', fontSize: '12px' }}>
                  {errorMsg.services}
                </div>
              )}
            </Grid>

            <Grid>
              <label className="color-light-grey">What would you like to discuss?</label><br></br>
              <textarea
                rows={4}
                placeholder="What would you like to discuss?"
                className={styles["textareaBox"]}
                value={discuss}
                onChange={(e) => { setDiscuss(e.target.value) }}
              ></textarea>
              {errorMsg.discuss && (
                <div className="font-family-urbanist" style={{ marginLeft: '20px', marginTop: '10px', color: 'red', fontSize: '12px' }}>
                  {errorMsg.discuss}
                </div>
              )}
            </Grid>

            <Box className={styles["top-center-text-4"]}>
              <div className="box" style={{ marginTop: "50px", cursor: 'pointer' }}>
                <button
                  className="read-more color-light-grey"
                  style={{
                    width: "118px",
                    height: "36px",
                    paddingInline: "14px",
                    paddingBlock: "12px",
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onClick={onSubmit}
                >
                  SEND
                </button>
              </div>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={styles['midForm-right']}>
          <Box className={styles['midForm-right-text']} >
            <Typography className={styles['midForm-right-1']}>Email</Typography>
            <Link href="mailto:info@borgo.ie" style={{ textDecoration: 'none' }}>
              <Typography
                className={styles['midForm-right-2']}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                info@borgo.ie
              </Typography>
            </Link>

            <Box style={{ marginBlock: '50px' }}>
              <Typography className={styles['midForm-right-1']}>Address</Typography>
              <Typography className={styles['midForm-right-2']}>Borgo</Typography>
              <Typography>
                Columba House, Lakeshore Drive,<br />Airside Retail Park, Swords, Co. Dublin
              </Typography>
            </Box>
            <Box className="div-between">
              <Box>
                <Typography className={styles['midForm-right-1']}>Phone Number</Typography>
                <a href="tel:+353 1 211 8010" className={styles['midForm-right-2']} style={{ color: '#fff', textDecoration: 'none' }}> +353 1 211 8010</a>
              </Box>
              <Box>
                <a href="https://www.linkedin.com/company/borgo-accounting/?viewAsMember=true"
                  target="_blank"
                  style={{ border: '2px solid #C44D1F', borderRadius: '50%', height: '40px', width: '40px', marginInline: '10px' }}
                  className='div-center'>
                  <FaLinkedinIn width='100%' height="100%" color="#808080" size={'20px'} />
                </a>
              </Box>
            </Box>
          </Box>
        </Grid>

      </Grid>

      <Grid
        container
        className="flex-direction-column-sm mt-60-sm"
        style={{ marginTop: "150px" }}
      >
        {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}> */}
        <Box className="margin-auto flex-direction-column  mt-40 mt-20-sm" sx={{ zIndex: 5 }} id={styles['map']}>
          <Typography className={styles["contactwhereBox"]}>
            Where to find us
          </Typography>
          <br></br>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.2953024475687!2d-6.227462387803609!3d53.44530726719905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486710f8846ed6c5%3A0x2a0c6c86fd55bcee!2sColumba%20House%2C%20Lakeshore%20Dr%2C%20Airside%20Retail%20Park%2C%20Swords%2C%20Co.%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sin!4v1683269886692!5m2!1sen!2sin" className={styles["contactmap"]} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.2954796123913!2d-6.224882099999999!3d53.445304099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486710f8846ed6c5%3A0x2a0c6c86fd55bcee!2sColumba%20House%2C%20Lakeshore%20Dr%2C%20Airside%20Retail%20Park%2C%20Swords%2C%20Co.%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sin!4v1684130339393!5m2!1sen!2sin" className={styles["contactmap"]} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
        {/* </Grid> */}
      </Grid>
      <Grid
        container
        className="flex-direction-column-sm mt-60-sm"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box className="margin-auto flex-direction-column width-80 mt-40 mt-20-sm">
            <Typography className={styles["contactlastBox"]}>
              “Their proactive approach, prompt responsiveness, and clear communication have made working with them a pleasure. I highly recommend Borgo for anyone seeking exceptional accounting services.”
            </Typography>
          </Box>
          <Box className="div-center flex-direction-column position-relative mt-100 mt-50-sm">
            <Box
              className="display-none-sm position-absolute right-0"
              sx={{ top: "-280px", zIndex: 1 }}
            >
              <Image src={Contact4} width="100%" height="100%" />
            </Box>
            <div
              style={{
                height: "64px",
                width: "64px",
                backgroundColor: "#5E6B7E",
                borderRadius: "50%",
              }}
            ></div>
            <Typography className="font-16 weight-400 text-center color-light-grey mt-20 line-height-19">
              Dennis O'Connor
            </Typography>
            <Typography className="font-16 weight-400 text-center mt-10 color-grey line-height-19">
              Borgo Client
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '150px', marginBottom: y }}>
        <Footer />
      </Box>
    </Grid >
  );
}
