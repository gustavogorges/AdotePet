'use client';
import React, { useState } from 'react';
import Nav from '@/components/nav/nav';
import { cyan, grey } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PetsIcon from '@mui/icons-material/Pets';
import { Pet } from '@/models/Pet';
import { useRouter } from 'next/navigation';
import PetService from '@/services/PetService';

const PetRegister = () => {
  const [pet, setPet] = useState<Pet>(new Pet());
  const petService = PetService;
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setPet(prevPet => ({
      ...prevPet,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    console.log(pet);
    pet.userId = 1
    petService.registerPet(pet);
    // Send the pet object to the backend here
    // Example: await PetService.createPet(pet);
    // Redirect or show a success message
  };

  return (
    <div className="w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
      <Nav />
      <div className="w-[70%] h-full flex flex-col items-center gap-8">
        <div className="w-full h-[10%] flex items-center justify-start">
          <div
            onClick={() => {
              router.push('/');
            }}
            className="absolute h-16 w-16 bg-[#3399BB] flex justify-center items-center rounded-full cursor-pointer"
          >
            <ArrowBackIcon sx={{ color: grey[50] }} fontSize="large" />
          </div>
          <div className="h-full w-[100%] flex flex-col justify-center items-center">
            <p className="text-5xl text-[#F2A97E] font-bold">Cadastro Pet</p>
            <p className="text-2xl opacity-70 text-[#F2A97E] font-semibold">Crie um perfil para seu pet.</p>
          </div>
        </div>
        <div className="w-[80%] h-[75%] rounded-3xl border-8 grid grid-cols-3 gap-4 bg-white px-3 py-4">
          <div className="col-span-1 h-full w-full">
            <div className="w-full h-[20%] flex justify-center items-end">
              <div className="w-[35%] h-full rounded-full border-4 flex justify-center items-center">
                <PetsIcon sx={{ color: cyan[500] }} className="h-20 w-20" />
              </div>
              <div className="h-[30%] w-[10%] bg-[#3399BB] cursor-pointer rounded-xl flex justify-center items-center">
                <p className="text-white text-2xl">+</p>
              </div>
            </div>
            <div className="w-full h-[80%]">
              <div className="w-full h-[25%] flex flex-col justify-center px-4">
                <p className="text-lg text-[#3399BB] font-extrabold">Qual espécie do seu animal?</p>
                <input
                  className="border-b-2 outline-none px text-base w-full"
                  type="text"
                  name="species"
                  value={pet.species}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full h-[25%] flex flex-col justify-center px-4">
                <p className="text-lg text-[#3399BB] font-extrabold">Nome do Pet</p>
                <input
                  className="border-b-2 outline-none px text-base w-full"
                  type="text"
                  name="name"
                  value={pet.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full h-[25%] flex flex-col justify-center px-4">
                <p className="text-lg text-[#3399BB] font-extrabold">Raça</p>
                <input
                  className="border-b-2 outline-none px text-base w-full"
                  type="text"
                  name="race"
                  value={pet.race}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full h-[25%] flex flex-col justify-center px-4">
                <p className="text-lg text-[#3399BB] font-extrabold">Data de Nascimento</p>
                <input
                  className="border-b-2 outline-none px text-base w-full"
                  type="text"
                  name="birthDate"
                  value={pet.birthDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 h-full w-full">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="flex flex-col w-full h-[30%]">
                <p className="text-[#3399BB] text-xl font-bold">Castrado?</p>
                <div className="h-[30%] w-full flex items-center gap-4">
                  <input type="checkbox" name="castrated" checked={pet.castrated} onChange={handleChange} className="h-6 w-6" />
                  <p>Sim</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-[30%]">
                <p className="text-[#3399BB] text-xl font-bold">Sexo do Pet</p>
                <div className="h-[30%] w-full flex items-center gap-4">
                  <input type="radio" name="sex" value="male" checked={pet.sex === 'male'} onChange={handleChange} className="h-6 w-6" />
                  <p>Macho</p>
                </div>
                <div className="h-[30%] w-full flex items-center gap-4">
                  <input type="radio" name="sex" value="female" checked={pet.sex === 'female'} onChange={handleChange} className="h-6 w-6" />
                  <p>Fêmea</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-[30%]">
                <p className="text-[#3399BB] text-xl font-bold">Vacinado?</p>
                <div className="h-[30%] w-full flex items-center gap-4">
                  <input type="checkbox" name="vacinated" checked={pet.vacinated} onChange={handleChange} className="h-6 w-6" />
                  <p>Sim</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-full w-full">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="flex flex-col w-full h-[30%]">
                <p className="text-[#3399BB] text-xl font-bold">Portador de Deficiência?</p>
                <div className="h-[30%] w-full flex items-center gap-4">
                  <input type="checkbox" name="deficient" checked={pet.deficient} onChange={handleChange} className="h-6 w-6" />
                  <p>Sim</p>
                </div>
              </div>
              <div className="flex flex-col w-full h-[20%] gap-4">
                <p className="text-[#3399BB] text-xl font-bold">Localização do Pet</p>
                <input type="text" name="location" value={pet.location} onChange={handleChange} className="border-b-2 outline-none px text-base w-[80%]" />
              </div>
              <div className="flex flex-col w-full h-[40%] gap-4">
                <p className="text-[#3399BB] text-xl font-bold">Descrição do Pet</p>
                <textarea name="description" value={pet.description} onChange={handleChange} className="w-[80%] h-max-[80%] border-2 px-2 outline-none h-[80%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-12 flex justify-center items-center">
          <div className="h-full w-[15%] bg-[#D971A1] flex justify-center rounded-2xl items-center cursor-pointer">
            <p onClick={handleSubmit} className="text-white text-lg underline font-bold">Cadastrar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetRegister;
