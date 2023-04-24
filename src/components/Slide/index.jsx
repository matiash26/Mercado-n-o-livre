import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useEffect, useRef, useState } from "react";
import Arrow from "../Arrow"
import "./style.css"
function Slide({ children, onScreeen, step, px }) {
    const [position, setPosition] = useState(0)
    const slideRef = useRef(null);

    let countElement = null
    let width = null
    let stepElement = null
    
    const prev = () => {
       setPosition(prev => prev - stepElement < 0 ? 0 : prev - stepElement)
    }
    const next = () => {
        const max = (countElement * width) + (countElement * px)
        const limitPosition = max - ((width * onScreeen) + (onScreeen * px))
        setPosition(prev => prev + stepElement  < limitPosition ? prev + stepElement : limitPosition)
        // variavel max: somar a largura de todos os slides junto com o gap entre eles
        // variavel max: a soma total irá acabar empurrando o slide todo para fora da tela
        // variavel limitPosition: o resultado irá dar em um valor exato para o último elemento ficar na tela
        // variavel limitPosition: largura total - (quantos elementos queremos na tela) + (a soma de todo gap dos elementos)
    }

    useEffect(() => {
        countElement = slideRef.current.children.length
        width = slideRef.current.children[0].clientWidth
        stepElement = (width * step) + (step * px)
        //(largura * passo) + (passo * gap)
    }, [position])
    return (
        <div className="slideContainer">
            <Arrow btn={prev} icon={<FiChevronLeft/>} side ="leftArrow" />
            <div className="slides">
                <div className="slideList" style={{ right: `${position}px` }} ref={slideRef}>
                    {children}
                </div>
            </div>
            <Arrow btn={next} icon={<FiChevronRight/>} side ="rightArrow" />
        </div>
    )
}
export default Slide;