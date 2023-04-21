import "./style.css"
function AdvertisingCard({ icon, title, text, titleLink }) {
    return (
        <div className="AdvertisingCard">
            {icon}
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#">{titleLink}</a>
        </div>
    )
}
export default AdvertisingCard;