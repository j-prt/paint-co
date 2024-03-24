import styled from 'styled-components'
import Button from './Button'
import { Staff } from '../types'
import { useState } from 'react'
import Modal from './Modal'

interface UserProps {
  user: Staff
}

const StyledUser = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr;
  padding: 0 2rem;
  background-color: aliceblue;
  align-items: center;
  gap: 1.5rem;
  border: solid 1px;
  min-width: 30rem;
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
        <Modal setIsEditing={setIsEditing}>
          <p>Edit form</p>
        </Modal>
      )}
    </StyledUser>
  )
}

export default User
