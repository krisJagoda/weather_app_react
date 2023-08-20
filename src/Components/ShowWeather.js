import React from "react";
import DataFetcher from "./DataFetcher";

const ShowWeather = ({searchedCity}) => {
    return (
        <>
            <DataFetcher>
                cityName={searchedCity}
            </DataFetcher>
        </>
    )
}

export default ShowWeather;
