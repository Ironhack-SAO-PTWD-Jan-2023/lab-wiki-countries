import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function CountryList({countries}) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { a3code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${a3code}`)
      .then(({ data }) => {
        setSelectedCountry(data);
      })
      .catch(error => console.log(error));
  }, [a3code])
  
  // const findCountry = (alpha3Code) => {
  //   return countries && countries.find((country) => {
  //     return country.alpha3Code === alpha3Code;
  //   })
  // }

  // const selectedCountry = findCountry(a3code);

  if(!selectedCountry) {
    navigate('/');
  }

  return selectedCountry && (
    <>
      <h1>{selectedCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{selectedCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {selectedCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {selectedCountry.borders.map((border) => {
                  // const borderCountry = findCountry(border);
                  return <li><Link to={`/${border}`}>{border}</Link></li>
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default CountryList;