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

        if (toolbox?.auth?.token !== '' && toolbox?.auth?.isToken === '') {
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
                    <h1 className='fs-1 fw-bold text-center mb-3'>Currency Converter - User Guide</h1>
                    <p>The Currency Converter feature allows users to easily convert between different currencies and check live exchange rates. This tool is ideal for travelers, international shoppers, or anyone dealing with foreign currencies. Below are the detailed instructions for using the currency converter:</p>

                    <h4>Key Features:</h4>
                    <p>- Select Two Currencies: Users can choose two currencies, one for conversion and one for the target, from a wide range of available options.</p>
                    <p>- Input Amount: Enter the amount in the base currency that you wish to convert.</p>
                    <p>- Real-Time Exchange Rates: The feature provides live and accurate exchange rates to give users an up-to-date conversion result.</p>

                    <h4>How to Use the Currency Converter Feature:</h4>
                    <h5>1. Access the Currency Converter Section:</h5>
                    <p>- Navigate to the "Currency Converter" feature in the application.</p>

                    <h5>2. Performing a Conversion:</h5>
                    <p>- Select the Base Currency (the currency you are converting from) from the provided dropdown menu.</p>
                    <p>- Select the Target Currency (the currency you want to convert to) from the dropdown menu.</p>
                    <p>- Enter the Amount of the base currency in the input field (e.g., 100 USD).</p>
                    <p>- Click the "Convert" button to see the equivalent amount in the target currency.</p>

                    <h5>3. Viewing the Conversion Result:</h5>
                    <p>- The conversion result will be displayed instantly, showing the equivalent value of the target currency based on the entered amount and current exchange rate.</p>

                    <h5>4. Live Exchange Rates:</h5>
                    <p>- The exchange rates are fetched in real-time from reliable sources, ensuring that you always get the most accurate conversion information.</p>

                    <p>This feature is a powerful tool for anyone who needs to make quick currency conversions with up-to-date exchange rates, making it easy to calculate foreign prices, budgets, or transfers.</p>
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
