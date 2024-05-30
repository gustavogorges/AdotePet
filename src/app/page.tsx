'use client'
import Nav from "@/components/nav/nav";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
      <Nav></Nav>
      <div className=" w-[70%] max-h-full h-full">

      </div>
    </div>
  );
}
