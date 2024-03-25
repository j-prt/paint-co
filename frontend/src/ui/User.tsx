import styled from 'styled-components'
import Button from './Button'
import { Staff } from '../types'
import { useState } from 'react'
import Modal from './Modal'
import UserEditForm from './UserEditForm'

interface UserProps {
  user: Staff
}

const StyledUser = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  padding: 0 2rem;
  background-color: aliceblue;
  align-items: center;
  gap: 1.5rem;
  border: solid 1px;
  min-width: 35rem;
  height: 3rem;
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
