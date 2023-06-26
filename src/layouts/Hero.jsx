import 'atropos/atropos.min.css'
import Atropos from 'atropos/react'

export default function Hero(){
  return (
    <section className='relative flex flex-col lg:flex-row justify-between min-h-minHeroHeight bg-gradient-to-b from-gray-100 to-sky-300 animate-heroFadeIn'>
      <div className="flex flex-col justify-center lg:p-8 md:pt-[10vh] md:pl-0 pt-[10vh] px-[5vw] text-center lg:text-left text-gray-900 items-center lg:items-start">
        <h1 className='text-heroHeading leading-tight font-semibold font-geo mb-4'>Creating frontend art that adapts across screens 🎨</h1>
        <h2 className='text-heroSubheading font-dm font-light tracking-widest mb-6'>Made possible by Mihail Kuzmanoski</h2>
        <div className='flex flex-wrap justify-center gap-4 w-1/2 mx-auto mb-6 lg:justify-start lg:w-full'>
          <img className='w-6 hover:scale-125 transition-all duration-150 ease-in' src="/hero/html5.svg" />
          <img className='w-6 hover:scale-125 transition-all duration-150 ease-in' src="/hero/css3.svg" />
          <img className='w-6 hover:scale-125 transition-all duration-150 ease-in' src="/hero/js.svg" />
          <img className='w-6 hover:scale-125 transition-all duration-150 ease-in' src="/hero/bootstrap.svg" />
          <img className='w-6 hover:scale-125 transition-all duration-150 ease-in' src="/hero/sass.svg" />
          <img className='w-6 hover:scale-125 transition-all duration-150 ease-in' src="/hero/tailwind.svg" />
          <img className='w-6 hover:scale-125 transition-all duration-150 ease-in' src="/hero/react.svg" />
          <img className='w-6 hover:scale-125 transition-all duration-150 ease-in' src="/hero/npm.svg" />
        </div>
        <div className="flex font-geo flex-col md:flex-row gap-4 md:gap-0 items-center md:items-start">
          <a className='text-gray-100 tracking-ctaBtn md:mr-8 bg-xDouble bg-btnGradient transition-all duration-500 ease-in-out px-8 py-4 no-underline inline-block hover:bg-right hover:shadow-btnShadow' href='#contact'>
            CONTACT ME
          </a>
          <a href="#projects-section" className='px-8 py-4 no-underline inline-block bg-transparent tracking-ctaBtn overflow-hidden relative transition-all duration-300 ease-in-out group hover:bg-gray-900 hover:text-gray-100 hover:delay-1000'>
            <span className='block absolute top-0 -left-full w-full h-0.5 bg-gradient-to-r from-transparent to-gray-900 group-hover:left-full group-hover:duration-1000'></span>
            <span className='block absolute -top-full right-0 h-full w-0.5 bg-gradient-to-b from-transparent to-gray-900 group-hover:top-full group-hover:duration-1000 delay-300'></span>
            <span className='block absolute bottom-0 -right-full w-full h-0.5 bg-gradient-to-l from-transparent to-gray-900 group-hover:right-full group-hover:duration-1000 delay-600 '></span>
            <span className='block absolute -bottom-full left-0 h-full w-0.5 bg-gradient-to-t from-transparent to-gray-900 group-hover:bottom-full group-hover:duration-1000 delay-900'></span>
            OR CHECK OUT MY WORK
          </a>
        </div>
      </div>
      <div className="lg:-translate-x-[5vw] h-[70vh] lg:h-auto flex justify-center lg:block">
        <Atropos 
          className='w-atropos h-full relative group'
          shadow={false} 
          highlight={false}
        >
          <img src="/hero/miksaa.png" className='w-full absolute bottom-miksaa'/>
          <img 
            src="/hero/html.svg" 
            className='w-1/4 absolute top-[60%] left-[30%] -z-[1] transition-all duration-200 ease-in-out group-hover:top-[30%] group-hover:left-[10%] lg:group-hover:top-1/4 lg:group-hover:left-[10%] group-hover:rotate-[-30deg]'
          />
          <img 
            src="/hero/css.svg" 
            className='w-1/4 absolute top-[60%] left-[30%] -z-[1] transition-all duration-200 ease-in-out group-hover:top-[30%] group-hover:left-[50%] lg:group-hover:top-1/4 lg:group-hover:left-1/2 group-hover:rotate-[30deg]'
          />
        </Atropos>
      </div>
      <img src="/wave.svg" className='absolute w-full bottom-0 z-10 animate-heroWave'/>
    </section>
  )
}