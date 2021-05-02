var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var deleteBtnList = document.querySelectorAll("ul .deleteBtn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.classList.add("bold","red");

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("deleteBtn");
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListItem(event){
	event.target.parentElement.remove();
}

// function toggleListItem(elem){
// 	 elem.classList.toggle("done");
// }

// function hasClass(elem, className) {
//     return elem.classList.contains(className);
// }
const toggleListItem = (elem) =>  elem.classList.toggle("done");
const hasClass = (elem, className) =>  elem.classList.contains(className);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// deleteBtnList.forEach(btn => 
// 	btn.addEventListener("click", deleteListItem) 
// );

ul.addEventListener('click', function (e) {
	var target = e.target;
    if (hasClass(target, 'deleteBtn')) {
        deleteListItem(e);
    }
    else if(hasClass(target, 'bold')) {
    	toggleListItem(target);
    }
}, false);