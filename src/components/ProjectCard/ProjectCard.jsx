import Badge from '../Badge/Badge'
import './ProjectCard.css'

export default function ProjectCard(props){ 
  const { title, description, badges, thumbnail, githubLink, link } = props
  const badgesMarkup = badges.map(({text, color}, id) => (
    <Badge key={id} text={text} color={color} />
  ))
  return (
    <div className='project-card'>
      <a 
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        <img src={thumbnail} />
      </a>
      <p className='badges'>{badgesMarkup}</p>
      <h1>{title}</h1>
      <p className='description'>{description}</p>
      <div className="project-btns">
        <a 
          className='project-read-more' 
          href={githubLink} 
          target="_blank" 
          rel='noreferrer'
        >
          Read More
        </a>
        <a 
          className='project-check-it'
          target='_blank'
          rel='noreferrer'
          href={link}
        >
          Check it!
        </a>
      </div>
    </div>
  )
}