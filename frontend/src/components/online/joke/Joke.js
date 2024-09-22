import React, { useState, useEffect } from 'react';

const JokeGenerator = () => {
    const [joke, setJoke] = useState('Your joke will appare here.');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            setJoke(`${data.setup} - ${data.punchline}`);
        }
        catch (error) {
            alert("Something went wrong. Try again later.")
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className='container my-4'>
            <div class="card">
                <div className='card-header d-flex justify-content-between'>
                    <h4>Random Joke</h4>
                    <button className='btn btn-sm btn-primary' onClick={fetchJoke}>Get New Joke</button>
                </div>
                <div class="card-body">
                    <p class="card-text">{joke}</p>
                </div>
            </div>
        </div>
    );
};

export default JokeGenerator;
