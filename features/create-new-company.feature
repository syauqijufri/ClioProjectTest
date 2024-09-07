Feature: Create on Clio new company
        

  @id:1
 Scenario: As a user, I can create new company
    Given I am on the login page
    When I login with 'syauqi247@gmail.com' and 'admin1234'
    Then I makesure going to dashboard page
    When as user, i can click contact on sidebar
    When as user, i can click button new company
    When as user, i can fill 'syauqitestbaru' on name field
    When as user, i can fill 'syauqi247@gmail.com' on email field
    When as user, i can fill '08887827372' on phone field
    When as user, i can fill 'https://google.com' on website field
    When as user, i can fill 'jalan jamblang' on street field
    When as user, i can fill 'jakarta' on city field
    When as user, i can fill '12345' on zip or postal code field
    When as user, i can fill 'DKI Jakarta' on state field
    When as user, i can fill 'indonesia' on country
    When as user, i can click button save contact
    Then as user, i can see contact information what data i create before