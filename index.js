// Write your code here!

console.log(document)
console.log(typeof document)

let a=document.getElementById("main")
//console.log(a)
let b=a.remove("main")
//console.log(b)

let c=document.createElement("h1")
console.log(c)
c.setAttribute("id","victory")
let newHeader=document.body.appendChild(c)
newHeader.textContent="YOUR-NAME is the champion"



