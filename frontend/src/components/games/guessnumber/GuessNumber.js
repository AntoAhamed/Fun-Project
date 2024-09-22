import React, { useState } from 'react';

const GuessNumber = () => {
    const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');

    const handleGuess = () => {
        const num = parseInt(guess);
        if (num === targetNumber) {
            setMessage('Congratulations! You guessed the number.');
            setTargetNumber(Math.floor(Math.random() * 10) + 1);
        } else if (num < targetNumber) {
            setMessage('Too low! Try again.');
        } else {
            setMessage('Too high! Try again.');
        }
    };

    return (
        <div className='d-flex flex-column align-items-center mt-4'>
            <h2>Guess That Number!</h2>
            <div>
                <input
                    className='form-control mb-2'
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Enter your guess"
                />
                <button className='btn btn-primary mb-2' onClick={handleGuess}>Submit</button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default GuessNumber;
