import './CountryInformations.scss';

function CountryInformations({ flag, fullname, name, lang, native_name, native_fullname, code, codes, capital, area, currencies, region, latlng }) {
    return (
        <div className="country_informations container">
            <h2 className="country_name">{ name } { flag }</h2>
            <div className="row">
                <div className="col-md-6 box">
                    <div className="title">Flag</div>
                    <img src={ `https://flagcdn.com/w320/${ code.toLowerCase() }.png` } alt={ `${ name } flag`  ? `${ name } flag` : '' } />
                </div>
                <div className="col-md-6 box d-flex flex-direction-column gap-1">
                    <div className="row">
                        <div className="title">Official Name</div>
                        <div className="body">{ fullname }</div>
                    </div>

                    <div className="row">
                        <div className="title">Capital City</div>
                        <div className="body">{ capital }</div>
                    </div>
                    
                    <div className="row">
                        <div className="title">Native Names</div>
                        <div className="body">{  native_fullname }, { native_name }</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 box d-flex flex-direction-column gap-1">
                    <div className="row">
                        <div className="title">Language (Languages)</div>
                        <div className="body">{ lang }</div>
                    </div>

                    <div className="row">
                        <div className="title">Currency (Currencies)</div>
                        <div className="body">{ currencies }</div>
                    </div>

                    <div className="row">
                        <div className="title">Codes</div>
                        <div className="body">{ codes.join(', ') }</div>
                    </div>
                </div>
                <div className="col-md-6 box d-flex flex-direction-column gap-1">
                    <div className="row">
                        <div className="title">Area</div>
                        <div className="body">{ area?.toLocaleString() } km<sup>2</sup></div>
                    </div>
                    <div className="row">
                        <div className="title">Region</div>
                        <div className="body">{ region }</div>
                    </div>
                    <div className="row">
                        <div className="title">Coordinates</div>
                        <div className="body">lat.: { latlng?.[0]?.toFixed(2) }, lng.: { latlng?.[1]?.toFixed(2) }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryInformations;