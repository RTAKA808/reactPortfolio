import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

export default function ContactPage() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    //Tracks the current values of the form fields.
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    //Tracks the error messages for each field.
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm("service_falkfy8", "template_1ioxxcm", form.current, {
          publicKey: "12JrSpC9PGtubvgLh",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const validateForm = () => {
    //Checks all fields before form submission. If there are errors, it prevents form submission and sets the error messages.
    const newErrors = {};//Stores errors

    if (!formValues.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formValues.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.user_email)) {
      newErrors.user_email = "Email is not valid";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);//Updates error state with the new errors object

    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e) => {
    // validates the field when it loses focus and updates the error state.
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateField = (name, value) => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (name === "user_email" && !/\S+@\S+\.\S+/.test(value)) {
      return "Email is not valid";
    }

    return "";
  };

  const handleChange = (e) => {
    // updates the form values as the user types.
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="formBox">
      <div className="divContainer">
        <h2>Please Contact Me</h2>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            required
            value={formValues.user_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.user_name && (
            <span className="error">{errors.user_name}</span>
          )}

          <label>Email</label>
          <input
            type="email"
            name="user_email"
            required
            value={formValues.user_email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.user_email && (
            <span className="error">{errors.user_email}</span>
          )}

          <label>Message</label>
          <textarea
            name="message"
            required
            value={formValues.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <input className="subButton" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
