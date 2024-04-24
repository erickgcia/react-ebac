import { Footer } from '../components/Footer/Footer.ts'
import { Header } from '../components/Header/Header.ts'
import { Main } from '../components/Main/Main.ts'
import { data } from '../constants/data.ts'

export const HomePage = () => {
  return (
    <>
      <Header data={data} />
      <Main />
      <Footer data={data} />
    </>
  )
}
