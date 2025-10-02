import { useState } from 'react';
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  }

  const [emails, setRegEmail] = useState([]);
  //  deleteEmails Handler 
  const deleteEmailHandler = (id) => {
    const updatedEmail = emails.filter((_, index) => index !== id);
    setRegEmail(updatedEmail);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      setError("password must be at least 8 character and 1 upper case character");
      return;
    }

    if (!passRegex.test(password)) {
      setError("password must be at least 8 character and 1 upper case character");
      return;
    }
    if (emails.includes(email)) {
      setEmail("Email Already Exits!");
      return;
    }

    // add into emails 
    setRegEmail([...emails, email]);
    alert("✅ form submitted successfully!");
    setError("")
    setEmail("")
    setPassword("")

  }


  return (
    <>
      <h1>Form Validations</h1>

      {/* form */}
      <form action="" onSubmit={handleSubmit}>
        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' required value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} />
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input type={showPassword ? 'text' : "password"} id='password' required value={password} name='password' onChange={(e) => { setPassword(e.target.value) }} />
          {
            showPassword ? (<button onClick={showPasswordHandler} >hide</button>) : (<button onClick={showPasswordHandler}>show</button>)
          }
        </div>

        {/* password */}

        {/*  display error message */}
        {error ? (<p style={{ color: "red" }}>{error}</p>) : ""}
        {/* form submit */}
        <div>
          <button type='submit'>submit</button>
        </div>
      </form>


      {/* display register email */}
      <div>
        <h1>Registers Emails </h1>

        <div >
          {
            emails.map((em, index) => {
              return (
                <>
                  <div key={index} style={{ display: "flex", gap: "20px" }}>
                    <p >{em}</p>
                    <button onClick={() => { deleteEmailHandler(index) }}>Delete</button>
                  </div>

                </>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default App
