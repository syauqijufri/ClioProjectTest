Feature: Create on Clio new new entry


Scenario: As a user, i can create a new Time entry
    Given I am on the login page
    When I login with 'syauqi247@gmail.com' and 'admin1234'
    Then I makesure going to dashboard page
    When as user, i can click button timekeeper to start
    When as user, i can click button timekeeper to end
    When as user, i can fill '00003-syauqitest' on matter
    When as user, i can click button save entry
    Then as user, i can see notification successfully save