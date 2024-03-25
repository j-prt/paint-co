import React, { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

interface Token {
  role: string
}

interface ProviderProps {
  children: React.ReactNode
}

interface ContextProps {
  token: string | null
  role: string
  setRole: React.Dispatch<React.SetStateAction<string>>
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

export const AuthContext = createContext<ContextProps>({} as ContextProps)

export function AuthProvider({ children }: ProviderProps) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('jwt'))
  const [role, setRole] = useState('')

  useEffect(() => {
    if (token) {
      const tokenValues = jwtDecode(token) as Token
      setRole(tokenValues.role)
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ token, role, setRole, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

// else {
//     const newToken = (
//       await axios.post(`${API_URL}/login`, {
//         name: 'Adam',
//         password: 'adam',
//       })
//     ).data as string
//     console.log(newToken)
//     setToken(newToken)
//     tokenValues = jwtDecode(newToken) as Token
