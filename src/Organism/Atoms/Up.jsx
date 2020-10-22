import React from 'react'
import { StyledUp } from '../../styledComponents/StyledUp'
import Arrow from '../../img/icons/up.svg'

const Up = () => {
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledUp>
      <img onClick={goUp} src={Arrow} alt="" />
    </StyledUp>
  )
}

export default Up
