import Badge from './Badge'

export default function ProjectCard(props){ 
  const { title, description, badges, thumbnail, githubLink, link } = props
  const badgesMarkup = badges.map(({text, color}, id) => (
    <Badge key={id} text={text} color={color} />
  ))

  return (
    <div className='rounded-2xl p-4 text-left bg-gray-100 text-gray-900'>
      <a 
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        <img src={thumbnail} className='w-full mb-4' />
      </a>
      <p className='flex flex-wrap gap-badge'>{badgesMarkup}</p>
      <h1 className='pt-2 text-projectCardHedaing mb-projectCard font-bold'>{title}</h1>
      <p className='font-robot font-normal text-projectCardDescription mb-8'>{description}</p>
      <div className="flex justify-end mr-projectCard mb-projectCard tracking-wider">
        <a 
          className='text-projectCardBtns font-geo no-underline py-2 px-4' 
          href={githubLink} 
          target="_blank" 
          rel='noreferrer'
        >
          Read More
        </a>
        <a 
          className='text-projectCardBtns font-geo font-thin no-underline py-2 px-4 bg-xDouble bg-btnGradient ml-projectCardCta rounded-md text-gray-100 transition-all duration-500 ease-in-out hover:bg-right hover:shadow-btnShadow'
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