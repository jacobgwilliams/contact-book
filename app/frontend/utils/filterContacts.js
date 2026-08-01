function contactMatchesQuery(contact, query) {
  const name = `${contact.firstName} ${contact.lastName}`.toLowerCase()

  return (
    name.includes(query) ||
    contact.email.toLowerCase().includes(query) ||
    contact.company.toLowerCase().includes(query)
  )
}

export default function filterContacts(contacts, searchQuery) {
  const query = searchQuery.trim().toLowerCase()

  if (!query) {
    return contacts
  }

  return contacts.filter((contact) => contactMatchesQuery(contact, query))
}
