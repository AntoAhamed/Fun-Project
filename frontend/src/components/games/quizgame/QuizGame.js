import React, { useState } from 'react';

const QuizGame = () => {
    const questions = [
        { question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
        { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
        { question: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Tolstoy', 'Hemingway', 'Austen'], answer: 'Shakespeare' },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

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
                <div className='col-md-6 text-container'>
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
                            <h3>Your score is: {score} / {questions.length}</h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizGame;
