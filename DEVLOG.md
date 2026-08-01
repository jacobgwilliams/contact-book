# Contact Book Development Log

## Session 1 — Initial Setup
**Date:** July 28, 2026

### Goals
- Set up a modern Rails + React environment
- Learn how React integrates with Rails

### Accomplished
- Installed Ruby 4.0.6 using Mise
- Created Rails 8.1 application
- Configured PostgreSQL
- Installed Vite
- Installed React
- Fixed Vite configuration issue (`sourceCodeDir`)
- Successfully rendered first React component inside Rails

### Learned
- Rails serves the HTML.
- React renders into a DOM node.
- Vite bundles frontend assets.
- The Rails helper only generates script tags—the Vite config determines where entrypoints live.

### Problems Encountered
- Mixed Intel/Apple Silicon environment
- Old ASDF/RVM/NVM paths interfering
- Incorrect `sourceCodeDir` in `vite.json`

### Next Session
- Learn React components
- Create ContactCard component
- Pass props
- Render a list of contacts

## Session 2 — Components and Props
**Date:** July 29, 2026

### Goals
- Break the React application into reusable components
- Learn how props pass data between components
- Render a collection using `map`

### Accomplished
- Created an `App` component
- Created a reusable `ContactCard`
- Created a `ContactList`
- Rendered hard-coded contact data
- Moved mounting logic into the Vite entrypoint

### Learned
- Components are reusable functions that return JSX.
- Props pass read-only data from parent components to child components.
- JavaScript arrays can be rendered with `map`.
- React list elements need stable keys.
- Data generally flows downward through the component tree.

### Next Session
- Introduce React state with `useState`
- Add a search input
- Filter the visible contacts