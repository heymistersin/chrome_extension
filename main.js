let contents = document.getElementById('contents');
// let primaryParent = primary.parent();
let contentsParent = contents.parentNode;

let img = document.createElement("img");
let div = document.createElement("div");


div.innerText = "Focus!";
img.src = "no_tv.png";

contentsParent.prepend(div);
contentsParent.prepend(img);
contents.parentNode.removeChild(contents);
