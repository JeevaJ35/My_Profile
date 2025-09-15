import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div
        className="mt-6 p-6 rounded-2xl shadow-lg 
                   bg-gray-100 dark:bg-gray-900 
                   text-gray-900 dark:text-gray-100"
      >
        <form className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg px-4 py-2 
                         bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100 
                         border border-gray-300 dark:border-gray-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg px-4 py-2 
                         bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100 
                         border border-gray-300 dark:border-gray-700"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg px-4 py-2 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100 
                       border border-gray-300 dark:border-gray-700"
          />
          <textarea
            rows="4"
            placeholder="Your message"
            className="w-full rounded-lg px-4 py-2 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100 
                       border border-gray-300 dark:border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg font-medium 
                       bg-blue-600 text-white 
                       hover:bg-blue-700 
                       transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
