Project will run a test using cypress


tests ran with
npx cypress run --env TAGS="@TagToIdentifyTest" 
to see browser: add --headed

extra considerations added to test: Needed to handle the country popup that appeared, and close the cookie policy as it blocks some of the other parts of the page.

I am new to cypress so took longer to setup but if i had more time id:

Move css locators to seperate files.
If wanted to test on mobile too, use a package like inversify to inject locators/ js methods based on device.