import styled from 'styled-components'
import FormBase from './FormBase'
import { UpdateProps } from '../types'
import ButtonBox from './ButtonBox'
import Button from './Button'
import React, { FormEvent, useState } from 'react'

const UpdateStyle = styled(FormBase)`
  height: 16rem;
  width: 18rem;
  justify-content: space-around;
  align-items: center;
`

const Select = styled.select`
  font-size: 1.5rem;
`

function UpdateStatus({ setIsUpdating }: UpdateProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsUpdating(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e.currentTarget.status.value)
  }
  return (
    <UpdateStyle onSubmit={handleSubmit}>
      <p>Update Status</p>
      <Select id='status' name='status' disabled={isSubmitting}>
        <option value='available'>Available</option>
        <option value='low'>Low In Stock</option>
        <option value='out'>Out of Stock</option>
      </Select>
      <ButtonBox $horizontal>
        <Button disabled={isSubmitting} onClick={handleCancel}>
          Cancel
        </Button>
        <Button type='submit' disabled={isSubmitting}>
          Confirm
        </Button>
      </ButtonBox>
    </UpdateStyle>
  )
}

export default UpdateStatus
