import React, { useContext, useEffect, useState, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { StyledUIUXGallery } from '../../../styledComponents/StyledUIUXGallery/StyledUIUXGallery'
import { Link } from 'react-router-dom'
import Up from '../../Atoms/Up'
import DispatchContext from '../../../context/DispatchContext'
import Context from '../../../context/Context'
import { WebPhotos } from '../../../data/imageData/UIUXGallery'

const WebGallery = () => {
  const { menu, home, loading } = useContext(Context)
  const { setMenu, setHome, setLoading } = useContext(DispatchContext)
  const [loadedImages, setLoadedImages] = useState(0)

  // let number = images.length

  const countTimes = () => {
    setLoadedImages(loadedImages + 1)
  }

  useEffect(() => {
    setLoading(false)
    setHome(false)
  }, [])

  // useEffect(() => {
  //   if (loadedImages === number) {
  //     console.log(loadedImages)
  //     setLoading(false)
  //   }
  // }, [loadedImages])

  return (
    // <div style={{ visibility: loadedImages === number ? 'visible' : 'hidden' }}>
    <StyledUIUXGallery style={{ opacity: menu ? 0.1 : 1 }} state={menu}>
      <Helmet>
        <title>SR • UI/UX Web </title>
        <meta name="description" content="UI/UX web designs with modern design trends for e-commerce and portfolio webpages." />
        <meta name="theme-color" content="#2B2B2D" />
      </Helmet>
      <div className="gallery-navigation">
        <ul>
          <li>
            <Link>Webpage Design</Link>
          </li>
          <li>
            <Link>App Design</Link>
          </li>
          <li>
            <Link>Iconography</Link>
          </li>
        </ul>
      </div>
      <div className="grid">
        {WebPhotos.map((photo) => {
          return <img key={photo.id} src={photo.url} />
        })}
      </div>
      {/* <Up /> */}
    </StyledUIUXGallery>
    // </div>
  )
}

export default WebGallery
