import ContactCard from "./ContactCard"

export default function ContactList({ contacts }) {
  return (
    <section>
      <h2>Contacts</h2>

      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </section>
  )
}