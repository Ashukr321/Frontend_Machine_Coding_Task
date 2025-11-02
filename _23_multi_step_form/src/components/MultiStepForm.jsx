import React, { useState } from 'react'
import AboutFormComp from './AboutFormComp.jsx';
import EducationFormComp from './EducationFormComp.jsx';
import ExperienceFormComp from './ExperienceFormComp.jsx';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    experience: ""
  })

  // error state
  const [error, setError] = useState({});


  // 
  const validateStep = () => {
    // create empty 
    let newError = {};
    if (step == 0) {
      if (!formData.name.trim()) newError.name = "Name is required!"
      if (!formData.email.trim()) newError.email = "Email is required!"
    }
    if (step == 1) {
      if (!formData.education.trim()) newError.education = "Education is required!"
    }
    if (step == 2) {
      if (!formData.experience.trim()) newError.experience = "Experience is required"
    }

    setError(newError);
    // do the empty 
    return Object.keys(newError).length == 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // backHandler 
  const backHandler = () => {
    setStep((prev) => prev - 1);
  }
  // nextHandler 
  const nextHandler = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  }

  // handleSubmit 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {

      console.log(formData);
      // resetForm data 
      setFormData({ name: "", email: "", education: "", experience: "" });
      // setStep to 0 
      setStep(0);
    }


  }



  const renderStep = () => {
    switch (step) {
      case 0:
        return <AboutFormComp formData={formData} handleChange={handleChange} errors={error} />
      case 1:
        return <EducationFormComp formData={formData} handleChange={handleChange} errors={error} />
      case 2:
        return <ExperienceFormComp formData={formData} handleChange={handleChange} errors={error} />
      default:
        return null;
    }
  }

  return (
    <>

      {/* header  */}
      <div div className='w-[550px]  bg-amber-50 h-[500px] shadow-2xl drop-shadow-fuchsia-50 mx-auto p-4 rounded relative ' >
        <h2 className='font-bold text-center'>Multi Step form</h2>

        <div className='flex justify-between mt-4  '>
          <button onClick={() => { setStep(0) }} className={`py-2 flex-1 cursor-pointer px-10 ${step == 0 ? "bg-blue-300 " : "bg-gray-300"}`} >About</button>
          <button onClick={() => { setStep(1) }} className={`py-2 flex-1 cursor-pointer px-10 ${step == 1 ? "bg-blue-300" : "bg-gray-300"}`}>Education</button>
          <button onClick={() => { setStep(2) }} className={`py-2  flex-1 cursor-pointer px-10 ${step == 2 ? "bg-blue-300" : "bg-gray-300"}`}>Experience</button>
        </div>

        <form onSubmit={handleSubmit}>
          {renderStep()}


          {/* show step button dynamically  */}

          <div className='flex justify-start absolute right-2 bottom-2 gap-2 mt-4'>

            {
              step > 0 && (
                <button type='button' onClick={backHandler} className=' cursor-pointer hover:bg-blue-600 transition-normal hover:text-white bg-blue-300 px-6 py-2 rounded'>back</button>
              )
            }
            {
              step < 2 && (
                <button type='button' onClick={nextHandler} className=' cursor-pointer hover:bg-blue-600 transition-normal hover:text-white bg-blue-300 px-6 py-2 rounded'>next</button>

              )
            }

            {
              step == 2 && (
                <button type='submit' onClick={handleSubmit} className='cursor-pointer hover:bg-blue-600 transition-normal hover:text-white bg-blue-300 px-6 py-2 rounded'>submit</button>

              )
            }

          </div>
        </form>
      </div >
    </>
  )
}

export default MultiStepForm
