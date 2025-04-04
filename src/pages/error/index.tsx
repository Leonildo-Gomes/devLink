import { Link } from "react-router-dom";

 
 

 export function ErrorPage() { 

    return (
        <div className="flex max-w-full min-h-screen justify-center items-center flex-col text-white">
            <h1 className="font-bold text-6xl mb-2">404</h1>
            <h1 className="font-bold text-4xl mb-4">Pagina nao encontrada</h1>
            <p className="italic text-1xl mb-3"> Paginao nao existe</p>
            <Link  to={'/'} className="bg-gray-50/20 py-1 px-4 rounded-md"> Ir para Home</Link>
        </div>
  
    )
  }