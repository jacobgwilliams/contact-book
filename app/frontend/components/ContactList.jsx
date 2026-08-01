import { useState } from "react"
import filterContacts from "../utils/filterContacts"
import ContactCard from "./ContactCard"
import SearchBar from "./SearchBar"

export default function ContactList({ contacts }) {
  const [searchQuery, setSearchQuery] = useState("")
  const visibleContacts = filterContacts(contacts, searchQuery)

  return (
    <section>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <h2>Contacts</h2>

      {visibleContacts.length === 0 ? (
        <p>No contacts match your search.</p>
      ) : (
        visibleContacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
          />
        ))
      )}
    </section>
  )
}
