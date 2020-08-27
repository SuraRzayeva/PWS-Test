import React, { useContext } from 'react'
import { StyledBurgerMenu } from '../styledComponents/StyledBurgerMenu'
import Context from '../Context'
import DispatchContext from '../DispatchContext'

const BurgerMenu = () => {
  const { menu, home } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)

  const openMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
      window.scrollTo(0, 0)
    }
  }

  return (
    <StyledBurgerMenu onClick={openMenu}>
      <div className="line line-1"></div>
      <div className="line line-2"></div>
    </StyledBurgerMenu>
  )
}

export default BurgerMenu
