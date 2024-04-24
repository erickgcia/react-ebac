import { data } from '../constants/data.ts'
import { Header } from '../components/Header/Header.ts'
import { Footer } from '../components/Footer/Footer.ts'
import { Products } from '../components/Products/Products.ts'

export const ProductsPage = () => {
  return (
    <>
      <Header data={data} />
      <Products />
      <Footer data={data} />
    </>
  )
}
