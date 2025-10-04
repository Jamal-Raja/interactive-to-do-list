const list = document.getElementById("ul_id");
const toDo = ["Brush hair", "Feed dog", "Buy Crippsies"];

function refreshList() {
  list.innerHTML = "";
  for (item in toDo) {
    const li = document.createElement("li");
    li.innerHTML = toDo[item];
    list.appendChild(li);
  }
}

function addItem() {
  const textArea = document.getElementById("text_area_id");
  // Validate user input
  if (textArea.value == "")
    // If user did not enter anything, prompt user to enter a value
    return window.alert("Please enter an item before pressing Add");
  else if (textArea.value == toDo[0])
    // If user enters a duplicate, display error
    return window.alert("Error: You cannot have duplicate entries");

  toDo.unshift(textArea.value);
  refreshList();
}

refreshList();
