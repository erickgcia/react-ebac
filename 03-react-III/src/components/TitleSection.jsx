import { Button } from './Button.jsx'

export const TitleSection = ({title, subtitle}) => {
  return (
    <article className='main'>
      <h1 className='main__title'>Power <span>{title}</span> With Your Data</h1>
      <h2 className='main__subtitle'>{subtitle}</h2>
      <div className='btn-wrapper'>
        <Button text='Get Started' />
        <Button modifier='btn--transparent' text='Talk to Sales' />
      </div>
    </article>
  )
}