drumsElement=document.querySelectorAll(".drum");
for (var i=0;i<drumsElement.length;i++){
    drumsElement[i].addEventListener('click',function() {
        druminnerHTML=this.innerHTML;
        playAudio(druminnerHTML);
        buttonAnimation(druminnerHTML);
    });
}
document.addEventListener('keydown',function(event){
    playAudio(event.key);
    buttonAnimation(event.key);
})
function playAudio(keyword){
    switch (keyword) {
        case 'w':
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3=new Audio("tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4=new Audio("tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var crash=new Audio("crash.mp3");
            crash.play();
            break;
        case 'k':
            var kick=new Audio("kick-bass.mp3");
            kick.play();
            break;
        case 'l':
            var snare=new Audio("snare.mp3");
            snare.play();
            break;
        default:
            console.log(innerHTML);
    }
}
function buttonAnimation(button){
    var currentClass=document.querySelector("."+button);
    currentClass.classList.add('pressed');
    setTimeout(function(){currentClass.classList.remove('pressed')},100);
}
