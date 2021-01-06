/* eslint-disable max-len */
import React, { useState, useEffect } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <>
      {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
      <section id="contact" className="contact py-20 px-8">
        <div className="grid lg:grid-cols-7 gap-y-6 lg:max-w-6xl mx-auto">
          <p className="contact-message lg:col-span-3 text-3xl font-semibold text-center">
            I&apos;m always interested in hearing about new projects, so if
            you&apos;d like to chat please get in touch.
          </p>
          <form
            name="contact"
            method="POST"
            action="/#contact/?success=true"
            data-netlify="true"
            className="lg:col-span-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid lg:grid-cols-2 col-gap-4 row-gap-4">
              <input
                type="text"
                name="firstname"
                className="border-2 p-2 rounded focus:border-normal-green focus:border w-full"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastname"
                className="border-2 p-2 rounded focus:border-normal-green focus:border w-full"
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                name="email"
                className="border-2 p-2 rounded lg:col-span-2 focus:border-normal-green focus:border w-full"
                placeholder="Email address"
                required
              />
              <textarea
                type="text"
                name="message"
                className="border-2 h-32 p-2 rounded lg:col-span-2 focus:border-normal-green focus:border resize-none"
                placeholder="Type something"
                required
              />
            </div>
            <div className="text-center md:flex">
              <button
                type="submit"
                className="p-3 my-4 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl"
              >
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
