'use client'
import Nav from "@/components/nav/nav";
import { User } from "@/models/User";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blue, grey } from "@mui/material/colors";
import { log } from "console";

const Register = () => {
    let user = new User;
    let passwordConfirmation : string = '';

    const listInputs = [
        { text: 'Nome Completo', type: "text", value: user.name },
        { text: 'Email', type: "text", value: user.email },
        { text: 'Telefone', type: "number", value: user.telephone },
        { text: 'Senha', type: "text", value: user.password },
        { text: 'Data de Nascimento', type: "date", value: user.bornDate },
        { text: 'Confimarção de Senha', type: "text", value: passwordConfirmation },
    ]

    return (

        <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
            <Nav></Nav>
            <div className=" w-[70%] h-full flex flex-col items-center gap-8">
                <div className="w-full h-[10%] flex items-center justify-start">
                    <div className=" absolute h-16 w-16 bg-[#3399BB] flex justify-center items-center rounded-full cursor-pointer">
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
                                                    <input className=" border-4 outline-none px text-base w-full" type={input.type} value={input.value}/>
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
                                                    <input className=" border-4 outline-none px text-base w-full" type={input.type} value={input.value}/>
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
                            console.log(user);
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