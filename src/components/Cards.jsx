import Bola1 from "../assets/bola1.png";
import Bola2 from "../assets/bola2.png";
import Bola3 from "../assets/bola3.png";
import Bola4 from "../assets/bola4.png";
import Camiseta1 from "../assets/camiseta1.png";
import Camiseta2 from "../assets/camiseta2.png";
import Camiseta3 from "../assets/camiseta3.png";
import Camiseta4 from "../assets/camiseta4.png";
import Tenis1 from "../assets/tenis1.png";
import Tenis2 from "../assets/tenis2.png";
import Tenis3 from "../assets/tenis3.png";
import Tenis4 from "../assets/tenis4.png";
import Chuteira1 from "../assets/chuteira1.png";
import Chuteira2 from "../assets/chuteira2.png";
import Chuteira3 from "../assets/chuteira3.png";
import Chuteira4 from "../assets/chuteira4.png";

export default function Cards(){

    return(
        <section id="produtos" className="flex flex-col">
            <h2 className="text-5xl font-bold mx-auto mt-10 text-amber-600 drop-shadow-lg">Conheça nossos produtos!</h2>
            <div className="flex flex-col">
                <h3 className="mx-auto mt-10 text-4xl font-bold text-yellow-500 mb-4">Camisetas de Time e Seleção</h3>
                <div className="flex flex-row justify-evenly px-8 py-6">
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-96 bg-slate-600">
                            <img className="w-100 h-100" src={Camiseta1} alt="Camiseta de Time - Seleção"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Camiseta Seleção Brasileira 2022/23</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">50% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 399,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 199,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-96 bg-slate-600">
                            <img className="w-100 h-100" src={Camiseta2} alt="Camiseta de Time - Palmeiras"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Camiseta Palmeiras 2023/24</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">50% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 299,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 149,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-96 bg-slate-600">
                            <img className="w-100 h-100" src={Camiseta4} alt="Camiseta de Time - Barcelona"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Camiseta Barcelona 2024/25</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">25% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 399,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 299,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-96 bg-slate-600">
                            <img className="w-100 h-100" src={Camiseta3} alt="Camiseta de Time - Real Madrid"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Camiseta Real Madrid 2022/23</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">25% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 399,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 299,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="mx-auto mt-10 text-4xl font-bold text-yellow-500 mb-4">Bolas Esportivas</h3>
                <div className="flex flex-row justify-evenly px-8 py-6">
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-96 bg-slate-600">
                            <img className="w-100 h-100" src={Bola1} alt="Bola Futebol - Euro"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Bola Futebol - Euro 2024</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">25% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 99,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 74,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-96 bg-slate-600">
                            <img className="w-100 h-100" src={Bola2} alt="Bola Copa 2022"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Bola Futebol - Copa 2022</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">30% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 99,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 69,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-96 bg-slate-600">
                            <img className="w-100 h-auto pb-8" src={Bola3} alt="Camiseta de Time - Barcelona"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Bola Basquete - NBA 2024/25</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">20% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 149,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 119,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-96 bg-slate-600">
                            <img className="w-100 h-100" src={Bola4} alt="Camiseta de Time - Real Madrid"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Bola Volei - Mikasa 2024</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">20% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 149,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 119,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="mx-auto mt-10 text-4xl font-bold text-yellow-500 mb-4">Chuteiras Nike & Adidas</h3>
                <div className="flex flex-row justify-evenly px-8 py-6">
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-64 bg-slate-600">
                            <img className="w-100 h-100" src={Chuteira1} alt="Chuteira Nike - Preta"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Chuteira Nike - Preta</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">40% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 399,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 239,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-64 bg-slate-600">
                            <img className="w-100 h-100" src={Chuteira2} alt="Chuteira Nike - Verde"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Chuteira Nike - Verde</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">20% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 249,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 199,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-64 bg-slate-600">
                            <img className="w-100 h-100" src={Chuteira3} alt="Chuteira Adidas - Preta"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Camiseta Adidas - Preta</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">25% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 299,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 224,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-64 bg-slate-600">
                            <img className="w-100 h-100" src={Chuteira4} alt="Chuteira Adidas - Azul"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Chuteira Adidas - Azul</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">25% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 399,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 299,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="mx-auto mt-10 text-4xl font-bold text-yellow-500 mb-4">Tênis Corrida & Academia</h3>
                <div className="flex flex-row justify-evenly px-8 py-6">
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-64 bg-slate-600">
                            <img className="w-100 h-100" src={Tenis1} alt="Tenis Nike - Preto"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Tenis Nike - Preto</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">15% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 199,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 169,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-64 bg-slate-600">
                            <img className="w-100 h-100" src={Tenis2} alt="Tenis Adidas - Laranja"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Tenis Adidas - Laranja</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">25% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 299,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 224,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-64 bg-slate-600">
                            <img className="w-100 h-100" src={Tenis3} alt="Tenis Puma - Preto"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Tenis Puma - Preto</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">20% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 249,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 199,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                    <div className="flex flex-col px-3 py-4 border-2 rounded-lg max-w-72  border-yellow-400 bg-black text-white">
                        <div className="mx-auto mt-1 w-64 h-64 bg-slate-600">
                            <img className="w-100 h-100" src={Tenis4} alt="Camiseta de Time - Real Madrid"/>
                        </div>
                        <h4 className="mt-4 text-2xl text-center font-bold">Tenis Nike - Rosa</h4>
                        <span className="mx-auto font-bold text-amber-600 text-2xl mt-2">25% OFF</span>
                        <p className="mx-auto line-through text-xl my-3">R$ 399,90</p>
                        <p className="mx-auto text-2xl text-bold mb-4">R$ 299,90</p>
                        <button className="border-2 px-4 py-2 mb-2 rounded-xl bg-yellow-500 font-bold text-black flex mx-auto hover:bg-yellow-600 transition ease-linear delay-75">Comprar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}