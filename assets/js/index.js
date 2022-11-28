'use strict';
let message = document.getElementById('message');
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let tp = document.getElementById('tp');

function textIn() {
	if (message.value == '') {
		alert('text cannot be empty');
		return false;
	}
	createM();
	message.value = '';
}

function createM() {
	let newDiv = document.createElement('div');
	newDiv.className = 'comment';
	output.appendChild(newDiv);
	console.log(message.value);
	let sentences = message.value;
	let li = document.createElement('div');
	li.innerHTML = sentences;
	console.log(li);
	newDiv.appendChild(li);
	let deleMsg = document.createElement('a');
	deleMsg.href = '#'
	deleMsg.className = 'delete'
	deleMsg.innerHTML = 'Delete Message'
	newDiv.appendChild(deleMsg);
	deleMsg.onclick = function () {
		let conf = confirm('Confirm delete.');
		if (conf) {
			output.removeChild(newDiv);
		}

	}
}
btn.onclick = function () {
	createM();
}

