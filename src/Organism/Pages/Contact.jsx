import React, { useEffect, useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import emailjs from 'emailjs-com'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'
import { StyledContact } from '../../styledComponents/StyledContact'
import Me from '../../img/profile.png'
import twitter from '../../img/icons/twitter.svg'
import facebook from '../../img/icons/facebook.svg'
import behance from '../../img/icons/behance.svg'
import github from '../../img/icons/github.svg'
import dribbble from '../../img/icons/dribbble.svg'
import instagram from '../../img/icons/instagram.svg'
import linkedin from '../../img/icons/linkedin.svg'

const Contact = () => {
  const { menu, home, loading } = useContext(Context)
  const { setMenu, setHome, setLoading } = useContext(DispatchContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [success, setSuccess] = useState(false)
  const [loadedImages, setLoadedImages] = useState(0)

  const countTimes = () => {
    setLoadedImages(loadedImages + 1)
  }

  useEffect(() => {
    setLoading(true)
    setHome(false)
  }, [])

  useEffect(() => {
    if (loadedImages === 1) {
      setLoading(false)
    }
  }, [loadedImages])

  useEffect(() => {
    setError(false)
  }, [name, email, message])

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
    }, 2800)
  }, [success])

  const submitForm = (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setError(true)
      setErrorText('Oh, sweetheart, please, fill all the input fields. ')
    } else {
      // sendInfo()
      emailjs.sendForm('gmail', 'portfolio', e.target, 'user_h4Q1w3EOmf1x7pPQIXfud').then(
        (result) => {
          console.log(result.text)
          setSuccess(true)
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          setError(true)
          setErrorText('Ups, something went wrong. Please, try again. ')
        }
      )
    }
  }

  return (
    <div style={{ visibility: loadedImages === 1 ? 'visible' : 'hidden' }}>
      <StyledContact menu={menu} error={error} success={success}>
        <Helmet>
          <title>SR • About / Contact</title>
          <meta name="description" content="About me and my contact information" />
          <meta name="theme-color" content="#2B2B2D" />
        </Helmet>
        <div className="card">
          <div className="about-div">
            <img src={Me} alt="" onLoad={countTimes} />
            <div className="contact-info">
              <p>
                <span className="title"> Location: </span> <span className="data"> Berlin, Germany</span>
              </p>
              <p>
                <span className="title">E-mail: </span>{' '}
                <span href="mailto: sura.rzayeva@gmail.com" className="data">
                  sura.rzayeva@gmail.com
                </span>
              </p>
              <p>
                <span className="title">Tel:</span> <span className="data"> +49 178 403 6246</span>
              </p>
            </div>
            <div className="social-icons">
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
            </div>
          </div>
          <div className="form-div">
            <div className="text">
              <p> Hey, thank you for visiting my website. </p>
              <p>
                {' '}
                I'm an experienced UI/UX Designer &amp; Frontend Web/App Developer with a background in Graphic Design and degree in Marketing. I'm specializing on these three aspects, because in order to create an ideal product, you need to understand users, have an eye on design and know how to implement your ideas
                in code.{' '}
              </p>
              <p> Do you want to work together? </p>
              <p>Contact me: </p>
            </div>
            {!success && (
              <div className="form">
                <form onSubmit={submitForm} action="#" autoComplete="off">
                  {error ? <p className="flash-msg"> {errorText}</p> : null}
                  <input autoComplete="name" type="text" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                  <input autoComplete="email" type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                  <textarea autoComplete="off" name="" id="" cols="30" rows="10" placeholder="Your message" name="message" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                  <button> SEND </button>
                </form>
              </div>
            )}
            {success && (
              <div className="success">
                {' '}
                Thank you for your message! <br /> I will get back to you as soon as possible.
              </div>
            )}
          </div>
        </div>
      </StyledContact>
    </div>
  )
}

export default Contact
