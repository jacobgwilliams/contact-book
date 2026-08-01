import { describe, expect, it } from "vitest"
import filterContacts from "./filterContacts"

const contacts = [
  {
    id: 1,
    firstName: "Leslie",
    lastName: "Knope",
    email: "leslie@example.com",
    company: "Pawnee Government",
  },
  {
    id: 2,
    firstName: "Ron",
    lastName: "Swanson",
    email: "ron@example.com",
    company: "Pawnee Government",
  },
  {
    id: 3,
    firstName: "Tom",
    lastName: "Haverford",
    email: "tom@example.com",
    company: "Entertainment 720",
  },
]

describe("filterContacts", () => {
  it("returns all contacts when the search query is empty", () => {
    expect(filterContacts(contacts, "")).toEqual(contacts)
    expect(filterContacts(contacts, "   ")).toEqual(contacts)
  })

  it("filters by name case-insensitively", () => {
    expect(filterContacts(contacts, "leslie")).toEqual([contacts[0]])
    expect(filterContacts(contacts, "SWANSON")).toEqual([contacts[1]])
  })

  it("filters by email", () => {
    expect(filterContacts(contacts, "tom@example.com")).toEqual([contacts[2]])
  })

  it("filters by company", () => {
    expect(filterContacts(contacts, "pawnee")).toEqual([contacts[0], contacts[1]])
    expect(filterContacts(contacts, "720")).toEqual([contacts[2]])
  })

  it("returns an empty array when nothing matches", () => {
    expect(filterContacts(contacts, "Chicago")).toEqual([])
  })
})
