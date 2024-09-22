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
        <div className='d-flex flex-column align-items-center mt-4'>
            <h2>Sliding Puzzle Game</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)', gap: '5px' }}>
                {tiles.map((tile, index) => (
                    <div
                        key={index}
                        onClick={() => handleMove(index)}
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: tile === 0 ? 'lightgray' : 'lightblue',
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
            <button className='btn btn-primary mt-2' onClick={shuffleTiles}>Shuffle</button>
        </div>
    );
};

export default SlidingPuzzle;
