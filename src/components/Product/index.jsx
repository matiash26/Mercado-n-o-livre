import "./style.css"

function Product({ picture, price, discount, description }) {
    return (
        <a className="Product" href="#">
            <div className="imageProduct">
                <img src={picture} alt="Foto do produto" />
            </div>
            <div className="descProduct">
                <span className="price">R$ {price}</span>
                <span className="discount">{discount}</span>
                <span className="freight">Frete grátis</span>
                <p className="desc">{description}</p>
            </div>
        </a>
    )
}
export default Product;