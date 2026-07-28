import React from "react"
import { createRoot } from "react-dom/client"

function App() {
  return (
    <main>
      <h1>Contact Book</h1>
      <p>Rails and React are working together.</p>
    </main>
  )
}

const container = document.getElementById("react-root")

if (container) {
  createRoot(container).render(<App />)
}