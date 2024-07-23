var lise=document.querySelectorAll(".drum").length;
for(var i=0;i<lise;i++)
{


     document.querySelectorAll(".drum")[i].addEventListener("click",function ()
 {
    //    this.style.color="blue"
    //     var audio = new Audio("sounds/tom-1.mp3");
    //     audio.play();
    var buttonInnerHTML =this.innerHTML;

    makesound(buttonInnerHTML);
    buttonanimation(buttonInnerHTML);
        
 });
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
})


function makesound(key){
    switch (key) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a": 
             var tom_2 = new Audio("sounds/tom-2.mp3");
             tom_2.play();
        break;
        case "s":
            var tom_3= new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "d":
            var tom_4= new Audio("sounds/tom-4.mp3");
            tom_4.play();   
            break; 
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();  
    
        default:console.log("not bad")
            break;

    }

}
function buttonanimation(currentKey){
    var activebutton=document.querySelector("." + currentKey).classList;
    activebutton.add("pressed");
    setTimeout(function(){
        activebutton.remove("pressed")
    },100)

}
