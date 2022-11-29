'use strict';
window.onload = function () {
	let commBox = document.querySelector("#commBox");
	let ul = document.querySelector("ul");
	let combtn = document.querySelector(".combtn");
	combtn.addEventListener('click', function () {
		if (!commBox.value) {
			console.log("Comments are empty");
		} else {
			let li = document.createElement("li");
			li.innerHTML = 
			"<img src='./assets/img/82501d3b-e89d-43a2-8b07-09751494467d.png'>" + "<span>Darren</span> <span class='time'></span>" 
			+ "<p>" + commBox.value + "</p>" + "<a href='javascript:;'>Delete</a>";
			ul.insertBefore(li, ul.children[0]);
			getNowTime();
			commBox.value = '';
			let del = document.querySelectorAll("a");
			for (let i = 0; i < del.length; i++) {
				del[i].onclick = function () {
					ul.removeChild(this.parentNode);
				}
			}
		}
	})

	function getNowTime() {
		let date = new Date();
		let year = date.getFullYear(); 
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let commTime = document.querySelector(".time")
		let time = year + '-' + addZero(month) + '-' + addZero(day);
		commTime.innerHTML = time;
	}

	function addZero(s) {
		return s < 10 ? ('0' + s) : s;
	}
}