import React, { useState, useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { StyledProjects } from '../styledComponents/StyledProjects'
import Up from './Up'
import Context from '../Context'
import DispatchContext from '../DispatchContext'
import ProjectBox from './ProjectBox'
import Loading from './Loading'
import pokemonWeb from '../img/projects/pokemon/web1.png'
import pokemonWeb2 from '../img/projects/pokemon/web2.png'
import pokemonMob1 from '../img/projects/pokemon/mob1.png'
import pokemonMob2 from '../img/projects/pokemon/mob2.png'
import pokemonTab from '../img/projects/pokemon/ipad.png'
import movieWeb from '../img/projects/movie/web1.png'
import movieWeb2 from '../img/projects/movie/web2.png'
import movieMob1 from '../img/projects/movie/mob1.png'
import movieMob2 from '../img/projects/movie/mob2.png'
import movieTab from '../img/projects/movie/tab.png'
import portfolioWeb from '../img/projects/portfolio/web1.png'
import portfolioWeb2 from '../img/projects/portfolio/web2.png'
import portfolioMob1 from '../img/projects/portfolio/mob1.png'
import portfolioMob2 from '../img/projects/portfolio/mob2.png'
import portfolioTab from '../img/projects/portfolio/tab.png'

const Projects = () => {
  const { menu, home, loading } = useContext(Context)
  const { setMenu, setHome, setLoading } = useContext(DispatchContext)
  const [loadedImages, setLoadedImages] = useState(0)

  const images = [pokemonWeb, pokemonWeb2, pokemonMob1, pokemonMob2, pokemonTab, movieWeb, movieWeb2, movieMob1, movieMob2, movieTab, portfolioWeb, portfolioWeb2, portfolioMob1, portfolioMob2, portfolioTab]
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

  const [project, setProject] = useState({
    projects: [
      {
        id: 4,
        name: 'Pokemon Pokedex',
        role: 'Developer & UI/UX Designer',
        imgWeb: pokemonWeb,
        imgWeb2: pokemonWeb2,
        imgMob1: pokemonMob1,
        imgMob2: pokemonMob2,
        imgTab: pokemonTab,
        url: 'https://pokemonfun.netlify.app/',
        methods: 'React JS, REST API, Styled Components, XD, Illustrator',
        description: " In this project I created a modern pokedex where the pokemon fans can get information about their favorite pokemons. My idea was to create a minimalistic looking pokedex with trendy neumorphic design details and pastel colors. I hope you will enjoy it... what are you waiting?! Let's catch them all!"
      },
      {
        id: 3,
        name: 'Movie Check',
        role: 'Developer & UI/UX Designer',
        imgWeb: movieWeb,
        imgWeb2: movieWeb2,
        imgMob1: movieMob1,
        imgMob2: movieMob2,
        imgTab: movieTab,
        url: 'https://movie-check.netlify.app/',
        methods: 'React JS, REST API, Styled Components',
        description: ' Movie Check is a useful web app for people who cannot decide which movie to watch. Once they open the webpage they will immediately see the popular movies of the week and clicking on the poster they are able to get all the information they need about the movie. Plus, they can easily search for movies and get information about them as well. '
      },
      {
        id: 2,
        name: 'Portfolio',
        role: 'Developer & UI/UX Designer',
        imgWeb: portfolioWeb,
        imgWeb2: portfolioWeb2,
        imgMob1: portfolioMob1,
        imgMob2: portfolioMob2,
        imgTab: portfolioTab,
        url: 'https://surarzayeva.com',
        methods: 'React JS, Styled Components, XD, Illustrator ',
        description: "I really had a lot of fun while building this portfolio. All the ideas, animations and visual UI elements on this webpage are made by me. You can already feel that I'm obsessed with neumorphic style, which i used everywhere on this webpage. Plus, I tried to make it as minimal and simple as possible, in order to put the main focus on my projects and designs. More will come. "
      }
    ]
  })

  return (
    <div style={{ visibility: loadedImages === number ? 'visible' : 'hidden' }}>
      <StyledProjects style={{ opacity: menu ? '0.2' : '1' }}>
        <Helmet>
          <title>SR • Projects</title>
          <meta name="description" content="Real design and building projects i realized." />
          <meta name="theme-color" content="#2B2B2D" />
        </Helmet>
        <div className="title">PROJECTS</div>
        {project.projects.map(project => (
          <ProjectBox callback={countTimes} key={project.id} id={project.id} name={project.name} description={project.description} url={project.url} imageWeb={project.imgWeb} imageWeb2={project.imgWeb2} imageMob1={project.imgMob1} imageMob2={project.imgMob2} imageTab={project.imgTab} methods={project.methods} />
        ))}
        <Up />
      </StyledProjects>
    </div>
  )
}

export default Projects
