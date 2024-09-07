Feature: Login Positif

  Scenario Outline: As a user, I can login to the page clio

    Given I am on the login page
    When I login with 'syauqi247@gmail.com' and 'admin1234'
    Then I makesure going to dashboard page
   

