/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from 'components/elements/SectionHeader';

export default function Contact({ contact }) {
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
    fetch('https://formsubmit.co/ajax/352723cdbb03dcb368a35da1a0cb0e3e', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        message: formData.message,
        email: formData.email,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log('Error', error));

    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitted(true);
  }
  const inputClassName = 'h-12 w-full rounded-md bg-green-100 my-3 indent-5';
  return (
    <div ref={contact} className="grid w-full mb-12 items-center justify-items-center ">
      <SectionHeader header="Contact" />
      <div className="grid w-10/12 bg-white mt-12 pb-10 items-center justify-items-center shadow-xl rounded-xl border">
        <div className="flex flex-col items-center justify-center pt-10 h-full w-full md:w-96 lg:w-5/6 max-w-[900px]">
          {/* <h2 className="text-[16px] py-4 font-bold sm:text-[20px] md:text-[30px]">
          Grab a Coffee & Let&apos;s Chat</h2> */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-72 h-[600px] items-center justify-center rounded-xl border border-green-600 sm:w-80 md:w-96 lg:w-4/6"
          >
            {/* <input type="hidden" name="_captcha" value="false" /> */}
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
              className="w-full rounded-md bg-green-100 my-3 mb-5 h-40 indent-5"
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

Contact.propTypes = {
  contact: PropTypes.shape({}).isRequired,
};
