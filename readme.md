Project runs a test with cypress.
It only runs up to clicking learn more, the rest of the code is there but some of the css locators need fixing.


test can be run with:
npx cypress run --env TAGS="@TagToIdentifyTest" --headed

I'm fairly new to cypress so spent a chunk of time learning how to set it up/ the specific commands that can be used in cypress. 
I used the documenation to help setup.

The test needed some extra steps which can be seen in the code: Closing cookie policy as it can block elements, and a pick country popup.

If i had more time i would  add:
Move css locators to seperate files.
If wanted to test on mobile too, use a package like inversify to inject locators/ js methods based on device.
Add a debuger through the IDE so i can add breakpoints to check the tests quicker. I was using VSCode.