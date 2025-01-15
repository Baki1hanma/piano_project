/*we need to add a function for each buttons and that function is based on events(clicks,keydowns,etc) and once that function is applied to every buttons it will get executed whenever the event happens*/

for(var i =0;i<document.querySelectorAll(".set .drum").length;i++)
    {
    document.querySelectorAll(".set .drum")[i].addEventListener("click" ,function(){
        var letter = this.innerHTML;
        callback(letter);
        Animate(letter);
    
    });
    
}
//now since we are going to define a function based on the keydowns so we need not to loop it for buttons(object) since we are not clicking to any button on the document we are just pressing the keys of our keyboard
document.addEventListener("keydown", function(event){
    callback(event.key);
    Animate(event.key);
});
function callback(key)
{
    switch(key)
       {
        case "w":
            var sound =new Audio("./assets/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound =new Audio("./assets/tom-2.mp3");
            sound.play();

            break;
        case "s":
            var sound =new Audio("./assets/tom-3.mp3");
            sound.play();

            break;
        case "d":
            var sound =new Audio("./assets/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound =new Audio("./assets/tom-5.mp3");
            sound.play();
            break;
        case "k":
            var sound =new Audio("./assets/tom-6.mp3");
            sound.play();
            break;
        case "l":
            var sound =new Audio("./assets/tom-7.mp3");
            sound.play();
            break;
        default:
            break;
        }
}
document.querySelector("h1").addEventListener("mousemove",function(){
    this.classList.add("pressed");
    setTimeout(function(){
        document.querySelector("h1").classList.remove("pressed");}
    ,200);
});

function Animate(onWhat){
    var Class = "."+onWhat;
    document.querySelector(Class).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(Class).classList.remove("pressed");
    },100);
    
}