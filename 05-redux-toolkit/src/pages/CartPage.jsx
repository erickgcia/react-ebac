import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeProductFromCart } from '../app/cart/cartSlice'
export const CartPage = () => {
  const cartTableHeaders = ['ID', 'Title', 'Category', 'Price', 'Remove']
  const productCartList = useSelector((state) => state.cart.productList)

  const dispatch = useDispatch()

  const handleRemoveProduct = (id) => {
    dispatch(removeProductFromCart(id))
  }

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
            <tr className="text-center">
              {cartTableHeaders.map((header, index) => (
                <th className="border-2 border-black py-2 px-8 " key={index}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productCartList.length > 0 ? (
              productCartList.map((product, index) => {
                const { id, title, category, price } = product
                return (
                  <tr key={index} className="text-center font-medium">
                    <td className="border-2 border-black py-2 px-8 font-bold">
                      {id}
                    </td>
                    <td className="border-2 border-black py-2 px-8">{title}</td>
                    <td className="border-2 border-black py-2 px-8">
                      {category}
                    </td>
                    <td className="border-2 border-black py-2 px-8">
                      ${price}
                    </td>
                    <td className="border-2 border-black py-2 px-8">
                      <button
                        onClick={() => handleRemoveProduct(id)}
                        className="border-none rounded-lg bg-red-700 p-2 text-xs text-white w-full"
                      >
                        Remove from Cart
                      </button>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr className="text-center font-bold">
                <td className="p-4 border-2 border-black" colSpan={5}>
                  No tienes productos agregados al carrito.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </>
  )
}
