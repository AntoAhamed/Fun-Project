import React, { useEffect, useState } from 'react'

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

    useEffect(() => {
        fetchWeatherData()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 image-container'>

                </div>
                <div className='col-md-6 p-3' style={{ background: 'aliceblue' }}>
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
                        <p className='fs-3'>Weather in {currentData.location?.name}</p>
                        <p className='fs-4'>{currentData.location?.localtime}</p>
                        <div className='d-flex justify-content-around align-items-center text-center'>
                            <p className='fs-1 fw-bolder text-decoration-underline'>{currentData.current?.temp_c}°C</p>
                            <div className='border border-3 rounded-circle p-5'>
                                <p>{currentData.current?.condition.text}</p>
                                <p>Feelslike: {currentData.current?.feelslike_c}°C</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <p className='border border-3 rounded my-5 p-2'>Wind Speed: {currentData.current?.wind_kph}km/h</p>
                            <p className='border border-3 rounded my-5 mx-3 p-2'>Humidity: {currentData.current?.humidity}%</p>
                            <p className='border border-3 rounded my-5 mx-3 p-2'>Visibility: {currentData.current?.vis_km}km</p>
                            <p className='border border-3 rounded my-5 mx-3 p-2'>Pressure: {currentData.current?.pressure_mb}mb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
