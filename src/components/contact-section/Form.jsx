import React from 'react'


import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'enter your name' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+91 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'message',
  },
]

const Form = () => (
  <form className="form">
    <h2 className="form-h2">If you have any queries,feel free to send us message</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
            
          />
        )}
      </label>
    ))}
    <button className='form-submit'>submit</button>

    
  </form>
)

export default Form