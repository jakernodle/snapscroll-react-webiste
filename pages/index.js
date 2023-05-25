import { useEffect, useRef } from "react";
import Head from "next/head";
import Mysection from "../components/Mysection";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Script from "next/script";
import { StyleRoot } from 'radium';

export default function Home() {

  const inlineStyles = {
    previewDivText: {fontFamily: 'Manrope, sans-serif', marginRight: 0, textAlign: 'left', fontSize: 28, fontWeight: '400', color: '#949494',
    '@media (max-width: 480px)': {
      textAlign: 'center',
      width: '90%',
    },
    },
    appPreviewButtonsRowDiv: { width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'left', justifyContent: 'left',
    marginTop: 20,
    marginBottom: 20,
    '@media (max-width: 480px)': {
      alignItems: 'center', justifyContent: 'center'
    },
    },
  };

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <StyleRoot>
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="JohnAnge Kernodle iOS App Consultant" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-3R94Z83ZT5"
            strategy="afterInteractive"
          />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3R94Z83ZT5');
          `}
        </Script>
      <div className={`container ${styles.container}`}>
        <div ref={section1}>
          <Mysection
            image={`/images/1.png`}
            headline={`👋 Hi, I'm JohnAnge`}
            header={'I\'m a:'}
            showAttributedSubheadline = {true}
            attributedSubheadline = {
              <div style={{width: '100%', alignItems: 'center', justifyContent: 'center',
              '@media (max-width: 480px)': {
                marginLeft: '20'
              },
              }}>
                <h2 style={{...inlineStyles.previewDivText, marginRight: 0,}}>Lead iOS Developer for <Link href="https://apps.apple.com/pl/app/visa-mobile-online-payments/id1564258838">Visa Mobile</Link> </h2>
                <h2 style={{...inlineStyles.previewDivText, marginRight: 0,}}>Founder of <Link href="https://www.locallygrown.app">Locally Grown</Link> </h2>
                <h2 style={{...inlineStyles.previewDivText, marginRight: 0,}}>Consultant</h2>
              </div>
            }
            goToSectionRef={section2}
            scrollTo={scrollTo}
            showArrow={true}
            buttons = {
              <div style={inlineStyles.appPreviewButtonsRowDiv}>
                <div style={{
                  borderRadius: 10,
                  backgroundColor: "#34C759",
                  padding: "12px 20px",
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "bold",
                  marginRight: 20,
                }}><Link style={{width: '100%', height: '100%'}} href="https://drive.google.com/file/d/1xLUegqNdEWCVW6jH1HBQdy-FD9DyD08x/view?usp=sharing">See Resume</Link> </div>
                <div style={{
                  borderRadius: 10,
                  backgroundColor: "#34C759",
                  padding: "12px 20px",
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "bold",
                  marginRight: 20,
                }}><Link style={{width: '100%', height: '100%'}} href="mailto:jakernodle@gmail.com">Contact</Link> </div>
                <div style={{
                  borderRadius: 10,
                  backgroundColor: "#34C759",
                  padding: "12px 20px",
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "bold",
                }}><Link style={{width: '100%', height: '100%'}} href="www.johnange.com/about">About Me</Link> </div>
              </div>
            }
          />
        </div>
        <div ref={section2}>
          <Mysection
            image={`/images/shoppersapp.png`}
            headline={`I'm a Founder`}
            header={'Locally Grown'}
            showAttributedSubheadline = {false}
            subHeadlineText = {'Buy food from local farms.'}
            paragraphText={'Find local farms, place orders and schedule a pickup, dropoff or delivery.'}
            goToSectionRef={section3}
            scrollTo={scrollTo}
            showArrow={true}
            buttons = {
              <div style={inlineStyles.appPreviewButtonsRowDiv}>
                <div style={{
                  borderRadius: 10,
                  backgroundColor: "#34C759",
                  padding: "12px 20px",
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "bold",
                  marginRight: 20,
                }}><Link style={{width: '100%', height: '100%'}} href="https://testflight.apple.com/join/VlbvxMAE">Download the Beta</Link> </div>
                <div style={{
                  borderRadius: 10,
                  backgroundColor: "#34C759",
                  padding: "12px 20px",
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "bold",
                }}><Link style={{width: '100%', height: '100%'}} href="https://www.locallygrown.app">Visit Website</Link> </div>
              </div>
            }
          />
        </div>
        <div ref={section3}>
          <Mysection
            image={`/images/visaapp.png`}
            headline={`A Lead iOS Developer`}
            header={'Visa Mobile'}
            showAttributedSubheadline = {false}
            subHeadlineText = {'Easy online payments.'}
            paragraphText={'Once you sign up, all you need to do to pay online with your Visa card is to enter your phone number and confirm the payment in the app. It’s fast, safe and convenient.'}
            goToSectionRef={section4}
            scrollTo={scrollTo}
            showArrow={true}
            buttons = {
              <div style={inlineStyles.appPreviewButtonsRowDiv}>
                <div style={{
                  borderRadius: 10,
                  backgroundColor: "#34C759",
                  padding: "12px 20px",
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "bold",
                }}><Link style={{width: '100%', height: '100%'}} href="https://apps.apple.com/pl/app/visa-mobile-online-payments/id1564258838">View in AppStore</Link> </div>
              </div>
            }
          />
        </div>
        <div ref={section4}>
          <Mysection
            image={`/images/rellaapp.png`}
            headline={`A Former President`}
            header={'Rella'}
            showAttributedSubheadline = {false}
            subHeadlineText = {'Digital workspace for creators.'}
            paragraphText={'Rella is the only tool needed to grow your social media and manage your content with our all-in-one social media management and planning tool.'}
            goToSectionRef={section1}
            scrollTo={scrollTo}
            showArrow={false}
            buttons = {
              <div style={inlineStyles.appPreviewButtonsRowDiv}>
                 <div style={{
                  borderRadius: 10,
                  backgroundColor: "#34C759",
                  padding: "12px 20px",
                  fontSize: "18px",
                  color: "#fff",
                  fontWeight: "bold",
                }}><Link style={{width: '100%', height: '100%'}} href="https://apps.apple.com/us/app/rella-social-media-management/id1592004181">View in AppStore</Link> </div>
                
              </div>
            }
          />
        </div>
      </div>
    </div>
    </StyleRoot>
  );
}
