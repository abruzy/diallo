/* eslint-disable max-len */
import React, { useState } from 'react';
import axios from 'axios';

const apiURL = 'https://webcrape.herokuapp.com/sendMessage/abruzy';

function Contact() {
  const [requesting, setRequesting] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setRequesting(true);

    const firstName = e.target.firstname.value;
    const lastName = e.target.lastname.value;
    const email = e.target.email.value;
    const message = e.target.value;

    try {
      const { data } = await axios.post(apiURL, {
        firstName, lastName, email, message,
      });
      console.log(data);
      // console.log(JSON.stringify(data, null, 2));
    } catch (error) {
      throw new Error(error);
    } finally {
      setRequesting(false);
    }
  };

  return (
    <section id="contact" className="contact py-20 px-8">
      <div className="grid lg:grid-cols-7 gap-y-6 lg:max-w-6xl mx-auto">
        <p className="contact-message lg:col-span-3 text-3xl font-semibold text-center">
          I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.
        </p>
        <form onSubmit={e => handleSubmit(e)} className="lg:col-span-4">
          <div className="grid lg:grid-cols-2 col-gap-4 row-gap-4">
            <input type="text" name="firstname" className="border-2 p-2 rounded focus:border-normal-green focus:border w-full" placeholder="First Name" required />
            <input type="text" name="lastname" className="border-2 p-2 rounded focus:border-normal-green focus:border w-full" placeholder="Last Name" required />
            <input type="email" name="email" className="border-2 p-2 rounded lg:col-span-2 focus:border-normal-green focus:border w-full" placeholder="Email address" required />
            <textarea type="text" name="email" className="border-2 h-32 p-2 rounded lg:col-span-2 focus:border-normal-green focus:border resize-none" placeholder="Type something" required />
          </div>
          <div className="text-center md:flex">
            <button type="submit" className="p-3 my-4 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl">
              Get in touch
            </button>
            {requesting && (
            <small className="bg-indigo-600 p-3 my-4 text-white ml-2 rounded">Processing</small>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
