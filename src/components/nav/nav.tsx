'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const Nav = () => {
    const router = useRouter();
    const listItems = [
        { name : "Inicio", router : "/"},
        { name : "Adoções", router : ""},
        { name : "Eventos", router : ""},
        { name : "Suporte", router : ""},
    ]

    return(
        <div className=" w-full h-[12%] bg-white flex justify-center items-center">
            <div className="w-[70%] h-full bg-white grid grid-cols-4">
                <div className="col-span-1 w-[50%] flex justify-start items-center bg-pink-300">
                    {/*<Image src="/public/logo.png" alt="" width={100} height={100} />*/}
                </div>
                <div className=" col-start-2 col-span-2 flex items-center justify-center gap-8">
                    {
                        listItems.map((item) => {
                            return (
                                <p 
                                key={item.name}
                                className=" text-pink-400 text-lg font-bold underline cursor-pointer"
                                onClick={() => {router.push(item.router)}}
                                >{item.name}</p>
                            );
                        })
                    }
                </div>
                <div className=" col-start-4 col-span-1 h-full flex items-center justify-end gap-8">
                    <p onClick={() => router.push('/login')} className=" text-pink-400 text-lg font-bold cursor-pointer">Entrar</p>
                    <p onClick={() => router.push('/register')} className=" text-pink-400 text-lg font-bold cursor-pointer">Cadastre-se</p>
                </div>
            </div>
        </div>
    );
}

export default Nav;