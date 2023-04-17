import "./style.css"
function CreditSession ({icon, title, link}){
    return(
        <div className="creditSession">
            <div className="icon">{icon}</div>
            <div className="desc">
                <h3>{title}</h3>
                <a href="#">{link}</a>
            </div>
        </div>
    )
}
export default CreditSession