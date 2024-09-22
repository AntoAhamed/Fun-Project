import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
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
            <h2>Random Quote</h2>
            <p>"{quote}"</p>
            <p>- {author}</p>
            <button onClick={fetchQuote}>Get New Quote</button>
        </div>
    );
};

export default QuoteGenerator;
