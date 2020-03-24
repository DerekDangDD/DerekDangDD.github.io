import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Helmet from "../component/common/Helmet";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ImageGallery from 'react-image-gallery';

//placeholders 
const images = [
    {
        original: '/assets/images/projects/MecTech/ski-hill-vid.gif',
        thumbnail: '/assets/images/projects/MecTech/ski-hill-vid.gif',
    },
    {
      original: '/assets/images/projects/MecTech/MtCam.png',
      thumbnail: '/assets/images/projects/MecTech/MtCam.png',
    },
    {
      original: '/assets/images/projects/MecTech/ShoreLine.png',
      thumbnail: '/assets/images/projects/MecTech/ShoreLine.png',
    },
    {
        original: '/assets/images/projects/MecTech/bottle-vid.gif',
        thumbnail: '/assets/images/projects/MecTech/bottle-vid.gif',
    },
  ];

  const images_talkingcard = [
    {
        original: '/assets/images/projects/TalkingCard/tc_home.png',
        thumbnail: '/assets/images/projects/TalkingCard/tc_home.png',
    },
    {
      original: '/assets/images/projects/TalkingCard/tc_edit.png',
      thumbnail: '/assets/images/projects/TalkingCard/tc_edit.png',
    },
    {
      original: '/assets/images/projects/TalkingCard/tc_review.png',
      thumbnail: '/assets/images/projects/TalkingCard/tc_review.png',
    },
  ];

  const images_outfit = [
    {
        original: '/assets/images/projects/Outfit/outfit_fittingroom.png',
        thumbnail: '/assets/images/projects/Outfit/outfit_fittingroom.png',
    },
    {
      original: '/assets/images/projects/Outfit/outfitsizing.png',
      thumbnail: '/assets/images/projects/Outfit/outfitsizing.png',
    },
  ];

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Chemical Engineer Turned Software Developer',
        title: 'Derek Dang',
        description: 'Computer System Technology Co-op Student BCIT',
        buttonText: 'About Me',
        buttonLink: '#about'
    }
]
const PortfolioLanding = () => {
    let title = 'About Me',
        description = "I am a motivated individual who enjoys tackling on new challenges. Often, I see myself learning a new language or working on a new project. One of my biggest highlights is my ability to learn and express myself. I'm not afraid to be wrong and I welcome honest feedback. With this, I'm able to thrive and work in a variety of teams and adapt to different personalities and culture.";
    const PostList = BlogContent.slice(0 , 3);
    return (
        <div>
            <Helmet pageTitle="Portfolio Landing" />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">

                                        <div className={`inner ${value.textPosition}`} style={{color:"whitesmoke", textShadow:"1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"}}>
                                            {value.category ? <span style={{color:"whitesmoke"}}>{value.category}</span> : ''}
                                            {value.title ? <h1 className="title" dangerouslySetInnerHTML={{__html: value.title}} style={{color:"whitesmoke"}}></h1> : ''}
                                            {value.description ? <p className="description">Computer System Technology Co-op Student BCIT<br></br>Chemical Engineering - Bachelor's Degree UBC</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/profilepic.jpeg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

             {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1" id="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="section-title">
                                            <h2 className="title">Projects</h2>
                                    </div>
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center" style={{backgroundColor:"#F4ECF7"}}>
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    {/* <img className="w-100" src="" alt="Service Images"/> */}
                                                    <ImageGallery items={images} />;
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">MEC Mountain Cam & Shoreline Challenge 1st Place</h4>
                                                    <p>Participated in the Summer 2019 SAP iXp x IC 24-hour Hackathon in a group of 3</p>
                                                    <p>
                                                    <b>MEC MountainCam</b><br></br>
                                                    <ul className="liststyle">
                                                        <li>Our goal for this interaction was to help people get closer to nature while skiing</li>
                                                        <li>Explored machine learning libraries and implemented a tool that identifies the number of people on a ski hill from a mountain camera feed</li>
                                                    </ul>
                                                    </p>
                                                    <p>
                                                    <b>MEC Shoreline Challenge</b><br></br>
                                                    <ul className="liststyle">
                                                        <li>The goal for the second campaign we have is to focus more on the stewardship and sustainability portions of MEC’s values</li>
                                                        <li>Trained a computer model to identify water bottles in order to demonstrate the possibility of detecting trash along shorelines</li>
                                                    </ul>
                                                    </p>
                                                    <p>Tech Stack: Python, TensorFlow, OpenCV, Matplotlib</p> 
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center" style={{backgroundColor:"#FDEDEC"}}>
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    {/* <img className="w-100" src="" alt="Service Images"/> */}
                                                    <ImageGallery items={images_talkingcard} />;
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">Talking Card</h4>
                                                    <h5><a href="https://co-op-hackathon.firebaseapp.com/">https://co-op-hackathon.firebaseapp.com</a></h5>
                                                    <p>Participated in the BCIT Hackathon 2019 in a random group of 5 </p>
                                                    <p>
                                                    <ul className="liststyle">
                                                        <li>Developed a quiz app for the visually impaired in a random team of 5 by learning and implementing Voice Command and Text to Speech APIs</li>
                                                        <li>Awarded “Flashiest Project” due to our willingness to try new technology</li>
                                                    </ul>
                                                    </p>
                                                    <p>Tech Stack: HTML, CSS, JavaScript, and Firebase</p> 
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center" style={{backgroundColor:"#F5EEF8"}}>
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    {/* <img className="w-100" src="" alt="Service Images"/> */}
                                                    <ImageGallery items={images_outfit} />;
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <h4 className="title">OutFit Doesfit</h4>
                                                    <h5><a href="https://outfit-doesfit.firebaseapp.com/">https://outfit-doesfit.firebaseapp.com</a></h5>
                                                    <p>Made a web app in a team of 3 that allows users to know their clothes sizes of different brands.</p>
                                                    <p>
                                                    <ul className="liststyle">
                                                        <li>Integrated Google Firebase to store user information in real time</li>
                                                        <li>Utilized agile methodology to practice iterative progression, such as daily scrums and sprint planning</li>
                                                    </ul>
                                                    </p>
                                                    <p>Tech Stack: HTML, CSS, JavaScript, and Firebase</p> 
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

            {/* Start Contact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactOne />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </div>
    )
}

export default PortfolioLanding;
