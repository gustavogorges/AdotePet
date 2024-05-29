'use client'
import { useRouter } from "next/navigation";


const Login =() => {
    const router = useRouter();
  return (
    <div className=" w-24 h-24 bg-red-300">
        <h1>Login</h1>
        <button className=" w-10 h-10 bg-blue-300" onClick={() => {
            router.push("/teste")
        }}></button>
    </div>
  );
}

export default Login;
