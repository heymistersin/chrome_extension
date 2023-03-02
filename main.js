// youtube

let contents = document.getElementById('contents');
let contentsParent = contents.parentNode;

// let img = document.createElement("img");
let img = new Image();
let div = document.createElement("div");

div.classList.add('beautText');

div.innerText = "Focus!";
img.src = "https://cdn-icons-png.flaticon.com/512/482/482862.png";

contentsParent.prepend(div);
contentsParent.prepend(img);
contents.parentNode.removeChild(contents);



// reddit

// works in console but not as extension
var twoX = document.getElementById('2x-container');
var twoXParent = twoX.parentNode;
// twoXParent.prepend(img);
// twoX.parentNode.removeChild(twoX);

// let container = document.getElementsByClassName('rpBJOHq2PR60pnwJlUyP0');
// container.parentNode.removeChild(container);