import styled from 'styled-components'
import FormBase from './FormBase'
import { UpdateProps } from '../types'
import ButtonBox from './ButtonBox'
import Button from './Button'
import React, { FormEvent, useState } from 'react'
import { changePaintStatus } from '../utils/apiCalls'

const UpdateStyle = styled(FormBase)`
  height: 16rem;
  width: 18rem;
  justify-content: space-around;
  align-items: center;
`

const Select = styled.select`
  font-size: 1.5rem;
`

function UpdateStatus({ color, setIsUpdating }: UpdateProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsUpdating(false)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const status = e.currentTarget.status.value

    setIsSubmitting(true)
    const { response, error } = await changePaintStatus(color, status)
    setIsSubmitting(false)
    // Hack - Using react query would be preferred
    if (response) window.location.reload()
    if (error) setIsError(true)
  }
  return (
    <UpdateStyle onSubmit={handleSubmit}>
      {isError && <p>Error occurred. Try again later</p>}
      <p>Update Status</p>
      <Select id='status' name='status' disabled={isSubmitting}>
        <option value='available'>Available</option>
        <option value='low'>Low</option>
        <option value='out'>Out</option>
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
