import ContactList from "./ContactList"

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

export default function App() {
  return (
    <main>
      <h1>Contact Book</h1>
      <ContactList contacts={contacts} />
    </main>
  )
}