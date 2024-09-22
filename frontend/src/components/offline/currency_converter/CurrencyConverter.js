import React, { useState, useEffect } from 'react';

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
        <div className='mt-4'>
            <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center', border: '1px solid gray', borderRadius: '5px' }}>
                <h2>Currency Converter</h2>
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
                    <span style={{ margin: '0 10px' }}>to</span>
                    <select className='form-select text-center mb-2' value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} style={{ padding: '10px' }}>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button className='btn btn-primary' onClick={convertCurrency} style={{ padding: '10px 20px', cursor: 'pointer' }}>
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
    );
};

export default CurrencyConverter;
