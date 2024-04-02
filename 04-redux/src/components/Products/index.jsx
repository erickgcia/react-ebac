import { PRODUCTS_DATA } from '../../constants/products'

export const Products = () => {
  return (
    <main>
      <article>
        {PRODUCTS_DATA.map((product) => (
          <Card
            img={product.img}
            itemStatus={product.itemStatus}
            title={product.title}
            description={product.description}
            colors={product.colors}
            price={product.price}
          />
        ))}
      </article>
    </main>
  )
}
