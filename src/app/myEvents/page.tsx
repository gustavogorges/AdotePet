'use client'
import Nav from "@/components/nav/nav";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { grey } from "@mui/material/colors";

const myEvents = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    return (
        <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
          <Nav></Nav>
          <div className=" w-[60%] h-full flex flex-col items-center gap-8">
            <div className="w-full h-[15%] flex items-center justify-start">
              <div
                onClick={() => {
                  router.push("/profile");
                }}
                className=" absolute h-16 w-16 bg-[#3399BB] flex justify-center items-center rounded-full cursor-pointer"
              >
                <ArrowBackIcon sx={{ color: grey[50] }} fontSize="large" />
              </div>
              <div className=" h-full w-[100%] flex flex-col justify-center items-center">
                <div className=" flex flex-col items-center w-[50%] text-center">
                  <p className=" text-5xl text-[#F2A97E] font-bold">Seus Eventos</p>
                  <p className=" text-2xl opacity-70 text-[#F2A97E] font-semibold">
                    Aqui você pode visualizar seus eventos e editar as informações
                    deles.
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  router.push("/petRegister");
                }}
                className=" h-12 w-12 bg-[#F2A97E] flex justify-center items-center rounded-xl cursor-pointer"
              >
                <p className=" text-3xl text-white">+</p>
              </div>
            </div>
            <div className=" w-full h-[65%] overflow-y-auto h-max-[65%] flex justify-center items-center">
              <div className="flex flex-col items-center py-4 px-4 h-[85%] w-[65%] bg-white rounded-2xl border-4">
                <div className=" h-[10%] w-full flex justify-end">
                <div className=" flex justify-center items-center bg-[#D971A1] h-8 w-8 rounded-lg cursor-pointer">
                    <p className=" text-base font-semibold text-white">X</p>
                  </div>
                </div>
                <div className=" grid grid-cols-2 h-[70%] w-full">
                    <div className="flex justify-center items-center h-full w-full rounded-lg">
                        <div className=" h-full w-[80%] bg-slate-300 rounded-lg">

                        </div>
                    </div>
                </div>
                <div className=" h-[15%] w-full flex items-end justify-center mt-4">
                    <div className=" flex justify-center items-center h-[80%] rounded-lg w-[25%] bg-[#D971A1]">
                        <p className=" font-bold text-white">Editar</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}   

export default myEvents;