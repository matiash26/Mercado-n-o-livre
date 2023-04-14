import { IoIosSearch } from "react-icons/io"
import { BsCart2, BsGeoAlt } from "react-icons/bs"
import logo from "../../assets/logo.png"
import "./style.css"

function Header() {
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
                            <li><a href="#">Categorias</a></li>
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