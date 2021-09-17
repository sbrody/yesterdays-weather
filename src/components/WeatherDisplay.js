import React, { useEffect, useState } from "react";
import { apiCallToday, apiCallYesterday, apiCallLocale } from "../api";

const WeatherDisplay = ({ location }) => {
    console.log(location);

    const [apiDataToday, setApiDataToday] = useState(null);
    const [apiDataYesterday, setApiDataYesterday] = useState(null);
    const [apiDataLocation, setApiDataLocation] = useState(null);

    useEffect(() => {
        console.log(location)

        if (location !== null) {
            console.log('have location')
            returnApiDataToday();
            returnApiDataYesterday();
            returnApiDataLocation();
        }
    }, [location]);

    const returnApiDataToday = async () => {
        await apiCallToday(location).then((res) => setApiDataToday(res));
    };

    const returnApiDataYesterday = async () => {
        await apiCallYesterday(location).then((res) => setApiDataYesterday(res));
    }

    const returnApiDataLocation = async () => {
        await apiCallLocale(location).then((res) => setApiDataLocation(res));
    }

    console.log(apiDataLocation);
    console.log(apiDataYesterday);
    console.log(apiDataToday);

    const locality = () => {
        if (apiDataLocation !== null) {
            return (
                <div>
                    <h2>Location: {apiDataLocation.locality}</h2>
                </div>
            )
        }
        else return 'loading';
    }

    const yesterdaysWeatherDisplay = () => {
        if (apiDataYesterday !== null) {
            return (
                <div className="card">
                    <h3>Yesterday</h3>
                    <img src={`https://openweathermap.org/img/wn/${apiDataYesterday.current.weather[0].icon}@2x.png`} alt="" />
                    <h4>Temperature 24 hours ago: {apiDataYesterday.current.temp} Celsius</h4>
                    <h4>Felt like: {apiDataYesterday.current.feels_like} Celsius</h4>
                    <h4>Weather conditions: {apiDataYesterday.current.weather[0].description}</h4>
                </div>
            )
        }
        else return 'loading';
    }

    const todaysWeatherDisplay = () => {
        if (apiDataToday !== null) {
            return (
                <div className="card">
                    <h3>Today</h3>
                    <img src={`https://openweathermap.org/img/wn/${apiDataToday.current.weather[0].icon}@2x.png`} alt="" />
                    <p>Temperature now: {apiDataToday.current.temp} Celsius</p>
                    <p>Feels like: {apiDataToday.current.feels_like} Celsius</p>
                    <p>Weather conditions: {apiDataToday.current.weather[0].description}</p>
                </div>
            )
        }
        else return 'loading';
    }

    const temperatureDifference = () => {
        let tempMessage = "";
        if (apiDataYesterday !== null && setApiDataToday !== null) {
            const tempDifference = Math.round(apiDataYesterday.current.temp - apiDataToday.current.temp);
            console.log(tempDifference);
            if (tempDifference > 0) {
                tempMessage = `This time yesterday was it warmer than today by ${tempDifference} Celsius.`;
            }
            else if (tempDifference < 0) {
                tempMessage = `It is ${tempDifference * -1} Celsius warmer today than this time yesterday.`;
            }
            else tempMessage = "It is about the same temperature today as it was this time yesterday.";
            return tempMessage;
        }
        return (
            <div><p>{tempMessage}</p></div>
        )
    }


    return (
        <div className="container">
            {locality()}
            {temperatureDifference()}
            <div className="card-container">
                {yesterdaysWeatherDisplay()}
                {todaysWeatherDisplay()}
            </div>
        </div>
    )
}

export default WeatherDisplay;