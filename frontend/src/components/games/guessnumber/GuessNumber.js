import React, { useEffect, useState } from 'react';

const GuessNumber = () => {
    const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [finished, setFinished] = useState(false);
    const [chances, setChances] = useState(3);

    const handleGuess = () => {
        const num = parseInt(guess)

        if (chances > 0) {
            if (num === targetNumber) {
                setMessage('Congratulations! You guessed the number.')
                setFinished(true)
            } else {
                setChances(chances-1)

                if (chances === 0) {
                    setMessage(`You failed! ${chances} chances left`)
                    setFinished(true)
                } else {
                    setMessage(`You have ${chances} chances left`)
                }
            }
        } else {
            setMessage(`You failed! ${chances} chances left`)
            setFinished(true)
        }
    }

    const handlePlayAgain = () => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1)
        setMessage('')
        setFinished(false)
        setChances(3)
        setGuess('')
    }

    useEffect(() => {
        setMessage(`You have 1 free try & ${chances} chances`)
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Guess The Number</h1>
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
                    <div className='border border-5 rounded text-center feature-card bg-light text-dark'>
                        <h2 className='fs-2 fw-bolder mb-3'>Guess That Number!</h2>
                        <h5 className='mb-3'>Enter your guess below (1-100)</h5>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuessNumber;
