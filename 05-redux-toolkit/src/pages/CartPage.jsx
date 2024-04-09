import { NavLink } from 'react-router-dom'
export const CartPage = () => {
  const cartTableHeaders = ['ID', 'Title', 'Category', 'Price', 'Remove']
  return (
    <>
      <header className="flex items-center justify-between p-6 border-b-2 border-b-black">
        <h1 className="font-bold text-3xl">Cart</h1>
        <NavLink to="/" className="font-bold hover:text-red-600">
          Return to Products 👉
        </NavLink>
      </header>
      <main className="grid place-content-center p-16">
        <table>
          <thead>
            {cartTableHeaders.map((header, index) => (
              <th
                key={index}
                className="border-2 border-black py-2 px-8 text-center"
              >
                <td>{header}</td>
              </th>
            ))}
          </thead>
          <tbody>
            <tr className="text-center py-2 px-8">
              <td className="border-2 border-black">-</td>
              <td className="border-2 border-black">-</td>
              <td className="border-2 border-black">-</td>
              <td className="border-2 border-black">-</td>
              <td className="border-2 border-black">-</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}
