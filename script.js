
    // DOM Selection
    let taskInput = document.getElementById("taskInput");
    let addBtn = document.getElementById("addBtn");
    let taskList = document.getElementById("taskList");


   // let mode = "light";

/*
btn.addEventListener("click", function() {
  if (mode === "light"){
    mode = "dark";
    body.style.backgroundColor="black";
    body.style.color="white";
  }
  else {
    mode = "light";
    body.style.backgroundColor="white";
    body.style.color="black";
  }
  console.log(mode);
});
*/


    // Event Listener
    addBtn.addEventListener("click", function () {

      // Input Value
      let taskText = taskInput.value;

      // Condition
      if (taskText === "") {
        alert("Please enter a task");
        return;
      }

      // Create Elements
      let li = document.createElement("li");
      let span = document.createElement("span");
      let deleteBtn = document.createElement("button");

      // Add Text
      span.innerText = taskText;
      deleteBtn.innerText = "Delete";

      // Add Class
      deleteBtn.classList.add("delete-btn");

      // Append Child
      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      // Clear Input
      taskInput.value = "";

      // Toggle Complete
      span.addEventListener("click", function () {
        span.classList.toggle("completed");
      });

      // Delete Task
      deleteBtn.addEventListener("click", function () {
        li.remove();
      });

    });



    
