import React, {useState} from "react";
import Header from "./Components/Header";
import InputCity from "./Components/InputCity";
import './style.css';
import ShowWeather from "./Components/ShowWeather";
const App = () => {
    const [inputCity, setInputCity] = useState('New York');
    const [cityName, setCityName] = useState('New York');

    const inputHandler = (e) => {
        setInputCity(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setCityName(inputCity)
    };

    return (
        <div>
            <Header/>
            <InputCity
                city={inputCity}
                onInputHandler={inputHandler}
                onSubmitHandler={submitHandler}
            />
            <ShowWeather >
                cityName={cityName}
            </ShowWeather>
        </div>
    )
}

export default App;
