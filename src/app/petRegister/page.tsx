'use client'
import Nav from "@/components/nav/nav";
import { cyan, grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PetsIcon from '@mui/icons-material/Pets';

const petRegister = () => {
    const textInputs = [
        { text: "Qual espécie do seu animal ?", inputType: "text" },
        { text: "Nome do Pet", inputType: "text" },
        { text: "Raça", inputType: "text" },
        { text: "Data de Nascimento", inputType: "text" },
    ]

    // const router = useRouter();

    return (
        <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
            <Nav></Nav>
            <div className=" w-[70%] h-full flex flex-col items-center gap-8">
                <div className="w-full h-[10%] flex items-center justify-start">
                    <div
                        onClick={() => {
                            // router.push('/');
                        }}
                        className=" absolute h-16 w-16 bg-[#3399BB] flex justify-center items-center rounded-full cursor-pointer"
                    >
                        <ArrowBackIcon sx={{ color: grey[50] }} fontSize="large" />
                    </div>
                    <div className=" h-full w-[100%] flex flex-col justify-center items-center">
                        <p className=" text-5xl text-[#F2A97E] font-bold">
                            Cadastro Pet
                        </p>
                        <p className=" text-2xl opacity-70 text-[#F2A97E] font-semibold">
                            Crie um perfil para seu pet.
                        </p>
                    </div>
                </div>
                <div className="w-[80%] h-[75%] rounded-3xl border-8 grid grid-cols-3 gap-4 bg-white px-3 py-4 ">
                    <div className=" col-span-1 h-full w-full ">
                        <div className=" w-full h-[20%] flex justify-center items-end">
                            <div className=" w-[35%] h-full rounded-full border-4 flex justify-center items-center">
                                <PetsIcon sx={{ color: cyan[500] }} className="h-20 w-20" />
                            </div>
                            <div className="h-[30%] w-[10%] bg-[#3399BB] cursor-pointer rounded-xl flex justify-center items-center">
                                <p className=" text-white text-2xl">+</p>
                            </div>
                        </div>
                        <div className=" w-full h-[80%]">
                            {
                                textInputs.map((input) => {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <div className=" w-full h-[25%] flex flex-col justify-center px-4">
                                            <p className="text-lg text-[#3399BB] font-extrabold" key={input.text}>{input.text}</p>
                                            <input
                                                className=" border-b-2 outline-none px text-base w-full"
                                                type={input.inputType}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className=" col-span-1 h-full w-full    ">
                        <div className=" h-full w-full flex flex-col justify-center items-center">
                            <div className=" flex flex-col w-full h-[30%]">
                                <p className=" text-[#3399BB] text-xl font-bold">Castrado ?</p>
                                <div className=" h-[30%] w-full flex items-center gap-4">
                                    <input type="checkbox" className="h-6 w-6" />
                                    <p>Sim</p>
                                </div>
                                <div className=" h-[30%] w-full flex items-center gap-4">
                                    <input type="checkbox" className="h-6 w-6" />
                                    <p>Não</p>
                                </div>
                            </div>
                            <div className=" flex flex-col w-full h-[30%]">
                                <p className=" text-[#3399BB] text-xl font-bold">Sexo do Pet</p>
                                <div className=" h-[30%] w-full flex items-center gap-4">
                                    <input type="checkbox" className="h-6 w-6" />
                                    <p>Macho</p>
                                </div>
                                <div className=" h-[30%] w-full flex items-center gap-4">
                                    <input type="checkbox" className="h-6 w-6" />
                                    <p>Fêmea</p>
                                </div>
                            </div>
                            <div className=" flex flex-col w-full h-[30%]">
                                <p className=" text-[#3399BB] text-xl font-bold">Vacinado ?</p>
                                <div className=" h-[30%] w-full flex items-center gap-4">
                                    <input type="checkbox" className="h-6 w-6" />
                                    <p>Sim</p>
                                </div>
                                <div className=" h-[30%] w-full flex items-center gap-4">
                                    <input type="checkbox" className="h-6 w-6" />
                                    <p>Não</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-1 h-full w-full ">
                        <div className=" h-full w-full flex flex-col justify-center items-center">
                            <div className=" flex flex-col w-full h-[30%]">
                                <p className=" text-[#3399BB] text-xl font-bold">Portador de Deficiência ?</p>
                                <div className=" h-[30%] w-full flex items-center gap-4">
                                    <input type="checkbox" className="h-6 w-6" />
                                    <p>Sim</p>
                                </div>
                                <div className=" h-[30%] w-full flex items-center gap-4">
                                    <input type="checkbox" className="h-6 w-6" />
                                    <p>Não</p>
                                </div>
                            </div>
                            <div className=" flex flex-col w-full h-[20%] gap-4">
                                <p className=" text-[#3399BB] text-xl font-bold">Localização do Pet</p>
                               
                                <input type="text" className=" border-b-2 outline-none px text-base w-[80%]"/>
                                
                            </div>
                            <div className=" flex flex-col w-full h-[40%] gap-4">
                                <p className=" text-[#3399BB] text-xl font-bold">Descrição do Pet</p>
                                <textarea className="w-[80%] h-max-[80%] border-2 px-2 outline-none h-[80%]"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full h-12 flex justify-center items-center">
                    <div className=" h-full w-[15%] bg-[#D971A1] flex justify-center rounded-2xl items-center cursor-pointer">
                        <p
                            // onClick={()=> {
                            //     handleSubmit()
                            // }}
                            className="text-white text-lg underline font-bold">
                            Cadastrar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default petRegister;