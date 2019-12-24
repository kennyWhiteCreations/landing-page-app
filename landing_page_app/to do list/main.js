// main dom elements
let input = document.getElementById('input');
let ul = document.querySelector('ul');
let addBtn = document.getElementById('add_btn');
let checkForm = document.getElementById('check-form');


	
	

// function for add button is clicked
addBtn.onclick = () => {
	let listItem = input.value;
    input.value = "";

	// created elements of list
	let list = document.createElement('li');
	let checkBox = document.createElement('input');
	checkBox.setAttribute('type', 'checkbox');
	let listText = document.createElement('span');
	let dBtn = document.createElement('button');

	list.appendChild(checkBox);
	list.appendChild(listText);
	list.appendChild(dBtn);
	dBtn.textContent = "delete";
	ul.appendChild(list);
	listText.textContent = listItem;
	console.log(listItem);
	dBtn.onclick = () => {
		ul.removeChild(list);
	}
	input.focus();
}

/*checkBox.addEventListener('onclick', () => {
listText.style.textDecoration = 'line-through';
})
*/
 /*checkForm.onsubmit = (e) => {
	// function that validates input box 
	// error div
	let errorMsg = document.getElementById('error-msg'); 
	input.blur();
	if (input.value == "" || input.value == null) {
		errorMsg.textContent = "please enter in this field";
		input.focus(); 	  

		e.preventDefault();

		return false;
		
	} else { 
		addToList();
		return true;
		   }
		   
} */


//checkForm(e);