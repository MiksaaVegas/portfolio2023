import events from '/src/data/events.json'
import EventCard from '../components/EventCard'
import EventPreview from '../components/EventPreview'
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
      element.classList.toggle('bg-[length:100%_20%]')
    }, {rootMargin: '-15%'})

    observer.observe(element)
    element.classList.toggle('bg-[length:100%_20%]')
  }, [])

  return (
    <section className="text-center relative">
      <img src="/wave.svg" className='rotate-180 w-full' />
      <h1 ref={titleEl} className='inline-block font-geo font-bold text-eventsHeading leading-[2.2rem] mt-16 mb-4 bg-[length:0_20%] bg-btnGradient bg-no-repeat bg-[left_110%] transition-all duration-700 ease-in-out'>Where I&apos;ve been 📍</h1>
      <p className='py-0 px-4 font-robot text-eventsSubheading mb-16 opacity-80'>In networking, the more you give, the more you receive</p>
      <div className="mx-eventsCards flex justify-center flex-wrap gap-20">
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