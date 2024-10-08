import React, { useState } from 'react';

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState(null);
    const [error, setError] = useState(null);

    const fetchDefinition = async () => {
        if (!word) return;

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) {
                throw new Error('Word not found');
            }
            const data = await response.json();
            setDefinition(data[0]); // Get the first result
            setError(null); // Reset error state if any
        } catch (err) {
            setError(err.message);
            setDefinition(null);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchDefinition();
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Dictionary - User Guide</h1>

                    <h4>Introduction:</h4>
                    <p>Dictionary, a versatile and user-friendly tool designed to enhance your vocabulary and language comprehension.</p>

                    <h4>Key Features:</h4>
                    <p>Comprehensive Definitions: Users can search for any word to receive detailed definitions, helping to understand its meaning in context.</p>
                    <p>Part of Speech: The component displays the grammatical category of each word (e.g., noun, verb), making it easier to grasp its usage in sentences.</p>
                    <p>Synonyms and Antonyms: To enrich vocabulary, the component provides synonyms (words with similar meanings) and antonyms (words with opposite meanings), enabling users to diversify their language.</p>
                    <p>Example Sentences: Each word entry may include example sentences that illustrate how the word is used in context, facilitating better understanding and retention.</p>
                    <p>User-Friendly Interface: The intuitive design allows users to quickly enter words and view results, making it accessible for everyone from students to professionals.</p>
                    <h4>Use Cases:</h4>
                    <p>Education: Ideal for students learning new words and enhancing their writing skills.</p>
                    <p>Writing Assistance: A valuable tool for writers and editors to find the perfect word and avoid repetition.</p>
                    <p>Language Learning: Supports language learners by providing contextual definitions and usage examples.</p>
                    
                    <p>Overall, the Dictionary Component is a powerful resource for anyone looking to expand their vocabulary and improve their language skills. With its rich features and easy-to-use interface, it’s an essential addition to any educational platform or personal learning toolkit.</p>
                </div>
                <div className='col-md-6 py-3'>
                    <div className='row g-3 justify-content-between mb-4'>
                        <div className='col-auto'>
                            <h2 className='fs-2 fw-bold'>Dictionary</h2>
                        </div>
                        <div className='col-auto'>
                            <form className='d-flex' onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder="Enter a word"
                                    value={word}
                                    onChange={(e) => setWord(e.target.value)}
                                />
                                <button className="btn btn-primary rounded-pill mx-2" type="submit">Search</button>
                            </form>
                        </div>
                        <hr />
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {definition ? (
                        <div>
                            <h3>Word: {definition.word}</h3>
                            <p><strong>Phonetic:</strong> {definition.phonetic || 'N/A'}</p>
                            <p><strong>Part of Speech:</strong> {definition.meanings[0].partOfSpeech}</p>
                            <p><strong>Definition:</strong> {definition.meanings[0].definitions[0].definition}</p>
                            {definition.meanings[0].definitions[0].example && (
                                <p><strong>Example:</strong> {definition.meanings[0].definitions[0].example}</p>
                            )}
                        </div>
                    ) : <p>Texts related to the word will appear here.</p>}
                </div>
            </div>
        </div>
    );
};

export default Dictionary;
