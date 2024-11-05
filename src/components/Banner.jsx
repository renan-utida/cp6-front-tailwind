import BannerDesconto from "../assets/banner.png"

export default function Banner(){

    return(
        <section className="w-full h-100">
            <a href="#">
                <img className="w-full h-auto" src={BannerDesconto} alt="Banner com desconto relacionado aos uniformes de time" />
            </a>
        </section>
    )
}