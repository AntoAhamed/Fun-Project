import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizGame = (props) => {
    const { questions, currentQuestion, score, started, finished, question, setQuestion, option1, setOption1, option2, setOption2, option3, setOption3, option4, setOption4, answer, setAnswer, handleAddQuestion, handleRemoveQuestion, handleAnswer, handleReset, handleResetQuestions, handleSubmit } = props;

    const navigate = useNavigate()

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox?.auth?.token !== '' && toolbox?.auth?.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Eazy Quiz</h1>
                    <h4>Details:</h4>
                    <p>
                        This is a quiz type game. The rules are very simple. You have to answer some questions to win. As simple as that. But here is a small twist.
                        There is no reward or penalty. So play as much as you want. To know about the reward system go to <b>Dashboard</b>.
                    </p>
                    <h4>Rules:</h4>
                    <p>
                        1. At first someone have to set the questions. Enter questions one by one and click <b>Add Question</b> to add questions.
                    </p>
                    <p>
                        2. Once all questions are set then click <b>Start Quiz</b> to start the quiz.
                    </p>
                    <p>
                        3. If you don't want to set questions, simply click <b>Star Quiz</b> without adding or removing any questions to play quiz with default questions.
                    </p>
                    <p>
                        4. Click <b>Reset Questions</b> to reset quiz settings.
                    </p>
                    <p>
                        5. You can also remove questions one by one.
                    </p>
                    <p>
                        6. There are 3 default questions.
                    </p>
                    <p>
                        7. Your score will be shown at the end of the quiz.
                    </p>
                    <p className='fs-4 fw-bold text-center'>Best of Luck</p>
                </div>
                {started ? <div className='col-md-6 text-container d-flex flex-row'>
                    <div className='border border-5 rounded text-center feature-card bg-light text-dark'>
                        <h2 className='fs-2 fw-bolder mb-3'>Eazy Quiz</h2>
                        {!finished ? (
                            <div>
                                <h3 className='mb-3'>{questions[currentQuestion].question}</h3>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button className='btn btn-primary rounded-pill m-2' key={index} onClick={() => handleAnswer(option)}>
                                        {option}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <h3>Your score is: {score} / {questions.length}</h3>
                                <button className='btn btn-primary rounded-pill mt-4' onClick={handleReset}>Reset</button>
                            </div>
                        )}
                    </div>
                </div> :
                    <div className='col-md-6 p-3'>
                        <div className='border border-2 rounded p-3 bg-light text-dark'>
                            <h2 className='fs-2 fw-bolder text-center mb-3'>Set Questions</h2>
                            <input
                                className='form-control mb-3'
                                type='text'
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder='Enter Question'
                            />
                            <div className='row mb-3'>
                                <div className='col-md-3 mb-2'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={option1}
                                        onChange={(e) => setOption1(e.target.value)}
                                        placeholder='Enter Option 1'
                                    />
                                </div>
                                <div className='col-md-3 mb-2'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={option2}
                                        onChange={(e) => setOption2(e.target.value)}
                                        placeholder='Enter Option 2'
                                    />
                                </div>
                                <div className='col-md-3 mb-2'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={option3}
                                        onChange={(e) => setOption3(e.target.value)}
                                        placeholder='Enter Option 3'
                                    />
                                </div>
                                <div className='col-md-3 mb-2'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={option4}
                                        onChange={(e) => setOption4(e.target.value)}
                                        placeholder='Enter Option 4'
                                    />
                                </div>
                                <div className='col-6 mt-3'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        placeholder='Enter Answer'
                                    />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <button className='btn btn-primary rounded-pill mb-2' onClick={handleAddQuestion}>Add Question</button>
                                <button className='btn btn-primary rounded-pill mx-2 mb-2' onClick={handleSubmit}>Start Quiz</button>
                                <button className='btn btn-primary rounded-pill mb-2' onClick={handleResetQuestions}>Reset Questions</button>
                            </div>
                            <span className='text-center mb-3'>(Click <b>'Start Quiz'</b> without setting questions to take quiz with default questions)</span>
                            <hr />
                            <h2 className='fs-2 fw-bold text-center mb-3'>Questions</h2>
                            {questions.length > 0 ? questions.map((question, index) => (
                                <div key={index} className='mb-2'>
                                    <h4 className='fs-4 fw-bold m-2'>Q {index + 1}. {question.question}</h4>
                                    <div className='row p-2'>
                                        <p className='col-md-4'>Options:</p>
                                        {question.options.map((option, index) => (
                                            <p key={index} className='col-md-2'>{index + 1}. {option}</p>
                                        ))}
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='m-2'>Answer: {question.answer}</h5>
                                        <button className='btn btn-danger btn-sm rounded-pill m-2' onClick={()=>handleRemoveQuestion(question)}>Remove</button>
                                    </div>
                                </div>
                            )) : "No questions to show"}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default QuizGame;
