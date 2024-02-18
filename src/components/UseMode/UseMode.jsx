import './UseMode.css'
import { BiSolidCircle } from "react-icons/bi"

export function UseMode({ useMode, description, dilutionProportion, precautions }){

  return(
      <section id="use-mode">
        <h2>Como usar?</h2>
        <ul className="use-mode-list" >
          {useMode.map((useItem, index) => (
            <li className="use-item" key={index}>
              <span className="item-index">{index+1}</span>
              <span className="item-text">{useItem}</span>
            </li>
          ))}
        </ul>

        {/* DILUTION */}
        <div className="dilution-container">
          <h2>Diluição</h2>

          <div className="proportion-container">
            {dilutionProportion.map((proportion, index) => (
              <div key={index} className="proportion-dilution">
                <p className="dilution-type" >{proportion.title}</p>
                <img src={proportion.img} alt={proportion.alt} className="dilution-image"/>
                <div className="item" >
                  <span className="proportion-item">01</span>
                  <span className="proportion-item">{proportion.water}</span>
                </div>
                <span className="proportion-value">{proportion.proportion}</span>
              </div>
            ))}
          </div>
          <div className="proportion-ref">
            <p>PROPORÇÃO:</p>
            <p><span className="ref-product"><BiSolidCircle /></span>PRODUTO</p>
            <p><span className="ref-water"><BiSolidCircle /></span>ÁGUA</p>

          </div>

        </div>

        {/* {AFTER CLEANING} */}
        <div className="after-cleaning">
          <h2>O que fazer após a Limpeza</h2>
          <p>Após o término da limpeza, recomendamos que seja aplicado detergente neutro por toda a superfície, para que possíveis resíduos de ácidos sejam neutralizados e tenham suas ações interrompidas. Quando o ácido fica agindo sobre o piso, ele tende a penetrar pelos poros e atingir toda propriedade que está abaixo daquela camada de superfície, deixando-o com manchas irreversíveis. </p>
        </div>

        {/* DESCRIPTION */}
        <div id="description" className="description-container">
          <h2>Descrição</h2>
          <ul>
            {description.map((item, index) => (
              <li key={index} className="description-item">{item}</li>
            ))}
          </ul>
        </div>

        {/* PRECAUTIONS */}
        <div className="precautions-container">
          <div className="precautions-image">
            <img src={precautions.image} alt={precautions.alt} />
            <span></span>

          </div>
          <div className="precautions-text">
            <h2>Precauções</h2>
            <p>{precautions.safety}</p>
            <div className="precaution" >
              {precautions.icons.map((icon, index) => (
                <img src={icon} key={index} alt="" className="precaution-icon"/>
              ))}
            </div>
            <p>{precautions.conservation}</p>
          </div>
        </div>
      </section>
  )
}
