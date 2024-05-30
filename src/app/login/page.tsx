'use client'
import { useRouter } from "next/navigation";
import Nav from "../../components/nav/nav"


const Login =() => {
    const router = useRouter();
  return (
    <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
      <Nav></Nav>
      <div className=" w-[70%] h-full flex flex-col justify-center items-center">
        <div className="w-full h-[8%] flex items-center justify-start">
          <div className=" h-full w-16 bg-pink-300 rounded-full cursor-pointer">

          </div>
        </div>
        <div className="w-[40%] h-[70%] rounded-xl border-2 bg-white">

        </div>
      </div>
    </div>
  );
}

export default Login;
