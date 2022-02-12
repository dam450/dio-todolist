const task = document.getElementById('task')
const taskList = document.getElementById('task-list')
const taskButton = document.getElementById('addtask')

taskButton.addEventListener('click', addTask)

function addTask() {
  let itemHtml = `<input name="task" type="checkbox" onchange="taskDone(this)" /><span>${task.value}</span>`

  if (task.value != '') {
    let node = document.createElement('li')
    node.innerHTML = itemHtml
    taskList.appendChild(node)
    task.value = ''
  }
}

function taskDone(e) {
  if (e.checked === true) {
    e.parentElement.classList.add('done')
  } else {
    e.parentElement.classList.remove('done')
  }
}
