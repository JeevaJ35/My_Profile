import React, { useState } from "react"

// A lightweight local "AI" widget showcasing simple rule-based replies without any external API.
const rules = [
  { q: /(ai|ml|machine learning)/i, a: "I have 2.5 years working with AI automations using Yellow AI and Kore AI, plus hands-on with Azure and Node/Express for chat flows." },
  { q: /(frontend|react|angular)/i, a: "Strong in React, Tailwind, performance optimization and building responsive UI. Also experienced in Angular projects." },
  { q: /(backend|java|spring|spring boot)/i, a: "Built REST APIs with Spring Boot and Node/Express; integrated services with frontends, unit/integration testing included." },
  { q: /(contact|email)/i, a: "Use the Contact form below; it sends via a Node/Express API configured with Nodemailer." },
]

const AIWidget = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: "ai", content: "Hi! Ask me about my skills or projects." }])
  const [input, setInput] = useState("")

  const send = () => {
    const text = input.trim()
    if (!text) return
    const userMsg = { role: "user", content: text }
    const rule = rules.find(r => r.q.test(text))
    const reply = rule ? rule.a : "Thanks! I’ll get back to you soon — meanwhile, check my Projects and Experience sections."
    setMessages(m => [...m, userMsg, { role: "ai", content: reply }])
    setInput("")
  }

  return (
    <div className="fixed bottom-4 right-4">
      {open ? (
        <div
          className="w-80 p-4 rounded-lg shadow-lg 
                     bg-white text-gray-800 
                     dark:bg-gray-800 dark:text-gray-100"
        >
          <div className="flex items-center justify-between">
            <strong>Ask Jeeva</strong>
            <button
              className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 
                         dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          {/* Chat messages */}
          <div className="mt-3 h-56 overflow-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-3 py-2 rounded-lg ${
                  m.role === "ai"
                    ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 self-start"
                    : "bg-green-600 text-white dark:bg-green-500 dark:text-white self-end ml-auto"
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>

          {/* Input + send */}
          <div className="mt-3 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 rounded border border-gray-300 dark:border-gray-600 
                         p-2 outline-none bg-white dark:bg-gray-700 
                         text-gray-800 dark:text-gray-100"
              placeholder="Type a question..."
            />
            <button
              className="px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700 
                         dark:bg-green-500 dark:hover:bg-green-600"
              onClick={send}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="px-4 py-2 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 
                     dark:bg-blue-1000 dark:hover:bg-blue-1200"
          onClick={() => setOpen(true)}
        >
          Chat with me
        </button>
      )}
    </div>
  )
}

export default AIWidget
