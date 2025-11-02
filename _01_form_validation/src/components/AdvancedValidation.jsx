import React, { useState } from 'react'

const AdvancedValidation = () => {

  // state 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  // use for the validation
  const regex = {
    username: /^[a-zA-Z0-9_]{3,15}$/,
    email: /^\S+@\S+\.\S+$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  }

  const [errors, setErrors] = useState({});

  const validateData = (name, value) => {
    let err = ""
    switch (name) {
      case "username":
        if (!regex.username.test(value)) {
          err = "Username must be 3-15 chars (letters, numbers, underscore)";
        }
        break;

      case "email":
        if (!regex.email.test(value)) {
          err = "Invalid email format";
        }
        break;

      case "password":
        if (!regex.password.test(value)) {
          err = "Password must include upper, lower, number, special char (min 6 chars)";
        }
        break;

      case "confirmPassword":
        if (value !== formData.password) {
          err = "Passwords do not match";
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: err }));
  }

  const fields = [
    { name: "username", type: "text", placeholder: "Username" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "abc@123" },
    { name: "confirmPassword", type: "password", placeholder: "abc@123" },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateData(name, value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // remove confirm password 
    const { confirmPassword, ...sendData } = formData;
    console.log(confirmPassword);
    console.log(sendData);
  }

  return (
    <div className='p-10'>
      <h1 className='text-center font-bold text-2xl'>Advanced form validation</h1>

      <div className='w-full h-full flex mt-10 justify-center '>
        <form className='w-[500px]  border p-6 rounded ' onSubmit={handleSubmit} >

          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} >{field.name}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field]}
                onChange={handleChange}
                required
                className='border w-full px-2 py-1 mt-2 ' />
              {
                errors[field.name] && <p className='text-red-500 text-sm'>{errors[field.name]}</p>
              }
            </div>

          ))}

          <div className="mt-6">
            <button type='submit' className='w-full bg-blue-500 p-2 cursor-pointer transition-normal hover:bg-blue-700 text-white'>Signup</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdvancedValidation
