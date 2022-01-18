function generate(){
    number=Math.round(100*Math.random());
    console.log("The number is: "+ number);
    h3=document.querySelector("#h3");
    h3.innerHTML="Try to guess the whole number between 0 and 100.";
}

function check(){
    let guess=document.querySelector("#input").value;
    
    if(guess==""){
        h3.innerHTML='Type a guess in the box below!'
    }
    else{
        if(number==guess){
            h3.innerHTML='Hooray! You\'re right! Try Another Number!' ;
        }
        else if(guess<number){
            h3.innerHTML="Too low...guess higher!";
        }
        else if(guess>number){
            h3.innerHTML="Too high...guess lower!";
        }
    }
}

function reveal(){
    h3.innerHTML="Too bad! The number was " + number+". Try Another Number!";
}
