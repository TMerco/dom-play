/*
alert("It's working!");
let actors = document.querySelectorAll(".hamlet");

console.log(actors);

 */

function myAlert(){
    alert("I'm clicked!");
}

let spans = document.querySelectorAll("#play span");

console.log(spans);

/*Annonymous function allows ANY code to be placed inside the curly brackets {} */
for(const mySpan of spans){
    mySpan.addEventListener("click",function(ev){
        highlightActor(mySpan.dataset.actor);
    });
   // alert(mySpan.dataset.actor);
}

function highlightActor(actor){
    alert("The current actor is: " + actor);
}





function highlight(el){

    if(el.style.backgroundColor == "yellow"){
        el.style.backgroundColor='white';
    }else{
        el.style.backgroundColor='yellow';
    }
}