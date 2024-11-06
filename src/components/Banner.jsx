import BannerDesconto from "../assets/banner.png"

export default function Banner(){

    return(
        <section id="home" className="w-full h-auto mt-32">
            <a href="#">
                <img className="w-full h-auto" src={BannerDesconto} alt="Banner com desconto relacionado aos uniformes de time" />
            </a>
        </section>
    )
}