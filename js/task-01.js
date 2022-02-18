const ul = document.querySelector("ul");
console.log("Number of categories: " + ul.children.length);
let li = ul.childNodes[0];
for (let i = 1; i < ul.children.length * 2; i += 2){
    li = ul.childNodes[i];
    console.log("Category: " + li.childNodes[1].textContent);
    console.log("Elements: " + li.lastElementChild.children.length);
}