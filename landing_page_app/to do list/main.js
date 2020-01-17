
let input = document.getElementById('input');
let ul = document.querySelector('ul');
let addBtn = document.getElementById('add_btn');

let error = document.getElementById('error-msg');


	
	


addBtn.onclick = () => {
	let listItem = input.value;
    input.value = "";


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



	dBtn.onclick = () => {
		ul.removeChild(list);
	} 
	if(listItem === "" || listItem == null) {
		error.textContent = "please don't leave this field empty";
		input.style.border = 'solid 1px red';
		ul.removeChild(list);
	}
	
		
	

	
	
}

