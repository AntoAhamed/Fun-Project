import React, { useState } from 'react';
import cal_img from '../../../assets/calculator.jpeg'

const Calculator = () => {
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
        <div className=''>
            <div className='row'>
                <div className='col text-center'>
                    <img src={cal_img} alt='' width={'100%'} />
                </div>
                <div className='col d-flex flex-column justify-content-center align-items-center'>
                    <div className=''>
                        <div style={styles.calculator}>
                            <div style={styles.display}>
                                <h1>{input || "0"}</h1>  {/* Displays current input or 0 */}
                            </div>
                            <div style={styles.buttons}>
                                <button onClick={clearInput} style={styles.button}>C</button>
                                <button onClick={currectInput} style={styles.button}>x</button>
                                <button style={styles.button}>%</button>
                                <button onClick={() => handleClick('/')} style={styles.button}>/</button>
                                <button onClick={() => handleClick('7')} style={styles.button}>7</button>
                                <button onClick={() => handleClick('8')} style={styles.button}>8</button>
                                <button onClick={() => handleClick('9')} style={styles.button}>9</button>
                                <button onClick={() => handleClick('*')} style={styles.button}>*</button>
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
