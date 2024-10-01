import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RockPaperScissors = (props) => {
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
            props.setCoins((prevState)=>prevState+5)
            setResult('You win! Got a reward of 5 coins.');
        } else {
            props.setCoins((prevState)=>prevState-1.25)
            setResult('You lose!');
        }
    };

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
                    <h1 className='fs-1 fw-bold text-center mb-3'>Rock Paper Scissors</h1>
                    <h4>Details:</h4>
                    <p>
                        This is a rock paper scissors game. The rules are very simple. There are two players: You and Computer(System). Click your choice from the 3 options. As simple as that. But here is a small twist.
                        If you win, you'll get reward otherwise you'll have to give penalty. To know about the reward system go to <b>Dashboard</b>.
                    </p>
                    <h4>Rules:</h4>
                    <p>
                        1. Click your choice and see the result.
                    </p>
                    <p>
                        2. If you won, you'll get reward of 5 Pt and if lose, you'll lose 1.25 Pt as penalty.
                    </p>
                    <p>
                        3. There is on limit. You can play as much as you want.
                    </p>
                    <p>
                        4. Remember one more thing that it is one of the ways you can get reward from.
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
