'use client'
import useCookie from "@/hooks/useCookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { UserService } from "@/services/UserService";
import { User } from "@/models/User";
import PersonIcon from '@mui/icons-material/Person';
import { grey } from "@mui/material/colors";

const Nav = () => {
    const service = UserService;
    let loggedUserId = useCookie('loggedUserId');
    const [loggedUser , setLoggedUser] = useState<User>();

    useEffect(() => {
        async function fetchData() {
            if(loggedUserId !== undefined) {
                setLoggedUser(await service.findUserById(+loggedUserId))
            }
        }
        fetchData();
    }, [loggedUserId, service])
        

    const router = useRouter();
    const listItems = [
        { name : "Inicio", router : "/"},
        { name : "Adoções", router : ""},
        { name : "Eventos", router : ""},
        { name : "Suporte", router : ""},
    ]

    return(
        <div className=" w-full h-[12%] bg-white flex justify-center items-center mb-12">
            <div className="w-[70%] h-full bg-white grid grid-cols-4">
                <div className="col-span-1 w-[50%] flex justify-start items-center cursor-pointer">
                    <Image src='/logo.png' alt="logo" width={150} height={100}/>
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
                {
                <div className=" col-start-4 col-span-1 h-full flex items-center justify-end gap-8">
                    {!loggedUser ? (
                        <>
                        <p onClick={() => router.push('/login')} className="underline text-pink-400 text-lg font-bold cursor-pointer">Entrar</p>
                        <p onClick={() => router.push('/register')} className=" text-white text-lg py-2 px-2 rounded-xl bg-[#D971A1] font-bold cursor-pointer">Cadastre-se</p>
                        </>
                    ) : (
                        <>
                        <p 
                        onClick={() => {
                            router.push("/profile")
                        }}
                        className="text-[#3399BB] font-bold text-lg underline cursor-pointer"
                        >{loggedUser.name}</p>
                        <div className="flex justify-center items-center h-12 w-12 bg-[#3399BB] opacity-50 rounded-full">
                            <PersonIcon sx={{ color: grey[50] }} fontSize="large" />
                        </div>
                        </>
                    )}
                </div>
                }
            </div>
        </div>
    );
}

export default Nav;