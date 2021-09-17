
import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';

function App() {

  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    locationFinder();
  }, [])

  let latitude;
  let longitude;

  const locationFinder = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        setUserLocation({ lat: latitude, long: longitude })
      },
      err => setErrorMessage(err.message),

    )
  };

  const LocationErrorDisplay = () => {
    if (errorMessage) {
      return <div>{errorMessage}</div>
    }
    else return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yesterday's weather</h1>

      </header>
      <main>
        <WeatherDisplay location={userLocation} />
        <LocationErrorDisplay />
      </main>
    </div>
  );
}

export default App;
