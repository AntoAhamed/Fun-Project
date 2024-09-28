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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Rock Paper Scissors</h1>
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
                        <h2 className='fs-2 fw-bolder mb-3'>Rock Paper Scissors</h2>
                        <div className='mb-3'>
                            {options.map((option, index) => (
                                <button className='btn btn-primary rounded-pill m-2' key={index} onClick={() => playGame(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                        <p className='fs-4'>Your choice: <b>{userChoice}</b></p>
                        <p className='fs-4'>Computer's choice: <b>{computerChoice}</b></p>
                        <p className='fs-5 fw-bold'>{result}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RockPaperScissors;
