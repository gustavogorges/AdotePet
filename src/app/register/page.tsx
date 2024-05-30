import Nav from "@/components/nav/nav";

const Register = () => {
    //let user = new User();

    const listInputs = [
        {text : 'Nome Completo', type: "text"},
        {text : 'Email', type: "text"},
        {text : 'Telefone', type: "number"},
        {text : 'Senha', type: "text"},
        {text : 'Data de Nascimento', type: "date"},
        {text : 'Confimarção de Senha', type: "text"},
    ]

    return (
    
    <div className=" w-full overflow-y-auto h-screen bg-[#eeeeee] flex flex-col items-center">
      <Nav></Nav>
      <div className=" w-[70%] h-full flex flex-col items-center mt-8 gap-8">
        <div className="w-full h-[8%] flex items-center justify-start">
          <div className=" h-full w-16 bg-[#3399BB] rounded-full cursor-pointer">

          </div>
        </div>
        <div className="w-[50%] h-[60%] rounded-3xl border-8 bg-white flex justify-start px-5 items-center">
            <div className=" w-[100%] h-[80%] flex flex-col justify-center items-center">
                <div className=" w-full h-[50%] grid grid-rows-2">
                        {
                           listInputs.map((input) => {
                                if(input.text == "Nome Completo" || input.text == "Email") {
                                    return (
                                        <>
                                        <div className=" w-full h-full flex flex-col justify-center px-4">
                                        <p className="text-lg text-[#3399BB] font-extrabold" key={input.text}>{input.text}</p>
                                        <input className=" border-2 outline-none px text-base w-full" type={input.type} />
                                        </div>
                                        </>
                                    ); 
                                }
                            })
                        }
                </div>
                <div className=" w-full h-[50%] grid grid-cols-2 grid-rows-2">
                    
                </div>
            </div>
        </div>
        <div className=" w-full h-12 flex justify-center items-center">
            <div className=" h-full w-[15%] bg-[#D971A1] flex justify-center rounded-2xl items-center cursor-pointer">
                <p className="text-white text-lg underline font-bold">Cadastrar</p>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Register;