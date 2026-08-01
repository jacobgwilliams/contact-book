import ContactCard from "./ContactCard"

export default function ContactList({ contacts }) {
  return (
    <section>
      <h2>Contacts</h2>

      {contacts.length === 0 ? (
        <p>No contacts match your search.</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
          />
        ))
      )}
    </section>
  )
}