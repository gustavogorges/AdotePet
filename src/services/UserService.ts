import axios from 'axios'
import { User } from '@/models/User'

const baseUrl = 'http://localhost:3000/api/users';

export const UserService = {
    registerUser : async(user : User) => {
        try {
            const response = await axios.post(baseUrl, user, {
            headers: {
          'Content-Type': 'application/json'
        }});
            return response.data;
        } catch(error) {
            console.log(error)
        }
    }
}