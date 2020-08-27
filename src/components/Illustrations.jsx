import React, { useContext, useEffect, useState } from 'react'
import { StyledIllustrations } from '../styledComponents/StyledIllustrations'
import DispatchContext from '../DispatchContext'
import Context from '../Context'
import Up from './Up'
import Loading from './Loading'
import Octopus from '../img/illustrations/octopus.png'
import Turtle from '../img/illustrations/turtle.png'
import Face from '../img/illustrations/face.png'
import Man from '../img/illustrations/man.png'
import Cat from '../img/illustrations/cat.png'
import C1 from '../img/illustrations/c1.png'
import C2 from '../img/illustrations/c2.png'
import C3 from '../img/illustrations/c3.png'
import C4 from '../img/illustrations/c4.png'
import Cameleon from '../img/illustrations/cameleon.png'

const Illustrations = () => {
  const { menu, home, loading } = useContext(Context)
  const { setMenu, setHome, setLoading } = useContext(DispatchContext)
  const [loadedImages, setLoadedImages] = useState(0)

  const images = [Octopus, Turtle, Face, Man, Cat, C1, C2, C3, C4, Cameleon]
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
      <StyledIllustrations style={{ opacity: menu ? 0.1 : 1 }} state={menu}>
        <div className="title">ILLUSTRATIONS</div>
        <div className="gallery">
          <div className="image">
            <img onLoad={() => setLoading(false)} src={Turtle} alt="" className="img-1" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={Octopus} alt="" className="img-2" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={Man} alt="" className="img-2" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={Face} alt="" className="img-3" onLoad={countTimes} />
          </div>

          <div className="image">
            <img src={C1} alt="" className="img-2" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={C2} alt="" className="img-3" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={Cat} alt="" className="img-3" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={C4} alt="" className="img-3" onLoad={countTimes} />
          </div>
          <div className="image">
            <img src={C3} alt="" className="img-2" onLoad={countTimes} />
          </div>

          <div className="image">
            <img src={Cameleon} alt="" className="img-3" onLoad={countTimes} />
          </div>
        </div>
        <Up />
      </StyledIllustrations>
    </div>
  )
}

export default Illustrations
