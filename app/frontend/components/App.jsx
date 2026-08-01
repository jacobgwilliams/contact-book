import { useState } from "react"
import ContactList from "./ContactList"
import SearchBar from "./SearchBar"

const contacts = [
  {
    id: 1,
    firstName: "Leslie",
    lastName: "Knope",
    email: "leslie@example.com",
    phoneNumber: "555-0101",
    company: "Pawnee Government",
    jobTitle: "Deputy Director",
  },
  {
    id: 2,
    firstName: "Ron",
    lastName: "Swanson",
    email: "ron@example.com",
    phoneNumber: "555-0102",
    company: "Pawnee Government",
    jobTitle: "Director",
  },
  {
    id: 3,
    firstName: "Tom",
    lastName: "Haverford",
    email: "tom@example.com",
    phoneNumber: "555-0103",
    company: "Entertainment 720",
    jobTitle: "Entrepreneur",
  },
]

function contactMatchesQuery(contact, query) {
  const name = `${contact.firstName} ${contact.lastName}`.toLowerCase()

  return (
    name.includes(query) ||
    contact.email.toLowerCase().includes(query) ||
    contact.company.toLowerCase().includes(query)
  )
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredContacts = normalizedQuery
    ? contacts.filter((contact) => contactMatchesQuery(contact, normalizedQuery))
    : contacts

  return (
    <main>
      <h1>Contact Book</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <ContactList contacts={filteredContacts} />
    </main>
  )
}