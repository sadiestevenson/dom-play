//alert("Hi There!");

function myAlert(){
    alert("I'm clicked!");
}

const spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
    //mySpan.addEventListener("click",myAlert);

    mySpan.addEventListener("click", function(ev){
        //alert("The current actor is " + mySpan.dataset.actor);
        highlightActor(mySpan.dataset.actor);
    });
}


function highlightActor(actor){

    for(const mySpan of spans){

        if(actor == mySpan.dataset.actor){ //current actor, highlight
            mySpan.style.backgroundColor='lightblue';
        }else{ //other actor, background white
            mySpan.style.backgroundColor='white';
        }
    } 
}



function highlight(el){

    if(el.style.backgroundColor == 'lightblue'){      
        el.style.backgroundColor='white';
    }else{      
        el.style.backgroundColor='lightseagreen';
    }
}
