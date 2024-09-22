import React, { useState, useEffect } from 'react';

const FactGenerator = () => {
    const [fact, setFact] = useState('Your fact will appare here.');

    const fetchFact = async () => {
        try {
            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
            const data = await response.json();
            setFact(data.text);
        }
        catch (error) {
            alert("Something went wrong. Try again later.")
        }
    };

    useEffect(() => {
        fetchFact();
    }, []);

    return (
        <div className='container my-4'>
            <div class="card">
                <div className='card-header d-flex justify-content-between'>
                    <h4>Random Fact</h4>
                    <button className='btn btn-sm btn-primary' onClick={fetchFact}>Get New Fact</button>
                </div>
                <div class="card-body">
                    <p class="card-text">{fact}</p>
                </div>
            </div>
        </div>
    );
};

export default FactGenerator;
