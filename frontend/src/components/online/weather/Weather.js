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
                //alert("Error fetching weather data. Please try again later.");
                fetchWeatherData();
            });
    }

    const navigate = useNavigate()

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox?.auth?.token !== '' && toolbox?.auth?.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()

        fetchWeatherData()

        return () => fetchWeatherData()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 border border-secondary border-top-0 border-bottom-0 border-start-0 px-5 py-3'>
                    <h1 className='fs-1 fw-bold text-center mb-3'>Weather - User Guide</h1>
                    <p>The Weather Feature allows users to easily search for and access comprehensive weather reports for any location. This feature provides real-time information, including current temperature, feels-like temperature, wind speed, humidity, visibility, and atmospheric pressure.</p>

                    <h4>Key Features:</h4>
                    <p>Location Search: Users can search for any location to get up-to-date weather information.</p>
                    <p>Detailed Weather Report: View essential weather details such as:</p>
                    <p>Current temperature</p>
                    <p>Feels-like temperature</p>
                    <p>Wind speed</p>
                    <p>Humidity levels</p>
                    <p>Visibility range</p>
                    <p>Atmospheric pressure</p>

                    <h4>How to Use the Weather:</h4>
                    <h5>Access the Weather Section:</h5>

                    <p>Navigate to the "Weather" feature on the application’s main interface.</p>
                    <h5>Search for a Location:</h5>

                    <p>Step 1: Enter the city or location name in the search bar provided.</p>
                    <p>Step 2: Click the "Search" button to retrieve the weather report for the specified location.</p>
                    <h5>Viewing the Weather Report:</h5>

                    <p>Once a location is searched, the following details will be displayed:</p>
                    <p>Current Temperature: The exact temperature in the selected location.</p>
                    <p>Feels Like: What the temperature feels like based on factors like humidity and wind.</p>
                    <p>Wind Speed: The speed of the wind in the area, typically measured in kilometers or miles per hour.</p>
                    <p>Humidity: The percentage of humidity in the air.</p>
                    <p>Visibility: How far ahead the air is clear enough to see, usually measured in kilometers or miles.</p>
                    <p>Pressure: The atmospheric pressure in the area, measured in hPa (hectopascals).</p>
                    <h5>Additional Features:</h5>

                    <p>The weather report is updated in real-time to provide users with the most accurate and current data.</p>
                    <p>You can search for multiple locations and compare the weather across regions.</p>

                    <p>This Weather Feature serves as a reliable source for users to monitor weather conditions, plan their day, or track changes in the environment with ease and precision.</p>
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
