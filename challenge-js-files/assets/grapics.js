let parentElement = document.getElementById("table1");

let firstChild = parentElement.firstChild;

let newElement = document.createElement("canvas");

parentElement.insertBefore(newElement, firstChild);