let element = document.createElement("canvas");
new element.id = "canvas";

let text = document.createTextNode("my canvas zone");

element.appendChild(text);

let table1 = document.querySelector("#table1");

document.body.insertBefore(element, table1);