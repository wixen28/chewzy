import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-center items-center h-screen text-white'>
      <div className='flex flex-col justify-center md:flex-row w-full h-screen md:w-8/12 md:h-4/5 rounded-none md:rounded-md p-4 card'>
        <div className='w-full md:w-2/5 p-4 flex flex-col'>
          <h2 className='text-center md:text-left sm:text-3xl md:text-4xl mt-10 md:leading-relaxed'>Zaregistrujte sa a nájdite stráženie pre Vašich domácich miláčikov</h2>
        </div>
        <form action="" className='p-4 rounded-md w-full sm:w-3/5 sm:mt-24 mt-10 sm:mx-auto md:m-auto'>
          <div className='flex flex-col max-w-96 m-auto'>
            <label htmlFor="" className='text-sm'>Email</label>
            <input 
              type="text" 
              placeholder="Vyplňte Váš email" 
              name="email" 
              className='placeholder:text-xs mt-1 outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
              required 
            />
            <label htmlFor="" className='mt-4 text-sm'>Meno</label>
            <input 
              type="text" 
              placeholder="Vyplňte Vaše meno" 
              name="meno"
              className='placeholder:text-xs mt-1 outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
              required 
            />
            <label htmlFor="" className='mt-4 text-sm'>Heslo</label>
            <input 
              type="password" 
              placeholder="Zadajte heslo" 
              name="psw" 
              className='placeholder:text-xs mt-1 outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
              required
            />
            <label htmlFor="" className='mt-4 text-sm'>Heslo znovu</label>
            <input 
              type="password" 
              placeholder="Zadajte heslo znovu" 
              name="psw-again"
              className='placeholder:text-xs mt-1 outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
              required
            />
            <button type="submit" className='p-2 mt-10 bg-black rounded-md text-green-300 hover:bg-zinc-900'>Registrovať sa</button>
            <button 
              className='mt-4 p-2 text-green-300 bg-transparent rounded-md hover:bg-zinc-900 transition-all duration-300'
              onClick={() => navigate('/login')}
            >
              Späť na prihlásenie
            </button>
          </div>
          </form>
        </div>
      </div>
    )
  }

  export default RegisterPage