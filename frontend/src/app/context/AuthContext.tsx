import { createContext,  useEffect, useState } from "react"

import { LoginData, User } from "~/graphql/types"

type AuthContextType = {
  user: User | null
  accessToken: string | null
  login: (authData: LoginData, rememberMe: boolean) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  accessToken: null,
  login: (_authData: LoginData, _rememberMe: boolean) => {},
  logout: () => {}
})


const AuthProvider = (props: any) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect( () => {
    const savedToken = localStorage.getItem("accessToken")

    if(savedToken) {
      setAccessToken(savedToken)
    }
  },[])

  const login = (authData: LoginData, rememberMe: boolean) => {
    if(authData.accessToken) {
      setAccessToken(authData.accessToken)
      setUser(authData.user as User)

      if(rememberMe) {
        localStorage.setItem("accessToken", authData.accessToken)
      }
    }
  }

  const logout = () => {
    setAccessToken(null)
    setUser(null)
    localStorage.removeItem("accessToken")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        login,
        logout,
      }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }