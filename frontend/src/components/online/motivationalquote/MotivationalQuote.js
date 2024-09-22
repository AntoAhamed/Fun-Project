import React, { useState, useEffect } from 'react';

const MotivationalQuoteGenerator = () => {
    const [quote, setQuote] = useState('');

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://zenquotes.io/api/random/');
            const data = await response.json();
            setQuote(data[0].q);
        }
        catch (error) {
            alert("Something went wrong. Try again later.")
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div>
            <h2>Motivational Quote</h2>
            <p>"{quote}"</p>
            <button onClick={fetchQuote}>Get New Quote</button>
        </div>
    );
};

export default MotivationalQuoteGenerator;
