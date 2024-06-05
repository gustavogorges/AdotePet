'use client'
import { User } from "@/models/User";
import Cookies from 'js-cookie';

export const CookiesService = {
    createLoggedUserCookie : (loggedUser : {id : string}) => {
        Cookies.set("loggedUserId", loggedUser.id, {expires : 7}); // cookies expires in 7 days
    },
    removeLoggedUserCookie: () => {
        Cookies.remove('loggedUserId'); // Remove the cookie
    }
}