import './Footer.css'
import { footer } from '../../../footer.json'
import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedin, FaYoutube, FaFacebookSquare } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"
import { LuPhoneCall } from "react-icons/lu"
import { GiSmartphone } from "react-icons/gi"
import { GrLocation } from "react-icons/gr"
import * as Separator from '@radix-ui/react-separator'
import euReciclo from '../../assets/eu-reciclo.png'



export function Footer(){

  return(
    <>
      <footer>
        <div className="footer-links-container">
          <div className="company">
            <img src={footer.company.logo} alt="" />
            <p className="slogan">{footer.company.slogan}</p>
            <p>REDES SOCIAIS</p>
            <ul className="media-links-container">
              <li>
                <a href={footer.social_medias.instagram} target="_blank" rel="noopener noreferrer"><RiInstagramFill /></a>
                </li>
              <li>
                <a href={footer.social_medias.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                </li>
              <li>
                <a href={footer.social_medias.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </li>
              <li>
                <a href={footer.social_medias.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                </li>
            </ul>
            <img src={euReciclo} alt="Logo eu reciclo" />
          </div>

          <Separator.Root className="separator"/>

          <div className="links-container">
            <p className="title">{footer.company.name}</p>
            <ul>
              {footer.links.map((item, index) => (
                <li key={index}><a href={item.link}>{item.title}</a></li>
              ))}
            </ul>
          </div>

          <Separator.Root className="separator"/>

          <div className="links-container">
            <p className="title">Linha de Produtos</p>
            <ul>
              {footer.products_lines.map((line, index) => (
                <li key={index}><a href={line.link}>{line.title}</a></li>
              ))}
            </ul>
          </div>

          <Separator.Root className="separator"/>

          <div className="links-container">
            <p className="title">Entre em contato</p>
            <ul>
              <li>
                <span><TfiEmail /></span><a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
                </li>
              <li>
                <span><LuPhoneCall /></span><a href={`tel:${footer.contact.phone_link}`}>{footer.contact.phone}</a>
                </li>
              <li>
                <span><GiSmartphone /></span><a href={`tel:${footer.contact.mobile_link}`}>{footer.contact.mobile}</a>
                </li>
              <li className="address">
                <span><GrLocation /></span>{footer.contact.address}
              </li>
            </ul>
          </div>

          <Separator.Root className="separator"/>

          <div className="icons-container">
            <p className="title">Formas de Pagamento</p>
            <ul className="list">
              {footer.payment_cards.map((card, index) => (
                <li key={index}><img src={card.image} alt={card.alt} className="card-item"/></li>
              ))}
            </ul>

            <p className="title">Formas de envio</p>
            <ul className="list">
              {footer.shipping_type.map((shipping, index) => (
                <li key={index} ><img src={shipping.image} alt={shipping.alt} className="shipping-item"/></li>
              ))}
            </ul>
          </div>

        </div>

        <Separator.Root className="separator security-separator"/>

        <div className="icons-container">
          <p className="title">Selos de segurança</p>
          <ul className="list security-list">
            {footer.security.map((item, index) => (
              <li key={index} ><img src={item.img} alt={item.alt} className="security-item"/></li>
            ))}
          </ul>
        </div>

      </footer>

      <div>
        <div className="copyright">
          <p>Copyright Policlean Oirad - 50090646000185 - 2022. Todos os direitos reservados</p>
          <img src="https://images.tcdn.com.br/files/770338/themes/145/img/logo-delucca.svg?f0b2c5e258443d6521fe8782d2659697" alt="Logo agência delucca" />
        </div>
        <p className="development">Desenvolvido por <a href="https://michelle-freitas.vercel.app/" target="_blank" rel="noopener noreferrer">Michelle Freitas</a> como teste para <a href="http://" target="_blank" rel="noopener noreferrer">Agência Delucca</a></p>
      </div>
    </>
  )
}
