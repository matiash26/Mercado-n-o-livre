import CreditSession from "../components/CreditSession";
import Header from "../components/Header";
import Product from "../components/Product";
import Offer from "../components/Offer";
import Slide from "../components/Slide"
import image01 from "../assets/image/1.png"
import image02 from "../assets/image/2.png"
import image03 from "../assets/image/3.png"

import { BsFillCreditCard2BackFill, BsPlus } from "react-icons/bs"
import { GiReceiveMoney } from "react-icons/gi"
import { MdOutlinePhoneAndroid } from "react-icons/md"
import "./style.css"

function Home() {
    const product = [
        {
            nome: "Notebook Dell Inspiron 15",
            foto: image01,
            preco: 3270,
            descricao: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM",
            parcelas: "10x R$ 327 sem juros"

        },
        {
            nome: "Smartwatch Samsung Galaxy Watch",
            preco: 1599,
            foto: image02,
            descricao: "Smartwatch Samsung Galaxy Watch Active 2",
            parcelas: "10x R$ 160 sem juros"
        },
        {
            nome: "Smartphone Apple iPhone 13",
            preco: 6999,
            foto: image03,
            descricao: "Smartphone Apple iPhone 13, 128GB",
            parcelas: "10x R$ 700 sem juros"
        },
        {
            nome: "Tablet Samsung Galaxy Tab S7+",
            preco: 4599,
            foto: image01,
            descricao: "Tablet Samsung Galaxy Tab S7+, 256GB",
            parcelas: "10x R$ 460 sem juros"
        },
        {
            nome: "Fone de ouvido Sony WH-1000XM4",
            preco: 2399,
            foto: image02,
            descricao: "Fone de ouvido Sony WH-1000XM4, noise cancelling",
            parcelas: "10x R$ 240 sem juros"
        },
        {
            nome: "Caixa de som JBL Xtreme 3",
            preco: 1299,
            foto: image03,
            descricao: "Caixa de som JBL Xtreme 3, Bluetooth",
            parcelas: "10x R$ 130 sem juros"
        },
        {
            nome: "Notebook Lenovo Ideapad 3i",
            preco: 2499,
            foto: image01,
            descricao: "Notebook Lenovo Ideapad 3i, Intel Core i7, 8GB RAM",
            parcelas: "10x R$ 250 sem juros"
        },
    ]
    return (
        <>
            <Header />
            <main className="container">
                <section className="slidePromotion">
                    <Slide>
                        <img className="imageSlide" src={image01} alt="imagem 1" />
                        <img className="imageSlide" src={image02} alt="imagem 2" />
                        <img className="imageSlide" src={image03} alt="imagem 3" />
                    </Slide>
                </section>
                <section className="creditCard">
                    <div className="firstElement">
                        <h3>Pagamento rápido e seguro</h3>
                        <span>com Mercado Pago</span>
                    </div>
                    <CreditSession icon={<BsFillCreditCard2BackFill />} title="Até 10 parcelas sem juros" link="Ver mais" />
                    <CreditSession icon={<GiReceiveMoney />} title="Parcelamento sem cartão" link="Conheça o Mercado Crédito" />
                    <CreditSession icon={<MdOutlinePhoneAndroid />} title="Via Pix" link="Ver mais" />
                    <div className="lastElement">
                        <div>
                            <BsPlus />
                        </div>
                    </div>
                </section>
                <Offer title="Ofertas do dia">
                    <Slide>
                        {
                            product.map(el => <Product picture={el?.foto} price={el.preco} discount={el.parcelas} description={el.descricao} />)
                        }
                    </Slide>
                </Offer>
                <Offer title="Baseada na sua última visita" link="Ver histórico">
                    <Slide>
                        {
                            product.map(el => <Product picture={el?.foto} price={el.preco} discount={el.parcelas} description={el.descricao} />)
                        }
                    </Slide>
                </Offer>
                <Offer title="Você também pode gostar" link="Ver histórico">
                    <Slide>
                        {
                            product.map(el => <Product picture={el?.foto} price={el.preco} discount={el.parcelas} description={el.descricao} />)
                        }
                    </Slide>
                </Offer>
                <section className="advertising">
                    <div className="headerAdvertising">
                        <h1>Assine o nível 6</h1>
                        <div className="discountAdvertising">
                            <span>R$ 49,99</span>
                            <span>R$ 14.99 /mês</span>
                        </div>
                    </div>
                    <div className="descAdvertising">
                        <h1>Conte com os melhores benefícios no Mercado Livre e do Mercado Pago</h1>
                    </div>
                    <div className="sponsors">
                        <CreditSession icon={<BsFillCreditCard2BackFill />} title="empresa + sem custo" />
                        <CreditSession icon={<BsFillCreditCard2BackFill />} title="empresa + sem custo" />
                        <CreditSession icon={<BsFillCreditCard2BackFill />} title="Frete grátis e rápido a partir de R$ 79 e 45% OFF em fretes de menos de R$ 79" />
                        <CreditSession icon={<BsFillCreditCard2BackFill />} title="60% OFF no Ultrapasse e outros benefícios" />
                    </div>
                    <div className="btnAd">
                        <button>Assine</button>
                    </div>
                </section>
                <Offer title="Benefícios do Mercado Pontos" link="Conferir todas as vantagens">
                    <div className="marketItemsContainer">
                        <div className="itemsMarket"></div>
                        <div className="itemsMarket"></div>
                        <div className="itemsMarket"></div>
                    </div>
                </Offer>
            </main>
        </>
    )
}
export default Home;