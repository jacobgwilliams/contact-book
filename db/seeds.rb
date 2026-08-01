contacts = [
  {
    first_name: "Leslie",
    last_name: "Knope",
    email: "leslie@example.com",
    phone_number: "555-0101",
    company: "Pawnee Government",
    job_title: "Deputy Director"
  },
  {
    first_name: "Ron",
    last_name: "Swanson",
    email: "ron@example.com",
    phone_number: "555-0102",
    company: "Pawnee Government",
    job_title: "Director"
  },
  {
    first_name: "Tom",
    last_name: "Haverford",
    email: "tom@example.com",
    phone_number: "555-0103",
    company: "Entertainment 720",
    job_title: "Entrepreneur"
  }
]

contacts.each do |attributes|
  Contact.find_or_create_by!(email: attributes[:email]) do |contact|
    contact.assign_attributes(attributes)
  end
end
