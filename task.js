function addToDOList(){
    let task = document.getElementById('taskInput').value;
    let dateEntered = document.querySelector('.dateInputField').value;
    console.log(dateEntered)
    if (task === "") {
            alert("Please enter a Task");
            return;
        }

let todoListContainer = document.querySelector('.ToDoElement');

 let newTaskElement = document.createElement('li');

 let checkbox = document.createElement('input');
 checkbox.type = 'checkbox';

 let label = document.createElement('label');
 label.textContent = task;
 label.classList.add('taskStyle');

 let dateLable = document.createElement('label');
 dateLable.textContent = dateEntered;
 dateLable.classList.add('dateStyle');
 
 let removeButton = document.createElement('button');
 removeButton.textContent = 'Remove';
 removeButton.classList.add('remove');

 let taskDescription = document.getElementById('taskDescription').value;

 let description = document.createElement('div');
 description.textContent = taskDescription;
 description.classList.add('descriptionText')

 const space = document.createElement('div');
 space.classList.add('space');

 newTaskElement.appendChild(checkbox);
 newTaskElement.appendChild(label);
 newTaskElement.appendChild(dateLable);
 newTaskElement.appendChild(description);
 newTaskElement.appendChild(removeButton);
 newTaskElement.appendChild(space);
 

 todoListContainer.appendChild(newTaskElement);

  document.getElementById('taskInput').value = '';
  document.getElementById('taskDescription').value='';

  checkbox.addEventListener('change', function () {
if (checkbox.checked) {
    label.classList.add('completed');
} else {
    label.classList.remove('completed');
}
});
removeButton.addEventListener('click', function(){
  newTaskElement.remove();
})
}
    