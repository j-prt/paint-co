import styled from 'styled-components'
import Heading from '../ui/Heading'
import User from '../ui/User'
import FlexColumn from '../ui/FlexColumn'
import { Staff } from '../types'

const users: Staff[] = [
  {
    id: 1,
    name: 'Donatello',
    password: 'donatello',
    role: 'painter',
  },
  {
    id: 2,
    name: 'Raphael',
    password: 'raphael',
    role: 'painter',
  },
  {
    id: 3,
    name: 'Adam',
    password: 'adam',
    role: 'admin',
  },
  {
    id: 4,
    name: 'John',
    password: 'john',
    role: 'manager',
  },
  {
    id: 5,
    name: 'Jane',
    password: 'jane',
    role: 'orderer',
  },
  {
    id: 6,
    name: 'Michelangelo',
    password: 'michelangelo',
    role: 'painter',
  },
  {
    id: 16,
    name: 'matty',
    password: 'matisse',
    role: 'orderer',
  },
  {
    id: 7,
    name: 'matty',
    password: 'matisse',
    role: 'orderer',
  },
]

const Content = styled(FlexColumn)`
  margin: 0 auto;
  align-items: center;
  gap: 2rem;
`

function Admin() {
  return (
    <>
      <Heading>Manage Users</Heading>
      <Content>
        {users.map(el => (
          <User user={el} key={el.id} />
        ))}
      </Content>
    </>
  )
}

export default Admin
