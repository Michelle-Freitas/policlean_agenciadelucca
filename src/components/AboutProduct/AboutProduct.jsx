import './AboutProduct.css'
import { BiSolidRightArrow } from "react-icons/bi"

export function AboutProduct({ aboutProduct }){

  return(
    <>
      <section id="what-is">
        <div className="what-is-content">
          <div  className="about-container">

            <div>
              <h2>{aboutProduct.what_is_it.title}</h2>
              {aboutProduct.what_is_it.content.map((whatIsItem) => (
                <p key={whatIsItem}>{whatIsItem}</p>
              ))}
              <p>{aboutProduct.what_is_it.alert}</p>
            </div>

            <div>
              <h2>{aboutProduct.indication_use.title}</h2>
              <p>{aboutProduct.indication_use.content}</p>
            </div>

            <div>
              <h2>{aboutProduct.where_use.title}</h2>
              <p>{aboutProduct.where_use.content}</p>
            </div>

            <div className="principals-benefits-container" id="benefits">

              {aboutProduct.principals_benefits.map((benefit) => (
                <div className="principal-benefit-item" key={benefit.id}>
                  <img src={benefit.icon} alt="" />
                  <p>{benefit.content}</p>
                </div>
              ))}
            </div>

          </div>
          <div className="super-clean">
            <img src={aboutProduct.product_image} alt={aboutProduct.product_image} />
          </div>
        </div>
        <div className="floor-image"></div>
      </section>

      <div className="all-benefits-bg">
        <div className="all-benefits-container">
            <h2>Beneficíos</h2>
            <ul>
              {aboutProduct.all_benefits.map((benefit, index) => (
                <li className="benefit-item" key={index}>
                  <span className="benefit-list-icon"><BiSolidRightArrow /></span>{benefit}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </>
  )
}
