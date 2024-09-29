import React, { useState, useEffect } from 'react';
import clock_img from '../../../assets/clock.jpeg'
import { useNavigate } from 'react-router-dom';

const CurrencyConverter = (props) => {
    const { mode } = props;

    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [exchangeRates, setExchangeRates] = useState({});

    const fetchData = () => {
        // Fetch exchange rates from the provided API
        fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
            .then((response) => response.json())
            .then((data) => {
                setExchangeRates(data.rates);
                setCurrencies(Object.keys(data.rates));
            })
            .catch((error) => console.error('Error fetching exchange rates:', error));
    }

    const convertCurrency = () => {
        fetchData()

        if (fromCurrency !== toCurrency) {
            const rate = exchangeRates[toCurrency];
            setConvertedAmount((amount * rate).toFixed(2));
        } else {
            setConvertedAmount(amount);
        }
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const navigate = useNavigate()

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox.auth.token !== '' && toolbox.auth.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()

        fetchData()
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Currency Converter</h1>
                    <h4>Details:</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <h4>Instructions:</h4>
                    <p>
                        1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                    <p>
                        5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt ipsam eos eum minus id similique iure nisi quam perspiciatis nihil doloremque accusamus, voluptate ullam ad doloribus fuga numquam praesentium!
                    </p>
                </div>
                <div className='col-md-6 text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode}`}>
                        <h2 className='fs-1 fw-bold'>Currency Converter</h2>
                        <p className='fs-6'>Enter Your Amount Below</p>
                        <div>
                            <input
                                className='form-control text-center'
                                type="number"
                                value={amount}
                                onChange={handleAmountChange}
                                style={{ padding: '10px', marginBottom: '15px' }}
                            />
                        </div>
                        <div>
                            <select className='form-select text-center mb-2' value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} style={{ padding: '10px' }}>
                                {currencies.map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </select>
                            <div className='mb-2'>To</div>
                            <select className='form-select text-center mb-2' value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} style={{ padding: '10px' }}>
                                {currencies.map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <button className='btn btn-primary rounded-pill' onClick={convertCurrency}>
                                Convert
                            </button>
                        </div>
                        {convertedAmount ? (
                            <div style={{ marginTop: '20px' }}>
                                <h3>
                                    {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                                </h3>
                            </div>
                        ) : (
                            <div style={{ marginTop: '20px' }}>
                                <h3>
                                    Your data will appare here.
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
