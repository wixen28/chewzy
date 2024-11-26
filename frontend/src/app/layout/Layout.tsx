import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className='h-screen'>
      <h1 className="text-xl md:text-3xl font-bold text-green-300 pt-4 pl-8 absolute top-0 left-0 z-40">
          chewzy
      </h1>
      <Outlet />
    </div>
  )
}

export default Layout




