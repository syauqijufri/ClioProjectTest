Feature: Create on Clio new matters

Scenario: As a user, i can create a new matter
    Given I am on the login page
    When I login with 'syauqi247@gmail.com' and 'admin1234'
    Then I makesure going to dashboard page
    When as user, i can click matters on sidebar
    When as user, i can click button new matters
    When as user, i can click dropdown arrow client
    When as user, i can choose syauqitestbaru client
    When as user, i can fill 'ini testing' on matter description
    When as user, i can choose everyone on radio button film users with access
    When as user, i can click button save
    Then as user, i can see matter what i create before