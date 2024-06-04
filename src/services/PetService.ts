import axios from "axios";

const baseUrl = "http://localhost:3000/api/pets";

export const PetService = {
    registerPet: async (pet: any) => {
        try {
        const response = await axios.post(baseUrl, pet, {
            headers: {
            "Content-Type": "application/json",
            },
        });
        return response.data;
        } catch (error) {
        console.log(error);
        }
    },
    findPetById: async (id: number) => {
        try {
        const response = await axios.get(baseUrl + "/id/" + id, {
            headers: {
            "Content-Type": "application/json",
            },
        });
        return response.data;
        } catch (error) {
        console.log(error);
        }
    },
    findPetByUserId: async (userId: number) => {
        try {
        const response = await axios.get(baseUrl + "/user/" + userId, {
            headers: {
            "Content-Type": "application/json",
            },
        });
        return response.data;
        } catch (error) {
        console.log(error);
        }
    },
    updatePet: async (pet: any) => {
        try {
        const response = await axios.put(baseUrl, pet, {
            headers: {
            "Content-Type": "application/json",
            },
        });
        return response.data;
        } catch (error) {
        console.log(error);
        }
    },
    deletePet: async (id: number) => {
        try {
        const response = await axios.delete(baseUrl + "/" + id, {
            headers: {
            "Content-Type": "application/json",
            },
        });
        return response.data;
        } catch (error) {
        console.log(error);
        }
    },
};

export default PetService;