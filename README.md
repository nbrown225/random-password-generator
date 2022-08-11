# RANDOM PASSWORD GENERATOR
- TABLE OF CONTENTS
    - [DEPLOYED LINK](#deployed-link)
    - [Acceptance Criteria](#acceptance-criteria)
      - [USER STORY](#user-story)
      - [GIVEN I need a new, secure password](#given-i-need-a-new-secure-password)
    - [RESOURCES](#resources)

### 
![alt text](assets\images\RPWGscreenshot.png)

### DEPLOYED LINK
- [Click HERE to view page](https://nbrown225.github.io/random-password-generator/)
  
### Acceptance Criteria
#### USER STORY
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

#### GIVEN I need a new, secure password
- WHEN I click the button to generate a password
    -   THEN I am presented with a series of prompts for password criteria

- WHEN prompted for password criteria
    -   THEN I select which criteria to include in the password

- WHEN prompted for the length of the password
    -   THEN I choose a length of at least 8 characters and no more than 128 characters

- WHEN asked for character types to include in the password
    -   THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

- WHEN I answer each prompt
    -   THEN my input should be validated and at least one character type should be selected

- WHEN all prompts are answered
    -   THEN a password is generated that matches the selected criteria

- WHEN the password is generated
    -   THEN the password is either displayed in an alert or written to the page

### RESOURCES
- InnerHTML - Wite to page
  - https://www.w3schools.com/js/js_output.asp
- Convert array to string
  - https://www.geeksforgeeks.org/generate-random-string-of-given-size-in-java/
  - https://www.w3schools.com/jsref/jsref_tostring_array.asp
- Getting random elements from arrays
  - https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
  - https://www.codegrepper.com/code-examples/javascript/random+index+in+array+javascript
- For loops
  - https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex
- Shortening if / confirm statements
  - https://stackoverflow.com/questions/12073352/use-confirm-as-a-condition-to-if
