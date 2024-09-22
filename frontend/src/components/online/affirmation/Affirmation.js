import React, { useState, useEffect } from 'react';

const AffirmationGenerator = () => {
    const [affirmation, setAffirmation] = useState('');

    const fetchAffirmation = async () => {
        try {
            const response = await fetch('https://www.affirmations.dev/');
            const data = await response.json();
            setAffirmation(data.affirmation);
        }
        catch (error) {
            alert("Something went wrong. Try again later.")
        }
    };

    useEffect(() => {
        fetchAffirmation();
    }, []);

    return (
        <div>
            <h2>Random Affirmation</h2>
            <p>{affirmation}</p>
            <button onClick={fetchAffirmation}>Get New Affirmation</button>
        </div>
    );
};

export default AffirmationGenerator;
