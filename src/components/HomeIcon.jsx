import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Home from '../img/icons/home.svg'
import Context from '../Context'
import DispatchContext from '../DispatchContext'
import { StyledHomeIcon } from '../styledComponents/StyledHomeIcon'

const HomeIcon = () => {
  const { menu, home } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)

  const closeMenu = () => {
    if (menu) {
      setMenu(false)
    }
  }

  return (
    <StyledHomeIcon>
      <Link onClick={closeMenu} to="/">
        {' '}
        <img src={Home} alt="" />
      </Link>
    </StyledHomeIcon>
  )
}

export default HomeIcon
