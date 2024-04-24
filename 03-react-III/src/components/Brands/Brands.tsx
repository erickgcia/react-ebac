import { BrandsSection, BrandsLogo } from './styles.ts'

export const Brands = ({ logos }) => {
  return (
    <BrandsSection>
      {logos.map((logo, index) => (
        <BrandsLogo key={index} src={logo} alt="Logo" />
      ))}
    </BrandsSection>
  )
}
