import React from 'react'

const AboutFormComp = ({ formData, handleChange }) => {
  return (
    <div className='mt-4'>
      <label htmlFor="name" className='font-bold'>Name</label>
      <input
        type="text"
        name='name'
        id='name'
        value={formData.name}
        onChange={handleChange}
        className='w-full border p-2 my-2'
      />

      <label htmlFor="email" className='font-bold'>Email</label>
      <input
        type="email"
        required
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        className=' border  w-full p-2 my-2'
      />
    </div>
  )
}

export default AboutFormComp
