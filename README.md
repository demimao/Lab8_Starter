# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed

> Choose 1: Within a Github action that runs whenever code is pushed. We want to run automated tests whenever code is pushed to the repository. Inside the automated tests, we can do linting, code qualification, code styling, HTML validation and other other useful tests.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

> No. An end to end test is meant to emulate user actions to ensure all kinds of tasks and actions are working as expected, instead of checking a single function's output.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

> No. Unit testing is for debugging a small scale of the code, like a function. It's not suitable for testing interactions on a feature level like this 'message' feature.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

> Yes. In this case, we are testing a small functionality: limit the max message length. Unit testing is great for testing this kind of small scale without affecting unrelated unit tests.


