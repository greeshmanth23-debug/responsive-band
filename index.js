function drumanimation(currentkey){
    var activebutton=document.querySelector(`.${currentkey}`);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}
function playsound(key){
    switch(key){
        case "q":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            drumanimation("q");
            break;
        case "w":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "e":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "r":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "i":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "o":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "p":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(event.key);
    }
}
document.addEventListener("keypress", function(event) {
    playsound(event.key);
    drumanimation(event.key);
});
let drum=document.getElementsByClassName("drum");
for(let i=0;i<drum.length;i++){
    drum[i].addEventListener("click",function(){
        playsound(drum[i].innerHTML);
        drumanimation(drum[i].innerHTML);
    })
}
