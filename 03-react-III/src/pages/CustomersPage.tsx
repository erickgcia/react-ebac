import { CustomerSearch } from '../components/CustomerSearch/CustomerSearch.ts'
import { Footer } from '../components/Footer/Footer.ts'
import { Header } from '../components/Header/Header.ts'
import { data } from '../constants/data.ts'

export const CustomersPage = () => {
  return (
    <>
      <Header data={data} />
      <CustomerSearch />
      <Footer data={data} />
    </>
  )
}
