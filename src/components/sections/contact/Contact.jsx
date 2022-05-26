import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmited, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const {
      name, value,
    } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm('service_k80978p', 'template_yid9bpi', e.target, 'aSuLRPtT-4rW9bnHU');
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);
    // });
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitted(true);
  }
  const inputClassName = ' h-12 w-80 rounded-md bg-green-100 my-3 indent-5';
  return (
    <div className="grid w-screen h-screen items-center justify-items-center">
      <div className="grid w-10/12 h-[750px] bg-white items-center justify-items-center shadow-xl rounded-xl border">
        <div className="flex flex-col items-center justify-center h-full w-96">
          <h2 className="text-[30px] font-bold h-20">Grab a Coffee & Let&apos;s Chat</h2>
          <form onSubmit={handleSubmit} className="flex flex-col w-96 h-[500px] items-center justify-center shadow-xl rounded-xl border border-green-600">
            <input
              type="text"
              placeholder="Full name"
              onChange={handleChange}
              name="name"
              value={formData.name}
              className={inputClassName}
              required
            />
            <input
              type="text"
              placeholder="Email Address"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className={inputClassName}
              required
            />
            <textarea
              type="text"
              placeholder="Your Message"
              onChange={handleChange}
              name="message"
              value={formData.message}
              className="w-80 rounded-md bg-green-100 my-3 mb-5 h-40 indent-5"
              required
            />
            <button
              type="submit"
              className="rounded-full p-4 text-black ease-in duration-200 text-center border border-green-500 font-bold
              hover:text-black hover:bg-green-500 hover:text-white"
            >
              Send Message

            </button>
            {isSubmited && <div className="text-red-400 pt-4">* Message has been sent!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
