const list = document.getElementById("ul_id");
const toDo = ["Brush hair", "Feed dog", "Buy Crippsies"];

// Renders the items from the toDo array into the ul (list container)
function refreshList() {
  // Reset list to prevent adding duplicates
  list.innerHTML = "";

  for (i in toDo) {
    const li = document.createElement("li"); // Create a li element
    li.textContent = toDo[i]; // Update the textContent of the li
    li.id = i; // Give each li element a unique id
    list.appendChild(li); // Inject this li element into the html list

    let span = document.createElement("span"); // Create a span element & give it the bin svg
    span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4h1.203l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2zM4.459 2.353l15.757 2.778a.5.5 0 0 1 .406.58L20.5 6.4L3.758 3.448l.122-.69a.5.5 0 0 1 .579-.405m6.29-1.125l3.94.695a.5.5 0 0 1 .406.58l-.122.689l-4.924-.869l.122-.689a.5.5 0 0 1 .579-.406z" />
    </svg>`;
    li.appendChild(span); // Inject this span into the li element
  }
}
// Freshly render the list for the first time
refreshList();

// Validates user input and if okay, appends their input to the list
function addItem() {
  const textArea = document.getElementById("text_area_id");
  // Validate user input
  if (textArea.value == "")
    // If user did not enter anything, prompt user to enter a value
    return window.alert("Please enter an item before pressing Add");
  else if (textArea.value == toDo[0])
    // If user enters a duplicate, display error
    return window.alert("Error: You cannot have duplicate entries");

  toDo.unshift(textArea.value); // Inserts users input into toDo array
  textArea.value = ""; // Clears textArea so user does not have to manually clear it
  refreshList(); // Renders list which now includes users new input
}

// When user clicks delete SVG (bin icon), the item is removed from the list
list.addEventListener("click", (e) => {
  if (e.target.matches("svg") || e.target.closest("span")) {
    toDo.splice(e.target.closest("li").id, 1);
    refreshList();
  }
});
