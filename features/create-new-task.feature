Feature: Create on Clio new Tasks


Scenario: As a user, i can create a new Task
    Given I am on the login page
    When I login with 'syauqi247@gmail.com' and 'admin1234'
    Then I makesure going to dashboard page
    When as user, i can click Tasks on sidebar
    When as user, i can click button new task
    When as user, i can fill 'ini testing' on name
    When as user, i can click button save on task popup
    Then as user, i can see task what i create before