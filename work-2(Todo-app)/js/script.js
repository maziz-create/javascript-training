// created close button and added into li elements
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// added turn off function to close buttons
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// when clicked on the li element inside the ul element, changed its class to "checked"
// if it has "checked" class then it is deleted
let ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
},
  false
);

// create new li element (new task) and added to list
function addNewElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("task").value;
  let text = document.createTextNode(inputValue);

  li.appendChild(text);
  li.classList.add("list-group-item", "pt-3", "rounded", "fs-4", "mb-2");
  
  let successToastLive = document.getElementById('liveToast-success');
  let errorToastLive = document.getElementById('liveToast-error');

  //  /^\s+|\s+$/g    => this expression(called RegEx) is often used to select whole whitespace characters.
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length === 0) {
    var toast_error = new bootstrap.Toast(errorToastLive);
    toast_error.show();
  } else {
    var toast_success = new bootstrap.Toast(successToastLive);
    toast_success.show();
    document.getElementById("tasks").appendChild(li);
  }

  document.getElementById("task").value = "";

  //added close button into new li element
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // added turn off function to close buttons
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
