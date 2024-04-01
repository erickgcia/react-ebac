import { useState } from "react"
import { useFetch } from "../../hooks/useFetch.jsx"
import { Loading } from "../Loading/Loading.jsx"
import { Customers, ScrollContainer, Search, Table } from "./styles.js"

export const CustomerSearch = () => {

  const [ value, setValue ] = useState('')
  const { data, isLoading } = useFetch({url: `https://restcountries.com/v3.1/name/${value.toLowerCase()}`, type:'get'})
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Customers>
      <form>
        <label htmlFor="search">
          <Search
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
        <ScrollContainer>
          <Table>
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
          </Table>
        </ScrollContainer>
      }
    </Customers>
    )
}