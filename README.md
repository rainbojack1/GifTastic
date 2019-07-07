# GifTastic

This project pulls up related gifs for each person listed on the buttons.
This project is useful in learning how to use API calls.
To make your own version of this project you first need to obtain an API key from [Giphy API](https://developers.giphy.com/).

### Rundown of project
A set of buttons is created for each element in the hardcoded athlete array.
When a user clicks on a button an ajax call to Giphy is made and the page displays 10 still gifs relating to the athlete on the button.
when a user clicks on one of the still gifs it then becomes animated. The animated gif goes back still if clicked again.
The user also has the option of adding a new button by using the search field to the right.

### Instructions

1. Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
   * We chose animals for our theme, but you can make a list to your own liking.

2. Your app should take the topics in this array and create buttons in your HTML.
   * Try using a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

7. Deploy your assignment to Github Pages.

8. **Rejoice**! You just made something really cool.