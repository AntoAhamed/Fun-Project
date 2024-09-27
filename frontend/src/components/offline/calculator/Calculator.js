import React, { useState } from 'react';
import clock_img from '../../../assets/clock.jpeg'

const Calculator = (props) => {
    const {mode} = props;

    const [input, setInput] = useState('');  // Stores the input from the user

    const handleClick = (value) => {
        setInput(input + value);  // Add clicked value to the input string
    };

    const currectInput = () => {
        setInput(input.slice(0, -1));
    };

    const clearInput = () => {
        setInput('');  // Clears the input
    };

    const calculateResult = () => {
        try {
            setInput(eval(input).toString());  // Evaluate the expression
        } catch (error) {
            setInput('Error');  // If an error occurs (like invalid input), show "Error"
        }
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col text-container'>
                    <div className='feature-card p-0'>
                        <div style={styles.calculator} className={`bg-${mode}`}>
                            <div style={styles.display} className="text-dark">
                                <h1>{input || "0"}</h1>  {/* Displays current input or 0 */}
                            </div>
                            <div style={styles.buttons}>
                                <button onClick={clearInput} style={styles.button}>C</button>
                                <button onClick={currectInput} style={styles.button}>del</button>
                                <button onClick={clearInput} style={styles.button}>CE</button>
                                <button onClick={() => handleClick('/')} style={styles.button}>/</button>
                                <button onClick={() => handleClick('7')} style={styles.button}>7</button>
                                <button onClick={() => handleClick('8')} style={styles.button}>8</button>
                                <button onClick={() => handleClick('9')} style={styles.button}>9</button>
                                <button onClick={() => handleClick('*')} style={styles.button}>X</button>
                                <button onClick={() => handleClick('4')} style={styles.button}>4</button>
                                <button onClick={() => handleClick('5')} style={styles.button}>5</button>
                                <button onClick={() => handleClick('6')} style={styles.button}>6</button>
                                <button onClick={() => handleClick('-')} style={styles.button}>-</button>
                                <button onClick={() => handleClick('1')} style={styles.button}>1</button>
                                <button onClick={() => handleClick('2')} style={styles.button}>2</button>
                                <button onClick={() => handleClick('3')} style={styles.button}>3</button>
                                <button onClick={() => handleClick('+')} style={styles.button}>+</button>
                                <button onClick={() => handleClick('0')} style={styles.button}>0</button>
                                <button onClick={() => handleClick('.')} style={styles.button}>.</button>
                                <button onClick={() => handleClick('00')} style={styles.button}>00</button>
                                <button onClick={calculateResult} style={styles.button}>=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    calculator: {
        width: '360px',
        margin: '3% auto',
        border: '2px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'right',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
    },
    display: {
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: 'inset 0px 2px 5px rgba(0, 0, 0, 0.1)'
    },
    buttons: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px'
    },
    button: {
        padding: '20px',
        fontSize: '18px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
    }
};

export default Calculator;
