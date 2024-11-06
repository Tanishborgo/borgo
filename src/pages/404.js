import FillLeft from '../../public/assests/Error404-FillLeft.svg'
import FillRight from '../../public/assests/Error404-FillRight.svg'
import SpikeLeft from '../../public/assests/Error404-SpikeLeft.svg'
import SpikeRight from '../../public/assests/Error404-SpikeRight.svg'
import Watch from '../../public/assests/ICONS/Error404-Watch.svg'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from './components/Navbar'
import styles from '@/styles/Error404.module.css'
import Link from 'next/link'

export default function Error404() {
    return (
        <>
            <Navbar />
            <Box sx={{ overflow: "hidden", width: "100%" }}>
                <Image src={FillLeft} className={styles['Fill-Left']}></Image>
                <Image src={SpikeLeft} className={styles['Spike-Left']}></Image>
                <Image src={FillRight} className={styles['Fill-Right']}></Image>
                <Image src={SpikeRight} className={styles['Spike-Right']}></Image>

                <Box className={styles['center-container']} >

                    <Box className={styles['center-box']}>

                        <Box className={styles['center-box-left']}>
                            <div className='font-mulish' style={{ padding: '30px', paddingTop: '80px' }}>
                                <Typography className={styles['center-box-left-1']}>OOPS!</Typography>
                                <Typography className={styles['center-box-left-2']}><span className={styles['error-anima']}>404</span> Error</Typography>

                                <Typography className={styles['center-box-left-3']}>That's okay we all get lost sometimes</Typography>

                                <div className={styles['center-box-left-4-3']}>
                                    <div>
                                        <Typography className={styles['center-box-left-3']}>Lets get you back</Typography>
                                    </div>

                                    <div className={styles['center-box-left-4-2']}>

                                        <Link href='/' style={{ textDecoration: 'none', color: '#DDDDDD' }}>
                                            <Typography className={styles['center-box-left-4']}>HOME</Typography>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </Box>
                        <Box className={styles['center-box-right']}>
                            <Image src={Watch} className={styles['watch']}></Image>
                        </Box>

                    </Box>

                </Box>


            </Box>
        </>
    )
}