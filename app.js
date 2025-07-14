const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", function(e){
    let item = document.createElement("li");
    item.innerText =input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delbtn);
    input.value= "";

});

let delbtns = document.querySelectorAll(".delete");

for(delbtn of delbtns){
    console.log("element deleted");
    delbtn.addEventListener("click", function(){
    let par = this.parentElement ;
    console.log(par);
    par.remove();
});
}
    