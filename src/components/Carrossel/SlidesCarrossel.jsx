import { useState } from "react";

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function SlidesCarrossel({slides}){

    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () =>{
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const nextSlide = () =>{
        if (currentSlide === slides.length - 1){ 
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };  

    return(
        <section className="overflow-hidden relative">
            <div 
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}>
            {slides.map((s)=>{
                return <img src={s} alt="Slides Produtos" />
            })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-yellow-500 px-5 text-3xl">
                <button onClick={previousSlide}>
                    <FaArrowCircleLeft/>
                </button>
                <button onClick={nextSlide}>
                    <FaArrowCircleRight/>
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full ">
                {slides.map((s, i)=>{
                    return (
                        <div 
                            onClick={()=>{
                                setCurrentSlide(i);
                            }}
                            key={"circle" + i} 
                            className={`rounded-full w-5 h-5 ${
                                i == currentSlide ? 'bg-white' : 'bg-gray-300'
                            } cursor-pointer transition duration-400 hover:bg-gray-300`}
                        ></div>
                    );
                })}
                
            </div>
        </section>
    )
}