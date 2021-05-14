'use strict';
/*
const tasks = ['nakoupit', 'vyprat', 'vyzehlit'];

console.log('funguju!', tasks);

const taskElm = document.querySelector('.todo');

const Task = (props) => {
  return `${tasks[0]}, ${tasks[1]}, ${tasks[2]}`;
};

Task(tasks);

for (let i = 0; i < tasks.length; i++) {
  taskElm.innerHTML = Task(tasks);
}
*/
/*
const tasks = [{ name: 'nakoupit' }, { name: 'vyprat' }, { name: 'vyžehlit' }];

const Task = (props) => {
  return `<div class="task">${props.name}</div>`;
};

let tasksObjs = [];
for (let i = 0; i < tasks.length; i++) {
  tasksObjs.push(Task(tasks[i]));
}
const taskObj = {
  tasks: tasksObjs,
};

const TasksList = (props) => {
  let html = '';
  for (let i = 0; i < props.tasks.length; i++) {
    html += props.tasks[i];
  }
  return html;
};

const tasksListObj = TasksList(taskObj);

const taskListElm = document.querySelector('.todo__tasks');
taskListElm.innerHTML = tasksListObj;

/*


<div class="todo__header">
        <div class="date">
          <div class="date__daynum">12</div>
          <div class="date__monthyear">
            <div class="date__month">dub</div>
            <div class="date__year">2020</div>
          </div>
          <div class="date__day">čtvrtek</div>
        </div>

         divu s třdiou todo__taska.
Zavolejte funkci TasksList, předejte jí všechny úkoly v očekávaném formátu tasks a zapojte výsledek funkce do vaší stránky na konec elementu s třidou todo.
*/
