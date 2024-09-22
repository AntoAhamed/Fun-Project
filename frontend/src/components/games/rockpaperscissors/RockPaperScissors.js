import React, { useState } from 'react';

const RockPaperScissors = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');

    const playGame = (choice) => {
        setUserChoice(choice);
        const computer = options[Math.floor(Math.random() * options.length)];
        setComputerChoice(computer);
        determineWinner(choice, computer);
    };

    const determineWinner = (user, computer) => {
        if (user === computer) {
            setResult('It\'s a tie!');
        } else if (
            (user === 'Rock' && computer === 'Scissors') ||
            (user === 'Paper' && computer === 'Rock') ||
            (user === 'Scissors' && computer === 'Paper')
        ) {
            setResult('You win!');
        } else {
            setResult('You lose!');
        }
    };

    return (
        <div className='d-flex flex-column align-items-center mt-4'>
            <h2>Rock Paper Scissors</h2>
            <div>
                {options.map((option, index) => (
                    <button className='btn btn-primary m-2' key={index} onClick={() => playGame(option)}>
                        {option}
                    </button>
                ))}
            </div>
            <p>Your choice: {userChoice}</p>
            <p>Computer's choice: {computerChoice}</p>
            <p>{result}</p>
        </div>
    );
};

export default RockPaperScissors;
