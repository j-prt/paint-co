import styled from 'styled-components'
import Button from './Button'
import { Staff } from '../types'
import { useState } from 'react'
import Modal from './Modal'
import UserEditForm from './UserEditForm'
import { device } from '../media'

interface UserProps {
  user: Staff
}

const StyledUser = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1.25fr 0.4fr;
  padding: 0 2rem;
  background-color: aliceblue;
  align-items: center;
  gap: 1.5rem;
  border: solid 1px;
  min-width: 16rem;
  height: 3rem;

  @media ${device.sm} {
    min-width: 35rem;
  }

  /* @media ${device.lg} {
    width: 20rem;
  } */
`

function User({ user }: UserProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  return (
    <StyledUser>
      <p>Name: {user.name}</p>
      <p>Current role: {user.role}</p>
      <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
      {isEditing && (
        <Modal>
          <UserEditForm user={user} setIsEditing={setIsEditing} />
        </Modal>
      )}
    </StyledUser>
  )
}

export default User
