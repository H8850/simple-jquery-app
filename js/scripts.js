//scripts for to do app

//JQuery code

function newItem() {

  //1. adding new list items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  //2. Crossing out an item from the list

  li.on("dblclick", function crossOut(){
    li.toggleClass("strike");
  });

  //3. Adding delete button

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete")
  }

  //4. adding sortable functionality

  $('#list').sortable();

}
