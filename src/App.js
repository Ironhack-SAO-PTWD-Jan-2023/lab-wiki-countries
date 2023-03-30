import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
// import countriesData from './countries.json';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';


function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then(({ data }) => {
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflowX: "none", overflowY: "scroll"}}> 
            <CountriesList countries={countries} />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/:a3code" element={<CountryDetails countries={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
