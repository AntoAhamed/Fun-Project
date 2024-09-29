import React, { useState, useEffect } from 'react';
import clock_img from '../../../assets/clock.jpeg'

const JokeGenerator = (props) => {
    const [joke, setJoke] = useState('Your joke will appare here.');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            setJoke(`${data.setup} - ${data.punchline}`);
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className={`border border-5 rounded text-center feature-card bg-${props.mode}`}>
            <h3 className='fs-3 fw-bold mb-3'>Joke</h3>
            <p class="mb-3">{joke}</p>
            <button className='btn btn-sm btn-primary rounded-pill mb-3' onClick={fetchJoke}>Get New Joke</button>
        </div>
    );
};

export default JokeGenerator;
