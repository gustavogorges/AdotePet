"use client";
import Nav from "@/components/nav/nav";
import { cyan, grey, pink } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import PetsIcon from "@mui/icons-material/Pets";
import { Pets } from "@mui/icons-material";
import PetService from "@/services/PetService";
import useCookie from "@/hooks/useCookie";
import { Pet } from "@/models/Pet";
import { useEffect, useState } from "react";

const myPets = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pets, setPets] = useState<Pet[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState<boolean>(true);
  const petService = PetService;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loggedUserId = useCookie("loggedUserId");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchPets = async () => {
      if (loggedUserId) {
        try {
          const petList = await PetService.findPetByUserId(Number(loggedUserId));
          setPets(petList);
        } catch (error) {
          console.error('Failed to fetch pets', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPets();
  }, [loggedUserId]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
              <p className=" text-5xl text-[#F2A97E] font-bold">Seus Pets</p>
              <p className=" text-2xl opacity-70 text-[#F2A97E] font-semibold">
                Aqui você pode visualizar seus pet e editar as informações
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
        <div className=" w-full h-[65%] grid grid-cols-2 overflow-y-auto h-max-[65%]">
          <div className="flex justify-center items-center h-full w-full">
            {
            pets.map((pet) => {
                console.log(pet)
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="h-[60%] w-[70%] bg-white border-4 rounded-xl flex flex-col justify-start py-4 px-4 items-center">
                  <div className=" flex justify-center items-center self-end bg-[#D971A1] h-8 w-8 rounded-lg cursor-pointer">
                    <p className=" text-base font-semibold text-white">X</p>
                  </div>
                  <div className=" h-32 w-32 flex justify-center items-center rounded-full bg-[#D971A1] opacity-65">
                    <Pets sx={{ color: grey[50] }} fontSize="large" />
                  </div>
                  <div className=" h-[15%] w-full flex justify-center items-center">
                    <p className="text-[#D971A1] underline text-xl font-bold">
                      {pet.name}
                    </p>
                  </div>
                  <div className=" h-[10%] mt-4 w-[30%] rounded-lg bg-[#D971A1] flex justify-center items-center">
                    <p className=" font-bold text-white">Editar</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default myPets;
