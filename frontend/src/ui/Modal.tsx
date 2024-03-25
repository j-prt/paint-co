import { createPortal } from 'react-dom'
import styled from 'styled-components'
import React from 'react'

interface ModalProps {
  children: React.ReactNode
}

const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 1.5rem;
  transform: translate(-50%, -50%);
  background-color: var(--color-secondary-light);
  box-shadow: 0rem 0rem 0.5rem #888;
  border-radius: var(--border-radius-md);
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

function Modal({ children }: ModalProps) {
  return createPortal(
    <PageBlur>
      <ModalStyle>{children}</ModalStyle>
    </PageBlur>,
    document.body
  )
}

export default Modal
