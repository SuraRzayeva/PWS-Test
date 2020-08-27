import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StyledMenuBoxes } from '../styledComponents/StyledMenuBoxes'
import Context from '../Context'
import DispatchContext from '../DispatchContext'
import Close from '../img/icons/close.svg'

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
    <StyledMenuBoxes menu={menu}>
      {menu ? (
        <div onClick={closeMenu} className="close-btn">
          <img src={Close} alt="" />
        </div>
      ) : null}
      <div className="boxes">
        <div className="box box-1">
          {menu ? (
            <Link onClick={closeMenu} to="/web">
              <h1> UI/UX WEB </h1>{' '}
            </Link>
          ) : null}
        </div>

        <div className="box box-2">
          {menu ? (
            <Link onClick={closeMenu} to="app">
              <h1> UI/UX APP </h1>
            </Link>
          ) : null}
        </div>

        <div className="box box-3">
          {menu ? (
            <Link onClick={closeMenu} to="/projects">
              <h1> PROJECTS </h1>
            </Link>
          ) : null}
        </div>

        <div className="box box-4">
          {menu ? (
            <Link onClick={closeMenu} to="/illustrations">
              <h1> ILLUSTRATIONS </h1>
            </Link>
          ) : null}
        </div>

        <div className="box box-5">
          {menu ? (
            <Link onClick={closeMenu} to="/blog">
              <h1> BLOG </h1>
            </Link>
          ) : null}
        </div>
        <div className="box box-6">
          {menu ? (
            <Link onClick={closeMenu} to="/contact">
              <h1> ABOUT / CONTACT </h1>
            </Link>
          ) : null}
        </div>

        <div className="box box-7"></div>
      </div>
    </StyledMenuBoxes>
  )
}

export default MenuBoxes
