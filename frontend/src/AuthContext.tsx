import React, { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

interface Token {
  role: string
  id: string
}

interface ProviderProps {
  children: React.ReactNode
}

interface ContextProps {
  token: string | null
  role: string
  id: string
  isAuth: boolean
  setRole: React.Dispatch<React.SetStateAction<string>>
  setToken: React.Dispatch<React.SetStateAction<string | null>>
  logout: () => void
}

export const AuthContext = createContext<ContextProps>({} as ContextProps)

export function AuthProvider({ children }: ProviderProps) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('jwt'))
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [role, setRole] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if (token) {
      const tokenValues = jwtDecode(token) as Token
      setRole(tokenValues.role)
      setId(tokenValues.id)
      setIsAuth(true)
    }
  }, [token])

  function logout() {
    setToken('')
    setIsAuth(false)
    localStorage.removeItem('jwt')
  }

  return (
    <AuthContext.Provider
      value={{ token, role, setRole, setToken, isAuth, logout, id }}
    >
      {children}
    </AuthContext.Provider>
  )
}
