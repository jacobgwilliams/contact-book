require "test_helper"

class ContactTest < ActiveSupport::TestCase
  def valid_contact_attributes
    {
      first_name: "Leslie",
      last_name: "Knope",
      email: "test-contact@example.com",
      phone_number: "555-0101",
      company: "Pawnee Government",
      job_title: "Deputy Director"
    }
  end

  test "is valid with valid attributes" do
    contact = Contact.new(valid_contact_attributes)

    assert contact.valid?
  end

  test "requires first name" do
    contact = Contact.new(valid_contact_attributes.merge(first_name: nil))

    assert_not contact.valid?
    assert_includes contact.errors[:first_name], "can't be blank"
  end

  test "requires last name" do
    contact = Contact.new(valid_contact_attributes.merge(last_name: ""))

    assert_not contact.valid?
    assert_includes contact.errors[:last_name], "can't be blank"
  end

  test "requires email" do
    contact = Contact.new(valid_contact_attributes.merge(email: nil))

    assert_not contact.valid?
    assert_includes contact.errors[:email], "can't be blank"
  end

  test "requires a valid email format" do
    contact = Contact.new(valid_contact_attributes.merge(email: "not-an-email"))

    assert_not contact.valid?
    assert_includes contact.errors[:email], "is invalid"
  end

  test "requires unique email" do
    Contact.create!(valid_contact_attributes.merge(email: "ann@example.com"))
    duplicate = Contact.new(valid_contact_attributes.merge(email: "ANN@EXAMPLE.COM"))

    assert_not duplicate.valid?
    assert_includes duplicate.errors[:email], "has already been taken"
  end

  test "allows blank phone number" do
    contact = Contact.new(valid_contact_attributes.merge(phone_number: nil))

    assert contact.valid?
  end

  test "rejects invalid phone number format" do
    contact = Contact.new(valid_contact_attributes.merge(phone_number: "call me"))

    assert_not contact.valid?
    assert_includes contact.errors[:phone_number], "is invalid"
  end
end
