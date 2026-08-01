require "application_system_test_case"

class HomeTest < ApplicationSystemTestCase
  test "visiting the home page loads the react mount point" do
    visit root_url

    assert_selector "#react-root"
  end
end
