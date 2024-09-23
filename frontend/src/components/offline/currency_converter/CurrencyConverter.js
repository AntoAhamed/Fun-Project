import React, { useState, useEffect } from 'react';
import currency_img from '../../../assets/currency.jpeg'

const CurrencyConverter = () => {
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=''>
            <div className='row'>
                <div className='col text-center'>
                    <img src={currency_img} alt='' width={'100%'} />
                </div>
                <div className='col d-flex flex-column justify-content-center align-items-center'>
                    <div className='border border-5 rounded text-center' style={{ padding: '10%' }}>
                        <h2 className='fs-1 fw-bold'>Currency Converter</h2>
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
