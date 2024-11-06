

export default function Formulario(){

    return(
        <section id="formulario" className="min-h-screen flex flex-col items-center justify-center py-10">
            <h2 className="text-4xl text-amber-500 font-bold drop-shadow-lg">Preencha nosso Formulário!</h2>
            <p className="font-bold text-xl text-white mt-3 mb-6">Contamos com o seu apoio!</p>

            <div className="w-full max-w-md bg-black border-4 border-yellow-500 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">Formulário de Contato</h2>
                
                <form action="#" method="POST">

                    <div className="mb-4">
                        <label for="name" className="block text-yellow-500">Nome:</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 mt-2 border-2 border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Digite seu nome" required />
                    </div>
                    
                    <div className="mb-4">
                        <label for="email" className="block text-yellow-500">E-mail:</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 mt-2 border-2 border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Digite seu e-mail" required />
                    </div>
                    
                    <div className="mb-4">
                        <label for="messageType" className="block text-yellow-500">Tipo de Mensagem:</label>
                        <select id="messageType" name="messageType" className="w-full px-4 py-2 mt-2 border-2 border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="pergunta">Pergunta</option>
                        <option value="sugestao">Sugestão</option>
                        </select>
                    </div>
                    
                    <div className="mb-6">
                        <label for="message" className="block text-yellow-500">Mensagem:</label>
                        <textarea id="message" name="message" className="w-full px-4 py-2 mt-2 border-2 border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Digite sua mensagem" required></textarea>
                    </div>
                    
                    <div className="flex justify-center">
                        <button type="submit" className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition ease-linear delay-75 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}