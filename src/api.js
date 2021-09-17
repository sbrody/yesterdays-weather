
const apiKey = process.env.REACT_APP_API_KEY;
const apiKey2 = process.env.REACT_APP_API_KEY2;
const locationKey = process.env.REACT_APP_LOCATION_KEY;

console.log(process.env.REACT_APP_API_KEY);

// api call for today's weather
export const apiCallToday = (location) => {
    console.log(location.lat);
    const weatherData = async () => {
        const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.long}&exclude=hourly,daily,minutely,alerts&units=metric&appid=${apiKey}`)
            .then((res) => res.json())
            .catch(() => null);
        return apiResponse;
    }
    console.log(weatherData());
    return weatherData();
}

// api call for yesterday's weather
export const apiCallYesterday = (location) => {
    const weatherData = async () => {
        // get time stamp for 24 hours previous to call (8640000 milliseconds in a day)
        const time = Math.floor((Date.now() / 1000) - 86400);
        console.log(time)
        const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${location.lat}&lon=${location.long}&dt=${time}&units=metric&appid=${apiKey2}`)
            .then((res) => res.json())
            .catch(() => null);
        return apiResponse;
    }
    console.log(weatherData());
    return weatherData();
}

// transform geolocation co-ordinates into locale information
export const apiCallLocale = (location) => {
    const locationData = async () => {
        const apiResponse = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-with-timezone?latitude=${location.lat}&longitude=${location.long}&localityLanguage=en&key=${locationKey}`)
            .then((res) => res.json())
            .catch(() => null);
        return apiResponse;
    }
    console.log(locationData())
    return locationData();
}
