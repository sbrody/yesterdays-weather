
import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';

function App() {

  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const locationFinder = () => {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({ lat: position.coords.latitude, long: position.coords.longitude })
        },
        err => setErrorMessage(err.message),

      )
    };

    locationFinder();
  }, [])

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
