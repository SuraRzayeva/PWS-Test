import React, { useContext } from 'react'
import { StyledBurgerMenu } from '../../styledComponents/StyledBurgerMenu'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'
import dots from '../../img/icons/dots-menu.png'

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
      <img src={dots} alt="" />
      {/* <div className="line line-1"></div>
      <div className="line line-2"></div> */}
    </StyledBurgerMenu>
  )
}

export default BurgerMenu
