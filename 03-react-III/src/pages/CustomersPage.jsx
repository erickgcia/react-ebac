import { CustomerSearch } from '../components/CustomerSearch.jsx'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'
import { data } from '../constants/data.js'

export const CustomersPage = () => {
  return (
    <>
      <Header data={data} />
      <CustomerSearch />
      <Footer data={data} />
    </>
  )
}