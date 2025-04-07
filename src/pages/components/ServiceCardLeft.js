import * as React from 'react';
import serviceCard from '../../../public/assests/News/serviceCard.svg'
import serviceCardBig from '../../../public/assests/News/serviceCardBig.svg'
import Image from 'next/image'
import styles from '../../styles/ServiceCards.module.css'
import icon from '../../../public/assests/ICONS/servicesCalculator.svg'
import iconBig from '../../../public/assests/ICONS/ServicesCalcBig.svg'
import icon2 from '../../../public/assests/News/ServiceComp_sm.svg'
import icon2Big from '../../../public/assests/News/ServiceComp.svg'

import icon3Big from '../../../public/assests/News/fix1.svg'
import icon3 from '../../../public/assests/News/fix2.svg'

export default function ServiceCardLeft({ props }) {

    let heading = '';
    let icon_L = '';
    let icon_S = '';
    let text = '';
    let x = {}
    if (props === 1) {


        heading = 'Accounting';
        icon_L = iconBig;
        icon_S = icon;
        text = "We focus on compliance for our clients to ensure that they don't miss any deadlines, which allows you to focus on running your business.";

    }
    else if (props === 2) {
        heading = 'Online Bookkeeper';
        icon_L = icon2Big;
        icon_S = icon2;
        text = 'We help our clients automate and streamline their bookkeeping, saving you time and delivering real time and accurate financial information.';
    }
    else {
        heading = 'Advisory';
        icon_L = icon3Big;
        icon_S = icon3;
        text = 'We support and advise our clients so you can plan with confidence, improve your business and increase profits.';
    }



    return (
        <>
            <div className={styles['main']}>

                <div className={styles['card-box']} >
                    <Image src={serviceCard} className={styles['card1']} />
                    <Image src={serviceCardBig} className={styles['card2']} />
                </div>

                <div className={styles['cardflex']}>
                    <div>
                        <Image src={icon_S} className={styles['icon']} style={x} />
                        <Image src={icon_L} className={styles['iconBig']} />
                    </div>

                    <div className={styles['head']}>{heading}</div>

                    <div className={styles['text']}>
                        <div className={styles['text-fix']}>
                            {text}
                        </div>
                    </div>
                </div>

            </div>

        </>)
}