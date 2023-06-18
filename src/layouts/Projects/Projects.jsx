import { register } from 'swiper/element/bundle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projects from '/src/data/projects.json'
import './Projects.css'
import { useEffect, useRef } from 'react'

register()

export default function Projects(){
  const projectsSwiper = useRef(null)

  const projectsMarkup = projects.map(project => (
    <swiper-slide key={project.id}>
      <ProjectCard 
        title={project.title}
        badges={project.badges}
        thumbnail={project.thumbnail}
        description={project.description}
        githubLink={project.githubLink}
        link={project.link}
      />
    </swiper-slide>
  ))

  useEffect(() => {
    const { current } = projectsSwiper
    const observer = new IntersectionObserver(() => {
      current.classList.toggle('projects-swiper--shown')
    }, {threshold: 0.4})

    observer.observe(current)
    current.classList.toggle('projects-swiper--shown')
  }, [])

  return (
    <section className='projects' id='projects-section'>
      <h1>Your need = My Work 🙋‍♂️</h1>
      <h2>The best pieces I&apos;ve made so far</h2>
      <div 
        className='projects-swiper'
        ref={projectsSwiper}
      >
        <swiper-container
          autoplay-delay='5000'
          grab-cursor='true'
          loop='true'
          effect='cards'
        >
        {projectsMarkup}
        </swiper-container>
      </div>
    </section>
  )
}