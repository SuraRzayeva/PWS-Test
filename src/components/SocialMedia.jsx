import React from 'react'
import { StyledSocialMedia } from '../styledComponents/StyledSocialMedia'
import twitter from '../img/icons/twitter.svg'
import facebook from '../img/icons/facebook.svg'
import behance from '../img/icons/behance.svg'
import github from '../img/icons/github.svg'
import dribbble from '../img/icons/dribbble.svg'
import instagram from '../img/icons/instagram.svg'
import linkedin from '../img/icons/linkedin.svg'

const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SuraRzayeva">
        <img src={twitter} alt="twitter" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/SuraRzayeva">
        <img src={github} alt="github" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/surarzayeva/">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/SuraRzayeva">
        <img src={dribbble} alt="dribbble" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/surarzayeva">
        <img src={behance} alt="behance" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/surarzayeva/">
        <img src={instagram} alt="instagram" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sura.rzv">
        <img src={facebook} alt="facebook" />
      </a>
    </StyledSocialMedia>
  )
}

export default SocialMedia
