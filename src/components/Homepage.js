import React from 'react';
import About from './About';
import Demo from './ImgSlide';
import cat from '../vidBg/cat.mp4';
import Gallery from './Gallery';
import Section from './Section';

const style = {
    landingPage: {
        width: '100vw',
        height: '70vh',
        display: 'grid',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
    },
    videoBackground: {
        position: 'absolute',
        width: '100vw',
        height: '70vh',
        overflow: 'hidden',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center'
    },
    overlay: {
        width: '100vw',
        height: '70vh',
        position: 'absolute',
        background: 'rgba(26,26,26,0.5)'
    },
    a: {
        padding: '16px 26px',
        color: 'white',
        border: '1px solid white',
        borderRadius: '24px',
        fontSize: '14px',
        fontWeight: '400',
        backgroundColor: 'rgb(44,152,240,0.1)',
        alignSelf: 'center'
    },

    homepageContent: {

    }
}

const Homepage = () => (
  <div>
    <div className='landingPage' style={style.landingPage}>
        <div className="video-background" style={style.videoBackground}>
            <video src={cat} autostart='true' autoPlay loop />
        </div>
        <div className='overlay' style={style.overlay}></div>
        <div className='homepageContent' style={style.homepageContent}>
            <div className='row'>
                <div className='col s12'>
                    <h3>MAKING YOUR DAY BRIGHTER WITH CATS</h3>
                </div>
                <div className='col s12'>
                    <a href="#modal1" style={style.a} className='a modal-trigger'>WATCH CAT VIDEO</a>
                </div>
            </div>
        </div>
    </div>
    <About />
    <Section />
    <div id='video' className='slider valign-wrapper scrollspy'>
        <div className='container'>
            <Demo />
        </div>
    </div>
    <Gallery />
  </div>
);

export default Homepage;