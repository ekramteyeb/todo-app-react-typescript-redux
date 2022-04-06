import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

type CountryType = {
    id: number,
    name : {common : string},
    population: number,
    flags: { png: 'string' },
    area: number
}
type PropType = {
    country : CountryType
}
function Country({ country }:PropType) {
  return (
    <div style={{
      margin: 10,
      backgroundColor: 'whitesmoke',
      color: 'green',
      padding: '20px',
      display: 'flex',

      justifyContent: 'space-between',
      borderRadius: 10,
    }}>
      <img src={country.flags.png} alt={country.name.common}></img>
      <div style={{ flex: 3 }}>
        <h1 className="text-3xl font-bold underline">{country.name.common}</h1>
        <p>{country.population} million</p>
      </div>

    </div>
  )
}

function Home() {
  const [countries, setCountries] = useState<CountryType[]>([])
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response: AxiosResponse) => {
        setCountries(response.data)
        console.log(response.data[0])
      })
      .catch((error) => console.log('not fetechd ', error))
  }, [])
  return (
    <div>
      <h1>Home page </h1>
      {countries.length > 0
        ? countries.map((con, index) => <Country
          key={con.area * index }
          country={con}
        />)
        : ''}
    </div>
  )
}

export default Home
