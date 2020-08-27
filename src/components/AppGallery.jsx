import React, { useContext, useEffect, useState } from 'react'
import Up from './Up'
import Loading from './Loading'
import { StyledAppGallery } from '../styledComponents/StyledAppGallery'
import DispatchContext from '../DispatchContext'
import Context from '../Context'
import App1 from '../img/app/1.png'
import App2 from '../img/app/2.png'

const AppGallery = () => {
  const { menu, home, loading } = useContext(Context)
  const { setMenu, setHome, setLoading } = useContext(DispatchContext)

  const images = [App1, App2]
  let number = images.length

  const [loadedImages, setLoadedImages] = useState(0)

  const countTimes = () => {
    setLoadedImages(loadedImages + 1)
  }

  useEffect(() => {
    setLoading(true)
    setHome(false)
  }, [])

  useEffect(() => {
    if (loadedImages === number) {
      console.log(loadedImages)
      setLoading(false)
    }
  }, [loadedImages])

  return (
    <div style={{ visibility: loadedImages === number ? 'visible' : 'hidden' }}>
      <StyledAppGallery style={{ opacity: menu ? 0.1 : 1 }} state={menu}>
        <div className="title">UI/UX APP</div>
        <div className="gallery">
          <div className="image">
            <img src={App1} alt="" className="img-1" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={App2} alt="" className="img-2" onLoad={countTimes} />
          </div>
        </div>
        <Up />
      </StyledAppGallery>
    </div>
  )
}

export default AppGallery
