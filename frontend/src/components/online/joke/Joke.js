import React, { useState, useEffect } from 'react';
import clock_img from '../../../assets/clock.jpeg'

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
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src={clock_img} alt='' className='rounded h-75 w-75' />
                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card bg-light'>
                        <div class="card">
                            <div className='card-header d-flex justify-content-between'>
                                <h4 className='fw-bold'>Joke</h4>
                                <button className='btn btn-sm btn-primary rounded-pill' onClick={fetchJoke}>Get New Joke</button>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{joke}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JokeGenerator;
