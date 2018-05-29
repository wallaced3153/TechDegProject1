# TechDegProject1

Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question in the community.

 7 steps
Create an array of JavaScript objects to hold the data for your quotes.
Name the array quotes.
The quotes array should be accessible in the global scope, meaning it shouldn't be inside of a function.
Each quote object in the quotes array should have the following properties:
A quote property which contains a string: the text of the quote that will be displayed on the page.
A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
An optional year property which contains a number identifying the year of the quote. For example, 1997. If there is no known year, then do not include this property on the object.
NOTE: To get the most out of this project, it would be best to include at least one quote that has a year and citation property. This will give you the chance to get some good practice working with conditionals when you create the printQuote() function to print the quotes to the screen.

Create a function named getRandomQuote which:
selects a random quote object from the quotes array.
returns the randomly selected quote object.
Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable.
printQuote constructs a string containing the different properties of the quote object using the following HTML template:
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
printQuote only adds a <span class="citation"> if the quote object has a citation property.
printQuote only adds a <span class="year"> if the quote object has a year property.
printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that:
document.getElementById('quote-box').innerHTML
Add good code comments to your JavaScript code.
If you're having trouble with this project, make sure you take a look at this great study guide: Random Quote Generator Study Guide
Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!
NOTE: It's important to make sure you've used the checklists and double checked everything in your project before you submit, because any updates you make to your repo after you submit will not be seen by your reviewer. When you submit a project for review, a snapshot is taken of your repo at that moment, and that is what your reviewer will see and review.

NOTE: It’s good practice to check your project for cross browser compatibility. We recommend making sure your project looks and functions as expected in at least 3 different browsers.

Extra Credit
To get an "exceeds" rating, you can expand on the project in the following ways:

 3 steps
Add more properties to the quote object.
For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
Use the new properties you've created to add to what gets printed to the screen.
Random background color.
When the quote changes, randomly change the background color of the page.
Auto-refresh the quote.
After a set amount of time, print a new quote to the page. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the “Additional Resources” section).
NOTE:

To get an "Exceeds Expectations" grade for this project, you'll need to complete each of the items in this section. See the rubric in the "How You'll Be Graded" tab above for details on how you'll be graded.
If you’re shooting for the "Exceeds Expectations" grade, it is recommended that you mention so in your submission notes.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
