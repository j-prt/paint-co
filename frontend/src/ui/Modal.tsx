import { createPortal } from 'react-dom'
import styled from 'styled-components'
import Button from './Button'
import React from 'react'

interface ModalProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  transition: all 0.3s;
`

const PageBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
  z-index: 1;
  transition: all 0.3s;
`

function Modal({ setIsEditing, children }: ModalProps) {
  return createPortal(
    <PageBlur>
      <ModalStyle>
        {children}
        <Button onClick={() => setIsEditing(false)}>Close</Button>
      </ModalStyle>
    </PageBlur>,
    document.body
  )
}

export default Modal
