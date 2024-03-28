import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { Loading } from "./Loading"

export const CustomerSearch = () => {

  const [ value, setValue ] = useState('')
  const { data, isLoading } = useFetch({url: `https://restcountries.com/v3.1/name/${value.toLowerCase()}`, type:'get'})
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <main className="customers">
      <form>
        <label htmlFor="search">
          <input
            className="search"
            id='search'
            name='search' 
            type='search' 
            placeholder='Filter customers by letter...'
            onChange={handleChange}
            value={value}
          />
        </label>
      </form>
      {isLoading ?
        <Loading text='customers'/> :
        <section className='scroll-container'>
          <table className="table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Region</th>
                <th>Subregion</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.name.common}</td>
                    <td>{customer.region}</td>
                    <td>{customer.subregion}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      }
    </main>
    )
}