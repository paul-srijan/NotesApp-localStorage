    const noteInput = document.getElementById("noteInput");
    const addBtn = document.getElementById("addBtn");
    const clearBtn = document.getElementById("clearBtn");
    const notesContainer = document.getElementById("notesContainer");

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let editIndex = null; // Track which note is being edited

    console.log(notes);
    

    // // Function to display notes
    // function displayNotes() {
    //   notesContainer.innerHTML = "";
    //   notes.forEach((note, index) => {
    //     const noteDiv = document.createElement("div");
    //     noteDiv.classList.add("note");
    //     noteDiv.innerHTML = `
    //       <p>${note}</p>
    //       <button class="editBtn" onclick="editNote(${index})">Edit</button>
    //       <button class="deleteBtn" onclick="deleteNote(${index})">X</button>
    //     `;
    //     notesContainer.appendChild(noteDiv);
    //   });
    // }

    // // Add or Update note
    // addBtn.addEventListener("click", () => {
    //   const noteText = noteInput.value.trim();
    //   if (noteText) {
    //     if (editIndex === null) {
    //       // Add new note
    //       notes.push(noteText);
    //     } else {
    //       // Update existing note
    //       notes[editIndex] = noteText;
    //       editIndex = null;
    //       addBtn.textContent = "Add Note"; // Reset button
    //     }
    //     localStorage.setItem("notes", JSON.stringify(notes));
    //     noteInput.value = "";
    //     displayNotes();
    //   }
    // });

    // // Delete note
    // function deleteNote(index) {
    //   notes.splice(index, 1);
    //   localStorage.setItem("notes", JSON.stringify(notes));
    //   displayNotes();
    // }

    // // Edit note
    // function editNote(index) {
    //   noteInput.value = notes[index];
    //   editIndex = index;
    //   addBtn.textContent = "Update Note";
    // }

    // // Clear all notes
    // clearBtn.addEventListener("click", () => {
    //   if (confirm("Are you sure you want to delete all notes?")) {
    //     notes = [];
    //     localStorage.removeItem("notes");
    //     displayNotes();
    //   }
    // });

    // // Show notes on page load
    // displayNotes();
  