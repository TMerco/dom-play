//alert("It's working!");
/*
let actors = document.querySelectorAll(".hamlet");

console.log(actors);

document.querySelectorAll(".hamlet").style.backgroundColor = "yellow";
 */


function highlight(el){

    if(el.style.backgroundColor == "yellow"){
        el.style.backgroundColor='white';

    }else{
        el.style.backgroundColor='yellow';
    }
}