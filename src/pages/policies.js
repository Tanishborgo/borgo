import Navbar from './components/Navbar'
import SpikeLeft from '../../public/assests/Policy-spikeLeft.svg'
import SpikeRight from '../../public/assests/Policy-spikeRight.svg'
import background from '../../public/assests/policiesBack.svg'
import background2 from '../../public/assests/PoliciesBackground_sm.svg'
import Image from 'next/image'
import styles from '@/styles/Policy.module.css'
import Box from '@mui/material/Box';
import Footer from './components/Footer'
import Head from 'next/head'
export default function Policies() {

    return (
        <>
            <Navbar />
            <Head>
        <title>Borgo Policies | Privacy & Cookie Policy Information</title>
        <meta name="description" content="Learn how Borgo handles your data with our Privacy & Cookie Policy. Find out how we collect, use, and protect your personal information online." />
      </Head>
            <section className='position-relative'>

                <Box className={styles['main']}>
                    <Box className={styles['spike-left']}>
                        <Image src={SpikeLeft}></Image>
                    </Box>

                    <Box className={styles['spike-right']}>
                        <Image src={SpikeRight}></Image>
                    </Box>

                    <Box className={styles['background_sm']}>
                        <Image src={background}></Image>
                    </Box>

                    <Box className={styles['background_sm2']}>
                        <Image src={background2}></Image>
                    </Box>


                    <Box className={styles['top-center']} >

                        <Box className={styles['top-center-0']}>
                            <Box className={styles['top-center-1']}>
                                <div className={styles['top-center-1-1']}>UPDATES</div>
                                <div className={styles['top-center-1-2']}>APRIL 2023</div>
                            </Box>
                            <Box className={styles['top-center-2']} id="xyz" >
                                Borgo Privacy Notice<br />
                                and Cookies Policy
                            </Box>
                            <Box className={styles['top-center-2-sm']} id="xyz" >
                                Privacy Policy<br />
                                and Cookies Policy
                            </Box>


                            <Box className={styles['top-center-3']}>
                                Please read this privacy notice ("Privacy Notice") carefully as it describes our
                                collection, use, disclosure, retention and protection of your personal information.
                            </Box>

                        </Box>
                    </Box>

                    <Box className={styles['text-box']}>
                        <Box className={`${styles['policy-box']} position-relative`}>

                            <Box className={styles['policy-box-1']}>
                                Privacy Notice
                            </Box>
                            <Box className={styles['policy-box-2']}>
                                Please read carefuly
                            </Box>
                            <Box className={`${styles['policy-box-3']} position-relative`}>
                                <Box className={styles['policy-box-2']}>
                                    1.	Definitions
                                </Box>
                                <Box>
                                    In this Privacy Notice the following definitions shall apply:
                                </Box>
                                <br></br>
                                <Box>
                                    “Client Personal Data” means any personal data provided to us by you, or on your behalf,
                                    for the purpose of providing our services to you, pursuant to our engagement letter with you;
                                </Box>
                                <br></br>
                                <Box>
                                    “Controller” means —
                                </Box>
                                <Box className='policy-ul'>
                                    <ol>
                                        <li>
                                            a competent authority that, whether alone or jointly with others, determines the purposes and means of the processing of personal data, or
                                        </li>
                                        <li>
                                            where the purposes and means of the processing of personal data are determined by the law of the European Union or otherwise by the law of the State, a controller nominated —
                                            <ol>
                                                <li> by that law, or</li>
                                                <li> in accordance with criteria specified in that law;</li>
                                            </ol>
                                        </li>
                                    </ol>
                                </Box><br></br>
                                <Box>
                                    “Data Protection Legislation” means all applicable privacy and data protection legislation and regulations including the
                                    General Data Protection Regulation EU 2016/679 as supplemented by the Data Protection Bill 2018 together with other laws which relate to privacy and electronic communications;
                                </Box><br></br>
                                <Box>
                                    “Data Subject” means an individual to whom personal data relate;
                                </Box><br></br>
                                <Box>
                                    “Joint Controller” means, where 2 or more controllers jointly determine the purposes and means of the processing of personal data (referred to as “joint controllers” per the Data Protection Bill 2018),
                                    they shall determine their respective responsibilities for compliance in a transparent manner by means of an agreement in writing between them, save in so far as the said responsibilities are determined by the law of the European Union or the law of the State.
                                </Box><br></br>
                                <Box>
                                    “Personal Data” means information relating to —
                                </Box>
                                <Box className='policy-ul'>
                                    <ol>
                                        <li>
                                            an identified living individual, or
                                        </li>
                                        <li>
                                            a living individual who can be identified from the data, directly or indirectly, in particular by reference to —
                                            <ol>
                                                <li> an identifier such as a name, an identification number, location data or an online identifier, or</li>
                                                <li> one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of the individual;</li>
                                            </ol>
                                        </li>
                                    </ol>
                                </Box>
                                <Box>
                                    “Processing” of or in relation to personal data, means an operation or a set of operations that is performed on personal data or on sets of personal data, whether or not by automated means, including —
                                </Box>
                                <Box className='policy-ul'>
                                    <ol>
                                        <li>
                                            the collection, recording, organisation, structuring or storing of the data,
                                        </li>
                                        <li>
                                            the adaptation or alteration of the data,
                                        </li>
                                        <li>
                                            the retrieval, consultation or use of the data,
                                        </li>
                                        <li>
                                            the disclosure of the data by their transmission, dissemination or otherwise
                                        </li>
                                        <li>
                                            making the data available,
                                        </li>
                                        <li>
                                            the alignment or combination of the data, or
                                        </li>
                                        <li>
                                            the restriction, erasure or destruction of the data;
                                        </li>
                                    </ol>
                                </Box>
                                <Box>
                                    “Processor” means an individual who, or a legal person, public authority, agency or other body that, processes personal data on behalf of a controller,
                                    but does not include an employee of a controller who processes such data in the course of his or her employment;
                                </Box>
                                <br></br>
                                <Box>
                                    “Special Categories of Personal Data” means —
                                </Box>
                                <Box className='policy-ul'>
                                    <ol>
                                        <li>
                                            personal data revealing —
                                            <ol>
                                                <li>the racial or ethnic origin of the data subject,</li>
                                                <li>the political opinions or the religious or philosophical beliefs of the data subject, or</li>
                                                <li>whether the data subject is a member of a trade union,</li>
                                            </ol>
                                        </li>
                                        <li>genetic data,</li>
                                        <li>biometric data for the purposes of uniquely identifying an individual,</li>
                                        <li>data concerning health, or</li>
                                        <li>personal data concerning an individual’s sex life or sexual orientation.</li>
                                    </ol>
                                </Box>
                                <Box className={styles['policy-box-2']}>
                                    2.	Who We Are
                                </Box>
                                <Box>
                                    This privacy notice provides you with details of who we are and how we collect and process your personal data.
                                </Box><br></br>
                                <Box>
                                    This is the privacy statement of BORGO ACCOUNTING LIMITED whose place of business and registered address are Columba House, Airside Retail Park, Swords, Co Dublin.
                                </Box><br></br>
                                <Box>
                                    BORGO ACCOUNTING LIMITED “the firm” (referred to as “we”, “us” or “our” in this privacy notice), is a data controller due to our professional obligations which oblige us to take responsibility for your personal data.
                                </Box><br></br>
                                <Box>
                                    Our clients are also Data Controller's (referred to as “the Client”, “You”, or “Yours” in this privacy notice).
                                </Box><br></br>
                                <Box>BORGO ACCOUNTING LIMITED and the Client are not Joint Controllers.</Box><br></br>
                                <Box>Our email address is: <b>info@borgo.ie</b></Box><br></br>
                                <Box>Our postal address is: Columba House, Airside Retail Park, Swords, Co Dublin.</Box><br></br>
                                <Box>Our Borgo Accounting Limited's GDPR owner is <b>Allan Egan</b></Box><br></br>
                                <Box>We are not required to appoint a Data Protection Officer. If you have any questions about this privacy notice, including any requirements to exercise your legal rights please contact Allan Egan</Box><br></br>
                                <Box>It is very important that the information we hold about you is accurate and up to date. Please let us know if at any time your personal information changes by emailing us at info@borgo.ie.</Box><br></br>
                                <Box className={styles['policy-box-2']}>
                                    3.	THE DATA THAT WE COLLECT ABOUT YOU, THE PURPOSE FOR WHICH WE COLLECT IT AND THE GROUNDS UPON WHICH WE PROCESS IT
                                </Box>
                                <Box>
                                    Personal data means any information capable of identifying an individual. It does not include anonymised
                                    data.
                                </Box>
                                <Box>
                                    For the purposes of this privacy notice the firm provides the following services:
                                    <ul>
                                        <li>Accounts Preparation</li>
                                        <li>Bookkeeping</li>
                                        <li>Taxation compliance and advisory services</li>
                                        <li>Payroll Services</li>
                                    </ul>
                                </Box>
                                <Box>
                                    You shall only disclose client personal data to us where:
                                    <ol>
                                        <li>you have provided the necessary information to the relevant data subjects regarding its use</li>
                                        <li>you have a lawful basis upon which to do so, which, in the absence of any other lawful basis,
                                            shall be with the relevant data subject's consent; and</li>
                                        <li>you have complied with the necessary requirements under the data protection legislation to
                                            enable you to do so.</li>
                                    </ol>
                                </Box>
                                <Box>
                                    We shall only process your personal data:
                                    <ul>
                                        <li>In order to provide our services to you and perform any other obligations in accordance with our
                                            engagement with you;</li>
                                        <li>In order to comply with our legal or regulatory obligations; and</li>
                                        <li>Where it is necessary for the purposes of our legitimate interests and those interests are not over
                                            ridden by the data subjects' own privacy rights.</li>
                                    </ul>
                                </Box>
                                <Box>
                                    We may process the following categories of personal data about you:
                                    <ul>
                                        <li>
                                            <b>Engagement Data</b> includes any data which you may provide to us in order to assess whether we
                                            are in a position to act for you in relation the agreed services, and, in the event that we are and
                                            are willing to do so, the information we need for money laundering identification purposes in
                                            advance of formally agreeing to provided the agreed services. It also includes communication
                                            and other data generated in the course of providing the agreed services for which we have been
                                            engaged. We process this data to supply our services and to act for you as your
                                            auditor/accountant. Our lawful grounds for processing this data is the performance of a contract
                                            to which you are party, providing you with advice in relation to providing the agreed services
                                            which we have been engaged and acting for you in connection with that engaged service. We
                                            will only ever process your engagement data for the purpose for which we have been retained, on
                                            the basis which you instruct us to act on your behalf on that service and to retain a record of the
                                            engagement data to comply with our legal and Institute/Association compliance obligations.
                                        </li>
                                        <li>
                                            <b>Communication Data</b> includes any communication that you send to us whether that be through
                                            any contact forms on our website, through email, text, social media messaging, social media
                                            posting or any other communication that you may send us. We process this data for the purposes
                                            of communicating with you, for record keeping and for the establishment, pursuit or defence of
                                            legal claims. Our lawful ground for this processing is our legitimate interests which in this case
                                            are to reply to communications sent to us, to keep records and to provide the agreed services for
                                            which we have been engaged.
                                        </li>
                                        <li>
                                            <b>Personal Contact Data</b> includes data such as your name, title, address, email address, phone
                                            number and contact details,. We process this data to communicate with you, for record keeping
                                            and for the establishment, pursuit or defence of legal claims. Our lawful ground for this
                                            processing is our legitimate interests which in this case are to reply to communications sent to us,
                                            to keep records, to grow our business and remain in contact with you and to provide the agreed
                                            services for which we have been engaged.
                                        </li>
                                        <li>
                                            <b>Marketing Data</b> includes data about your preferences in receiving marketing from us and your
                                            communication preferences. We process this data to enable you to partake in our promotions and
                                            offers, to deliver relevant website content and advertisements to you and to measure or
                                            understand the effectiveness of this advertising. Our lawful ground for this processing is our
                                            legitimate interests which in this case are to study how customers use our products/services, to
                                            develop them, to grow our business and to decide our marketing strategy.
                                        </li>
                                        <li>
                                            <b>Website Data</b> includes data that you may provide to us if you visit our website.
                                        </li>
                                        <li>
                                            <b>Special Categories of Data</b>
                                            Special Categories of Data refers to data that includes details about your race or ethnicity,
                                            religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union
                                            membership, information about your health and genetic and biometric data and information about
                                            criminal convictions and offences.
                                            <br></br>
                                            We do not collect Special Categories of Data about you.
                                            <br></br>
                                            Where we are required to collect personal data by law, or under the terms of the contract
                                            between us and you do not provide us with that data when requested, we may not be able to
                                            perform the agreed service for which we have been engaged (for example, to continue to act for
                                            you in Revenue enquiries). If you don't provide us with the requested data, we may have to cease
                                            to act for you but if we do, we will notify you at the time.
                                            <br></br>
                                            We will only use your personal data for a purpose it was collected for or a reasonably compatible
                                            purpose if necessary. In case we need to use your details for an unrelated new purpose we will
                                            let you know and explain the legal grounds for processing.
                                            <br></br>
                                            We may process your personal data without your knowledge or consent where this is required or
                                            permitted by law.
                                            <br></br>
                                            We do not carry out automated decision making or any type of automated profiling.
                                        </li>
                                    </ul>
                                </Box>
                                <Box className={styles['policy-box-2']}>
                                    4. HOW WE COLLECT YOUR PERSONAL DATA
                                </Box>
                                <Box>
                                    We may collect data about you by you providing the data directly to us (for example by filling in forms on
                                    our website or in our offices or by sending us emails and correspondence by post or by speaking with us
                                    on the telephone and in meetings). We may collect data from third parties who you authorise us to obtain
                                    the data from on your behalf (for example the Revenue Commissioners, the Companies Registration
                                    Office, financial institutions or another professional or adviser).
                                </Box>
                                <Box className={styles['policy-box-2']}>
                                    5. Marketing Communications
                                </Box>
                                <Box>
                                    Our lawful ground of processing your personal data to send you marketing communications is either by
                                    your consent or our legitimate interests (namely to grow our business).
                                    <br></br>
                                    Under the Data Protection Legislation, we may send you electronic marketing communications from us if
                                    (i) you made a purchase or asked for information from us about our goods or services or (ii) you agreed to
                                    receive marketing communications and in each case you have not opted out of receiving such
                                    communications since.
                                    <br></br>
                                    We will not share your personal data with any third party for their own marketing purposes without your
                                    express consent.
                                    <br></br>
                                    You can request us to stop sending you electronic marketing messages at any time by following the opt-
                                    out links on any marketing message sent to you.
                                    <br></br>
                                    You can request us to stop sending you marketing message by post at any time emailing us at
                                    info@borgo.ie, by writing to us at <b>Columba House, Airside Retail Park, Swords, Co Dublin</b> or by
                                    telephoning us at <b>01 211 8010</b>
                                    <br></br>
                                    If you opt out of receiving marketing communications this opt-out does not apply to personal data
                                    provided in connection with a matter on which we are acting or have acted on your behalf and are obliged
                                    to obtain a record of for the purposes of complying with our legal obligations.
                                    <br></br>
                                </Box>
                                <Box className={styles['policy-box-2']}>
                                    6. DISCLOSURES
                                </Box>
                                <Box>
                                    We may have to share your personal data with the parties set out below:
                                    <ul>
                                        <li>
                                            Service providers who provide IT and system administration services including cloud based
                                            services and applications.
                                        </li>
                                        <li>
                                            Service providers who provide business administration services, including third party dictation,
                                            typing and transcription services and external file storage and archiving services.
                                        </li>
                                        <li>
                                        Professional advisers including other accountants, solicitors, bankers, auditors and insurers who
                                        provide consultancy, banking, legal, insurance, accounting services and regulatory support and
                                        compliance services.
                                        </li>
                                        <li>
                                            Risk management auditors and quality control companies.
                                        </li>
                                        <li>
                                            The Revenue Commissioners and Association of Chartered Certified Accountants
                                        </li>
                                        <li>The Data Protection Commission, the Central Statistics Office, and other regulators and
                                            authorities based in Ireland and other relevant jurisdictions who require reporting of processing
                                            activities in certain circumstances.
                                        </li>
                                        <li>
                                            Third parties to whom we sell, transfer, or merge parts of our business or our assets.
                                        </li>
                                    </ul>
                                    <br></br>
                                    We require all third parties to whom we transfer your data to respect the security of your personal data
                                    and to treat it in accordance with the law. We only allow such third parties to process your personal data
                                    for specified purposes and in accordance with our instructions.
                                </Box>
                                <Box className={styles['policy-box-2']}>
                                    7. INTERNATIONAL TRANSFERS
                                </Box>
                                <Box>
                                    Countries outside of the European Economic Area <b>(EEA)</b> do not always offer the same levels of
                                    protection to your personal data, so European law has prohibited transfers of personal data outside of the
                                    EEA unless the transfer meets certain criteria.
                                    <br></br>
                                    Some of our third parties service providers are based outside the European Economic Area <b>(EEA)</b> so
                                    their processing of your personal data will involve a transfer of data outside the EEA.
                                    <br></br>
                                    Whenever we transfer your personal data out of the EEA, we do our best to ensure a similar degree of
                                    security of data by ensuring at least one of the following safeguards is implemented:
                                    <ul>
                                        <li>We will only transfer your personal data to countries that have been deemed to provide an
                                            adequate level of protection for personal data by the European Commission; or
                                        </li>
                                        <li>Where we use certain service providers, we may use specific contracts or codes of conduct or
                                            certification mechanisms approved by the European Commission which give personal data the
                                            same protection it has in Europe; or
                                        </li>
                                        <li>
                                            Where we use providers based in the United States, we may transfer data to them if they are part
                                            of the EU-US Privacy Shield which requires them to provide similar protection to personal data
                                            shared between the Europe and the US.
                                        </li>
                                    </ul>
                                    <br></br>
                                    If none of the above safeguards is available, we may request your explicit consent to the specific transfer.
                                    You will have the right to withdraw this consent at any time.
                                    <br></br>
                                    Please email us at info@borgo.ie if you want further information on the specific mechanism used by us
                                    when transferring your personal data out of the EEA.
                                </Box>
                                <Box className={styles['policy-box-2']}>
                                    8. DATA SECURITY
                                </Box>
                                <Box>
                                    We have put in place commercially reasonably and appropriate security measures to prevent your
                                    personal data from being accidentally lost, used or accessed in an unauthorised way, altered or
                                    disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and
                                    other third parties who have a business need to know such data. They will only process your personal
                                    data on our instructions and they are subject to a duty of confidentiality.
                                    <br></br>
                                    We have put in place procedures to deal with any suspected personal data breach and will notify you and
                                    any applicable regulator of a breach where we are legally required to do so.
                                </Box>
                                <Box className={styles['policy-box-2']}>
                                    9. DATA RETENTION
                                </Box>
                                <Box>
                                    We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for,
                                    including for the purposes of satisfying any legal, accounting, or reporting requirements.
                                    <br></br>
                                    To determine the appropriate retention period for personal data, we consider the amount, nature, and
                                    sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your
                                    personal data, the purposes for which we process your personal data and whether we can achieve those
                                    purposes through other means, and the applicable legal requirements.
                                    <br></br>
                                    By law we have to keep data for six years after the conclusion of any engagement in order to comply our
                                    regulatory and tax obligations. In order to be in a position to establish, exercise and defend our legal
                                    rights, the firm has a policy of retaining all documentation in relation to engagements for seven years and
                                    half years from the date that the documentation was first received or created by the firm, or the
                                    completion date of the agreed service for which we have been engaged.
                                    <br></br>
                                    In some circumstances you can ask us to delete your data: see below for further information.
                                    <br></br>
                                    In some circumstances we may anonymise your personal data (so that it can no longer be associated
                                    with you) for legal know-how, research or statistical purposes in which case we may use this information
                                    indefinitely without further notice to you.
                                </Box>
                                <Box className={styles['policy-box-2']}>
                                    10. YOUR LEGAL RIGHTS
                                </Box>
                                <Box>
                                    Under certain circumstances, you have rights under data protection laws in relation to your personal data.
                                    These include:
                                    <ul>
                                        <li>
                                            <b>The right to Access -</b> you have the right to request a copy of the personal data that we hold
                                            about you, together with other information about our processing of that personal data.
                                        </li>
                                        <li>
                                            <b>The right to Rectification of your personal data -</b> you have the right to request that any
                                            inaccurate data that is held about you is corrected, or if we have incomplete information you may
                                            request that we update the information such that it is complete.
                                        </li>
                                        <li>
                                            <b>The right to Erasure -</b> you have the right to request us to delete personal data that we hold
                                            about you. This is sometimes referred to as the right to be forgotten.
                                        </li>
                                        <li>
                                            <b>The right to Object to processing and restrict processing -</b> you have the right to request that
                                            we no longer process your personal data for particular purposes, or to object to our processing of
                                            your personal data for particular purposes.
                                        </li>
                                        <li>
                                            <b>The right to Data portability -</b> you have the right to request us to provide you, or a third party,
                                            with a copy of your personal data in a structured, commonly used machine readable format.
                                        </li>
                                    </ul>
                                    <br></br>
                                    By consenting to this privacy notice you are giving us permission to process your personal data for the
                                    purposes identified.
                                    <br></br>
                                    If we are processing personal data based on your consent, you may withdraw that consent at any time.
                                    This does not affect the lawfulness of processing which took place prior to its withdrawal.
                                    <br></br>
                                    You can see more about these rights at:
                                    <br></br>
                                    <a href='www.dataprotection.ie' target='_blank' style={{ color: '#C54D1F', cursor: 'pointer', fontSize: '20px' }}>www.dataprotection.ie</a>
                                    <br></br>
                                    Should you require any further details regarding our treatment of personal data, please contact Allan
                                    Egan.
                                    <br></br>
                                    You will not have to pay a fee to access your personal data (or to exercise any of the other rights).
                                    However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive.
                                    Alternatively, we may refuse to comply with your request in these circumstances.
                                    <br></br>
                                    We may need to request specific information from you to help us prove your identity and ensure your right
                                    to access your personal data (or to exercise any of your other rights). This is a security measure to
                                    ensure that personal data is not disclosed to any person who has no right to receive it. We may also
                                    contact you to ask you for further information in relation to your request to speed up our response.
                                    <br></br>
                                    We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a
                                    month if your request is particularly complex or you have made a number of requests. In this case, we will
                                    notify you and keep you updated.
                                    <br></br>
                                    If you are not happy with any aspect of how we collect and use your data, you have the right to complain
                                    to the Data Protection Commission (DPC), the Irish supervisory authority for data protection issues
                                    (<a href='www.dataprotection.ie' target='_blank' style={{ color: '#C54D1F', cursor: 'pointer', fontSize: '20px' }}>www.dataprotection.ie</a>). Please contact us first if you do have a complaint so that we can try to resolve it
                                    for you.
                                </Box>
                            </Box>
                        </Box>
                        <Box className={styles['cookie-box']}>

                            <Box className={styles['policy-box-1']}>
                                Cookie Policy
                            </Box>
                            <Box className={styles['policy-box-2']}>
                                Please read carefuly
                            </Box>
                            <Box className={`${styles['policy-box-3']} position-relative`}>
                                <Box className={styles['policy-box-2']}>
                                    Overview of Cookie Notice
                                </Box>
                                To make this website work properly, we sometimes place small data files called cookies on your device.
                                Most big websites do this too. This notice describes what information cookies on our website gather,
                                how we use it, and why we sometimes need to store these cookies.
                                We will also share how you can prevent these cookies from being stored, however,
                                this may downgrade or limit certain elements of the website's functionality.
                                <br></br>
                                <br></br>
                                <Box className={styles['policy-box-2']}>
                                    What are cookies ?
                                </Box>
                                A cookie is a small text file that a website saves on your computer or mobile device when you visit the website.
                                It enables the website to remember your actions and preferences (such as login, language, font size, shopping basket, and other display preferences) over a period of time,
                                so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
                                When you browse and accept this cookie notice, pieces of code will be stored on your device(s).
                                <br></br>
                                Cookies can be personal data.
                                <br></br>
                                <br></br>
                                <Box className={styles['policy-box-2']}>
                                    How do we use cookies ?
                                </Box>
                                The collection of cookies allows us to better understand your interaction with our website and helps us to improve the service we provide to you.
                                <br></br>
                                The Cookies We Set
                                <br></br>
                                Necessary Cookies: these cookies help make our website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                                Functionality Cookies: these cookies enable our website to remember information that changes the way the website behaves or looks, like the region that you are in.
                                Tracking Cookies: these cookies help us, as website owners, to understand how visitors interact with our website by collecting and reporting information anonymously.
                                For example, visitors' IP addresses are collected by Google Analytics which then provides general statistical reporting to us, to allow us to better understand the geographical breakdown of our customers and how they are interacting with our website.
                                <br></br>
                                Targeting and Advertising Cookies: these cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                                <br></br>
                                Some other examples of the ways in which we use cookies are:
                                — When you submit data through our contact form, cookies may be set to remember your user details for future correspondence.
                                Enabling these cookies is not strictly necessary for the website to work but it will provide you with a better browsing experience.
                                You can delete or block these cookies, but if you do that some features of this site may not work as intended.
                                The cookie-related information is not used to identify you personally and the pattern data is fully under our control.
                                These cookies are not used for any purpose other than those described here.
                                <br></br>
                                <br></br>
                                <Box className={styles['policy-box-2']}>
                                    Third-Party Cookies
                                </Box>
                                In some cases, we also use cookies provided by trusted third parties,  who place cookies on your device when visiting our website.
                                For example, we use Google Analytics, which is one of the most common and trusted analytics solutions on the internet for helping us to understand how you use our website and ways that we can improve your experience.
                                These cookies may track things such as how long you spend on the website and the pages that you visit using a persistent ID for a single user across multiple devices, so we can continue to produce engaging content.
                                <br></br>
                                We have tried to be as clear as possible within this cookie policy.
                                Each third-party provider we use to provide our services to you has their own privacy and cookie notices,
                                which will tell you how they use cookies. As our own cookies and third-party cookies are subject to change,
                                we will do our best to update this notice and our complete and current list of cookies as required.
                                <br></br>
                                <br></br>
                                <Box className={styles['policy-box-2']}>
                                    How to control cookies
                                </Box>
                                To manage your cookies preferences, please go to the Cookies Preferences center in the cookie pop-up you get when you visit the website for the first time.
                                You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                                If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                                <br></br>
                                Disabling cookies will usually result in also disabling certain functionality and features of this website.
                                Where you have given consent to the use of cookies on our website, you may withdraw consent by adjusting your cookie settings.
                                If you would like to know more about how to manage cookies on your specific browser, we suggest you visit some or all of the following websites:
                                <br></br>
                                <br></br>
                                Google Chrome : <a href='https://support.google.com/chrome/answer/95647' target='_blank' className="policy-links"> https://support.google.com/chrome/answer/95647</a> <br></br>
                                Safari : <a href='https://support.apple.com/en-ie/guide/safari/sfri11471/mac' target='_blank' className="policy-links"> https://support.apple.com/en-ie/guide/safari/sfri11471/mac</a> <br></br>
                                Internet Explorer : <a href='https://support.microsoft.com/en-ie/help/17442/windows-internet-explorer-delete-manage-cookies' target='_blank' className="policy-links"> https://support.microsoft.com/en-ie/help/17442/windows-internet-explorer-delete-manage-cookies</a> <br></br>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </section >
            <Box sx={{ marginBlock: '100px' }}>
                <Footer />
            </Box>

        </>
    )
}