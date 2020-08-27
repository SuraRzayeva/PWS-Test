import React, { useState } from 'react'
import { GlobalStyle } from './styledComponents/GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MenuBoxes from './components/MenuBoxes'
import FrontpageContent from './components/FrontpageContent'
import WebGallery from './components/WebGallery'
import Blog from './components/Blog'
import BurgerMenu from './components/BurgerMenu'
import HomeIcon from './components/HomeIcon'
import Credit from './components/Credit'
import Loading from './components/Loading'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Context from './Context'
import DispatchContext from './DispatchContext'
import SinglePost from './components/SinglePost'
import AppGallery from './components/AppGallery'
import Illustrations from './components/Illustrations'

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
            <Route path="/app">
              <AppGallery />
            </Route>
            <Route path="/illustrations">
              <Illustrations />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <SinglePost />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Router>
        <Credit />
        <GlobalStyle menu={menu} />
      </DispatchContext.Provider>
    </Context.Provider>
  )
}

export default App
