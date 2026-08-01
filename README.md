# Contact Book

A learning project for experimenting with a **React** frontend and a **Rails** backend.

**Repository:** [https://github.com/jacobgwilliams/contact-book](https://github.com/jacobgwilliams/contact-book)

## About

This app is a sandbox for exploring how a modern React UI integrates with a Rails API and server-rendered pages. The goal is hands-on practice—not production polish—around component structure, props, API communication, and the tooling that connects the two stacks.

## Stack

- **Backend:** Ruby on Rails 8.1, PostgreSQL
- **Frontend:** React 19, Vite
- **Ruby:** 4.0.6

## Getting started

```bash
bundle install
npm install
bin/rails db:setup
bin/start.sh
```

Then open [http://localhost:3000](http://localhost:3000).

## Frontend structure

React code lives under `app/frontend/`. Each piece has a focused job:

- **`App`** — page layout and composition
- **`ContactList`** — list behavior: search state, filtering, empty state, rendering cards
- **`ContactCard`** — presentation only; displays the fields passed in via props
- **`SearchBar`** — reusable controlled search input
- **`data/contacts.js`** — temporary seed data until the Rails API is wired up

## Tests

```bash
bin/rails test
```
