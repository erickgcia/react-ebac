import { Button } from './Button.jsx'

export const PageTitleSection = ({title}) => {
  return(
    <article className='subheader'>
      <section className='subheader__wrapper'>
        <h1 className='subheader__title'>{title}</h1>
        <p className='subheader__txt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quo, cum nihil officia quia molestias optio minus. Vero dolorum, hic exercitationem dicta fugiat necessitatibus nostrum reprehenderit ut nisi, soluta aliquid!</p>
      </section>
      <Button initialIsClicked={false} />
    </article>
  )
}