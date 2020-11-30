import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StyledMenuBoxes } from '../../styledComponents/StyledMenuBoxes'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'
import Close from '../../img/icons/close.svg'

const MenuBoxes = () => {
  const { menu, home } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)

  useEffect(() => {
    setHome(false)
  }, [])

  const closeMenu = () => {
    if (menu) {
      setMenu(false)
    }
  }

  return (
    <StyledMenuBoxes menu={menu} onClick={closeMenu}>
      <div className="boxes">
        <div className="box box-1">
          {menu ? (
            <Link onClick={closeMenu} to="/web">
              <div className="wrapper">
                <h1> UI/UX Gallery </h1>
              </div>
            </Link>
          ) : null}
        </div>

        <div className="box box-2">
          {menu ? (
            <Link onClick={closeMenu} to="app">
              <h1> Graphic Design </h1>
            </Link>
          ) : null}
        </div>

        <div className="box box-3">
          {menu ? (
            <Link onClick={closeMenu} to="/projects">
              <h1> Projects </h1>
            </Link>
          ) : null}
        </div>

        <div className="box box-4">
          {menu ? (
            <Link onClick={closeMenu} to="/illustrations">
              <h1> Blog </h1>
            </Link>
          ) : null}
        </div>

        <div className="box box-5">
          {menu ? (
            <Link onClick={closeMenu} to="/blog">
              <h1> About Me </h1>
            </Link>
          ) : null}
        </div>
        <div className="box box-6">
          {menu ? (
            <Link onClick={closeMenu} to="/contact">
              <h1> Contact </h1>
            </Link>
          ) : null}
        </div>
      </div>
    </StyledMenuBoxes>
  )
}

export default MenuBoxes
