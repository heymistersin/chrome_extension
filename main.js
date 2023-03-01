let contents = document.getElementById('contents');
// let primaryParent = primary.parent();
let contentsParent = contents.parentNode;
let container = document.getElementsByClassName('rpBJOHq2PR60pnwJlUyP0');

// let img = document.createElement("img");
let img = new Image();
let div = document.createElement("div");


div.innerText = "Focus!";
img.src = "./no_tv.png";

contentsParent.prepend(div);
contentsParent.prepend(img);
contents.parentNode.removeChild(contents);
container.parentNode.removeChild(container);