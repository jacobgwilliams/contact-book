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