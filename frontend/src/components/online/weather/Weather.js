import React, { useEffect, useState } from 'react'
import clock_img from '../../../assets/clock.jpeg'
import { useNavigate } from 'react-router-dom'

function Weather() {
    const [currentData, setCurrentData] = useState('')
    const [location, setLocation] = useState('')

    const fetchWeatherData = (location = "Dhaka") => {
        const apiKey = '43a9135c1c0c47ec827140339242904';
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=yes&alerts=no`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then(data => {
                setCurrentData(data)
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert("Error fetching weather data. Please try again later.");
                fetchWeatherData();
            });
    }

    const navigate = useNavigate()

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox.auth.token !== '' && toolbox.auth.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
        
        fetchWeatherData()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Weather</h1>
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
                <div className='col-md-6 p-4 rounded border border-secondary border-top-0 border-bottom-0 border-end-0 text-dark' style={{ background: 'aliceblue' }}>
                    <div className='row g-3 justify-content-end mb-4'>
                        <div className='col-auto'>
                            <input
                                className='form-control'
                                type='text'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder='Enter location to search'
                            />
                        </div>
                        <div className='col-auto'>
                            <button className='btn btn-primary rounded-pill' onClick={() => fetchWeatherData(location)}>Search</button>
                        </div>
                        <hr />
                    </div>
                    <div className='p-2'>
                        <h1 className='fs-1 fw-semibold'>Current Weather</h1>
                        <p className='fs-3'>Weather in <u>{currentData.location?.name}</u></p>
                        <p className='fs-4'>{currentData.location?.localtime}</p>
                        <div className='row d-flex justify-content-center align-items-center text-center'>
                            <div className='col-md-6 text-decoration-underline fw-bold' style={{ fontSize: '4.2rem' }}>{currentData.current?.temp_c}°C</div>
                            <div className='col-md-6 p-4'>
                                <div className='border border-5 rounded-circle m-5 p-5'>
                                    <p>{currentData.current?.condition.text}</p>
                                    <p>Feelslike: <u>{currentData.current?.feelslike_c || 'loading...'}°C</u></p>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <p className='col-md-auto border border-3 rounded text-center m-2 p-2'>Wind Speed: {currentData.current?.wind_kph}km/h</p>
                            <p className='col-md-auto border border-3 rounded text-center m-2 p-2'>Humidity: {currentData.current?.humidity}%</p>
                            <p className='col-md-auto border border-3 rounded text-center m-2 p-2'>Visibility: {currentData.current?.vis_km}km</p>
                            <p className='col-md-auto border border-3 rounded text-center m-2 p-2'>Pressure: {currentData.current?.pressure_mb}mb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
