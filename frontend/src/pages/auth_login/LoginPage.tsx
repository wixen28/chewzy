import { useNavigate } from "react-router-dom"
import dog from '../../utils/images/dog.png'


const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="flex w-9/12 h-4/5 bg-[#152e2b] m-auto p-4 rounded-lg card" >
        <div className='w-2/5 p-4 flex flex-col'> 
          <h1 className="text-3xl font-bold text-green-300">chewzy</h1>
          <h2 className=" m-auto text-4xl mt-24 leading-normal">Nájdite stráženie pre vaše zdechlinky</h2>
          <img src={dog} alt="" className='w-60'/>
        </div>
        <form action="" className=" p-4 rounded-md w-3/5 m-auto">
          <div className="flex flex-col w-96 m-auto">
            <input type="text" placeholder="username" name="uname" required className='outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'/>
            <input type="password" placeholder="heslo" name="psw" required className='mt-4 outline-none border-[1px] border-gray-500 p-2 bg-zinc-900 rounded-md'/>
            <button type="submit" className='p-2 mt-10 bg-black rounded-md text-green-300'>Prihlásiť sa</button>
            <div className='flex justify-between'>
              <div className='flex gap-2 mt-2'>
                <input type="checkbox" name="remember"/>
                <p className="text-xs text-green-300">Zapamätať heslo</p>
              </div>
              <div className='flex gap-2 mt-2'>
                <a href="/register">Nemate ucet?registruj sa</a>
              </div>
            </div>
          </div>

          {/* <div className="flex">
            <span >Forgot <a href="#">password?</a></span>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default LoginPage