import { useState, useEffect } from 'react';

export function SearchBox({ updateDataCountries }) {

  const [country, setCountryInput] = useState('');

  const handleChange = (e) => {
    setCountryInput(e.target.value);
  };

  const getData = async () => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country.toLowerCase()}&limit=50`);
      if (!response.ok) {
        throw new Error('Algo salió mal en el fetch.');
      }
      const data = await response.json();
      updateDataCountries(data);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData()
  },[])

  const handleClick = (e) => {
    e.preventDefault();
    getData();
  };

  const countryOptions = [
    'Mexico',
    'United States',
    'Brazil',
    'Canada',
    'Colombia',
    'Ukraine',
    'China',
    'India',
    'United Kingdom',
    'France',
    'Italy'
  ]

  return (
    <form className='filter'>
      <label htmlFor='filter'>
        <input
          list='countries'
          className='filter__input'
          type='text' 
          name='filter'
          placeholder='Filter by country...'
          value={country}
          onChange={handleChange}
        />
      </label>
      <datalist id='countries'>
        {countryOptions.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
      <button className='filter__btn' onClick={handleClick}>Filter</button>
    </form>
  )
}