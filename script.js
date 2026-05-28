
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
        
      let taskText = taskInput.value;

      
      if (taskText === "") {
        alert("Please enter a task");
        return;
      }

      // Create Elements
      let li = document.createElement("li");
      let span = document.createElement("span");
      let deleteBtn = document.createElement("button");

      span.innerText = taskText;
      deleteBtn.innerText = "Delete";

      deleteBtn.classList.add("delete-btn");

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = "";

      
      span.addEventListener("click", function () {
        span.classList.toggle("completed");
      });

      
      deleteBtn.addEventListener("click", function () {
        li.remove();
      });

    });



    
