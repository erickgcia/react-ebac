export const Gallery = ({gallery}) => {
  return(
    <article className='gallery'>
      <h3 className='gallery__title'>Gallery</h3>
      {Object.values(gallery).map((img, index) => (
        <img src={img} className='gallery__img' key={index} />
      ))}
    </article>
  )
}