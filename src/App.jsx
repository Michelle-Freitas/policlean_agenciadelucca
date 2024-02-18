import { Product } from './components/Product/Product.jsx'
import { AboutProduct } from './components/AboutProduct/AboutProduct.jsx'
import { UseMode } from './components/UseMode/UseMode.jsx'
import { Seller } from './components/Seller/Seller.jsx'
import { Footer } from './components/Footer/Footer.jsx'

export function App({product}) {

  return (
    <>
      <Product productInfos={product.infos}/>
      <AboutProduct aboutProduct={product.about}/>
      <UseMode useMode={product.about.use_mode} description={product.about.description} dilutionProportion={product.about.dilution_proportion} precautions={product.about.precautions}/>
      <Seller seller={product.seller}/>
      <Footer />
    </>
  )
}

