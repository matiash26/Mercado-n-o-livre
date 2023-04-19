import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useEffect, useRef, useState } from "react";
import "./style.css"
function Slide({ children, onScreeen, step }) {
    const [position, setPosition] = useState(0)
    const slideRef = useRef(null);

    let countElement = null
    let width = null
    let stepElement = null

    const prev = () => {
        position > 0 ? setPosition(prev => prev - stepElement) : setPosition(0)
    }
    const next = () => {
        const max = countElement * width
        const limitPosition =  max - (width * onScreeen)
        //o limitePosition vai dar um valor left exato para que não tenha espaço vazio no slide
        position < limitPosition ? setPosition(prev => prev + stepElement) : setPosition(limitPosition)
    }

    useEffect(() => {
        countElement = slideRef.current.children.length
        width = slideRef.current.children[0].clientWidth
        stepElement = width * step
    }, [position])
    return (
        <div className="slideContainer">
            <div className="arrow leftArrow" onClick={prev}><FiChevronLeft /></div>
            <div className="slides">
                <div className="slideList" style={{ right:`${position}px`}}ref={slideRef}>
                    {children}
                </div>
                {console.log(position)}
            </div>
            <div className="arrow rightArrow" onClick={next}>{<FiChevronRight />}</div>
        </div>
    )
}
export default Slide