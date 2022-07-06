import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/1slide.gif';
import './Home.css'

const Home = () => {
    return (
        <div className='hm_container'>
            <div className="hm_image">
                <img src={HeroImage} />
            </div>
            <div className="hm_text">
                <div className="hm_text_header">
                    <h1>Online psychological, educational and IQ tests</h1>
                </div>
                <div className="hm_text_description">
                    <p>Find out the answer to how to become better if you don't know your strengths and weaknesses.</p>
                </div>
                <Link to="/child">
                    <button>Test me!</button>
                </Link>
            </div>
        </div>
    )
}

export default Home