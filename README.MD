Hello!

This is my **first test automation project** using Playwright. Since I’m still learning and gaining experience, you might notice some areas where the code quality or test design could be improved.

I appreciate your understanding and feedback

Thank you for taking the time to review my work.

To run test in non-UI This command can be used: 
**npx playwright test**
To run test in UI mode this command can be used:
**npx playwright test --headed**

## About the project

- Uses Playwright for end-to-end testing
- Covers login, adding items to cart, and checkout flow
- Structured with Page Object Model (POM)
- Tests are located in the `tests` folder
- Page objects are in the `pages` folder


## Test Strategy and Planning

Main objective of the assignment was to check the main functionalities of system such as:

1) Login
2) Adding products to card
3) proceeding through checkout. 

My written test tests ensure that key features work as expected from a user’s perspective.
After each step in the test file, validations are used to verify that the application behaves as expected before moving on to the next step.

Currently, only positive scenarios with a single valid user are automated.  
Future enhancements can include:
  - Testing with multiple user types and varying credentials.
  - option to choose different items for purchase to increase variety of tests.
  - Adding negative test cases such as invalid login attempts, empty form submissions, and error message validations.

As I mentioned, this is my very first project using Playwright. Due to limited experience and time constraints, some parts of the tests and code quality may not be as polished as I would like.