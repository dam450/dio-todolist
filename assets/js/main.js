const task = document.getElementById('task')
const taskList = document.getElementById('task-list')
const taskButton = document.getElementById('addtask')

taskButton.addEventListener('click', addTask)

function addTask() {
  let item = task.value
  if (item != '') {
    task.value = ''
    let node = document.createElement('li')
    node.innerHTML = `<input type="checkbox" />${item}`
    taskList.appendChild(node)
  }
}
