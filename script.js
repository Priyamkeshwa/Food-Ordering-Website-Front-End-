
var vid = document.getElementById("myVideo");
var isPlaying = false;
document.getElementById("playIcon").onclick = function () {
    
if(isPlaying){
    document.getElementById("playIcon").src = "icons/play.svg";
    function pauseVid() {
        vid.pause();
    }
    pauseVid();
    isPlaying = false;
} else{
    document.getElementById("playIcon").src = "icons/pause-solid.svg";
    
    function playVid() {
        vid.play();
    }
    playVid();
    
    isPlaying = true;
}



};



function hide(x){
    var ele = document.getElementById("playIcon")
    ele.style.display = 'none';
}
function show(x){
    var ele = document.getElementById("playIcon")
    ele.style.display = '';
}
function cartIconClicked()
{
    if(document.getElementById("cartDialogue").style.display=="none")
    {
        document.getElementById("cartDialogue").style.display="flex";
        document.getElementById("blackSpace").style.display="block";
    }
    else
    {
        document.getElementById("cartDialogue").style.display="none";
        document.getElementById("blackSpace").style.display="none";
    }
}
function backToMenuClicked()
{
    document.getElementById("cartDialogue").style.display="none";
    document.getElementById("blackSpace").style.display="none";
}
function requestClicked()
{
    if(document.getElementById("requestDish").style.display=="none")
    {
        document.getElementById("requestDish").style.display="flex";
        document.getElementById("blackSpace").style.display="block";
    }
    else
    {
        document.getElementById("requestDish").style.display="none";
        document.getElementById("blackSpace").style.display="none";
    }
}