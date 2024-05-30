'use client'
import { useRouter } from "next/navigation";
import Nav from "../../components/nav/nav";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { blue, grey } from "@mui/material/colors";


const Login = () => {
    const router = useRouter();
    return (
        <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
            <Nav></Nav>
            <div className=" w-[70%] h-full flex flex-col  items-center">
                <div className="w-full h-[10%] flex items-center justify-start">
                    <div className=" absolute h-16 w-16 bg-[#3399BB] flex justify-center items-center rounded-full cursor-pointer">
                        <ArrowBackIcon sx={{ color: grey[50] }} fontSize="large" />
                    </div>
                </div>
                <div className="w-[40%] h-[70%] rounded-xl border-2 bg-white">

                </div>
            </div>
        </div>
    );
}

export default Login;
