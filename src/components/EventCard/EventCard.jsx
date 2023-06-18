import Badge from '../Badge/Badge'
import { useEffect, useRef } from 'react'
import './EventCard.css'

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
    const observer = new IntersectionObserver(() => {
      current.classList.toggle('eventCard--shown')
    })

    observer.observe(current)
    current.classList.toggle('eventCard--shown')
  }, [])

  const clickHandler = () => {
    setScrollOffset(scrollY)
    setEventOpen(true)
    setPreviewEventId(id)
  }

  return (
    <div className="eventCard" ref={eventCard} onClick={clickHandler}>
      <div style={thumbnailStyle} className='eventCard-thumbnail' />
      <h2 className='eventCard-badges'>{badgesMarkup}</h2>
      <h3>
        <img src="/events/calendar.svg" />
        {date}
      </h3>
      <h3>
        <img src="/events/location.svg" />
        {location}
      </h3>
      <h1 className='eventCard-title'>{title}</h1>
      <p>{description}</p>
    </div>
  )
}