import { useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import emailjs from '@emailjs/browser';
import './Contact.css'

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
        newErrors[key].push(<p key={nanoid()} className='error'>This field is required!</p>)  
    }

    if(formData.name.length < 3 || formData.name.length > 24)
      newErrors.name.push(<p key={nanoid()} className='error'>No less than 3 and no more than 24 characters.</p>)
      
    if(formData.email.length < 8 || formData.email.length > 40)
      newErrors.email.push(<p key={nanoid()} className='error'>No less than 8 and no more than 40 characters.</p>)

    if(formData.message.length < 10)
      newErrors.message.push(<p key={nanoid()} className='error'>No less than 10 characters.</p>)

    if(!(/^[A-Za-z\s]*$/.test(formData.name)))
      newErrors.name.push(<p key={nanoid()} className='error'>Letters and spaces only!</p>)

    // eslint-disable-next-line no-useless-escape
    if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)))
      newErrors.email.push(<p key={nanoid()} className='error'>Invalid email adress!</p>)

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
    <section className="contact" id='contact'>
      <img src="/contact/steps.svg" className='contact-steps'/>
      <div className="contact-content">
        <div className="contact-column">
          <h1>level <br />up <br />your <br />website </h1>
          <div className="contact-links">
            <a href="https://github.com/MiksaaVegas" target="_blank" rel="noopener noreferrer">
              <img src="/contact/github.svg" /> 
            </a>
            <a href="https://twitter.com/MiksaaVegas" target="_blank" rel="noopener noreferrer">
              <img src="/contact/twitter.svg" />
            </a>
            <a href="/contact/cv.pdf" download>
              <img src="/contact/cv.svg" />
            </a>
          </div>
        </div>
        <div className="contact-column">
          <h1>Send Me a Message</h1>
          <form onSubmit={sumbitHandler} ref={form}>
            {errors.name}
            <input 
              type="text" 
              name='name'
              placeholder='Your Name' 
              value={isSubmitted ? '' : formData.name}
              onChange={event => changeHandler(event.target)}
            />
            {errors.email}
            <input 
              type="text" 
              name='email'
              placeholder='Your Email' 
              value={isSubmitted ? '' : formData.email}
              onChange={event => changeHandler(event.target)}
            />
            {errors.message}
            <textarea 
              name="message" 
              rows="8" 
              minLength={10}
              placeholder='Message' 
              value={isSubmitted ? '' : formData.message}
              onChange={event => changeHandler(event.target)}
            />
            <input 
              type="submit" 
              className={`form-submit ${isSubmitted && 'submitted'}`} 
              value={isSubmitted ? 'Sent ✔' : 'Dispatch!'} 
              ref={submitButton}
            />
          </form>
        </div>
      </div>
    </section>
  )
}