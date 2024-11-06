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
        <section>
            <h2>Conheça nossos produtos!</h2>
            <div className="">
                <h3>Camisetas de Time e Seleção</h3>
                <div className="px-3 py-4 border-1 border-">
                    <div>
                        <img src={Camiseta1} alt="Camiseta de Time - Seleção"/>
                    </div>
                    <h4>Camiseta Seleção Brasileira 2022/23 - 50% OFF</h4>
                    <p>R$ 399,90</p>
                    <p>R$ 199,90</p>
                    <button>Comprar</button>
                </div>
                <div>
                    <div>
                        <img src={Camiseta2} alt="Camiseta de Time - Palmeiras"/>
                    </div>
                    <h4>Camiseta Palmeiras 2023/24 - 50% OFF</h4>
                    <p>R$ 299,90</p>
                    <p>R$ 149,90</p>
                    <button>Comprar</button>
                </div>
                <div>
                    <div>
                        <img src={Camiseta3} alt="Camiseta de Time - Barcelona"/>
                    </div>
                    <h4>Camiseta Barcelona 2024/25 - 25% OFF</h4>
                    <p>R$ 399,90</p>
                    <p>R$ 299,90</p>
                    <button>Comprar</button>
                </div>
                <div>
                    <div>
                        <img src={Camiseta4} alt="Camiseta de Time - Real Madrid"/>
                    </div>
                    <h4>Camiseta Real Madrid 2022/23 - 25% OFF</h4>
                    <p>R$ 399,90</p>
                    <p>R$ 299,90</p>
                    <button>Comprar</button>
                </div>
            </div>
        </section>
    )
}