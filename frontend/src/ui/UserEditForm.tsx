import styled from 'styled-components'
import { FieldErrors, FieldValues, useForm } from 'react-hook-form'
import ButtonBox from './ButtonBox'
import Button from './Button'
import React, { useState } from 'react'
import { Staff } from '../types'
import FormBase from './FormBase'
import FormRow from './FormRow'
import Label from './Label'
import Input from './Input'
import { changeUserDetails } from '../utils/apiCalls'

interface FormProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  user: Staff
}

const UserEditFormStyle = styled(FormBase)`
  width: 16rem;
  height: 14rem;
  color: var(--color-accent-dark);
  justify-content: space-around;
`

function UserEditForm({ user, setIsEditing }: FormProps) {
  const { register, handleSubmit } = useForm<Partial<Staff>>()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsEditing(false)
  }

  async function onSubmit(data: FieldValues) {
    let newData = Object.fromEntries(
      Object.entries(data).filter(el => !!el.at(1))
    )
    newData = { ...newData, id: user.id }
    console.log(newData)
    setIsSubmitting(true)
    const { response, error } = await changeUserDetails(newData)
    setIsSubmitting(false)
    // Hack - Using react query would be preferred
    if (response) window.location.reload()
    if (error) setIsError(true)
  }

  function onError(errors: FieldErrors<FieldValues>) {
    console.log(errors)
  }
  return (
    <UserEditFormStyle onSubmit={handleSubmit(onSubmit, onError)}>
      {isError && <p>Error. Try again later</p>}
      <FormRow>
        <Label>Name</Label>
        <Input
          type='text'
          id='name'
          defaultValue={user.name}
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
        <select
          id='role'
          disabled={isSubmitting}
          defaultValue={user.role}
          {...register('role')}
        >
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
