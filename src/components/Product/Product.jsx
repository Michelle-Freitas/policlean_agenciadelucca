import './Product.css'
import * as Separator from '@radix-ui/react-separator';
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/io";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { FaTruckFast } from "react-icons/fa6";

export function Product({productInfos}) {
  const convertedPrice = productInfos.installments_price.toString().replace('.', ',')

  return (
    <section className="product-section">
      {/* {Page route links} */}
      <ul className="page-route-links">
          <li><a href="#">Home</a></li>
          <Separator.Root className="separator-y"/>
          <li><a href="#">Linha Profissional</a></li>
          <Separator.Root className="separator-y"/>
          <li><a href="#">Limpeza Pós Obra</a></li>
          <Separator.Root className="separator-y"/>
          <li><span>{productInfos.name}_li</span></li>
      </ul>

      <div className="product-container">
        {/* Gallery */}
        <div className="gallery-container" >

          <div className="gallery">
            {productInfos.gallery.map((imgSrc, index) => (
              <img src={imgSrc} alt="Opção miniatura imagem do produto" key={index} className="gallery-image"/>
            ))}
            <div className="gallery-btn-container">
              <button className="gallery-btn"><IoIosArrowDropup /></button>
              <button className="gallery-btn"><IoIosArrowDropdownCircle /> </button>
            </div>
          </div>

          <div className="product-image-container">
            <img className="product-image" src={productInfos.gallery[0]} alt="Imagem do produto" />
            <p className="about-image">{productInfos.about_image}</p>
            <div className="stamb-container">
              {productInfos.stamps.map((stamp,index) => (
                <img key={index} className="stamp-image" src={stamp} alt="" />
              ))}

            </div>
          </div>
        </div>

        {/* Product Infos and Price */}
        <div className="product-infos-container">
          <h1>{productInfos.name}</h1>
          <p className="product-ref">REF: {productInfos.ref}</p>
          <div className="stars-container">
            <span><RiStarSFill /></span>
            <span><RiStarSFill /></span>
            <span><RiStarSFill /></span>
            <span><RiStarSFill /></span>
            <span><RiStarSLine /></span>
          </div>
          <p><span className="avaliations">({productInfos.avaliations}) Avaliações.</span> <a href="#" className="light-text" >Avalie agora!</a></p>

          <Separator.Root className="separator-x"/>

          <p className="full-price price">R$ {productInfos.price},00</p>
          <p>em até <span className="price">12x</span> de <span className="price">R${convertedPrice}</span></p>

          <div className="buy-container">
            <div className="quantity-btn-container">
              <button>-</button>
              <input placeholder="1" size="1" className="quantity-input"></input>
              <button>+</button>
            </div>
            <div>
              <button className="buy-btn">COMPRAR</button>
            </div>
          </div>
          <p className="buy-text"><span><FiLock /></span>Aqui sua compra é 100% segura, compre com tranquilidade.</p>
          <button className="resell-btn">REVENDA E LUCRE</button>

          <Separator.Root className="separator-x"/>

          {/* Frete */}
          <div className="shipping">
            <p><span><FaTruckFast /></span> Frete e prazo de entrega</p>
            <div>
              <label htmlFor="">CEP</label><input type="number"/>
              <button>CALCULAR</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Frete</th>
                  <th>Valor</th>
                  <th>Prazo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CORREIOS PAC</td>
                  <td>R$ 22,49</td>
                  <td>5 à 6 dias úteis.</td>
                </tr>
                <tr>
                  <td>CORREIOS SEDEX</td>
                  <td>R$ 31,72</td>
                  <td>2 à 3 dias úteis.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      
      {/* Links inside of page */}
      <ul className="inside-links-list">
        <li><a href="#what-is" className="">O que é?</a></li>
        <li><a href="#benefits">Beneficios do Super Pós Obra?</a></li>
        <li><a href="#use-mode">Como usar?</a></li>
        <li><a href="#description">Descrição</a></li>
        <li><a href="#seller">Quem é a Policlean Oirad?</a></li>
      </ul>

    </section>
  )
}
