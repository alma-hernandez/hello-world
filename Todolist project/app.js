const taskInput = document.querySelector('.taskbox');
const addButton = document.querySelector('.addtask');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    
    if (taskText.trim() !== '') {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = taskText;
        

        const taskContainer = document.querySelector('.task-container');
        taskContainer.appendChild(taskElement);
        
        taskInput.value = '';
    }
});
