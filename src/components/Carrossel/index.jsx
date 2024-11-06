import SlidesCarrossel from "./SlidesCarrossel"

import slide1 from "./../../assets/slide1.png"
import slide2 from "./../../assets/slide2.png"
import slide3 from "./../../assets/slide3.png"
import slide4 from "./../../assets/slide4.png"


export default function Carrossel(){
    
    const slides = [slide1, slide2, slide3, slide4]
    
    return(
        <section id="promocoes" className="w-[90%] mx-auto py-12">
            <SlidesCarrossel className="w-100 h-80" slides={slides}/>
        </section>
    )
}