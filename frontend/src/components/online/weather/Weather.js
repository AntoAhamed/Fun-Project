import React, { useEffect, useState } from 'react'

function Weather() {
    const [currentData, setCurrentData] = useState('')

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
        <div className='weather'>
            <h1>Current Weather</h1>
            <p>Weather in {currentData.location?.name}</p>
            <p>{currentData.location?.localtime}</p>
            <div class="primary">
                <div>
                    <p>{currentData.current?.temp_c}°C</p>
                </div>
                <div>
                    <p>{currentData.current?.condition.text}</p>
                    <p>Feelslike: {currentData.current?.feelslike_c}°C</p>
                </div>
            </div>
            <div class="secondary">
                <p>Wind Speed: {currentData.current?.wind_kph}km/h</p>
                <p>Humidity: {currentData.current?.humidity}%</p>
                <p>Visibility: {currentData.current?.vis_km}km</p>
                <p>Pressure: {currentData.current?.pressure_mb}mb</p>
            </div>
        </div>
    )
}

export default Weather
