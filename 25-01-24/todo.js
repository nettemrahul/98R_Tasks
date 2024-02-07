
const box = document.getElementById("box")
const taskContainer = document.getElementById("task-container")

function addTask() {
    if(box.value ==='') {
        alert("Writing Text is Mandatory")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = box.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
} 

taskContainer.addEventListener("click", function(e)
{
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
   } 

}, false)