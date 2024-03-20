import { useState } from 'react';
import { SearchBox } from './SearchBox.jsx';
import { FilteredList } from './FilteredList.jsx';

export function MainContent() {
  const [dataCountries, setDataCountries] = useState([]);

  const updateDataCountries = (data) => {
    setDataCountries(data);
  };

  return (
    <>
      <SearchBox updateDataCountries={updateDataCountries} />
      <FilteredList dataCountries={dataCountries} />
    </>
  );
}