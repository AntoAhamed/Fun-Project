import React, { useState, useEffect } from 'react';

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

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Sliding Puzzle</h1>
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
