import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-center items-center h-screen text-white'>
      <div className='flex w-9/12 h-4/5 bg-[#152e2b] m-auto p-4 rounded-lg card'>
        <div className='w-2/5 p-4 flex flex-col'> 
          <h1 className='text-3xl font-bold text-green-300'>chewzy</h1>
          <h2 className='mt-16 text-4xl leading-normal'>Zaregistrujte sa a nájdite stráženie pre Vašich domácich miláčikov</h2>
        </div>
        <form action="" className='p-4 rounded-md w-3/5 m-auto'>
          <div className='flex flex-col w-96 m-auto'>
            <label htmlFor="">Email</label>
            <input 
              type="text" 
              placeholder="Vyplňte Váš email" 
              name="email" 
              className='outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
              required 
            />
            <label htmlFor="" className='mt-4'>Meno</label>
            <input 
              type="text" 
              placeholder="Vyplňte Vaše meno" 
              name="meno"
              className='outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
              required 
            />
            <label htmlFor="" className='mt-4'>Heslo</label>
            <input 
              type="password" 
              placeholder="Zadajte heslo" 
              name="psw" 
              className='outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
              required
            />
            <label htmlFor="" className='mt-4'>Heslo znovu</label>
            <input 
              type="password" 
              placeholder="Zadajte heslo znovu" 
              name="psw-again"
              className='outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'
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