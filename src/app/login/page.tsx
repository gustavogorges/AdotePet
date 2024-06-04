'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Nav from "../../components/nav/nav";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blue, grey } from "@mui/material/colors";
import { useState } from "react";
import { UserService } from "@/services/UserService";
import { User } from "@/models/User";
import { CookiesService } from "@/services/CookiesService";


const Login = () => {
    const service = UserService;
    const cookiesService = CookiesService;
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const router = useRouter();

    const listInput = [
        { text: "Email", placeholder: "Digite seu email aqui", type : "text"},
        { text: "Senha", placeholder: "Digite sua senha aqui", type : "password" },
    ];

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {value, placeholder} = e.target;
        if(placeholder == 'Digite seu email aqui') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }

    const handleSubmit = async () => {
        if(email != undefined) {
            const loggedUser = await service.findUserByEmail(email);
            if(loggedUser.password == password) {
                console.log("PASSWORD CORRECT")
                cookiesService.createLoggedUserCookie(loggedUser);
                router.push('/')
            } else {
                console.log('PASSWORD INCORRECT')
            }
            console.log(loggedUser);
        }
    }

    return (
        <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
            <Nav></Nav>
            <div className=" w-[70%] h-full flex flex-col  items-center">
                <div className="w-full h-[10%] flex items-center justify-start">
                    <div
                        className=" absolute h-16 w-16 bg-[#3399BB] flex justify-center items-center rounded-full cursor-pointer"
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <ArrowBackIcon sx={{ color: grey[50] }} fontSize="large" />
                    </div>
                </div>
                <div className="w-[40%] h-[70%] grid grid-rows-5 rounded-xl border-2 bg-white">
                    <div className="flex justify-center items-center row-start-1 row-end-3">
                        <Image src='/logo2.png' alt="logo" width={350} height={250} />
                    </div>

                    {
                        listInput.map((element) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className=" row-span-1 flex flex-col items-center justify-center">
                                    <div className=" h-[50%] w-full flex justify-center items-center">
                                        <p className=" text-[#3399BB] text-2xl font-bold">{element.text}</p>
                                    </div>
                                    <div className=" h-[50%] w-full flex justify-center items-center">
                                        <input
                                            type={element.type}
                                            className="h-[70%] w-[60%] outline-none text-[#3399BB] font-bold text-xl text-center border-b-2"
                                            placeholder={element.placeholder}
                                            onChange={handleChange}
                                        />
                                    </div>

                                </div>
                            );
                        })
                    }

                    <div className=" w-full h-full flex justify-center items-center">
                        <div
                        onClick={() => {
                            handleSubmit()
                        }} 
                        className=" h-12 w-[55%] bg-[#D971A1] flex justify-center rounded-2xl items-center cursor-pointer"
                        >
                            <p
                                className="text-white text-lg underline font-bold">
                                Entrar
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
