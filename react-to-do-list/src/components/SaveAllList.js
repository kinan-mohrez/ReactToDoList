import React from 'react';

export default function SaveAllList() {
	const input = Array.from(
		document.querySelector('ul').querySelectorAll('.todoItem')
	).map((element) => element.innerText);

	const list1 = JSON.stringify(input);

	localStorage.setItem('input', list1);
}
