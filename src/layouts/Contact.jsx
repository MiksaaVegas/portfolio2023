import { useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import emailjs from '@emailjs/browser';

export default function Contact(){
  const submitButton = useRef(null)
  const form = useRef(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData]  = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    message: []
  })

  const sumbitHandler = event => {
    event.preventDefault()

    if(isFormValid() && !isSubmitted) {
      setIsSubmitted(true)
      sendEmail()
    }
  }

  const changeHandler = ({name, value}) => {
    if(!isSubmitted)
      setFormData(oldData => ({
        ...oldData,
        [name]: value
      }))
  }

  const isFormValid = () => {
    let newErrors = {
      name: [],
      email: [],
      message: []
    }

    for (const key in formData) {
      if(formData[key] === '')
        newErrors[key].push(<p key={nanoid()} className='text-red-600 text-[0.75rem] font-geo font-thin'>This field is required!</p>)  
    }

    if(formData.name.length < 3 || formData.name.length > 24)
      newErrors.name.push(<p key={nanoid()} className='text-red-600 text-[0.75rem] font-geo font-thin'>No less than 3 and no more than 24 characters.</p>)
      
    if(formData.email.length < 8 || formData.email.length > 40)
      newErrors.email.push(<p key={nanoid()} className='text-red-600 text-[0.75rem] font-geo font-thin'>No less than 8 and no more than 40 characters.</p>)

    if(formData.message.length < 10)
      newErrors.message.push(<p key={nanoid()} className='text-red-600 text-[0.75rem] font-geo font-thin'>No less than 10 characters.</p>)

    if(!(/^[A-Za-z\s]*$/.test(formData.name)))
      newErrors.name.push(<p key={nanoid()} className='text-red-600 text-[0.75rem] font-geo font-thin'>Letters and spaces only!</p>)

    // eslint-disable-next-line no-useless-escape
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)))
      newErrors.email.push(<p key={nanoid()} className='text-red-600 text-[0.75rem] font-geo font-thin'>Invalid email adress!</p>)

    setErrors(newErrors)

    for (const error in newErrors)
      if(newErrors[error].length)
        return false
    return true
  }

  const sendEmail = () => {
    emailjs.sendForm('service_l2qe9tn', 'miksaaPortfolio', form.current, 'MXMk49Ueolj-krg8x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section className="text-center font-geo bg-darkBlue text-gray-100" id='contact'>
      <img src="/contact/steps.svg" className='w-full'/>
      <div className="flex justify-between flex-wrap lg:flex-nowrap">
        <div className="basis-full lg:basis-[40%] px-12 mt-8 text-center lg:text-left flex flex-col justify-end pb-4">
          <h1 className='font-dm font-bold text-contactTextLeft opacity-100 leading-contactTextLeft'>
            level <br className='hidden lg:inline' />
            up <br className='hidden lg:inline' />
            your <br className='hidden lg:inline' />
            website 
          </h1>
          <div className='flex justify-center lg:justify-start'>
            <a className='w-[10%] mt-contactLinks mr-contactLinks' href="https://github.com/MiksaaVegas" target="_blank" rel="noopener noreferrer">
              <img className='w-full opacity-75 transition-all duration-200 ease-in-out hover:opacity-100' src="/contact/github.svg" /> 
            </a>
            <a className='w-[10%] mt-contactLinks mr-contactLinks' href="https://twitter.com/MiksaaVegas" target="_blank" rel="noopener noreferrer">
              <img className='w-full opacity-75 transition-all duration-200 ease-in-out hover:opacity-100' src="/contact/twitter.svg" />
            </a>
            <a className='w-[10%] mt-contactLinks mr-contactLinks' href="/contact/cv.pdf" download>
              <img className='w-full opacity-75 transition-all duration-200 ease-in-out hover:opacity-100' src="/contact/cv.svg" />
            </a>
          </div>
        </div>
        <div className="basis-full lg:basis-[40%] px-12 mt-8">
          <h1 className='text-[2rem] mb-8'>Send Me a Message</h1>
          <form onSubmit={sumbitHandler} ref={form} className='flex flex-col justify-between w-full mx-auto'>
            {errors.name}
            <input 
              type="text" 
              name='name'
              placeholder='Your Name' 
              value={isSubmitted ? '' : formData.name}
              onChange={event => changeHandler(event.target)}
              className='text-[1rem] font-geo py-2 px-4 bg-violet-300 border-b-[0.3rem] border-b-violet-300 border-solid transition-all duration-200 ease-in-out resize-none mb-4 focus:border-b-blue-600 text-gray-900 placeholder:text-gray-500 leading-none'
            />
            {errors.email}
            <input 
              type="text" 
              name='email'
              placeholder='Your Email' 
              value={isSubmitted ? '' : formData.email}
              onChange={event => changeHandler(event.target)}
              className='text-[1rem] font-geo py-2 px-4 bg-violet-300 border-b-[0.3rem] border-b-violet-300 border-solid transition-all duration-200 ease-in-out resize-none mb-4 focus:border-b-blue-600 text-gray-900 placeholder:text-gray-500 leading-none'
            />
            {errors.message}
            <textarea 
              name="message" 
              rows="8" 
              minLength={10}
              placeholder='Message' 
              value={isSubmitted ? '' : formData.message}
              onChange={event => changeHandler(event.target)}
              className='text-[1rem] font-geo pt-2 px-4 bg-violet-300 border-b-[0.3rem] border-b-violet-300 border-solid transition-all duration-200 ease-in-out resize-none focus:border-b-blue-600 text-gray-900 placeholder:text-gray-500'
            />
            <input 
              type="submit" 
              className={`text-[1rem] font-geo py-2 px-4 bg-periwinkle transition-all duration-200 ease-in-out resize-none mt-8 border-none cursor-pointer focus:border-none  ${isSubmitted && 'bg-green-700'} text-gray-900`} 
              value={isSubmitted ? 'Sent ✔' : 'Dispatch!'} 
              ref={submitButton}
            />
          </form>
        </div>
      </div>
    </section>
  )
}