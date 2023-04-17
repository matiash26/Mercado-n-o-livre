import "./style.css"
function Offer({ children, title, link }) {
    return (
        <section className="offerDay">
            <div className="titleOffer">
                <h1>{title}</h1>
                <a href="#">{link}</a>
            </div>
            {children}
        </section>
    )
}
export default Offer;