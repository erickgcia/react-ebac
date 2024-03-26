import { data } from '../constants/data.js'
import { Header } from '../components/Header.jsx'
import { Footer } from '../components/Footer.jsx'
import { Products } from '../components/Products.jsx'

export const ProductsPage = () => {  
  return(
    <>
      <Header data={data} />
      <Products />
      <Footer data={data} />
    </>
  )
}