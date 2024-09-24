import React, { useState } from 'react';

const QuizGame = () => {
    const [questions, setQuestions] = useState([
        { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
        { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
        { question: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Tolstoy', 'Hemingway', 'Austen'], answer: 'Shakespeare' },
    ]);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [started, setStarted] = useState(false);

    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinished(true);
        }
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: question, options: [option1, option2, option3, option4], answer: answer }]);
        setQuestion('')
        setOption1('')
        setOption2('')
        setOption3('')
        setOption4('')
        setAnswer('')
    }

    const handleSubmit = () => {
        setStarted(true)
    }

    const handleResetQuestions = () => {
        setQuestions([])
    }

    const handleReset = () => {
        setQuestions([
            { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
            { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
            { question: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Tolstoy', 'Hemingway', 'Austen'], answer: 'Shakespeare' },
        ]);
        setFinished(false);
        setStarted(false);
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Eazy Quiz</h1>
                    <h4>Details:</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <h4>Rules:</h4>
                    <p>
                        1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p className='fs-4 fw-bold text-center'>Best of Luck</p>
                </div>
                {started ? <div className='col-md-6 text-container d-flex flex-row'>
                    <div className='border border-5 rounded text-center feature-card'>
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
                                <button className='btn btn-outline-primary rounded-pill mt-4' onClick={handleReset}>Reset</button>
                            </div>
                        )}
                    </div>
                </div> :
                    <div className='col-md-6 p-3'>
                        <div className='border border-2 rounded p-3'>
                            <h2 className='fs-2 fw-bolder text-center mb-3'>Set Questions</h2>
                            <input
                                className='form-control mb-3'
                                type='text'
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder='Enter Question'
                            />
                            <div className='row mb-3'>
                                <div className='col-3'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={option1}
                                        onChange={(e) => setOption1(e.target.value)}
                                        placeholder='Enter Option 1'
                                    />
                                </div>
                                <div className='col-3'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={option2}
                                        onChange={(e) => setOption2(e.target.value)}
                                        placeholder='Enter Option 2'
                                    />
                                </div>
                                <div className='col-3'>
                                    <input
                                        className='form-control'
                                        type='text'
                                        value={option3}
                                        onChange={(e) => setOption3(e.target.value)}
                                        placeholder='Enter Option 3'
                                    />
                                </div>
                                <div className='col-3'>
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
                                <button className='btn btn-primary rounded-pill' onClick={handleAddQuestion}>Add Question</button>
                                <button className='btn btn-primary rounded-pill mx-2' onClick={handleSubmit}>Submit</button>
                                <button className='btn btn-primary rounded-pill' onClick={handleResetQuestions}>Reset Questions</button>
                            </div>
                            <span className='text-center mb-3'>(Click Submit without setting questions to take quiz with default questions)</span>
                            <hr />
                            <h2 className='fs-2 fw-bold text-center mb-3'>Questions</h2>
                            {questions.length > 0? questions.map((question, index) => (
                                <div key={index}>
                                    <h4 className='fs-4 fw-bold m-2'>Q {index + 1}. {question.question}</h4>
                                    <div className='d-flex'>
                                        <p className='m-2'>Options:</p>
                                        {question.options.map((option, index) => (
                                            <p key={index} className='m-2'>{option}</p>
                                        ))}
                                    </div>
                                    <h5 className='m-2'>Answer: {question.answer}</h5>
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
