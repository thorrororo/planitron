import './Search.css';
import { useState } from 'react';
import countriesData from 'world-countries';
import Suggestions from '../Suggestions/Suggestions';
import CountryInformations from '../CountryInformations/CountryInformations';

function Search() {
    const [country, setCountry] = useState('');
    const [userCountry, setUserCountry] = useState('');

    const selectedCountryData = countriesData.find(c => c.name.common === country);

    const countries = countriesData.map(c => c.name.common);
    const filteredCountries = countries
        .filter(c => c.toLowerCase().includes(userCountry.toLowerCase()))
        .slice(0, 10);

    const selectCountry = (selectedName) => {
        setCountry(selectedName);
        setUserCountry("");
    }

    return (
        <div className="search">
            <label className="searcher_label">Search for a country:</label>
            <input 
                className="searcher_input" 
                type="text" 
                placeholder="Enter a country name..." 
                value={userCountry} 
                onChange={(e) => setUserCountry(e.target.value)} 
                autoComplete="off"
            />

            { userCountry.length > 0 && (<Suggestions filteredCountries={ filteredCountries } onSelect={ selectCountry } />) }

            {country && selectedCountryData && (
                <CountryInformations 
                    flag={ selectedCountryData.flag? selectedCountryData.flag : '' }
                    fullname={ selectedCountryData.name.official? selectedCountryData.name.official : '' }
                    name={ country? country : '' }
                    code={ selectedCountryData.cca2? selectedCountryData.cca2 : '' }
                    codes={ [selectedCountryData.cca2? selectedCountryData.cca2 : '', selectedCountryData.cca3? selectedCountryData.cca3 : '', selectedCountryData.ccn3? selectedCountryData.ccn3 : '', selectedCountryData.cioc? selectedCountryData.cioc : '' ] }
                    capital={ selectedCountryData.capital }
                    native_fullname={ Object.values(selectedCountryData.name.native)[0].official? Object.values(selectedCountryData.name.native)[0].official : '' }
                    native_name={ Object.values(selectedCountryData.name.native)[0].common? Object.values(selectedCountryData.name.native)[0].common : '' }
                    area={ selectedCountryData.area? selectedCountryData.area : '' }
                    lang={ Object.values(selectedCountryData.languages)[0]? Object.values(selectedCountryData.languages)[0] : '' }
                    currencies={ Object.values(selectedCountryData.currencies)[0].name + ' (' + Object.values(selectedCountryData.currencies)[0].symbol + ')'? Object.values(selectedCountryData.currencies)[0].name + ' (' + Object.values(selectedCountryData.currencies)[0].symbol + ')' : '' }
                    region={ selectedCountryData.region? selectedCountryData.region : '' }
                    latlng={ selectedCountryData.latlng? selectedCountryData.latlng : '' }
                />
            ) }

            { !country && !userCountry && (
                <div className="searcher_hint">
                    Type and choose a country name to see its informations.
                </div>
            ) }
        </div>
    )
}

export default Search;