import { useEffect, useRef } from 'react'

export default function EventPreview(props){
  const { setEventOpen, eventContent, scrollOffset } = props
  const contentEl = useRef(null)
  const modalEl = useRef(null)
  const backdropEl = useRef(null)

  const lockScrolling = () => {
    scrollTo({
      top: scrollOffset,
      left: 0,
      behavior: "instant",
    })
  }

  useEffect(() => {
    const content = contentEl.current

    content.innerHTML = eventContent()

    const title = content.querySelector('h1')
    const headings = content.querySelectorAll('h2')
    const paragraphs = content.querySelectorAll('p')

    title.classList.add('mt-0', 'mb-eventPreviewTitle', 'text-eventPreviewTitle', 'font-bold', 'leading-tight')
    for (const heading of headings) 
      heading.classList.add('mb-3', 'text-eventPreviewHeading', 'font-bold', 'leading-tight')
    for (const paragraph of paragraphs)
      paragraph.classList.add('mb-8', 'font-geo', 'font-thin', 'text-eventPreviewPara', 'opacity-80', 'leading-tight')

    addEventListener('scroll', lockScrolling)

    return () => {
      removeEventListener('scroll', lockScrolling)
    }
  })

  const clickHandler = () => {
    const modal = modalEl.current
    const backdrop = backdropEl.current

    modal.classList.toggle('animate-eventPreviewSlide')
    modal.classList.toggle('animate-eventPreviewSlideOut')
    backdrop.classList.toggle('animate-backdropFadeIn')
    backdrop.classList.toggle('animate-backdropFadeOut')

    setTimeout(() => {
      setEventOpen(false)
      removeEventListener('scroll', lockScrolling)
    }, 300);
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-20">
      <div ref={backdropEl} className="flex justify-center items-center bg-black/40 backdrop-blur-md w-full h-full animate-backdropFadeIn">
        <div 
          className="lg:max-w-[70%] max-w-[85%] h-[90%] p-4 rounded-2xl bg-gray-100 animate-eventPreviewSlide"  
          ref={modalEl}
        >
          <div className="flex justify-end mb-4">
            <img src="/events/x.svg" onClick={clickHandler} className='w-6 cursor-pointer opacity-50 transition-all duration-200 ease-in-out hover:opacity-100' />
          </div>
          <div className="p-4 h-[95%] overflow-y-scroll bg-black bg-opacity-5 text-left font-geo" ref={contentEl}></div>
        </div>
      </div>
    </div>
  )
}