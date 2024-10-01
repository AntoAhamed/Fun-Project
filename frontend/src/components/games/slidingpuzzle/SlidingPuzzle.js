import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SlidingPuzzle = () => {
    const [tiles, setTiles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 0]); // 0 represents the empty space

    useEffect(() => {
        shuffleTiles();
    }, []);

    const shuffleTiles = () => {
        const shuffledTiles = [...tiles].sort(() => Math.random() - 0.5);
        setTiles(shuffledTiles);
    };

    const handleMove = (index) => {
        const newTiles = [...tiles];
        const emptyIndex = tiles.indexOf(0);
        const validMoves = [emptyIndex - 3, emptyIndex + 3, emptyIndex - 1, emptyIndex + 1]; // Up, Down, Left, Right

        if (validMoves.includes(index)) {
            newTiles[emptyIndex] = newTiles[index];
            newTiles[index] = 0;
            setTiles(newTiles);
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
                    <h1 className='fs-1 fw-bold text-center mb-3'>Sliding Puzzle</h1>
                    <h4>Details:</h4>
                    <p>
                        This is a puzzle solving game. The rules are very simple. You have to solve the puzzle according to the following rules. As simple as that. But here is a small twist.
                        There is no reward or penalty. So play as much as you want. To know about the reward system go to <b>Dashboard</b>.
                    </p>
                    <h4>Rules:</h4>
                    <p>
                        1. A sliding puzzle is given. You have to sort this like this...
                        <pre className='text-center fs-3'>
                            <div>1 2 3</div>
                            <div>4 5 6</div>
                            <div>7 8 X</div>
                        </pre>
                        Here, <b>X</b> represents the gray slide.
                    </p>
                    <p>
                        2. You can shuffle the puzzle by clicking <b>Shuffle</b> button, if you want.
                    </p>
                    <p>
                        3. Play as much as you wish.
                    </p>
                    <p className='fs-4 fw-bold text-center'>Best of Luck</p>
                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card bg-light text-dark'>
                        <h2 className='fs-2 fw-bolder mb-3'>Sliding Puzzle</h2>
                        <div className='border p-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)', gap: '5px', justifyContent: 'center' }}>
                            {tiles.map((tile, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleMove(index)}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: tile === 0 ? 'gray' : '#66b3ff',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: tile !== 0 ? 'pointer' : 'default'
                                    }}
                                >
                                    {tile !== 0 && tile}
                                </div>
                            ))}
                        </div>
                        <button className='btn btn-primary rounded-pill mt-3' onClick={shuffleTiles}>Shuffle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidingPuzzle;
