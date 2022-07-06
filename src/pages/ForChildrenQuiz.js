import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ForChildrenQuiz.css';
import * as AiIcons from "react-icons/ai";
import Result from './Result';

const ForChildrenQuiz = () => {
    var QuestionBank = [
        {
            Question: "What is the capital of India",
            AnswerText: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Mumbai", isCorrect: false },
                { Answer: "Goa", isCorrect: false },
                { Answer: "Rajasthan", isCorrect: false }
            ]
        },
        {
            Question: "How many days do we have in a week?",
            AnswerText: [
                { Answer: "3", isCorrect: false },
                { Answer: "7", isCorrect: true },
                { Answer: "9", isCorrect: false },
                { Answer: "8", isCorrect: false }
            ]
        },
        {
            Question: "How many letters are there in the English alphabet?",
            AnswerText: [
                { Answer: "22", isCorrect: false },
                { Answer: "23", isCorrect: false },
                { Answer: "25", isCorrect: false },
                { Answer: "26", isCorrect: true }
            ]
        },
        {
            Question: "How many colors are there in a rainbow?",
            AnswerText: [
                { Answer: "2", isCorrect: false },
                { Answer: "8", isCorrect: false },
                { Answer: "7", isCorrect: true },
                { Answer: "9", isCorrect: false },
            ]
        },
        {
            Question: "Which animal is known as the ‘Ship of the Desert?",
            AnswerText: [
                { Answer: "Cow", isCorrect: false },
                { Answer: "Goat", isCorrect: false },
                { Answer: "Monkey", isCorrect: false },
                { Answer: "Camel", isCorrect: true }
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [newSeconds, setNewSeconds] = useState(0);
    const [newMinutes, setNewMinutes] = useState(0)
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000);
        return () => { clearInterval(timer) };
    });

    const handleAnswerResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < QuestionBank.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setNewSeconds(seconds);
            setNewMinutes(minutes);
            setShowScore(true);
        }
    }

    const stop = () => {
        clearInterval(timer)
    }

    return (
        <div className='fcq_container'>
            {
                showScore ? (
                    <div className="fcq_result">
                        <h4>Your result</h4>
                        <p className='fcq_timer'>Test Time {newMinutes < 10 ? "0" + newMinutes : newMinutes}:{newSeconds < 10 ? "0" + newSeconds : newSeconds}, average users: 00:10:14</p>
                        <Result score={score} totalQue={QuestionBank.length} second={newSeconds} minutes={newMinutes} />
                    </div>
                ) : (
                    <div className='fcq_question'>
                        <div className='fcq_question_number'>
                            <span>{currentQuestion + 1}/{QuestionBank.length}</span>
                        </div>
                        <div className="fcq_question_cont">
                            <div className='fcq_question_text'>
                                <span>{currentQuestion + 1}. </span>{QuestionBank[currentQuestion].Question}
                            </div>

                            <div className='fcq_question_options'>
                                {QuestionBank[currentQuestion].AnswerText.map((res, index) => (
                                    <button key={index} onClick={() => handleAnswerResponse(res.isCorrect)}>{res.Answer}</button>
                                ))}
                            </div>
                            <div className="frc_go_back">
                                <AiIcons.AiOutlineArrowLeft />
                                <Link to="/child">Go Back</Link>
                            </div>

                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default ForChildrenQuiz;