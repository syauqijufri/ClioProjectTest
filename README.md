# ClioCucumberWebdriverio
Gherkin Skeme with javascript node.js

#Website : https://www.clio.com/

• Instructions:

○ Register for a free trial of the "Clio" app to perform these tasks.

○ If you find any bugs during testing, write a detailed bug report.

Done use my account

• Scenarios to Automate:

2a. Create a New Company:

○ Develop a test scenario using Gherkin syntax to automate the process of creating a new company in Clio.

2b. Create a New Matter:

○ Write a Gherkin scenario that automates the steps to create a new matter in Clio.

2c. Create a New Task:

○ Use Gherkin syntax to automate the creation of a new task in Clio.

2d. Record Time Entry to a Matter:

○ Automate a scenario to record time for a matter in Clio using Gherkin syntax.

- All 2a-2d on “wbio" folder or in this project

• Additional Notes:

○ Ensure that each scenario is detailed and includes clear steps (Given-When-Then). On Feature folder

○ Highlight any bugs found with steps to reproduce, expected vs. actual results, and any other relevant details.

-Website not get a bug.

#How to Run the test

Make sure this app and feature already installed :

-VScode

-Node.js (with webdriver io : `npm init wdio@latest .`)

-Cucumber plugins on Visual Code

Step to test the project
1. Download all folder
2. Add project to Visual Code
3. Open Terminal
4. Run this command `npx wdio run ./wdio.conf.js --spec ` for all test case but you can choose the case by the file (for example `npx wdio run ./wdio.conf.js --spec ./features/create-new-matter.feature`)
5. The webdriver running and show the result

*This script debbuging created by Syauqi*
