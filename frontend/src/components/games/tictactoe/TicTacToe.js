import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleReset = () => {
        setBoard(Array(9).fill(null))
    }

    const winner = calculateWinner(board);
    let status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

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
                    <h1 className='fs-1 fw-bold text-center mb-3'>Tic Tac Toe</h1>
                    <h4>Details:</h4>
                    <p>
                        This is a tic tac toe game. The rules are very simple. But here is a small twist.
                        There is no reward or penalty. So play as much as you want. To know about the reward system go to <b>Dashboard</b>.
                    </p>
                    <h4>Rules:</h4>
                    <p>
                        1. There are 2 players: X and O. This time players need to be real (Human).
                    </p>
                    <p>
                        2. They have to enter Choose their symbols first. Then enter one by one by following the direction of the game. (Next Player: X/O)
                    </p>
                    <p>
                        3. After a result, players can reset the game and can play again and again.
                    </p>
                    <p className='fs-4 fw-bold text-center'>Best of Luck</p>
                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card bg-light text-dark py-5 px-3'>
                        <h2 className='fs-2 fw-bolder mb-3'>Tic Tac Toe</h2>
                        <div className='mb-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px' }}>
                            {board.map((value, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    style={{ width: '100px', height: '100px', fontSize: '24px', border: '1px solid grey', borderRadius: '5px', background: '#b3d9ff' }}
                                >
                                    {value}
                                </button>
                            ))}
                        </div>
                        <p className='fs-5 fw-semibold'>{status}</p>
                        <button className='btn btn-primary rounded-pill' onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicTacToe;
