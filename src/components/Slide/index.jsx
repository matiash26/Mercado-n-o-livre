import "./style.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
function Slide({ children }) {
    return (
        <div className="slideContainer">
            <div className="arrow leftArrow"><FiChevronLeft /></div>
            <div className="slides">
                <div className="slideList">
                    {children}
                </div>
            </div>
            <div className="arrow rightArrow">{<FiChevronRight />}</div>
        </div>
    )
}
export default Slide