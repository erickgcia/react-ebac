import { Footer } from "../components/Footer/Footer.jsx"
import { Header } from "../components/Header/Header.jsx"
import { Main } from "../components/Main/Main.jsx"
import { data } from '../constants/data.js'

export const HomePage = () => {
  return(
    <>
      <Header data={data} />
      <Main />
      <Footer data={data} />
    </>
  )
}