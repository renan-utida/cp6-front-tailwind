import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import LogoImg from './../assets/logo.png'

export default function Footer(){

    return(
        <footer className="bg-black w-full min-h-96 text-white flex flex-col py-8">
            <p className="mx-auto my-4 text-xl text-yellow-500">Todos os direitos reservados</p>
            <p className="mx-auto my-4 text-2xl font-bold">Desenvolvido por Renan Dias Utida (RM 558540)</p>
            <div className="flex flex-row gap-10 text-4xl mx-auto my-4">
                <a className="hover:text-yellow-500 transition-colors ease-linear delay-75" href="https://www.facebook.com/renan.diasutida"><FaFacebook/></a>
                <a className="hover:text-yellow-500 transition-colors ease-linear delay-75" href="https://www.instagram.com/_r_d_u/"><FaInstagram/></a>
                <a className="hover:text-yellow-500 transition-colors ease-linear delay-75" href="https://www.linkedin.com/in/renan-dias-utida-1b1228225/?originalSubdomain=br"><FaLinkedin/></a>
                <a className="hover:text-yellow-500 transition-colors ease-linear delay-75" href="https://github.com/renan-utida"><FaGithub/></a>    
            </div>
            <a className="flex" href="#home">
                <img className="w-auto h-32 mx-auto" src={LogoImg} alt="Logo" />
            </a>
        </footer>
    )
}