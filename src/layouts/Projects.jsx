import { register } from 'swiper/element/bundle'
import ProjectCard from '../components/ProjectCard'
import projects from '/src/data/projects.json'
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

    const toggleClasses = () => {
      current.classList.toggle('opacity-100')
      current.classList.toggle('blur-none')
      current.classList.toggle('translate-x-0')
    }

    const observer = new IntersectionObserver(() => {
      toggleClasses()
    }, {threshold: 0.4})

    observer.observe(current)
    toggleClasses()
  }, [])

  return (
    <section className='bg-darkBlue text-gray-100 text-center py-16' id='projects-section'>
      <h1 className='text-projectsHeading leading-none font-geo font-bold mb-4'>Your need = My Work 🙋‍♂️</h1>
      <h2 className='text-projectsSubheading font-robot font-extralight tracking-ctaBtn pb-16 opacity-80'>The best pieces I&apos;ve made so far</h2>
      <div 
        className='opacity-0 blur-md -translate-x-1/2 transition-all duration-500 ease-in-out'
        ref={projectsSwiper}
      >
        <swiper-container
          autoplay-delay='5000'
          grab-cursor='true'
          loop='true'
          effect='cards'
          style={{maxWidth: 'clamp(15rem, 12rem + 17vw, 32rem)'}}
        >
        {projectsMarkup}
        </swiper-container>
      </div>
    </section>
  )
}