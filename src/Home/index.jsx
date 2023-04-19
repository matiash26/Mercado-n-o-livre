import { BsFillCreditCard2BackFill, BsPlus, BsMic, BsTools, BsController } from "react-icons/bs"
import { MdOutlinePhoneAndroid, MdOutlineDirectionsCarFilled, MdMonitor } from "react-icons/md"
import { GiReceiveMoney, GiSteeringWheel, GiLipstick, GiBearFace, GiTShirt, GiSmartphone, GiSoccerBall, GiModernCity } from "react-icons/gi"
import { TbArmchair } from "react-icons/tb"

import CreditSession from "../components/CreditSession";
import CategoryItem from "../components/CategoryItem"
import Product from "../components/Product";
import Header from "../components/Header";
import Slide from "../components/Slide"
import Offer from "../components/Offer";

import dell from "../assets/image/dell.webp"
import watch from "../assets/image/watch.avif"
import iphone from "../assets/image/iphone.webp"
import tablet from "../assets/image/tablet.webp"
import cam from "../assets/image/cam.webp"

import slide01 from "../assets/image/slide01.png"
import slide02 from "../assets/image/slide02.png"
import slide03 from "../assets/image/slide03.png"

import "./style.css"

function Home() {
    const product = [
        {
            nome: "Smartwatch Samsung Galaxy Watch",
            preco: 1599,
            foto: watch,
            descricao: "Smartwatch Samsung Galaxy Watch Active 2",
            parcelas: "10x R$ 160 sem juros"
        },
        {
            nome: "Smartphone Apple iPhone 13",
            preco: 6999,
            foto: iphone,
            descricao: "Smartphone Apple iPhone 13, 128GB",
            parcelas: "10x R$ 700 sem juros"
        },
        {
            nome: "Tablet Samsung Galaxy Tab S7+",
            preco: 4599,
            foto: tablet,
            descricao: "Tablet Samsung Galaxy Tab S7+, 256GB",
            parcelas: "10x R$ 460 sem juros"
        },
        {
            nome: "Notebook Dell Inspiron 15",
            foto: dell,
            preco: 3270,
            descricao: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM",
            parcelas: "10x R$ 327 sem juros"

        },
        {
            nome: "Câmera Canon EOS R6",
            preco: 16399,
            foto: cam,
            descricao: "Câmera Canon EOS R6 com Lente 24-105mm f/4L",
            parcelas: "12x R$ 1.366,58 sem juros"
        },
        {
            nome: "Notebook Dell Inspiron 15",
            foto: dell,
            preco: 3270,
            descricao: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM",
            parcelas: "10x R$ 327 sem juros"

        },
        {
            nome: "Smartwatch Samsung Galaxy Watch",
            preco: 1599,
            foto: watch,
            descricao: "Smartwatch Samsung Galaxy Watch Active 2",
            parcelas: "10x R$ 160 sem juros"
        },
        {
            nome: "Smartphone Apple iPhone 13",
            preco: 6999,
            foto: iphone,
            descricao: "Smartphone Apple iPhone 13, 128GB",
            parcelas: "10x R$ 700 sem juros"
        },
        {
            nome: "Tablet Samsung Galaxy Tab S7+",
            preco: 4599,
            foto: tablet,
            descricao: "Tablet Samsung Galaxy Tab S7+, 256GB",
            parcelas: "10x R$ 460 sem juros"
        },
        {
            nome: "Notebook Dell Inspiron 15",
            foto: dell,
            preco: 3270,
            descricao: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM",
            parcelas: "10x R$ 327 sem juros"

        },
        {
            nome: "Smartwatch Samsung Galaxy Watch",
            preco: 1599,
            foto: watch,
            descricao: "Smartwatch Samsung Galaxy Watch Active 2",
            parcelas: "10x R$ 160 sem juros"
        },
        {
            nome: "Smartphone Apple iPhone 13",
            preco: 6999,
            foto: iphone,
            descricao: "Smartphone Apple iPhone 13, 128GB",
            parcelas: "10x R$ 700 sem juros"
        },
        {
            nome: "Tablet Samsung Galaxy Tab S7+",
            preco: 4599,
            foto: tablet,
            descricao: "Tablet Samsung Galaxy Tab S7+, 256GB",
            parcelas: "10x R$ 460 sem juros"
        },
        {
            nome: "Notebook Dell Inspiron 15",
            foto: dell,
            preco: 3270,
            descricao: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM",
            parcelas: "10x R$ 327 sem juros"

        },
        {
            nome: "Câmera Canon EOS R6",
            preco: 16399,
            foto: cam,
            descricao: "Câmera Canon EOS R6 com Lente 24-105mm f/4L",
            parcelas: "12x R$ 1.366,58 sem juros"
        },
        {
            nome: "Notebook Dell Inspiron 15",
            foto: dell,
            preco: 3270,
            descricao: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM",
            parcelas: "10x R$ 327 sem juros"

        },
        {
            nome: "Smartwatch Samsung Galaxy Watch",
            preco: 1599,
            foto: watch,
            descricao: "Smartwatch Samsung Galaxy Watch Active 2",
            parcelas: "10x R$ 160 sem juros"
        },
        {
            nome: "Smartphone Apple iPhone 13",
            preco: 6999,
            foto: iphone,
            descricao: "Smartphone Apple iPhone 13, 128GB",
            parcelas: "10x R$ 700 sem juros"
        },
        {
            nome: "Tablet Samsung Galaxy Tab S7+",
            preco: 4599,
            foto: tablet,
            descricao: "Tablet Samsung Galaxy Tab S7+, 256GB",
            parcelas: "10x R$ 460 sem juros"
        },
        {
            nome: "Notebook Dell Inspiron 15",
            foto: dell,
            preco: 3270,
            descricao: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM",
            parcelas: "10x R$ 327 sem juros"

        },

    ]
    return (
        <>
            <Header />
            <main className="container">
                <section className="slidePromotion">
                    <Slide onScreeen={1} step={1}>
                        <img className="imageSlide" src={slide01} alt="imagem 1" />
                        <img className="imageSlide" src={slide02} alt="imagem 2" />
                        <img className="imageSlide" src={slide03} alt="imagem 3" />
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
                    <Slide onScreeen={5} step={3}>
                        {
                            product.map((el, x) => <Product key={x} picture={el?.foto} price={el.preco} discount={el.parcelas} description={el.descricao} />)
                        }
                    </Slide>
                </Offer>
                <Offer title="Baseada na sua última visita" link="Ver histórico">
                    <Slide onScreeen={5} step={3}>
                        {
                            product.map((el, x) => <Product key={x} picture={el.foto} price={el.preco} discount={el.parcelas} description={el.descricao} />)
                        }
                    </Slide>
                </Offer>
                <Offer title="Você também pode gostar" link="Ver histórico">
                    <Slide onScreeen={5} step={3}>
                        {
                            product.map((el, x) => <Product key={x} picture={el.foto} price={el.preco} discount={el.parcelas} description={el.descricao} />)
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
                <Offer title="Categorias populares">
                    <div className="categoryContainer">
                        <Slide onScreeen={7} step={3}>
                            <div>
                                <CategoryItem text="Carros, Motos e Outros" icon={<MdOutlineDirectionsCarFilled />} />
                                <CategoryItem text="Acessórios para Veículos" icon={<GiSteeringWheel />} />
                            </div>
                            <div>
                                <CategoryItem text="Beleza e Cuidado Pessoal" icon={<GiLipstick />} />
                                <CategoryItem text="Binruqedos e Hobbies" icon={<GiBearFace />} />
                            </div>
                            <div>
                                <CategoryItem text="Calçados, Roupas e Bolsas" icon={<GiTShirt />} />
                                <CategoryItem text="Casa, Móvies e Decoração" icon={<TbArmchair />} />
                            </div>
                            <div>
                                <CategoryItem text="Celulares e Telefones" icon={<GiSmartphone />} />
                                <CategoryItem text="Eletrodomésticos" icon={<MdOutlineDirectionsCarFilled />} />
                            </div>
                            <div>
                                <CategoryItem text="Eletrônicos, Áudio e Vídeo" icon={<BsMic />} />
                                <CategoryItem text="Esportes e Ftiness" icon={<GiSoccerBall />} />
                            </div>
                            <div>
                                <CategoryItem text="Beleza e Cuidado Pessoal" icon={<GiLipstick />} />
                                <CategoryItem text="Binruqedos e Hobbies" icon={<GiBearFace />} />
                            </div>
                            <div>
                                <CategoryItem text="Calçados, Roupas e Bolsas" icon={<GiTShirt />} />
                                <CategoryItem text="Casa, Móvies e Decoração" icon={<TbArmchair />} />
                            </div>
                            <div>
                                <CategoryItem text="Carros, Motos e Outros" icon={<MdOutlineDirectionsCarFilled />} />
                                <CategoryItem text="Acessórios para Veículos" icon={<GiSteeringWheel />} />
                            </div>
                            <div>
                                <CategoryItem text="Beleza e Cuidado Pessoal" icon={<GiLipstick />} />
                                <CategoryItem text="Binruqedos e Hobbies" icon={<GiBearFace />} />
                            </div>
                            <div>
                                <CategoryItem text="Calçados, Roupas e Bolsas" icon={<GiTShirt />} />
                                <CategoryItem text="Casa, Móvies e Decoração" icon={<TbArmchair />} />
                            </div>
                            <div>
                                <CategoryItem text="Eletrônicos, Áudio e Vídeo" icon={<BsMic />} />
                                <CategoryItem text="Esportes e Ftiness" icon={<GiSoccerBall />} />
                            </div>
                        </Slide>
                    </div>
                </Offer>
            </main>
        </>
    )
}
export default Home;