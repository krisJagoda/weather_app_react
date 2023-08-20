import React, {useEffect, useState} from "react";

const DataFetcher = ({cityName}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = '**************';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${{API_KEY}}`

    async function fetchWeatherData(URL) {
        try {
            const response = await fetch(URL);
            return await response.json();
        } catch (error) {
            setError(true);
            showError();
        }
    }

    const showError = () => {
        if(error) {
            return <div>Oops. Something went wrong: {error.message}</div>
        }
    }

    useEffect(() => {
        const data = fetchWeatherData(API_URL);
        setData(data);
    }, [API_URL]);

}
export default DataFetcher;
