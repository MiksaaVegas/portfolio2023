import './Hero.css'
import 'atropos/atropos.min.css'
import Atropos from 'atropos/react'
import { useRef } from 'react'

export default function Hero(){
  const cssLogo = useRef(null)
  const htmlLogo = useRef(null)

  const enterHandler = () => {
    cssLogo.current.classList.add('hero-css-icon')
    htmlLogo.current.classList.add('hero-html-icon')
  }

  const leaveHandler = () => {
    cssLogo.current.classList.remove('hero-css-icon')
    htmlLogo.current.classList.remove('hero-html-icon')
  }

  return (
    <section className='hero'>
      <div className="hero-col">
        <h1>Creating frontend art that adapts across screens 🎨</h1>
        <h2>Made possible by Mihail Kuzmanoski</h2>
        <div className="hero-btns">
          <a className='hero-contact' href='#contact'>
            CONTACT ME
          </a>
          <a href="#projects-section" className='hero-projects'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            OR CHECK OUT MY WORK
          </a>
        </div>
      </div>
      <div className="hero-col">
        <Atropos 
          className='hero-atropos'
          shadow={false} 
          highlight={false}
          onEnter={enterHandler}
          onLeave={leaveHandler}
        >
          <img src="/hero/miksaa.png" className='hero-miksaa'/>
          <img 
            src="/hero/html.svg" 
            className='hero-icons'
            ref={htmlLogo}
            data-atropos-offset='10'
          />
          <img 
            src="/hero/css.svg" 
            className='hero-icons' 
            ref={cssLogo}
            data-atropos-offset='10'
          />
        </Atropos>
      </div>
      <img src="/wave.svg" className='hero-wave'/>
    </section>
  )
}