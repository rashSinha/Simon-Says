# Simon-Says

Note: Please use a web server to run the program. 

The old 80s game with a new twist.

This game was created by using React and SASS. Instead of having the user remember which box was lit up, the user has to remember which color was shown and then recreate the pattern. 

It's more of a pattern game, than using spatial memory. Tons of fun, having to see who can remember the pattern.

I initially started on the SASS, with a flexbox with buttons. Soon after, I realized that it was much better to use a flexbox with containers and the containers having its own data. 

Now that that was done, I moved on to the React part. The constructor contains the initial state of the big container, which is a white background that changes to a different color when the player clicks on start. Restart button brings the container back to its initial state. 

I decided to use the big box as a visual representation for the player to see which color box they have selected, as a form of memorization, to see if they recall seeing the pattern when start button was clicked. 

The colors array is shuffled each time start is clicked, or each time the player successfully finishes the game and each color is assigned an index which comes to play later in the code.

My code picks a random index (corresponding to a color) and runs it through a loop, decreasing the counter as and when the color is displayed on the box. This way, the big box returns to its initial state of white background when each array element has been displayed. The last function is used to check if the array elements are in the same order (i.e, the array of colors that was shuffled and the player’s array of colors), if it’s true, the array will move on directly to the next randomized order of colors. 
