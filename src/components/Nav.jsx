import LogoImg from './../assets/logo.png'

export default function Nav(){

    return(
        <header className='w-full h-32 bg-black flex flex-row justify-between px-6 border-b-4 border-b-yellow-500 fixed top-0 left-0 z-50'>  
            <a href="#home" className='flex items-center'>
                <img className='w-44 h-24' src={LogoImg} alt="Logo Renan's Sports Outlet" />
            </a>
            <nav className='flex items-center'>
                <ul className='text-white text-lg font-bold flex flex-row gap-8'>
                    <li><a className='border-b-2 pb-1 border-b-yellow-500 hover:text-yellow-300 transition-colors delay-75' href="#home">Home</a></li>
                    <li><a className='border-b-2 pb-1 border-b-yellow-500 hover:text-yellow-300 transition-colors delay-75' href="#promocoes">Promoções</a></li>
                    <li><a className='border-b-2 pb-1 border-b-yellow-500 hover:text-yellow-300 transition-colors delay-75' href="#produtos">Produtos</a></li>
                    <li><a className='border-b-2 pb-1 border-b-yellow-500 hover:text-yellow-300 transition-colors delay-75' href="#formulario">Formulário</a></li>
                    <li><a className='border py-2 px-4 rounded-lg bg-white transition ease-linear delay-75 hover:bg-yellow-500 ml-2 text-black' href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}