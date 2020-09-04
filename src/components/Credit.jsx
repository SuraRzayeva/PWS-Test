import React, { useContext } from 'react'
import { StyledCredit } from '../styledComponents/StyledCredit'
import Context from '../Context'
import DispatchContext from '../DispatchContext'

const Credit = () => {
  const { menu, home, loading } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)
  const today = new Date().getFullYear()

  return (
    <StyledCredit style={{ visibility: loading ? 'hidden' : 'visible' }} home={home} menu={menu}>
      <p>
        {' '}
        &copy; SURA RZAYEVA | <span>{today}</span>
      </p>
    </StyledCredit>
  )
}

export default Credit
