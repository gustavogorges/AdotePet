import axios from "axios";
import { User } from "@/models/User";

const baseUrl = "http://localhost:3000/api/users";

export const UserService = {
  registerUser: async (user: User) => {
    try {
      const response = await axios.post(baseUrl, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  findUserByEmail: async (email: string) => {
    try {
      const response = await axios.get(baseUrl + "/email/" + email, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // response.cookies.
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  findUserById: async (id: number) => {
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
};
