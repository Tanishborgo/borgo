import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import borgo from '../../../public/assests/borgo.svg';
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
const theme = createTheme({
    breakpoints: {
        values: {
            xxs: 0, // small phone
            xs: 300, // phone
            sm: 600, // tablets
            md: 900, // small laptop
            lg: 1200, // desktop
            xl: 1536 // large screens
        }
    },
});

export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawerWidth = '100%';
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenmobile, setDropdownOpenmobile] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleHover = () => {
        setDropdownOpen(true);
    };

    // Function to handle hover out (closing dropdown)
    const handleHoverOut = () => {
        setDropdownOpen(false);
    };

    const handleClickmobile = () => {
        setDropdownOpenmobile(!dropdownOpenmobile);
    };


    const drawer = (
        <Box
            className={'background-blue color-light-grey'}
            sx={{ textAlign: 'center', overflowX: 'hidden', overflowY: 'scroll' }}>
            <Box sx={{ justifyContent: 'space-between', display: 'flex', margin: '30px', marginTop: '40px' }}>
                <div>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Image src={borgo} alt="Borgo logo" width='134' height="48" />
                    </Link>
                </div>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Divider />
            <List>
                <ListItem>
                    <ListItemButton>
                        <Link href="/about" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                            <Typography className='font-32'>About Us</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link href="/process" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                            <Typography className='font-32'>Our Process</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>

                    <ListItemButton onClick={handleClickmobile} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        {/* <Link href="/services" style={{ textDecoration: 'none', color: '#DDDDDD' }}> */}
                        <Typography className='font-32'>Our Services</Typography>
                        {/* </Link> */}
                        <div>
                            {dropdownOpenmobile && (
                                <Box
                                    sx={{

                                        backgroundColor: '#17172C',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                        zIndex: 9999,
                                        borderRadius: '4px',

                                    }}
                                >
                                    <List>

                                        <ListItem>
                                            <Link href="/services-accounting" style={{ textDecoration: 'none', color: '#DDDDDD', }}>
                                                <Typography className=' font-20'>Accounting and Compliance</Typography>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="/services-onlinebookkeepr" style={{ textDecoration: 'none', color: '#DDDDDD', }}>
                                                <Typography className=' font-20'>Online Bookkeeper</Typography>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="/services-advisory" style={{ textDecoration: 'none', color: '#DDDDDD', }}>
                                                <Typography className=' font-20'>Advisory</Typography>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="/services-xero" style={{ textDecoration: 'none', color: '#DDDDDD', }}>
                                                <Typography className=' font-20'>Xero Migration</Typography>
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Box>
                            )}
                        </div>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link href="/blog" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                            <Typography className='font-32'>Blog</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link href="/contact" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                            <Typography className='font-32'>Contact</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Link href="/policies" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                            <Typography className='font-32'>Policies</Typography>
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Set AppBar to fixed position */}
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: '#17172C',  // Background color added here
                    position: 'fixed', // Ensures AppBar stays fixed on scroll
                    top: 0,
                    width: '100%',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    boxShadow: 'none' // Remove shadow if needed
                }}
            >
                <Toolbar sx={{
                    backgroundColor: '#17172C', // Background color for Toolbar
                    height: '80px',
                    marginInline: "20px",
                    marginTop: '20px',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Image src={borgo} alt="Borgo logo" className={styles['logo-nav']} />
                        </Link>
                    </div>

                    <Box className="box-nav22" sx={{
                        display: { xs: 'block', sm: 'none', md: 'none' } // show on xs and sm, hide on md+
                    }}>
                        <Typography
                            className="read-more color-light-grey font-mulish"
                            style={{ width: "158px", height: "36px", paddingInline: "14px", paddingBlock: "12px", textAlign: 'center', position: "relative", zIndex: 9999 }}
                        >
                            <a
                                href="https://calendly.com/joanne-mcdonnell-borgo/15min" target='_blank' style={{ textDecoration: "none", color: "#DDDDDD" }}
                            >
                                {" "}SCHEDULE A CALL{" "}
                            </a>
                        </Typography>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', width: '548px', position: 'absolute' }}>
                        <Link href="/about" style={{ textDecoration: 'none' }}>
                            <Button className='font-mulish color-light-grey weight-700 font-16' sx={{ textTransform: 'capitalize' }}>
                                About Us
                            </Button>
                        </Link>
                        <Link href="/process" style={{ textDecoration: 'none' }}>
                            <Button className="font-mulish color-light-grey weight-700 font-16" sx={{ textTransform: 'capitalize' }}>
                                Our Process
                            </Button>
                        </Link>
                        <Box sx={{ display: 'inline-block', position: 'relative' }}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHoverOut}
                        >

                            <Button className="font-mulish color-light-grey weight-700 font-16" sx={{ textTransform: 'capitalize' }}>
                                Our Services
                            </Button>

                            {dropdownOpen && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '40px',
                                        left: 0,
                                        backgroundColor: '#17172C',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                        zIndex: 9999,
                                        borderRadius: '4px',
                                        width: '300px',
                                    }}
                                >
                                    <List>
                                        <ListItem>
                                            <Link href="/services-accounting" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                                                <Typography className="font-mulish color-light-grey weight-700 font-16" sx={{ textTransform: 'capitalize' }}>Accounting and Compliance</Typography>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="/services-onlinebookkeepr" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                                                <Typography className="font-mulish color-light-grey weight-700 font-16" sx={{ textTransform: 'capitalize' }}>Online Bookkeeper</Typography>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="/services-advisory" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                                                <Typography className="font-mulish color-light-grey weight-700 font-16" sx={{ textTransform: 'capitalize' }}>Advisory</Typography>
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="/services-xero" style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                                                <Typography className="font-mulish color-light-grey weight-700 font-16" sx={{ textTransform: 'capitalize' }}>Xero Migration</Typography>
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Box>
                            )}
                        </Box>
                        <Link href="/blog" style={{ textDecoration: 'none' }}>
                            <Button className="font-mulish color-light-grey weight-700 font-16" sx={{ textTransform: 'capitalize' }}>
                                Blog
                            </Button>
                        </Link>

                        <Link href="/policies" style={{ textDecoration: 'none' }}>
                            <Button className="font-mulish color-light-grey weight-700 font-16" sx={{ textTransform: 'capitalize' }}>
                                Policies
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box className="display-flex">
                            <Box className="box-nav" style={{ margin: "10px" }}>
                                <Typography
                                    className="read-more color-light-grey font-mulish"
                                    style={{ width: "158px", height: "36px", paddingInline: "14px", paddingBlock: "12px", textAlign: 'center', position: "relative", zIndex: 9999 }}
                                >
                                    <a
                                        href="/contact" style={{ textDecoration: "none", color: "#DDDDDD", textAlign: 'center' }}
                                    >
                                        {" "}CONTACT US{" "}
                                    </a>
                                </Typography>
                            </Box>
                            <Box className="box-nav" style={{ margin: "10px" }}>
                                <Typography
                                    className="read-more color-light-grey font-mulish"
                                    style={{ width: "158px", height: "36px", paddingInline: "14px", paddingBlock: "12px", textAlign: 'center', position: "relative", zIndex: 9999 }}
                                >
                                    <a
                                        href="https://calendly.com/joanne-mcdonnell-borgo/15min" target='_blank' style={{ textDecoration: "none", color: "#DDDDDD" }}
                                    >
                                        {" "}SCHEDULE A CALL{" "}
                                    </a>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* Add top padding to compensate for fixed AppBar */}
            <Box component="main" sx={{ paddingTop: '120px' }}>
                {/* Your main content goes here */}
            </Box>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    className="font-mulish background-blue"
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        backgroundColor: '#17172C',
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </ThemeProvider>
    )
}
