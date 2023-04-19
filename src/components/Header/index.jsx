import { IoIosSearch } from "react-icons/io"
import { BsCart2, BsGeoAlt } from "react-icons/bs"
import logo from "../../assets/logo.png"
import "./style.css"
import { useState } from "react"

function Header() {
    const [menuModal, setMenuModal] = useState(false)
    const openMenu = () =>{
        setMenuModal(prev => !prev)
    }
    return (
        <header>
            <nav>
                <div className="navContainer">
                    <div className="logoAndLocation">
                        <img src={logo} alt="Logo" />
                        <div className="CEP">
                            <BsGeoAlt />
                            <p>Informe seu <br /><strong>CEP</strong></p>
                        </div>
                    </div>
                    <div className="middleNav">
                        <div className="inputContainer">
                            <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
                            <IoIosSearch />
                        </div>
                        <ul className="menuList">
                            <li className="submenuContainer" onClick={openMenu}>
                                <a>Categorias</a>
                                <ul className="subMenuList" style={{display: `${menuModal ? "block" : "none"}`}}>
                                    <a href="#"><li>Veículos</li></a>
                                    <a href="#"><li>Supermercado</li></a>
                                    <a href="#"><li>Tecnologia</li></a>
                                    <a href="#"><li>Casa e Móveis</li></a>
                                    <a href="#"><li>Eletrodomésticos</li></a>
                                    <a href="#"><li>Esportes e Fitness</li></a>
                                    <a href="#"><li>Ferramentas</li></a>
                                    <a href="#"><li>Construção</li></a>
                                    <a href="#"><li>Indústria de Comércio</li></a>
                                    <a href="#"><li>Saúde</li></a>
                                    <a href="#"><li>Acessório para Veículos</li></a>
                                    <a href="#"><li>Beleza e Cuidado Pessoal</li></a>
                                    <a href="#"><li>Moda</li></a>
                                    <a href="#"><li>Bebês</li></a>
                                    <a href="#"><li>Brinquedos</li></a>
                                    <a href="#"><li>Imóveis</li></a>
                                    <a href="#"><li>Compra internacional</li></a>
                                    <a href="#"><li>Produtos Sustentaveis</li></a>
                                    <a href="#"><li>Mais vendidos</li></a>
                                    <a href="#"><li>Lojas oficiais</li></a>
                                    <a href="#"><li>Ver mais categoria</li></a>
                                </ul>
                            </li>
                            <li><a href="#">Ofertas do dia</a></li>
                            <li><a href="#">Histórico</a></li>
                            <li><a href="#">Moda</a></li>
                            <li><a href="#">Vender</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div className="navRight right">
                        <div className="ad">
                            <span>PROPAGANDA</span>
                        </div>
                        <ul className="menuList menuRight">
                            <li><a href="#">Crie a sua conta</a></li>
                            <li><a href="#">Entre</a></li>
                            <li><a href="#">Compras</a></li>
                            <li><BsCart2 /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;