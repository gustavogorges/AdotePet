'use client'
import Nav from "@/components/nav/nav";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { grey, pink } from "@mui/material/colors";
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const registerType = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()

    const handleNavigation = (type: string) => {
        router.push(`/register?type=${type}`);
    };

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
                            Qual perfil você se encaixa?
                        </p>
                        <p className=" text-2xl opacity-70 text-[#F2A97E] font-semibold">
                            Qual dos perfis abaixo você gostaria de se cadastrar
                        </p>
                    </div>
            </div>
            <div className="w-[60%] h-[60%] rounded-3xl border-8 bg-white flex justify-start px-5 items-center">
                    <div className=" w-[100%] h-[80%] grid grid-rows-3 ">
                        <div className=" h-full w-full grid grid-cols-4 border-b-2">
                            <div className=" col-span-1 flex justify-center items-center">
                                <ApartmentIcon sx={{ color: pink[200] }} className="w-16 h-16" />
                            </div>
                            <div className=" col-span-2 flex justify-start px-4 items-center">
                                <p className=" text-[#D971A1] font-bold text-2xl">Sou uma ONG</p>
                            </div>
                            <div 
                            className=" col-span-1 flex justify-center items-center cursor-pointer"
                            onClick={() => {
                                handleNavigation('ONG');
                            }}
                            >
                                <DoubleArrowIcon sx={{ color: pink[200] }} className="w-16 h-16" />
                            </div>
                        </div>
                        <div className=" h-full w-full grid grid-cols-4 border-b-2">
                            <div className=" col-span-1 flex justify-center items-center">
                                <VolunteerActivismIcon sx={{ color: pink[200] }} className="w-16 h-16" />
                            </div>
                            <div className=" col-span-2 flex justify-start px-4 items-center">
                                <p className=" text-[#D971A1] font-bold text-2xl">Gostaria de ser um tutor</p>
                            </div>
                            <div 
                            className=" col-span-1 flex justify-center items-center cursor-pointer"
                            onClick={() => {
                                handleNavigation('Tutor');
                            }}
                            >
                                <DoubleArrowIcon sx={{ color: pink[200] }} className="w-16 h-16" />
                            </div>
                        </div>
                        <div className=" h-full w-full grid grid-cols-4">
                            <div className=" col-span-1 flex justify-center items-center">
                                <ApartmentIcon sx={{ color: pink[200] }} className="w-16 h-16" />
                            </div>
                            <div className=" col-span-2 flex justify-start px-4 items-center">
                                <p className=" text-[#D971A1] font-bold text-2xl">Gostaria de ser um doador</p>
                            </div>
                            <div 
                            className=" col-span-1 flex justify-center items-center cursor-pointer"
                            onClick={() => {
                                handleNavigation('Doador');
                            }}
                            >
                                <DoubleArrowIcon sx={{ color: pink[200] }} className="w-16 h-16" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default registerType;