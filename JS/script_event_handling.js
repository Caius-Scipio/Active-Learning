/**
 * JavaScript Event Handling [ 10 exercises with solution ]
 * https://www.w3resource.com/javascript-exercises/event/index.php
 *
 */
// 1. Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked.
let button = document.createElement("BUTTON");
let buttonText = document.createTextNode("Click me");
button.appendChild(buttonText);
document.body.appendChild(button);

document.querySelector("button").addEventListener("click", () => { console.log("Super secret function"); });
//
// 2. Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.
//
// Shows and hide the options of the dropdown
function toggleShow() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//
// 3. Write a JavaScript function that changes the background color of an element when a mouse enters it.
//
// 4. Write a JavaScript program that implements a "form" validation that displays an error message if a required field is left empty when submitting the form.
//
// 5. Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.
//
// 6. Write a JavaScript program to implement drag-and-drop functionality to allow users to reorder items in a list.
//
// 7. Write a JavaScript program to implement a toggle switch that changes its state when clicked.
//
// 8. Write a JavaScript program to create a progress bar that updates its width based on task completion.
//
// 9. Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.
//
// 10. Write a JavaScript function that listens for a double click on an element and performs a specific action.