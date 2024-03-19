export function Table({ dataCountries }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Key</th>
          <th>Country</th>
          <th>Name</th>
          <th>Domain</th>
        </tr>
      </thead>
      <tbody>
        {dataCountries.map((data, index) => (
          <tr key={index}>
            <td>{data.alpha_two_code}</td>
            <td>{data.country}</td>
            <td>{data.name}</td>
            <td>{data.domains[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}