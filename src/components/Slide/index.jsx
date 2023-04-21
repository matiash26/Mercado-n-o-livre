import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useEffect, useRef, useState } from "react";
<<<<<<< HEAD
import Arrow from "../Arrow";
=======
import Arrow from "../Arrow"
>>>>>>> 070a9c1391acb627752ea2e85aa2019a4095b1d3
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
<<<<<<< HEAD
        const max = countElement * width
        const limitPosition = max - (width * onScreeen)
        position < limitPosition ? setPosition(prev => prev + stepElement) : setPosition(limitPosition)
        //o limitePosition vai dar um valor left exato para que não tenha espaço vazio no slide
=======
        const max = (countElement * width) - stepElement
        let limitPosition =  max - (width * onScreeen)
        //o limitePosition vai dar um valor left exato para que não tenha espaço vazio no slide
        position < limitPosition ? setPosition(prev => prev + stepElement) : setPosition(limitPosition + stepElement)
>>>>>>> 070a9c1391acb627752ea2e85aa2019a4095b1d3
    }

    useEffect(() => {
        countElement = slideRef.current.children.length
        width = slideRef.current.children[0].clientWidth
        stepElement = (width * step) + (step * 16)
        //(largura * quantidade de slide eliminado) ao clicar + quantidade de (slide eliminados * 16 pixel) que seria 1rem do gap
    }, [position])
    return (
        <div className="slideContainer">
<<<<<<< HEAD
            <Arrow btn={prev} icon={<FiChevronLeft />} side="leftArrow" />
=======
            <Arrow btn={prev} icon={<FiChevronLeft/>} side ="leftArrow" />
>>>>>>> 070a9c1391acb627752ea2e85aa2019a4095b1d3
            <div className="slides">
                <div className="slideList" style={{ right: `${position}px` }} ref={slideRef}>
                    {children}
                </div>
            </div>
<<<<<<< HEAD
            <Arrow btn={next} icon={<FiChevronRight />} side="rightArrow"/>
=======
            <Arrow btn={next} icon={<FiChevronRight/>} side ="rightArrow" />
>>>>>>> 070a9c1391acb627752ea2e85aa2019a4095b1d3
        </div>
    )
}
export default Slide;