import React from "react"
import { createRoot } from "react-dom/client"
import App from "../components/App"

const container = document.getElementById("react-root")

if (!container) {
  throw new Error("Could not find the React root element")
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)