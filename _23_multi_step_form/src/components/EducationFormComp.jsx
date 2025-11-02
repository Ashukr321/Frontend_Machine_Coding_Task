import React from 'react'

const EducationFormComp = ({ formData, handleChange,errors }) => {
  return (
    <div className='mt-4'>
      <label htmlFor="education" className='font-bold'>Qualification</label>
      <input type="text"
        id='education'
        name='education'
        value={formData.education}
        onChange={handleChange}
        className='w-full border p-2 my-3'
      />
      {errors.education && <p className='text-red-500 text-sm'>{errors.education}</p>}
    </div>
  )
}

export default EducationFormComp
