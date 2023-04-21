import "./style.css"
function Arrow({ btn, icon, side, ...rest }) {
    return (
        <button onClick={btn} {...rest} className={`arrow ${side}`}>{icon}</button>
    )
}
export default Arrow;
