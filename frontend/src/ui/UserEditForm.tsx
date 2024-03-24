import styled from 'styled-components'
import { FieldErrors, FieldValues, useForm } from 'react-hook-form'
import ButtonBox from './ButtonBox'
import Button from './Button'
import React, { useState } from 'react'
import { Staff } from '../types'
import FormBase from './FormBase'

interface FormProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const UserEditFormStyle = styled(FormBase)`
  width: 16rem;
  height: 14rem;
  color: var(--color-accent-dark);
  justify-content: space-around;
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.4rem;
`

const Label = styled.label`
  font-weight: 500;
  letter-spacing: 0.5px;
`

const Input = styled.input`
  background-color: #ddd;
  border-radius: var(--border-radius-xs);
  height: 1.8rem;
  border: none;
  width: 100%;
`

function UserEditForm({ setIsEditing }: FormProps) {
  const { register, handleSubmit } = useForm<Partial<Staff>>()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsEditing(false)
  }

  function onSubmit(data: FieldValues) {
    // await updateUser(data)
    console.log(data)
    // setIsSubmitting(true)
  }

  function onError(errors: FieldErrors<FieldValues>) {
    console.log(errors)
  }
  return (
    <UserEditFormStyle onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label>Name</Label>
        <Input
          type='text'
          id='name'
          disabled={isSubmitting}
          {...register('name')}
        />
      </FormRow>
      <FormRow>
        <Label>Password</Label>
        <Input
          type='text'
          id='password'
          disabled={isSubmitting}
          {...register('password')}
        />
      </FormRow>
      <FormRow>
        <Label>Role</Label>
        <select id='role' disabled={isSubmitting} {...register('role')}>
          <option value='painter'>Painter</option>
          <option value='orderer'>Orderer</option>
          <option value='manager'>Manager</option>
          <option value='admin'>Admin</option>
        </select>
      </FormRow>
      <ButtonBox $horizontal>
        <Button disabled={isSubmitting} onClick={handleCancel}>
          Cancel
        </Button>
        <Button type='submit' disabled={isSubmitting}>
          Confirm
        </Button>
      </ButtonBox>
    </UserEditFormStyle>
  )
}

export default UserEditForm
