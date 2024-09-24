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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 image-container'>

                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card'>
                        <div class="card">
                            <div className='card-header d-flex justify-content-between'>
                                <h4>Joke</h4>
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
