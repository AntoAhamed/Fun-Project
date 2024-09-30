import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuessNumber = (props) => {
    const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [finished, setFinished] = useState(false);
    const [chances, setChances] = useState(3);

    const handleGuess = () => {
        const num = parseInt(guess)

        if (chances > 0 && num === targetNumber) {
            setMessage('Congratulations! You guessed the number. Got a reward of 5 coins.')
            props.setCoins((prevState) => prevState + 5);
            setFinished(true)
        } else if (chances > 0 && num !== targetNumber) {
            setChances((prevChances)=>prevChances - 1)
            setMessage(`You have ${chances} chances left`)
        }

        if (chances === 0) {
            setMessage(`You failed! ${chances} chances left`)
            props.setCoins((prevState) => prevState - 1.25);
            setFinished(true)
        }
    }

    const handlePlayAgain = () => {
        setTargetNumber(Math.floor(Math.random() * 10) + 1)
        setMessage('')
        setFinished(false)
        setChances(3)
        setGuess('')
    }

    const navigate = useNavigate()

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox?.auth?.token !== '' && toolbox?.auth?.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()

        setMessage(`You have 1 try & ${chances} chances.`)
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Guess The Number</h1>
                    <h4>Details:</h4>
                    <p>
                        This is a gussing the number game. System has already think a between 1 to 10 number. Now it's your turn to guess the number. If you would guess the right number, You win.
                    </p>
                    <h4>Rules:</h4>
                    <p>
                        1. You have 1 try and 3 chances to guess that number.
                    </p>
                    <p>
                        2. It can be any number between (1 to 10). No clue will be given.
                    </p>
                    <p>
                        3. If you won, you will get reward of 5 Pt and if loose, you will lose 1.25 Pt.
                    </p>
                    <p className='fs-4 fw-bold text-center'>Best of Luck</p>
                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card bg-light text-dark'>
                        <h2 className='fs-2 fw-bolder mb-3'>Guess That Number!</h2>
                        <h5 className='mb-3'>Enter your guess below (1-10)</h5>
                        <div>
                            <input
                                className='form-control text-center fs-4 mb-3'
                                type="number"
                                value={guess}
                                onChange={(e) => setGuess(e.target.value)}
                                placeholder="Enter your guess"
                            />
                            {!finished ?
                                <button className='btn btn-primary rounded-pill mb-3' onClick={handleGuess}>Submit</button> :
                                <button className='btn btn-primary rounded-pill mb-3' onClick={handlePlayAgain}>Play Again</button>
                            }
                            <p>{message}</p>
                            {finished && <p>The number was: {targetNumber}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuessNumber;
