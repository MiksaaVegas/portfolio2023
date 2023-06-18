import './Events.css'
import events from '/src/data/events.json'
import EventCard from '../../components/EventCard/EventCard'
import EventPreview from '../../components/EventPreview/EventPreview'
import { useEffect, useRef, useState } from 'react'

export default function Events(){
  const titleEl = useRef(null)
  const [eventOpen, setEventOpen] = useState(false)
  const [previewEventId, setPreviewEventId] = useState(0)
  const [scrollOffset, setScrollOffset] = useState(0)

  const eventCardsMarkup = events.map(event => {
    const { 
      id, thumbnail, title, description, 
      date, location, badges 
    } = event

    return <EventCard 
      key={id}
      id={id}
      thumbnail={thumbnail}
      title={title}
      description={description}
      date={date}
      location={location}
      badges={badges}
      setEventOpen={setEventOpen}
      setPreviewEventId={setPreviewEventId}
      setScrollOffset={setScrollOffset}
    />
  })

  const previewEventContent = () => {
    for (const event of events) 
      if(event.id == previewEventId) return event.content
  }

  useEffect(() => {
    const element = titleEl.current

    const observer = new IntersectionObserver(() => {
      element.classList.toggle('show-decoration')
    }, {rootMargin: '-15%'})

    observer.observe(element)
    element.classList.toggle('show-decoration')
  }, [])

  return (
    <section className="events">
      <img src="/wave.svg" className='events-wave' />
      <h1 ref={titleEl}>Where I&apos;ve been 📍</h1>
      <p className='events-subheading'>In networking, the more you give, the more you receive</p>
      <div className="events-cards">
        {eventCardsMarkup}
      </div>
      {
        eventOpen && <EventPreview
          setEventOpen={setEventOpen} 
          eventContent={() => previewEventContent()} 
          scrollOffset={scrollOffset} 
        />
      }
    </section>
  )
}