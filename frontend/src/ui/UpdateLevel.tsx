import styled from 'styled-components'
import { FieldErrors, FieldValues, useForm } from 'react-hook-form'
import { UpdateProps } from '../types'
import ButtonBox from './ButtonBox'
import Button from './Button'
import { useState } from 'react'
import FormBase from './FormBase'

interface FieldTypes {
  add_or_reduce: 'add' | 'reduce'
  amount: number
}

const StyledUpdateLevel = styled(FormBase)`
  height: 16rem;
  width: 18rem;
  justify-content: space-around;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

const NumInput = styled.input`
  background-color: #ddd;
  font-size: 2rem;
  width: 5rem;
  text-align: center;
`

function UpdateLevel({ setIsUpdating }: UpdateProps) {
  const { register, handleSubmit } = useForm<FieldTypes>()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsUpdating(false)
  }

  function onSubmit(data: FieldValues) {
    console.log(data)
    // setIsSubmitting(true)
  }

  function onError(errors: FieldErrors<FieldValues>) {
    console.log(errors)
  }

  return (
    <StyledUpdateLevel onSubmit={handleSubmit(onSubmit, onError)}>
      <p>Change Paint Level</p>
      <Row>
        <Row>
          <input
            type='radio'
            id='add'
            value='reduce'
            defaultChecked
            {...register('add_or_reduce')}
          />
          <label htmlFor='add'>Reduce</label>
        </Row>
        <Row>
          <input
            type='radio'
            id='add'
            value='add'
            {...register('add_or_reduce')}
          />
          <label htmlFor='add'>Add</label>
        </Row>
      </Row>
      <NumInput
        type='number'
        defaultValue={1}
        {...register('amount', {
          valueAsNumber: true,
        })}
      />
      <ButtonBox $horizontal>
        <Button disabled={isSubmitting} onClick={handleCancel}>
          Cancel
        </Button>
        <Button type='submit' disabled={isSubmitting}>
          Confirm
        </Button>
      </ButtonBox>
    </StyledUpdateLevel>
  )
}

export default UpdateLevel
