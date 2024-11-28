import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoMenu, IoClose } from "react-icons/io5"

type MenuItem = {
  title: string
  path: string
  logout?: boolean
}
const Header = () => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const menuConfig: MenuItem[] = [
    { title: "Domov", path: "/home-page" },
    { title: "O projekte", path: "/about" },
    { title: "Profil", path:"/profile" },
    { title: "Nastavenia", path: "/settings" },
    { title: "Odhlásiť sa", path: "/logout", logout: true }
  ]
  const handleClick = (item: MenuItem) => {
    if (item.logout) {
      console.log("User logged out")
      navigate("/login")
    } else {
      navigate(item.path)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className='w-full h-16 flex m-auto'>
      {/* Desktop menu */}
      <ul className='hidden md:flex space-x-4 m-auto gap-10 '>
        { menuConfig.map((item, index) => (
          <li
            key={index}
            title={item.title}
            onClick={() => handleClick(item)}
            className='cursor-pointer text-[#e5e5e5] text-sm hover:underline font-bold uppercase'
          >
            {item.title}
          </li>
        ))}
      </ul>
      <button
        className={`md:hidden text-white z-10 text-3xl fixed right-6 top-4 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "rotate-90" : "rotate-0"
        }`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        { isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </button>
      {/* Mobile menu */}
      { isMobileMenuOpen && (
        <div 
          className='absolute right-0 w-full h-full bg-transparent backdrop-blur-sm text-white shadow-md md:hidden flex flex-col justify-center'>
          <ul className='flex flex-col space-y-4 p-4 text-xl items-center gap-10'>
            { menuConfig.map((item, index) => (
              <li
                key={index}
                title={item.title}
                onClick={() => handleClick(item)}
                className='cursor-pointer hover:underline font-bold uppercase' 
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}


export default Header