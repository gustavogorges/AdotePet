'use client'
import Nav from "@/components/nav/nav";
import { blue, cyan, grey } from "@mui/material/colors";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import useCookie from "@/hooks/useCookie";
import { useState, useEffect } from "react";
import { User } from "@/models/User";
import { UserService } from "@/services/UserService";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useRouter } from "next/navigation";

const Profile = () => {
    const router = useRouter();
    const userService = UserService;
    const loggedUserId = useCookie('loggedUserId');
    const [loggedUser, setLoggedUser] = useState<User>();

    const listInfo = [
        { text: 'Data de Nascimento', value: loggedUser?.bornDate },
        { text: 'Telefone', value: loggedUser?.telephone },
        { text: 'E-mail', value: loggedUser?.email },
        { text: 'Senha', value: loggedUser?.password },
    ]

    useEffect(() => {
        async function fetchData() {
            if (loggedUserId !== undefined) {
                setLoggedUser(await userService.findUserById(+loggedUserId))
            }
        }
        fetchData();
    }, [loggedUserId, userService])


    return (

        <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
            <Nav></Nav>
            <div className=" w-[70%] h-full flex flex-col items-center gap-8">
                <div className="w-full h-[10%] flex items-center justify-start">
                    <div
                        onClick = {() => {
                            router.push('/');
                        }}
                        className=" absolute h-16 w-16 bg-[#3399BB] flex justify-center items-center rounded-full cursor-pointer"
                    >
                        <ArrowBackIcon sx={{ color: grey[50] }} fontSize="large" />
                    </div>
                    <div className=" h-full w-[100%] flex flex-col justify-center items-center">
                        <p className=" text-5xl text-[#F2A97E] font-bold">
                            Meu Perfil
                        </p>
                        <p className=" text-2xl opacity-70 text-[#F2A97E] font-semibold">
                            Aqui você tem acesso as suas informações
                        </p>
                    </div>
                </div>
                <div
                    className="w-full h-[80%] grid grid-rows-3 grid-cols-4"
                >
                    <div className=" col-span-2 row-span-3 flex justify-start w-full h-full">
                        <div className=" rounded-2xl border-4 bg-white flex flex-col items-center h-full w-full">
                            <div className="h-[30%] w-[80%] flex flex-col items-center py-4">
                                <div className=" h-[70%] opacity-50 w-[20%] flex justify-center bg-[#3399BB] rounded-full items-center">
                                    <PersonIcon sx={{ color: grey[50] }} className=" w-14 h-14" />
                                </div>
                                <div className=" h-[30%] w-[60%] flex justify-center items-end">
                                    <p className=" text-2xl font-bold text-[#3399BB]">{loggedUser?.name}</p>
                                </div>
                            </div>
                            <div className=" h-[50%] w-[40%] flex flex-col items-start justify-center gap-4">
                                {
                                    listInfo.map((info) => {
                                        return (
                                            <>
                                                <div className="h-[20%] w-full flex flex-col items-start gap-2">
                                                    <p className="text-xl text-[#3399BB] font-bold">{info.text}</p>
                                                    <p className="text-lg text-[#3399BB] font-semibold opacity-70 border-b-2">{info.value}</p>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="h-[20%] w-[80%] flex justify-center items-center">
                                <div className=" cursor-pointer h-[40%] flex justify-center items-center rounded-lg w-[25%] bg-[#D971A1]">
                                    <p className="text-lg font-bold text-white"> Editar </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-2 w-[100%] row-span-2 flex justify-end">
                        <div className=" bg-white rounded-2xl border-4 w-[80%] h-[90%] py-4 flex flex-col gap-2 items-center">
                            <div className=" h-[30%] w-[20%] rounded-full bg-[#3399BB] flex opacity-60 justify-center items-center">
                                <CalendarMonthIcon sx={{ color: grey[50] }} className=" w-20 h-20" />
                            </div>
                            <div className=" h-[20%] w-[80%] flex justify-center items-center">
                                <p className=" font-bold text-[#3399BB] text-3xl">Seus Eventos</p>
                            </div>
                            <div className=" h-[20%] w-[30%] text-center flex justify-center items-center">
                                <p className=" text-[#D971A1] font-semibold opacity-70">Edite seus eventos já cadastrados ou adicione novos!</p>
                            </div>
                            <div className="h-[30%] w-full flex justify-center items-center">
                                <div className=" h-[50%] w-[30%] bg-[#D971A1] rounded-xl cursor-pointer flex justify-center items-center">
                                    <p className=" text-white font-bold text-lg">Entrar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-2 row-span-1 flex justify-end">
                        <div className=" border-4 rounded-2xl bg-white w-[80%] h-full py-2">
                            <div className=" h-[30%] w-full flex justify-center items-center">
                                <p className=" font-bold text-[#3399BB] text-3xl">Seus Pets</p>
                            </div>
                            <div className=" h-[30%] w-full flex justify-center items-center">
                                <div className=" text-center h-full w-[50%]">
                                    <p className="text-[#D971A1] font-semibold">Adicione novos pets ou edite o perfil dos seus já cadastrados :)</p>
                                </div>
                            </div>
                            <div className=" h-[30%] w-full flex justify-center items-center">
                                <div className="h-[80%] w-[30%] flex justify-center items-center rounded-xl cursor-pointer bg-[#D971A1]">
                                    <p className="font-bold text-white">Entrar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;