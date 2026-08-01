export default function ContactCard({ contact }) {
  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>

      <p>{contact.jobTitle}</p>
      <p>{contact.company}</p>
      <p>{contact.email}</p>
      <p>{contact.phoneNumber}</p>
    </article>
  )
}