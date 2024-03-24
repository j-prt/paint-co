import React, { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { API_URL } from './constants'

interface Token {
  role: string
}

interface ProviderProps {
  children: React.ReactNode
}

interface ContextProps {
  token?: string | null
  role?: string
}

export const AuthContext = createContext<ContextProps>({})

export function AuthProvider({ children }: ProviderProps) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('jwt'))
  const [role, setRole] = useState('')

  useEffect(() => {
    async function decodeOrGet() {
      let tokenValues
      if (token) {
        tokenValues = jwtDecode(token) as Token
      } else {
        const newToken = (
          await axios.post(`${API_URL}/login`, {
            name: 'Adam',
            password: 'adam',
          })
        ).data as string
        console.log(newToken)
        setToken(newToken)
        tokenValues = jwtDecode(newToken) as Token
      }
      setRole(tokenValues.role)
    }
    decodeOrGet()
  }, [token])

  return (
    <AuthContext.Provider value={{ token, role }}>
      {children}
    </AuthContext.Provider>
  )
}
