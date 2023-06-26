import Badge from './Badge'
import { useEffect, useRef } from 'react'

export default function EventCard(props){
  const eventCard = useRef(null)

  const { thumbnail, title, description, date, location, 
    badges, setEventOpen, setPreviewEventId, id, setScrollOffset 
  } = props

  const thumbnailStyle = {
    backgroundImage: `url(${thumbnail})`
  }

  const badgesMarkup = badges.map((badge, id) => {
    const { text, color } = badge

    return <Badge key={id} text={text} color={color}/>
  })

  useEffect(() => {
    const { current } = eventCard

    const toggleClasses = () => {
      current.classList.toggle('!translate-y-0')
      current.classList.toggle('opacity-100')
      current.classList.toggle('blur-none')
    }

    const observer = new IntersectionObserver(() => {
      toggleClasses()
    })

    observer.observe(current)
    toggleClasses()
  }, [])

  const clickHandler = () => {
    setScrollOffset(scrollY)
    setEventOpen(true)
    setPreviewEventId(id)
  }

  return (
    <div className="max-w-sm min-w-[20rem] min-h-[35rem] border-gray-400 border-solid border-[0.1rem] rounded-2xl text-left overflow-hidden cursor-pointer shadow-xl translate-y-1/2 opacity-0 blur-lg transition-all duration-200 ease-in-out hover:-translate-y-[5%] hover:scale-[1.05] hover:shadow-2xl" ref={eventCard} onClick={clickHandler}>
      <div style={thumbnailStyle} className='h-[40%] bg-cover bg-[center_0]' />
      <h2 className='m-4 flex gap-3'>{badgesMarkup}</h2>
      <h3 className='flex items-center gap-4 my-2 mx-4 font-geo font-normal text-eventCardPara'>
        <img src="/events/calendar.svg" className='w-[5%]'/>
        {date}
      </h3>
      <h3 className='flex items-center gap-4 my-2 mx-4 font-geo font-normal text-eventCardPara'>
        <img src="/events/location.svg" />
        {location}
      </h3>
      <h1 className='m-4 text-eventCardTitle font-bold font-geo'>{title}</h1>
      <p className='font-geo font-thin text-eventCardPara m-4'>{description}</p>
    </div>
  )
}