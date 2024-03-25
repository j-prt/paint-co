import styled from 'styled-components'
import { FieldErrors, FieldValues, useForm } from 'react-hook-form'
import Button from '../ui/Button'
import { useContext, useState } from 'react'
import FormBase from '../ui/FormBase'
import FormRow from '../ui/FormRow'
import Label from '../ui/Label'
import Input from '../ui/Input'
import { AuthContext } from '../AuthContext'
import { login } from '../utils/apiCalls'
import { Navigate, useNavigate } from 'react-router'

interface FormData {
  name: string
  password: string
}

const FullPageContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
      rgba(10, 10, 10, 0.35),
      rgba(10, 10, 10, 0.35)
    ),
    url('/pagebg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginForm = styled(FormBase)`
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 25rem;
  width: 30rem;
  border: 1px solid;
  border-radius: var(--border-radius-md);
  background-color: rgba(200, 200, 200, 0.4);
`

function Login() {
  const navigate = useNavigate()
  const { token, setToken } = useContext(AuthContext)
  const { register, handleSubmit } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  async function onSubmit(data: FieldValues) {
    setIsSubmitting(true)
    const { response, error } = await login(data)
    if (error) {
      setIsError(true)
      setIsSubmitting(false)
    }
    if (response) {
      setToken(response.data)
      localStorage.setItem('jwt', response.data)
      navigate('/')
    }
  }

  function onError(errors: FieldErrors<FieldValues>) {
    console.log(errors)
  }

  if (token) return <Navigate to='/' />

  return (
    <FullPageContainer onSubmit={handleSubmit(onSubmit, onError)}>
      <LoginForm>
        <h1>Login</h1>
        {isError && <p>Wrong credentials. Try again.</p>}
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

        <Button type='submit' disabled={isSubmitting}>
          Confirm
        </Button>
      </LoginForm>
    </FullPageContainer>
  )
}

export default Login
