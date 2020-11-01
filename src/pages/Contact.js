/* eslint-disable max-len */
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact py-20 px-8">
      <div className="grid lg:grid-cols-7 gap-y-6 lg:max-w-6xl mx-auto">
        <p className="contact-message lg:col-span-3 text-3xl font-semibold text-center">
          I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.
        </p>
        <form className="lg:col-span-4">
          <div className="grid lg:grid-cols-2 col-gap-4 row-gap-4">
            <input type="text" className="border-2 p-2 rounded focus:border-normal-green focus:border w-full" required placeholder="First Name" />
            <input type="text" className="border-2 p-2 rounded focus:border-normal-green focus:border w-full" required placeholder="Last Name" />
            <input type="email" className="border-2 p-2 rounded lg:col-span-2 focus:border-normal-green focus:border w-full" required placeholder="Email address" />
            <textarea type="text" className="border-2 h-32 p-2 rounded lg:col-span-2 focus:border-normal-green focus:border resize-none" required placeholder="Type something" />
          </div>
          <div className="text-center md:flex">
            <button type="button" className="p-3 my-4 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl">
              Get in touch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
