import { data } from '../constants/data.js'
import { Header } from '../components/Header/Header.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import { Products } from '../components/Products/Products.jsx'

export const ProductsPage = () => {  
  return(
    <>
      <Header data={data} />
      <Products />
      <Footer data={data} />
    </>
  )
}