import React, { useContext, useEffect, useState, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { StyledWebGallery } from '../../styledComponents/StyledWebGallery'
import Up from '../Atoms/Up'
import DispatchContext from '../../context/DispatchContext'
import Context from '../../context/Context'
import image1 from '../../img/web/1.jpg'
import image2 from '../../img/web/2.jpg'
import image3 from '../../img/web/3.jpg'
import image4 from '../../img/web/4.jpg'
import image5 from '../../img/web/5.jpg'
import image6 from '../../img/web/6.jpg'
import image7 from '../../img/web/7.jpg'

const WebGallery = () => {
  const { menu, home, loading } = useContext(Context)
  const { setMenu, setHome, setLoading } = useContext(DispatchContext)
  const [loadedImages, setLoadedImages] = useState(0)

  const images = [image1, image2, image3, image4, image5, image6, image7]
  let number = images.length

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
      <StyledWebGallery style={{ opacity: menu ? 0.1 : 1 }} state={menu}>
        <Helmet>
          <title>SR • UI/UX Web </title>
          <meta name="description" content="UI/UX web designs with modern design trends for e-commerce and portfolio webpages." />
          <meta name="theme-color" content="#2B2B2D" />
        </Helmet>
        <div className="title">UI/UX WEB</div>
        <div className="gallery">
          <div className="image">
            <img src={image1} alt="" className="img-1" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={image2} alt="" className="img-2" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={image3} alt="" className="img-3" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={image4} alt="" className="img-4" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={image5} alt="" className="img-5" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={image6} alt="" className="img-6" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={image7} alt="" className="img-7" onLoad={countTimes} />
          </div>
        </div>

        <Up />
      </StyledWebGallery>
    </div>
  )
}

export default WebGallery
