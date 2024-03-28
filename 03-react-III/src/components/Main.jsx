import { Brands } from './Brands.jsx'
import { TitleSection } from './TitleSection.jsx'
import logo1 from '../assets/client-logo-1.svg';
import logo2 from '../assets/client-logo-2.svg';
import logo3 from '../assets/client-logo-3.svg';
import logo4 from '../assets/client-logo-4.svg';
import logo5 from '../assets/client-logo-5.svg';
import logo6 from '../assets/client-logo-6.svg';
import logo7 from '../assets/client-logo-7.svg';
import logo8 from '../assets/client-logo-8.svg';
import { useEffect, useState } from 'react'

export const Main = () => {
  const [title, setTitle] = useState('Special word')

  useEffect(() => {
    const nextTitles = [
      'Next word 2',
      'Next word 3',
      'Special word'
    ];
    let index = 0
    const interval = setInterval(() => {
      setTitle(nextTitles[index])
      index++
      if(index === nextTitles.length) {
        index = 0
      }
    }, 3000)

    return () => clearInterval(interval)
  }, []);

  const info = {
    title: title,
    subtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quia nulla itaque in autem cum voluptates soluta velit adipisci id.'
  }

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]

  return (
    <main>
      <TitleSection
        title={info.title}
        subtitle={info.subtitle}
      />
      <Brands logos={logos} />
    </main>
  )
}