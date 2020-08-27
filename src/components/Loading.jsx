import React, { useContext } from 'react'
import { StyledLoading } from '../styledComponents/StyledLoading'
import DispatchContext from '../DispatchContext'
import Context from '../Context'

const Loading = () => {
  const { menu, home, loading } = useContext(Context)

  return (
    <StyledLoading>
      <div className={loading ? 'container' : 'hide'}>
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
    </StyledLoading>
  )
}

export default Loading
