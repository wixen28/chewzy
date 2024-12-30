import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"

import dog from '../../utils/images/dog.png'
import { FaGoogle } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const LoginPage = () => {
  const navigate = useNavigate()
  const { control, handleSubmit, formState: { errors } } = useForm<LoginMutationVariables>({})

  
  return (
    <div className='flex justify-center items-center h-screen text-[#e5e5e5]'>
      <div className='flex flex-col justify-center md:flex-row w-full h-screen md:w-8/12 md:h-4/5 rounded-none md:rounded-md p-4 card'>
        <div className='w-full md:w-2/5 p-4 flex flex-col'>
          <h2 className='text-center md:text-left sm:text-3xl md:text-4xl md:mt-24 leading-normal'>
            Nájdite stráženie pre Vašich domácich miláčikov
          </h2>
          <img src={dog} alt="" className='w-60 hidden md:block'/>
        </div>
        <form action="" className='p-4 rounded-md w-full sm:w-3/5 sm:mt-24 sm:mx-auto md:m-auto'>
          <div className='flex flex-col max-w-96 m-auto'>
            <h3 className='py-4 text-md m-auto'>Prihláste sa</h3>
            <Controller
              name="loginInput.email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input 
                  type="text" 
                  id="emailId"
                  placeholder="Email" 
                  required 
                  {...field}
                  className='placeholder:text-sm outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
                  value={field.value || ""}
                />
              )}
            />
            <input type="password" placeholder="Heslo" name="psw" required className='placeholder:text-sm mt-4 outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'/>
            <button 
              type="submit" 
              className='p-2 mt-10 bg-black rounded-md text-green-300 hover:bg-zinc-900'
              onClick={ () => navigate("/home-page")}
            >
              Prihlásiť sa
            </button>
            <div className='flex items-center w-full mt-4'>
              <hr className='border-gray-500 flex-grow'/>
              <p className='mx-4 text-[10px]'>alebo</p>
              <hr className='border-gray-500 flex-grow'/>
            </div>
            <div className='flex justify-between w-full gap-2 mt-2'>
              <button 
                className='flex items-center bg-black flex-1 gap-2 p-2 w-36 justify-center font-mono text-xs rounded-md border-gray-700 border-[1px]'
              ><FaGoogle /> Google</button>
              <button 
                className='flex items-center bg-black flex-1 p-2 w-36 justify-center gap-2 font-mono text-xs rounded-md border-gray-700 border-[1px]'
              ><FaFacebook/> Facebook</button>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 mt-2 items-center'>
                <button onClick={() => alert('todo')} className="text-xs hover:text-gray-400">Zabudli ste heslo?</button>
              </div>
              <div className='flex gap-2 mt-2 text-xs'>
                <p className='text-green-300'>Nemáte ešte účet?</p>
                <button onClick={() => navigate('/register')} className='hover:text-gray-400'>Zaregistruje sa</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage