const name = document.getElementById('name');
const topic = document.getElementById('topic');
const grade = document.getElementById('grade');
const save = document.getElementById('save');
const ul = document.querySelector('ul');

let gradesArray = localStorage.getItem('grades') ? JSON.parse(localStorage.getItem('grades')) : [];

localStorage.setItem('grades', JSON.stringify(gradesArray));
const data = JSON.parse(localStorage.getItem('grades'));

function saveGrades() {
  console.log("Whats up?");
  var input = name.value + ", " + topic.value + ", " + grade.value 
  
  gradesArray.push(input);
  localStorage.setItem('grades', JSON.stringify(gradesArray));
  liMaker(input);
  clearForm();
}

function liMaker(x) {
  var li = document.createElement('li');
  li.textContent = x;
  ul.appendChild(li);  
}

function clearForm() {
  name.value = '';
  topic.value = '';
  grade.value = '';
}

function deleteGrades() {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

data.forEach(element => liMaker(element));  