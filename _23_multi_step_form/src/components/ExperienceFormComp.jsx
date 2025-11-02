import React from 'react'

const ExperienceFormComp = ({ formData, handleChange, errors }) => {
  return (
    <div className='mt-4'>
      <label htmlFor="experience" className='font-bold'>Experience</label>
      <input type="number" min={2} max={10} name='experience' value={formData.experience} onChange={handleChange} className='w-full border p-2 my-3' />
      {errors.experience && <p className='text-red-500 text-sm'>{errors.experience}</p>}
    </div>
  )
}

export default ExperienceFormComp
