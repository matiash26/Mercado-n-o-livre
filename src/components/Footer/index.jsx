import AdvertisingCard from "../AdvertisingCard"
import { TfiCreditCard, TfiDropbox } from "react-icons/tfi"
import { AiOutlineSafetyCertificate } from "react-icons/ai"
import "./style.css"
import { useState } from "react"
function Footer() {
    const [openFooter, setOpenFooter] = useState(false)
    const openMoreInfo = () =>{
        setOpenFooter(prev => !prev)
    }
    return (
        <footer>
            <div className="footerSection">
                <div className="footer01">
                    <div className="footerItemContainer">
                        <AdvertisingCard icon={<TfiCreditCard />}
                            title="Escolha como pagar"
                            text="Com o Mercado Não Pago, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x no boleto com o Mercado Crédito."
                            titleLink="Como pagar com Mercado Não Pago" />
                    </div>

                    <div className="footerItemContainer">
                        <AdvertisingCard icon={<TfiDropbox />}
                            title="Frete grátis a partir de R$ 79"
                            text="Só por estar cadastrado no Mercado Livre, você tem frete grátis em milhares de produtos. É um benefício do Mercado Pontos."
                            titleLink="Saiba mais sobre este benefício" />
                    </div>
                    <div className="footerItemContainer">
                        <AdvertisingCard icon={<AiOutlineSafetyCertificate />}
                            title="Segurança, do início ao fim"
                            text="Você não gostou do que comprou? Devolva! No Mercado Livre não há nada que você não possa fazer, porque você está sempre protegido."
                            titleLink="Como te protegemos" />
                    </div>
                </div>
            </div>
            <div className="moreInfo">
                <button onClick={openMoreInfo}>Mais informações</button>
                <div className={`footerSection footerSecond ${openFooter && "showFooter"}`}>
                    <ul>
                        <h5>Sobre o </h5>
                        <li><a href="#"> Mercado não livre</a></li>
                        <li><a href="#">Investor relations</a></li>
                        <li><a href="#">Tendências</a></li>
                        <li><a href="#">Sustentabilidade</a></li>
                    </ul>
                    <ul>
                        <h5>Outros sites</h5>
                        <li><a href="#">Desenvolvedores</a></li>
                        <li><a href="#">Mercado Não Pago</a></li>
                        <li><a href="#">Mercado Não Envios</a></li>
                        <li><a href="#">Mercado Não Shops</a></li>
                        <li><a href="#">Mercado Não Ads</a></li>
                    </ul>
                    <ul>
                        <h5>Contato</h5>
                        <li><a href="#">Comprar</a></li>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Solução de problemas</a></li>
                        <li><a href="#">Segurança</a></li>
                    </ul>
                    <ul>
                        <h5>Redes sociais</h5>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li> <a href="#">YouTube</a></li>
                    </ul>
                    <ul>
                        <h5>Minha conta</h5>
                        <li><a href="#">Entre</a></li>
                        <li><a href="#">Vender</a></li>
                    </ul>
                    <ul>
                        <h5>Mercado Pontos</h5>
                        <li><a href="#">Nivel 6</a></li>
                        <li><a href="#">Disney+</a></li>
                        <li><a href="#">Star+</a></li>
                        <li><a href="#">HBO MAX</a></li>
                        <li><a href="#">Paramount+</a></li>
                        <li><a href="#">Deezer</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <div className="info">
                    <a href="#">Trabalhe conosco</a>
                    <a href="#">Termos e condições</a>
                    <a href="#">Como cuidamos da sua privacidade</a>
                    <a href="#">Acessibilidade</a>
                    <a href="#">Contato</a>
                    <a href="#">Informações sobre seguros</a>
                </div>
                <div className="company">
                    <span>Copyright © 1999-2023 github.com/matiash26 LTDA.</span>
                    <span>CNPJ n.º 00.000.000/0000-00 / Av. AAA AAAAAA, nº 000, AAAAA, AAAA /SP - CEP 00000-000 - empresa do grupo Mercado Não livre .</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer