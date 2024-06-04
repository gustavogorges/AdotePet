'use client'
import Nav from "@/components/nav/nav";
import { User } from "@/models/User";
import { Key } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blue, grey } from "@mui/material/colors";
import { useState } from "react";
import { UserService } from "@/services/UserService";
import { useRouter } from "next/navigation";

type FormData = {
    [key : string] : string
}

const Register = () => {
    const router = useRouter();
    let user = new User('','','','','');

    const [formData, setFormData] = useState({
     userName : '',
     userEmail : '',
     userTelephone : '',
     userPassword : '',
     userBornDate : '',
     passwordConfirmation : '',
    })

    const listInputs = [
        { text: 'Nome Completo', name: 'userName', type: 'text' },
        { text: 'Email', name: 'userEmail', type: 'text' },
        { text: 'Telefone', name: 'userTelephone', type: 'number' },
        { text: 'Senha', name: 'userPassword', type: 'password' },
        { text: 'Data de Nascimento', name: 'userBornDate', type: 'text' },
        { text: 'Confirmação de Senha', name: 'passwordConfirmation', type: 'password' },
    ]

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async() => {
        const {userName, userEmail, userTelephone, userPassword, userBornDate} = formData;

        let newUser = new User(
            userName,
            userEmail,
            userTelephone,
            userPassword,
            userBornDate
        )

        newUser = await UserService.registerUser(newUser);
        
        console.log(newUser)
    }

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
                            Seja Bem Vindo!
                        </p>
                        <p className=" text-2xl opacity-70 text-[#F2A97E] font-semibold">
                            Crie sua conta e faça parte do time!
                        </p>
                    </div>
                </div>
                <div className="w-[50%] h-[60%] rounded-3xl border-8 bg-white flex justify-start px-5 items-center">
                    <div className=" w-[100%] h-[80%] flex flex-col justify-center items-center">
                        <div className=" w-full h-[50%] grid grid-rows-2">
                            {
                                listInputs.map((input) => {
                                    if (input.text == "Nome Completo" || input.text == "Email") {
                                        return (
                                            <>
                                                <div className=" w-full h-full flex flex-col justify-center px-4">
                                                    <p className="text-lg text-[#3399BB] font-extrabold" key={input.text}>{input.text}</p>
                                                    <input 
                                                    className=" border-b-2 outline-none px text-base w-full" 
                                                    type={input.type}
                                                    name={input.name} 
                                                    value={formData[input.name] || ''}
                                                    onChange={handleChange}
                                                    />
                                                </div>
                                            </>
                                        );
                                    }
                                })
                            }
                        </div>
                        <div className=" w-full h-[50%] grid grid-cols-2 grid-rows-2">
                            {
                                listInputs.map((input) => {
                                    if (input.text != "Nome Completo" && input.text != "Email") {
                                        return (
                                            <>
                                                <div className=" w-full h-full flex flex-col justify-center px-4">
                                                    <p className="text-lg text-[#3399BB] font-extrabold" key={input.text}>{input.text}</p>
                                                    <input 
                                                    className=" border-b-2 outline-none px text-base w-full" 
                                                    type={input.type} 
                                                    name={input.name}
                                                    value={formData[input.name] || ''}
                                                    onChange={handleChange}
                                                    />
                                                </div>
                                            </>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className=" w-full h-12 flex justify-center items-center">
                    <div className=" h-full w-[15%] bg-[#D971A1] flex justify-center rounded-2xl items-center cursor-pointer">
                        <p 
                        onClick={()=> {
                            handleSubmit()
                        }}
                        className="text-white text-lg underline font-bold">
                        Cadastrar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;