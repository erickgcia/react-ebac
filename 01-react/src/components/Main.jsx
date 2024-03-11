import { PageTitleSection } from './PageTitleSection'
import { Gallery } from './Gallery.jsx'

export const Main = () => {
  const gallery = {
    img01: '/src/assets/img/gallery01.jpg',
    img02: '/src/assets/img/gallery02.jpg',
    img03: '/src/assets/img/gallery03.jpg',
    img04: '/src/assets/img/gallery04.jpg',
    img05: '/src/assets/img/gallery05.jpg',
    img06: '/src/assets/img/gallery06.jpg',
    img07: '/src/assets/img/gallery07.jpg',
    img08: '/src/assets/img/gallery08.jpg',
    img09: '/src/assets/img/gallery09.jpg',
  }

  return(
    <main>
        <PageTitleSection title='Design & Home' />
        <Gallery gallery={gallery} />
    </main>
  )
}