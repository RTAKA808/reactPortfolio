import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

export default function ContactPage() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          form.current,  // Pass the form ref here
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert('Message is on the way!ദ്ദി´▽`)');
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert('Σ(°□°´Ⅲ)!!? something went wrong. try again.');
          }
        );
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
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
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      return "Email is not valid";
    }
    return "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="formBox">
      <div className="divContainer">
        <h2>Get In Touch</h2>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formValues.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formValues.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <label>Message</label>
          <textarea
            className="messageBox"
            rows={4}
            name="message"
            required
            value={formValues.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span className="error">{errors.message}</span>}
          <button className="subButton" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
