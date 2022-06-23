const SaveToDo = JSON.parse(localStorage.getItem('input'));
if (SaveToDo != null) {
	// console.log(SaveToDo);
	SaveToDo.forEach(newElement);
}

function SaveAllList() {
	const input = Array.from(
		document.querySelector('ul').querySelectorAll('.todoItem')
	).map((element) => element.innerText);
	const list1 = JSON.stringify(input);

	localStorage.setItem('input', list1);
}
// remove Item
function closeElement(event) {
	const taskElement = event.target.parentElement;

	taskElement.remove();
	console.log(taskElement);
	SaveAllList();
}

function EditElement(event) {
	const newElement = event.currentTarget.parentElement;
	const TheTextInSpan = newElement.querySelector('.todoItem');
	const editInputtext = newElement.querySelector('.InputEdit');

	editInputtext.classList.remove('hidden');
	TheTextInSpan.classList.add('hidden');
	editInputtext.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			editInputtext.classList.add('hidden');
			TheTextInSpan.classList.remove('hidden');
			console.log(editInputtext.value);
			console.log(TheTextInSpan.innerText);
			TheTextInSpan.innerText = editInputtext.value;
			SaveAllList();
		}
	});
}

function checked(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}

// Create a "close" button and Edit button append it to each list item
const myNodelist = document.getElementsByTagName('LI');

for (let i = 0; i < myNodelist.length; i++) {
	const spanDelet = document.createElement('SPAN');
	const spanEdit = document.createElement('SPAN');

	const txt = document.createTextNode('\u00D7');
	const EditIcon = document.createTextNode('\u270E');
	spanDelet.className = 'close';

	spanDelet.appendChild(txt);
	spanEdit.appendChild(EditIcon);
	myNodelist[i].appendChild(spanDelet);
}

// Click on a close button to Delete the current list item
const close = document.getElementsByClassName('close');

for (let i = 0; i < close.length; i++) {
	close[i].onclick = closeElement;
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', checked);

// Create a new list item when clicking on the "Add" button
function newElement(inputValue) {
	const li = document.createElement('li');

	const textInTheInput = document.createElement('span');
	textInTheInput.innerText = inputValue;
	textInTheInput.className = 'todoItem';
	li.appendChild(textInTheInput);
	if (inputValue === '') {
		alert('You must write something!');
	} else {
		document.getElementById('myUL').appendChild(li);
		SaveAllList();
	}
	document.getElementById('myInput').value = '';

	const editInput = document.createElement('input');
	editInput.type = 'text';
	editInput.value = inputValue;

	li.appendChild(editInput);
	editInput.classList.add('hidden');
	editInput.classList.add('InputEdit');

	const span = document.createElement('SPAN');
	const span2 = document.createElement('SPAN');
	const txt = document.createTextNode('\u00D7');
	const EditIcon = document.createTextNode('\u270E');
	span.className = 'close';
	span2.className = 'Edit';
	span.appendChild(txt);
	span2.appendChild(EditIcon);
	li.appendChild(span);
	li.appendChild(span2);

	span.onclick = closeElement;
	span2.onclick = EditElement;
}
