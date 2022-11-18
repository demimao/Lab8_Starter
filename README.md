# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed

> Choose 1: Within a Github action that runs whenever code is pushed. We want to run automated tests whenever code is pushed to the repository. Inside the automated tests, we can do linting, code qualification, code styling, HTML validation and other other useful tests.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

> No. An end to end test is meant to emulate user actions to ensure all kinds of tasks and actions are working as expected, instead of checking a single function's output.





