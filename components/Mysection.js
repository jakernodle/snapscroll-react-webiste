import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Mysection.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StyleRoot } from 'radium';
gsap.registerPlugin(ScrollTrigger);

export default function Mysection({
  image,
  headline,
  header,
  showAttributedSubheadline,
  attributedSubheadline,
  subHeadlineText,
  paragraphText,
  scrollTo,
  goToSectionRef,
  showArrow,
  color,
  buttons,
}) {

  const inlineStyles = {
    appPreviewRowDiv: { 
      width:'100%',
      paddingLeft: '20px',
      paddingRight: '20px',
      margin: 40, 
      marginBottom: 0, 
      display: 'flex', 
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center',
      '@media (max-width: 720px)': {
        flexDirection: 'column-reverse',
      },
    },
    appPreviewColDiv: { width: '40%', margin: 14, display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center',
    '@media (max-width: 720px)': {
      alignItems: 'center',
      width: '98%'
    },
    },
    previewHeaderText: { color: '#fff', width: '100%', textAlign: 'left', paddingBottom: 8, fontSize: 56, fontWeight: 'bold', marginTop: 0, marginBottom: 0,
    '@media (max-width: 480px)': {
      textAlign: 'center'
    },
    },
    previewHeaderSubText: { color: '#fff', paddingBottom: 12, width: '100%', textAlign: 'left', fontWeight: '400', fontSize: 30, marginTop: 0, marginBottom: 0,
    '@media (max-width: 480px)': {
      textAlign: 'center'
    },
    },
    previewDivText: {fontFamily: 'Manrope, sans-serif', textAlign: 'left', fontSize: 28, fontWeight: '400', color: '#818589',
    '@media (max-width: 480px)': {
      textAlign: 'center',
      width: '90%',
    },
    },
    PreviewImageDiv: {
      position: 'relative',
      width: '50%',
      maxWidth: '500px',
      marginLeft: 40,
      aspectRatio: '1',
      '@media (max-width: 720px)': {
        marginLeft: 0,
        width: '60%'
      },
    },
  };


  const headlineRef = useRef();
  const sectionRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);
  return (
    <StyleRoot>
    <div className={styles.section} style = {{background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} ref={sectionRef}>
      <div className={styles.copy}>
        <h2 ref={headlineRef}>{headline}</h2>
      </div>
      {/*<div style = {{background: '#000'}} layout={`fill`} />*/}
      <div style={inlineStyles.appPreviewRowDiv}>
            <div style={inlineStyles.appPreviewColDiv}>
              <h1 style={inlineStyles.previewHeaderText}>{header}</h1>
              {showAttributedSubheadline == true ? attributedSubheadline : <h2 style={inlineStyles.previewHeaderSubText}>{subHeadlineText}</h2>}
              {showAttributedSubheadline == false && <h3 style={inlineStyles.previewDivText}>{paragraphText}</h3>}
              {buttons}
            </div>
            <div style={inlineStyles.PreviewImageDiv}>
              <Image src={image} layout='fill' objectFit='contain' alt="iphone ios food app preview" />
            </div>
          </div>
      {showArrow && (
        <button
          className={styles.downarrow}
          onClick={() => scrollTo(goToSectionRef)}
        ></button>
      )}
    </div>
    </StyleRoot>
  );
}
