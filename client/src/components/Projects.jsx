import React from "react"
import { motion } from "framer-motion"
import data from "../data/profile.json"

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {data.projects.map((p, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="p-6 rounded-2xl shadow-lg 
                       bg-gray-100 dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {p.description}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap justify-end">
                {p.stack.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm 
                               bg-gray-200 dark:bg-gray-700 
                               text-gray-800 dark:text-gray-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              {p.demo && (
                <a
                  className="px-4 py-2 rounded-lg font-medium 
                             bg-blue-600 text-white hover:bg-blue-700 
                             transition-colors"
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
              {p.source && (
                <a
                  className="px-4 py-2 rounded-lg font-medium 
                             bg-gray-300 dark:bg-gray-700 
                             text-gray-900 dark:text-gray-100 
                             hover:bg-gray-400 dark:hover:bg-gray-600 
                             transition-colors"
                  href={p.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
