import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import './Result.css';
import Whatsapp from '../assets/images/whatsapp.png';
import Telegram from '../assets/images/telegram.png';
import Facebook from '../assets/images/facebook.png';
import Twitter from '../assets/images/twitter.png';
import Pinterest from '../assets/images/pinterest.png';
import Star from '../assets/images/star.png';
import Rating from '../assets/images/rating.png';

const Result = (props) => {
    let score = props.score;
    let totalQue = props.totalQue;
    let percent = Math.floor((score / totalQue) * 100);

    let result;
    if (percent < 20) {
        result = <p>Your IQ is {percent}. this corresponds to a below iq level. In this test you have {score} correct answers from {totalQue}. Its a bad result. You have to work hard
            for your age 11.</p>
    } else if (percent > 20 && percent < 50) {
        result = <p>Your IQ is {percent}. this corresponds to a low iq level. In this test you have {score} correct answers from {totalQue}. this is not a very good result
            for your age 11.</p>
    } else if (percent > 50 && percent < 80) {
        result = <p>Your IQ is {percent}. this corresponds to a average iq level. In this test you have {score} correct answers from {totalQue}. this average result
            for your age 11.</p>
    } else if (percent > 80 && percent < 90) {
        result = <p>Your IQ is {percent}. this corresponds to a good iq level. In this test you have 8 correct answers from 30. this is not a good result
            for your age 11.</p>
    } else {
        result = <p>Your IQ is {percent}. this corresponds to a excilent iq level. In this test you have 8 correct answers from 30. this is not a excilent result
            for your age 11.</p>
    }
    return (
        <div className='res_container'>
            <div className="res_score">

                {result}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque obcaecati ipsa vel labore reiciendis debitis. Saepe, voluptates non. Cumque, temporibus!</p>
                <h4>Permanent result link</h4>
                <a href="/">https://github.com/rohankumar50</a>
                <div className="res_social">
                    <h4>Share result</h4>
                    <div className="res_social_icons">
                        <div className="res_social_icon">
                            <img src={Whatsapp} alt="whatsapp" />
                        </div>
                        <div className="res_social_icon">
                            <img src={Telegram} alt="telegram" />
                        </div>
                        <div className="res_social_icon">
                            <img src={Facebook} alt="fb" />
                        </div>
                        <div className="res_social_icon">
                            <img src={Twitter} alt="twitter" />
                        </div>
                        <div className="res_social_icon">
                            <img src={Pinterest} alt="pinterest" />
                        </div>
                    </div>

                </div>

                <div className="res_go_back">
                    <AiIcons.AiOutlineArrowLeft />
                    <Link to="/child">Go Back</Link>
                </div>
            </div>
            <div className="res_rating">
                <div className="res_star">
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Rating} alt="star" />
                </div>
                <div className="res_rating_score">
                    <h2>4.2</h2>
                </div>
            </div>

        </div>
    )
}

export default Result