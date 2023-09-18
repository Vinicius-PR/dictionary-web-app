# Frontend Mentor - Dictionary web app

![Design preview for the Dictionary web app coding challenge](./preview.jpg)

## The challenge

This challenge is to build out this dictionary web app using the [Free Dictionary API](https://dictionaryapi.dev/) and get it looking as close to the design as possible.

The users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

The design didn't add a welcome components, so I created a simple one to display at start.

## Technologies Used

For this project I used React because it had a lot of data and state to manage. Like when to display the welcome component, not found component and etc.

Also, I used TypeScript to have more control over the data. I didn't have to use TypeScript. However, most of the applications of today use TypeScript and I want to get much better with it.

#### List of Technologies:

- React
- TypeScript
- Styled-Components
- HTML5

## What I learned?

I learned more about _refs_ in React. To play the audio using a button, I had to access somehow the audio tag to play the audio. With vanilla, JavaScript I could select the audio tag using _document.queryselector_ and then call the play method of the element. With React it is different. I had to use a hook called *useRef* and create one for the audio tag. After this, inside the click event of the button, I was able to access the audio tag and play the audio.

Also, I learned about a new way to check the theme that the user uses on his browser. Using the **window.matchMedia("(prefers-color-scheme)")**.
With **window.matchMedia("(prefers-color-scheme: dark)").matches** I can check if the user's browser theme is dark or not. Then I can initiate the theme according to this information.

For the rest, I can say that I improved. CSS styling, TypeScript and vanilla JavaScript need constant practice. To become better than I was yesterday.

## Thanks

I'd like to thank you for checking this personal project. You can check it using the link above, near the description.
Any suggestion to improve is welcome. Also, if you see something that I did wrong, I'll be happy to know it. 😁