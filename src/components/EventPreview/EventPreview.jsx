import { useEffect, useRef, useState } from 'react'
import './EventPreview.css'

export default function EventPreview(props){
  const { setEventOpen, eventContent, scrollOffset } = props
  const contentEl = useRef(null)
  const [slideOut, setSlideOut] = useState(false)

  const lockScrolling = () => {
    scrollTo({
      top: scrollOffset,
      left: 0,
      behavior: "instant",
    })
  }

  useEffect(() => {
    contentEl.current.innerHTML = eventContent()

    addEventListener('scroll', lockScrolling)

    return () => {
      removeEventListener('scroll', lockScrolling)
    }
  })

  const clickHandler = () => {
    setSlideOut(true)
    setTimeout(() => {
      setEventOpen(false)
      removeEventListener('scroll', lockScrolling)
    }, 300);
  }
  console.log(slideOut)
  return (
    <div className="eventPreview">
      <div className="eventPreview-backdrop" data-slide={slideOut}>
        <div 
          className="eventPreview-modal" 
          data-slide={slideOut} 
          onAnimationEnd={() => setSlideOut(false)}
        >
          <div className="eventPreview-navigation">
            <img src="/events/x.svg" onClick={clickHandler} />
          </div>
          <div className="eventPreview-content" ref={contentEl}></div>
        </div>
      </div>
    </div>
  )
}