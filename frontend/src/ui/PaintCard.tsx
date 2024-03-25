import styled, { css } from 'styled-components'
import FlexColumn from './FlexColumn'
import ButtonBox from './ButtonBox'
import Button from './Button'
import { useContext, useState } from 'react'
import Modal from './Modal'
import UpdateLevel from './UpdateLevel'
import UpdateStatus from './UpdateStatus'
import { AuthContext } from '../AuthContext'
import { Navigate } from 'react-router'
import { PaintLevel } from '../types'

interface PaintMeterProps {
  $color: string
  $percentage: number
}

const PaintCardStyle = styled(FlexColumn)`
  padding: 1.5rem;
  gap: 0.5rem;
  align-items: center;
  width: 12rem;
  height: 30rem;
  background-color: #eee;
`

const PaintMeter = styled.div<PaintMeterProps>`
  width: 8rem;
  height: 16rem;
  border: solid 1px;

  ${props => css`
    background-image: linear-gradient(
      #eee,
      #eee ${props.$percentage}%,
      ${props.$color} ${props.$percentage}%,
      ${props.$color}
    );
  `}
`

const Title = styled.p`
  text-transform: capitalize;
`

interface PaintCardProps {
  paintData: PaintLevel
}

// We assume 200 is the maximum value for paints here
// but we could use any arbitrary value
function levelAsPercent(level: string) {
  let numLevel = parseFloat(level)
  if (numLevel < 0) {
    numLevel = 0
  }

  return (1 - (1.0 * numLevel) / 200.0) * 100
}

function PaintCard({ paintData }: PaintCardProps) {
  const { isAuth, role, id: userId } = useContext(AuthContext)
  const [isUpdatingLevel, setIsUpdatingLevel] = useState<boolean>(false)
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<boolean>(false)

  const percentage = levelAsPercent(paintData.total)
  console.log(percentage)

  if (!isAuth) return <Navigate to='/login' />
  return (
    <PaintCardStyle>
      <Title>{paintData.color}</Title>
      <PaintMeter $color={paintData.color} $percentage={percentage} />
      <p>
        Level: {paintData.total}
        <br />
        <Title>{paintData.status}</Title>
      </p>
      <ButtonBox>
        {(role === 'orderer' || role === 'painter') && (
          <Button onClick={() => setIsUpdatingLevel(true)}>Update Level</Button>
        )}
        {(role === 'orderer' || role === 'manager') && (
          <Button onClick={() => setIsUpdatingStatus(true)}>
            Update Status
          </Button>
        )}
      </ButtonBox>
      {isUpdatingLevel && (
        <Modal>
          <UpdateLevel
            color={paintData.color}
            setIsUpdating={setIsUpdatingLevel}
            id={userId}
          />
        </Modal>
      )}
      {isUpdatingStatus && (
        <Modal>
          <UpdateStatus setIsUpdating={setIsUpdatingStatus} />
        </Modal>
      )}
    </PaintCardStyle>
  )
}

export default PaintCard
