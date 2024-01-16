import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {
const formRef = useRef(null);
const [form, setForm] = useState({ name: '', email: '', message: ''}); //using to pass to our inputs 
const [isLoading, setIsLoading] = useState(false); //page is not loading on arrival
const handleChange = (e) => {
setForm({...form, [e.target.name]: e.target.value})

}; //spreads out properities, and selects a specific field to update and updates it to e.target.value
const handleFocus = () => {};
const handleBlur = () => {};
const handleSubmit = (e) => {
e.preventDefault(); //so the webpage doesn't refresh once the information is sent 
setIsLoading(true); //so that the dynamic text changes 
emailjs.sendForm(
  import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  { //this is how we are using the jsemail service to send emails 
      from_name: form.name,
      to_name: "Liat",
      from_email: form.email,
      to_email: 'liat.guvenc@gmail.com',
      message: form.message


  }
  // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
)

};
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14">
         <label className="text-black-500 font-semibold">
            Name
            <input
            type="text"
            name="name"
            className="input"
            placeholder="name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            >

            </input>
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
            type="text"
            name="email"
            className="input"
            placeholder="email"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            >

            </input>
          </label>
          <label className="text-black-500 font-semibold">
            <textarea
            name="message"
            rows={4}
            className="textarea"
            placeholder="Let me know how I can help you!"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />

          </label>
          <button
          type="submit"
          className="btn"
          disabled={isLoading}
          onFocus={handleFocus}
          onBlue={handleBlur}
          >
            {isLoading ? "Sending..." : 'Send Message'} 
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact