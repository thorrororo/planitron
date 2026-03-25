import './Suggestions.css';

function Suggestions({ filteredCountries, onSelect }) {
    return (
        <div className="suggestions">
            { filteredCountries.length === 0 && (
                <div className="no_results">
                    No results found.
                </div>
            ) }
            { filteredCountries.length > 0 && (
                <ul>
                    { filteredCountries.map((country, index) => (
                        <li key={ index } onClick={ () => onSelect(country) }>{ country }</li>
                    )) }
                </ul>
            ) }
        </div>
    )
}

export default Suggestions;