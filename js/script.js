const name = document.getElementById('name');
const topic = document.getElementById('topic');
const grade = document.getElementById('grade');
const save = document.getElementById('save');
const table = document.querySelector('table');

let gradesArray = localStorage.getItem('grades') ? JSON.parse(localStorage.getItem('grades')) : [];

localStorage.setItem('grades', JSON.stringify(gradesArray));
const data = JSON.parse(localStorage.getItem('grades'));

function saveGrades() {
  console.log("Whats up?");
  var input = [name.value, topic.value, grade.value]; 
  gradesArray.push(input);
  localStorage.setItem('grades', JSON.stringify(gradesArray));
  tableMaker(name.value, topic.value, grade.value);
  clearForm();
}

function tableMaker(name, topic, grade) {
    var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.textContent = name;
	table.appendChild(td);
	var td = document.createElement('td');
	td.textContent = topic;
	table.appendChild(td);
	var td = document.createElement('td');
	td.textContent = grade;
	table.appendChild(td);
	table.appendChild(tr);
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

data.forEach(element => tableMaker(element[0], element[1], element[2]));  