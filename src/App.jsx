import React, { useState } from 'react'
import { GlobalStyle } from './styledComponents/GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MenuBoxes from './Organism/Molecules/MenuBoxes'
import FrontpageContent from './Organism/Pages/FrontpageContent'
import WebGallery from './Organism/Pages/WebGallery'
import Blog from './Organism/Pages/Blog'
import BurgerMenu from './Organism/Molecules/BurgerMenu'
import HomeIcon from './Organism/Atoms/HomeIcon'
import Credit from './Organism/Atoms/Credit'
import Loading from './Organism/Atoms/Loading'
import Contact from './Organism/Pages/Contact'
import Projects from './Organism/Pages/Projects'
import Context from './context/Context'
import DispatchContext from './context/DispatchContext'
import SinglePost from './Organism/Pages/SinglePost'
import SocialMedia from './Organism/Atoms/SocialMedia'
import AppGallery from './Organism/Pages/AppGallery'
import Illustrations from './Organism/Pages/Illustrations'

const App = () => {
  const [menu, setMenu] = useState(false)
  const [home, setHome] = useState(true)
  const [loading, setLoading] = useState(false)

  return (
    <Context.Provider value={{ menu, home, loading }}>
      <DispatchContext.Provider value={{ setMenu, setHome, setLoading }}>
        <Router>
          {loading && <Loading />}
          <MenuBoxes />
          <BurgerMenu />

          {!home && <HomeIcon />}

          <Switch>
            <Route path="/" exact>
              <FrontpageContent />
            </Route>
            <Route path="/web" exact>
              <WebGallery />
            </Route>
            <Route path="/app" exact>
              <AppGallery />
            </Route>
            <Route path="/illustrations" exact>
              <Illustrations />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id" exact>
              <SinglePost />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Router>
        <Credit />
        {home ? <SocialMedia /> : null}
        <GlobalStyle menu={menu} home={home} />
      </DispatchContext.Provider>
    </Context.Provider>
  )
}

export default App
