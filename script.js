let table = document.getElementById("table");
let listItems = [];
// Retrieve stored list items from local storage on page load
window.addEventListener('load', function() {
  let storedItems = localStorage.getItem('listItems');
  if (storedItems) {
    listItems = JSON.parse(storedItems);
    renderListItems();
  }
});

document.getElementById("add").addEventListener('click', function saveData() {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  tr.appendChild(td1);
  table.appendChild(tr);
  let input = document.getElementById("input").value;

  td1.innerHTML = input;
  td1.addEventListener('click', function() {
    this.style.textDecoration = 'line-through';
  });
  td1.addEventListener('dblclick', function() {    
    table.removeChild(this.parentNode);
  });  

  listItems.push(input);
  localStorage.setItem('listItems', JSON.stringify(listItems));

  document.getElementById("input").value = "";
});

function renderListItems() {
  listItems.forEach(function(item) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    tr.appendChild(td1);
    table.appendChild(tr);
    td1.innerHTML = item;
    td1.addEventListener('click', function() {
      this.style.textDecoration = 'line-through';
    });
    td1.addEventListener('dblclick', function() {     
      table.removeChild(this.parentNode);
    });     
  });
}
/*const index = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
    if (index !== -1) {
      listItems.splice(index, 1);
      localStorage.setItem('listItems', JSON.stringify(listItems));
    }*/