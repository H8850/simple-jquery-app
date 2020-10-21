//scripts for to do app

//JQuery code

//1. Adding a new list item:

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("You must write something!");
} else {
  $('#list').append(li);
}

//2. Crossing out an item from the list

function crossOut() {
  li.toggleClass("strike");
}

li.on("dblclick", crossOut());

//3. Adding delete button

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

function deleteListItem() {
  li.addClass("delete")
}

crossOutButton.on("click", deleteListItem());

//4. adding sortable functionality

$('#list').sortable();
