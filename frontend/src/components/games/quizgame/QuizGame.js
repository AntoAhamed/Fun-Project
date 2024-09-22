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
        <div className='d-flex flex-column align-items-center mt-4'>
            <h2>Quiz Game</h2>
            {!finished ? (
                <div>
                    <h3>{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button className='btn btn-primary m-2' key={index} onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <h3>Your score is: {score} / {questions.length}</h3>
            )}
        </div>
    );
};

export default QuizGame;
