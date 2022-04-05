import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

export const Countryie = ({ country }: any) => (
  <div>{ country?.name.common}</div>
)
type Country = {
    id: number,
    name : {common : string},
    population: number
}

function Home() {
  const [countries, setCountries] = useState<Country[]>([])
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
        ? countries.map((country, index) => <li key={index}>
          {country?.population}
          {' '}
          {country.name.common}
        </li>)
        : ''}
    </div>
  )
}

export default Home
