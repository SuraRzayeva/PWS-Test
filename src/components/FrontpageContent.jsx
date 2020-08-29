import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StyledFrontpageContent } from '../styledComponents/StyledFrontpageContent'
import Context from '../Context'
import DispatchContext from '../DispatchContext'
import SocialMedia from './SocialMedia'

const FrontpageContent = callback => {
  const { menu, home } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)

  useEffect(() => {
    setHome(true)
    window.scrollTo(0, 0)
  }, [])

  const openMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }

  return (
    <StyledFrontpageContent style={{ opacity: menu ? 0.2 : 1 }}>
      <div className="hero-content">
        <div className="hero">
          <h1 className="name">Sura Rzayeva</h1>
          <h3 className="profession">
            {' '}
            Frontend Developer <br className="mobile-break"></br>
            <span>|</span> UI/UX Designer{' '}
          </h3>
          <div className="buttons">
            <button onClick={openMenu} className="button portfolio-btn">
              Portfolio
            </button>
            <Link className="contact-link" to="/contact">
              {' '}
              <button className="button contact-btn">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </StyledFrontpageContent>
  )
}

export default FrontpageContent
