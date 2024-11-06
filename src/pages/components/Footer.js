import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Footerlogo from '../../../public/assests/borgo.svg';
import Instagram from '../../../public/assests/instagram.svg';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <Box className="width-100 div-center div-start-sm flex-direction-column-sm position-relative mt-200 mt-20-sm p-inline-80 p-inline-20-sm">
                <div className='width-100'>
                    <Image src={Footerlogo} width='100%' height="100%" />
                    <Typography className='width-100 display-block display-none-sm color-grey font-18'>© 2023 Borgo. All rights reserved. </Typography>
                    {/* Design by drawinginc. Developed by <a className="color-grey" href='https://riverhousetechnologies.com/' target='_blank' > Riverhouse Technologies. </a>   */}
                </div>
                <div className='div-end div-start-sm width-100 mt-40-sm'>
                    {/* <div style={{ border: '1px solid #C44D1F', borderRadius: '50%', height: '40px', width: '40px', marginRight: '10px' }} className='div-center'>
                        <FaTwitter width='100%' height="100%" color="#808080" size={'20px'} />
                    </div>
                    <div style={{ border: '1px solid #C44D1F', borderRadius: '50%', height: '40px', width: '40px', marginInline: '10px' }} className='div-center'>
                        <Image src={Instagram} width='100%' height="100%" />
                    </div>
                    <div style={{ border: '1px solid #C44D1F', borderRadius: '50%', height: '40px', width: '40px', marginInline: '10px' }} className='div-center'>
                        <FaFacebookF width='100%' height="100%" color="#808080" size={'20px'} />
                    </div> */}
                    <a href='https://www.linkedin.com/company/borgo-accounting/?viewAsMember=true' target='_blank' style={{ border: '2px solid #C44D1F', borderRadius: '50%', height: '40px', width: '40px', marginInline: '10px', cursor: 'pointer', zIndex: '2' }} className='div-center'>
                        <FaLinkedinIn width='100%' height="100%" color="#808080" size={'20px'} />
                    </a>
                </div>
                <div className='width-100 display-none display-block-sm' style={{ marginTop: '40px' }}>
                    <Typography className='color-grey font-18 font-14-sm width-100 font-mulish' style={{ marginBottom: '80px' }}>© 2023 Borgo.<br></br> All rights reserved. </Typography>
                    {/* Design by drawinginc. <br></br>Developed by<a className="color-grey font-mulish" href='https://riverhousetechnologies.com/' target='_blank' > Riverhouse Technologies. </a> */}
                </div>
                {/* <div className='width-100 display-none display-block-sm' style={{ marginTop: '40px' }}>
                    <Typography className='color-grey font-18 font-14-sm width-100 font-mulish' style={{ marginBottom: '80px' }}>© 2023 Borgo.<br></br> All rights reserved. Design by drawinginc. <br></br>Developed by<a className="color-grey font-mulish" href='https://riverhousetechnologies.com/' target='_blank' > Riverhouse Technologies. </a></Typography>
                </div> */}
            </Box>
        </>
    )
}
