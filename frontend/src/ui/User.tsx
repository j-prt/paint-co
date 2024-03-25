import styled from 'styled-components'
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
  grid-template-columns: 1.25fr 1.25fr 1fr;
  padding: 0 0.5rem;
  background-color: aliceblue;
  align-items: center;
  gap: 1.5rem;
  border: solid 1px;
  border-radius: var(--border-radius-sm);
  box-shadow: 0rem 0rem 0.5rem #888;
  background-color: var(--color-main-light);
  width: 18rem;
  height: 3rem;

  @media ${device.xs} {
    width: 28rem;
  }

  @media ${device.sm} {
    width: 35rem;
    padding: 0 2rem;
  }

  /* @media ${device.lg} {
    width: 20rem;
  } */
`

const EditButton = styled.button`
  width: 4rem;
  height: 2rem;
`

function User({ user }: UserProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  return (
    <StyledUser>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <EditButton onClick={() => setIsEditing(!isEditing)}>Edit</EditButton>
      {isEditing && (
        <Modal>
          <UserEditForm user={user} setIsEditing={setIsEditing} />
        </Modal>
      )}
    </StyledUser>
  )
}

export default User
