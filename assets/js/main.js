const list = document.getElementById("ul_id");
const toDo = ["Brush hair", "Feed dog", "Buy Crippsies", "bath my horse"];

/**
 * Render the current `toDo` array into the UL.
 * Clears existing items and rebuilds the list.
 */
function refreshList() {
  list.innerHTML = "";

  for (i in toDo) {
    const li = document.createElement("li");
    li.textContent = toDo[i];
    li.id = i;
    list.appendChild(li);

    // Action icons wrapper
    const span = document.createElement("span");
    span.innerHTML = `
      <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </g>
      </svg>
      <svg class="bin-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4h1.203l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2zM4.459 2.353l15.757 2.778a.5.5 0 0 1 .406.58L20.5 6.4L3.758 3.448l.122-.69a.5.5 0 0 1 .579-.405m6.29-1.125l3.94.695a.5.5 0 0 1 .406.58l-.122.689l-4.924-.869l.122-.689a.5.5 0 0 1 .579-.406z"/>
      </svg>`;
    li.appendChild(span);
  }
}

// Initial render
refreshList();

/**
 * Add a new item from the text area if valid, then re-render.
 */
function addItem() {
  const textArea = document.getElementById("text_area_id");

  if (!textArea.value)
    return window.alert("Please enter an item before pressing Add");
  // =========== TODO: IMPROVE VALIDATION BY CHECKING ALL ITEMS IN LIST ===========
  else if (textArea.value == toDo[0])
    return window.alert("Error: You cannot have duplicate entries");

  toDo.unshift(textArea.value);
  textArea.value = "";
  refreshList();
}

/**
 * Handle Deletes and Edits:
 * - clicking the bin icon removes the associated item.
 * - clicking the edit icon allows user to edit the associated item.
 */
list.addEventListener("click", (e) => {
  const bin = e.target.closest(".bin-icon")
  const edit = e.target.closest(".edit-icon")

  if (bin) {
    toDo.splice(e.target.closest("li").id, 1);
    refreshList();
  } else if (edit) {
    // RUN THIS CODE WHEN USER PRESSES EDIT
    // e.target.closest("li")
  }
});

/**
 * TO-DO:
 * 1. Implement edit feature
 * 2. Improvee user input validation
 * 3. Maybe store list in localStorage to ensure data is not lost
 */
