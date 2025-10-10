import React, { useEffect, useRef, useState } from "react";

const AutoFocus = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  // from state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const showHidePasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const [errors, setError] = useState({});

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  // onChangeHandler
  const onChangeHandler = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(prev => ({ ...prev, [name]: "" }));
  };

  // form submit handler
  const handleSubmit = e => {
    e.preventDefault();

    const newError = {};

    // add validation
    if (!formData.name.trim()) newError.name = "Name is Required";
    if (!formData.email.trim()) newError.email = "Email is Required";
    if (!formData.password.trim()) newError.password = "Password is Required";

    setError(newError);
    // focus on error fild
    if (Object.keys(newError).length > 0) {
      if (newError.name) nameRef.current.focus();
      else if (newError.email) emailRef.current.focus();
      else if (newError.password) passwordRef.current.focus();
      return;
    }

    alert("form submmitted successfully");
    setFormData(() => ({
      name: "",
      email: "",
      password: "",
    }));
    return;
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          gap: "10px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          placeholder="name"
          ref={nameRef}
          value={formData.name}
          name="name"
          onChange={onChangeHandler}
          style={{
            width: " 100%",
            padding: "6px 6px",
            fontSize: "18px",
            outline: "none",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        {/* show error */}
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

        {/* email */}
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          value={formData.email}
          name="email"
          onChange={onChangeHandler}
          style={{
            width: " 100%",
            padding: "6px 6px",
            fontSize: "18px",
            outline: "none",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        {/* show error */}
        {errors.email && <spa style={{ color: "red" }}>{errors.email}</spa>}

        {/*password  */}

        <div
          style={{ display: "flex", backgroundColor: "#ccc", width: "100%" }}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            ref={passwordRef}
            value={formData.password}
            name="password"
            onChange={onChangeHandler}
            style={{
              width: " 100%",
              padding: "6px 6px",
              fontSize: "18px",
              flex: 1,
              outline: "none",
              borderRadius: "4px",
              borderRight: "none",
              border: "1px solid #ccc",
            }}
          ></input>
          <button
            onClick={showHidePasswordHandler}
            style={{
              padding: "6px 6px",
              width: "50px",
              backgroundColor: "white",
              border: "1px solid #ccc",
            }}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </div>

        {/* show error */}
        {errors.password && (
          <spa style={{ color: "red" }}>{errors.password}</spa>
        )}

        <div>
          <button
            type="submit"
            style={{ width: "130px", padding: "10px 20px", cursor: "pointer" }}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AutoFocus;
