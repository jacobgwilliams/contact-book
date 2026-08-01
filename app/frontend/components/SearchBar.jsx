export default function SearchBar({ value, onChange }) {
  return (
    <label>
      Search contacts
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Name, email, or company"
      />
    </label>
  )
}
