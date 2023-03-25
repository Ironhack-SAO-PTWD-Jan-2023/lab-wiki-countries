import { NavLink } from 'react-router-dom';

function CountriesList({countries}) {
  return (
    <div className="list-group">
      {countries.map((country) => {
        return (
          <NavLink to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
            <img src={`https://flagpedia.net/data/flags/icon/36x27/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} flag`} />
            {' '}{country.name.common}
          </NavLink>
        )
      })}
    </div>
  )
}

export default CountriesList;