Feature: ISTQB Tests

 @TagToIdentifyTest
  Scenario Outline: Get Cost of Exam
    Given the browser is on the page 'https://isqi.org/en/'
    When the customer searches for the course "<Course>"
    And the customer clicks learn more about 'ISTQB® Certified Tester - Foundation Level 4.0 (CTFL)'
    And the course is added to the cart with the details "<CourseLanguage>" "<CourseType>" with a printed certificate
    Then the total cost comes to $266.25

Examples:
    | Course | CourseLanguage  | CourseType|
    | ISTQB® Certified Tester - Foundation Level 4.0 (CTFL)  | english| test center|