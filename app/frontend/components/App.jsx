import contacts from "../data/contacts"
import ContactList from "./ContactList"

export default function App() {
  return (
    <main>
      <h1>Contact Book</h1>
      <ContactList contacts={contacts} />
    </main>
  )
}
