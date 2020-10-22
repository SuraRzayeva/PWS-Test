import React from 'react'
import { StyledProjectBox } from '../../styledComponents/StyledProjectBox'

const ProjectBox = ({ callback, description, imageWeb, imageWeb2, imageMob1, imageMob2, imageTab, name, id, url, methods }) => {
  return (
    <StyledProjectBox>
      <h1 className="title">{name}</h1>
      <div className="flexbox">
        <div className="first-divs">
          <div className="info-div">
            <div className="description">
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <div className="methods">
              <h3>What I used:</h3>
              <p>{methods}</p>
            </div>
            <div className="url">
              <h3>
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  Click here to get there
                </a>
              </h3>
            </div>
          </div>
          <div className="mobile-div">
            <img className="img-mob" src={imageMob1} alt="" onLoad={callback} />
            <img className="img-mob" src={imageMob2} alt="" onLoad={callback} />
            <img className="img-tab" src={imageTab} alt="" onLoad={callback} />
          </div>
        </div>
        <div className="web-div">
          <img className="img-web-1" src={imageWeb} alt="" onLoad={callback} />
          <img className="img-web-1" src={imageWeb2} alt="" onLoad={callback} />
        </div>
      </div>
    </StyledProjectBox>
  )
}

export default ProjectBox
