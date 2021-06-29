// dark background page
function check() {
  var check = document.getElementById('checkbox');
  if (check.checked == true) {
    document.body.style.backgroundColor = "#292929";
  } else {
    document.body.style.backgroundColor = "#ffffff";
  }
}
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("li"),
  i = 0;
for (; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let x = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.classList.add("text-danger");
  span.appendChild(x);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close"), j = 0;
for (; j < close.length; j++) {
  close[j].onclick = function () {
    let myParent = this.parentElement;
    myParent.style.display = "none";
    $('.alert-warning').slideDown(1000).delay(1000).hide(2000)
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function addElement() {
  let li = document.createElement("li"), inputValue = document.getElementById("myInput").value, t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.classList.add('list-group-item');
  li.classList.add('list-group-item-action');
  if (inputValue === '') {
    $('.alert-danger').slideDown(1000).delay(2000).slideUp(1000)
  } else {
    document.getElementById("myUl").appendChild(li);
    $('.alert-primary').slideDown(1500).delay(1000).fadeOut(1500);
  }
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN"), txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.classList.add("text-danger");
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}