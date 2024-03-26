export const Products = () => {
  const url = 'https://fakestoreapi.com/products'
  fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))

  return (
    <article>
    </article>
  )
}