import { Outlet, useLocation } from "react-router-dom"

const Layout = () => {
  const location = useLocation()

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register"

  return (
    <div className={`h-screen`}>
      <h1 className="logo-font text-xl md:text-3xl font-bold text-[#F8B7A1] pt-4 pl-8 absolute top-0 left-0 z-40">
          chewzy
      </h1>
      <Outlet />
    </div>
  )
}

export default Layout




