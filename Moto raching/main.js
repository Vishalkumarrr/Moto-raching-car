var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")


// bluecar move
blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    // console.log(random)
    blueCar.style.left = random + "px";
    counter++
})
// rececar move
window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){ var raceCarleft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))


    if(raceCarleft < 200){raceCar.style.left = (raceCarleft + 130) + "px"}
    jumpsound.play()
};
    
    if(e.keyCode == "37"){
        var raceCarleft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
        if(raceCarleft > 0){raceCar.style.left = (raceCarleft - 130) + "px"
         jumpsound.play()
    }
    }
})

//game over
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarleft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarleft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if((blueCarleft === raceCarleft) && (blueCarTop > 250) &&(blueCarTop < 450)){
           result.style.display = "block";
           game.style.display = "none";
           score.innerHTML = `score: ${counter} `;

           counter = 0;
    }
}, 10)