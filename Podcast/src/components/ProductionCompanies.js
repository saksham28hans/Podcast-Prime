import React, { useEffect, useState } from 'react'

const ProductionCompanies = ({ proCompanies }) => {

    // console.log(proCompanies.name + ": " + proCompanies.id);
    const [companyData, setCompanyData] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/company/${proCompanies.id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setCompanyData(data);
            })
            .catch((e) => console.log(e))
    }, [])

    return (proCompanies.logo_path ?
                (
                    <div>
                        <a href={companyData.homepage} target="_blank">
                            <div className="productionCompanies-card">
                                <div className="productionCompanies-card-logo">
                                    <img src={`https://image.tmdb.org/t/p/w200${proCompanies.logo_path}`} alt={`${proCompanies.name} Poster`} />
                                </div>
                                <div className="productionCompanies-card-details">
                                    <p>{companyData.name}, {companyData.origin_country}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                )
                :
                (null)
    )
}

export default ProductionCompanies