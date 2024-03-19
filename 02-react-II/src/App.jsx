import './App.css'
import { MainContent } from './components/MainContent.jsx'
import { useState } from 'react'

export function App() {

  const [country, setCountry] = useState(null);

  return (
    <main>
      <MainContent setCountry={setCountry} />
    </main>
  )
}