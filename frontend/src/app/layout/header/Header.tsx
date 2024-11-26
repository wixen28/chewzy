import { useNavigate } from "react-router-dom"

type MenuItem = {
  title: string
  path: string
  logout?: boolean
}
const Header = () => {
  const navigate = useNavigate()

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
      navigate("/")
    } else {
      navigate(item.path)
    }
  }

  return (
    <div className='w-full h-16 flex items-center justify-center'>
      <ul className='flex space-x-4 m-auto justify-center'>
        {menuConfig.map((item, index) => (
          <li
            key={index}
            title={item.title}
            onClick={() => handleClick(item)}
            className='cursor-pointer text-white hover:underline'
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Header