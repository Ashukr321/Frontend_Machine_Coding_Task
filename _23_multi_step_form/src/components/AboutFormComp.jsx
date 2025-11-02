import React from 'react'

const AboutFormComp = ({ formData, handleChange, errors }) => {
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
      {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}

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
      {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}

    </div>
  )
}

export default AboutFormComp
