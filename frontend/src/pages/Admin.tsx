import styled from 'styled-components'
import Heading from '../ui/Heading'
import User from '../ui/User'
import FlexColumn from '../ui/FlexColumn'
import { Staff } from '../types'
import { useUsers } from '../hooks/useUsers'
import Loader from '../ui/Loader'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate } from 'react-router'

const Content = styled(FlexColumn)`
  margin: 0 auto;
  align-items: center;
  gap: 2rem;
`

function Admin() {
  const { role, isAuth } = useContext(AuthContext)
  const { data, isLoading, isError } = useUsers()
  console.log(data, isLoading, isError)

  if (isLoading) return <Loader />

  if (!isLoading && isError) return

  if (!isAuth) return <Navigate to='/login' />
  if (role !== 'admin') return <Navigate to='/' />

  return (
    <>
      <Heading>Manage Users</Heading>
      <Content>
        {(data as Staff[]).map(el => (
          <User user={el} key={el.id} />
        ))}
      </Content>
    </>
  )
}

export default Admin
