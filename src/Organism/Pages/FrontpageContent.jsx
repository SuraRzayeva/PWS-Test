import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { StyledFrontpageContent } from '../../styledComponents/StyledFrontpageContent'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'

const FrontpageContent = (callback) => {
  const { menu, home } = useContext(Context)
  const { setMenu, setHome } = useContext(DispatchContext)

  useEffect(() => {
    setHome(true)
    window.scrollTo(0, 0)
    setMenu(false)
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
      <Helmet>
        <title>SR • Homepage</title>
        <meta name="description" content="Frontend Developer and UI/UX Designer" />
        <meta name="theme-color" content="#2B2B2D" />
      </Helmet>
      <div className="hero">
        <h1 className="hero-text">Let's create</h1>
        <h1 className="hero-text">something</h1>
        <h1 className="hero-text">
          cool<span>.</span>
        </h1>
      </div>
      <div className="line-block">
        <div className="start-here">
          <button onClick={openMenu}>Start here</button>
        </div>
        <div className="line">
          <div className="circle" onClick={openMenu}></div>
        </div>
      </div>
    </StyledFrontpageContent>
  )
}

export default FrontpageContent
