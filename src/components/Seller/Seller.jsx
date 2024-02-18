import './Seller.css'

export function Seller({seller}){
  return(
    <>
      <section id="seller">
        <div className='company-container'>
          <img src={seller.company_seal} alt={seller.alt} />

          <div className="company">
            <h2 className="seller-h2">Quem é a {seller.company_name}?</h2>
            {seller.about.map((about, index) => (
              <p key={index}>{about}</p>
            ))}
          </div>
        </div>
      </section>
      <div className="sugestion-product-container">
        <div>
          <h2>Para que serve o Álcool Graxo Etoxilado que está na composição do produto?</h2>
          <p>Os etoxilados atuam como agentes umectantes, solubilizantes, detergentes, dispersantes, emulsificantes, emolientes e desengraxantes.</p>

          <h2>Como age o Super Pós Obra?</h2>
          <p>Por possuir ácido em sua composição, ele age em conjunto com os outros componentes da formulação fazendo uma leve esfoliação/decapagem da superfície do piso, removendo resíduos que ficam permanentes ao término da obra e acabam sendo difíceis de limpar. O ácido irá agir diretamente sobre as sujidades minerais (cal, cimento, excesso de rejunte), enquanto os outros tensoativos, como o solvente, irão atuar nas outras sujidades em geral que possam estar sobre o piso (respingos de tinta, sujeiras incrustadas)</p>
        </div>
      </div>

    </>
  )
}
