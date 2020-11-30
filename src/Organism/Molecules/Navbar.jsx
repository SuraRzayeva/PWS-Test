import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledNavbar } from '../../styledComponents/StyledNavbar'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'
import dots from '../../img/icons/dots-menu.png'

const BurgerMenu = () => {
  const { menu, home } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)
  const [top, setTop] = useState(0)

  window.addEventListener('scroll', () => {
    setTop(document.documentElement.scrollTop)
  })

  const openMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
      window.scrollTo(0, 0)
    }
  }

  return (
    <StyledNavbar top={top}>
      <div className="logo">
        <Link to="/">
          <h3 className="title">Sura Rzayeva</h3>
          <h3 className="description"> designer - developer - marketer</h3>
        </Link>
      </div>
      <div className="burger-menu">
        <div className="burger" onClick={openMenu}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </div>
      </div>
    </StyledNavbar>
  )
}

export default BurgerMenu
