export const Brands = ({logos}) => {
  return (
    <section className="brands">
      {logos.map((logo, index) => (
        <img
          key={index}
          className="brands__logo"
          src={logo} 
          alt='Logo' />
      ))}
    </section>
  )
}