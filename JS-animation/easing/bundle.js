
window.onload = function(){
  var container=document.getElementById('container');
  var btn=document.getElementById('btn');
  btn.onclick = function(){
    if(container.offsetLeft==0)
    {
      moveStart(-200);
    }
    else{
      moveStart(0);
    }
  };
};
var timer = null;
function moveStart(Target)
{
  clearInterval(timer);
  timer=setInterval(function(){
    var speed=(Target-container.offsetLeft)/5;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    if(container.offsetLeft==Target)
    {
      clearInterval(timer);
    }
    else{
      container.style.left=container.offsetLeft+speed+'px';
    }
  },30)
}

