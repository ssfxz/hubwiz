
window.onload = function(){
  var container=document.getElementById('container');
  container.onmouseover = function(){
    moveStart(10,100);
  };
  container.onmouseout = function(){
    moveStart(-10,30);
  }
};
var timer=null;
var alpha = 50;
function moveStart(oSpeed,oTarget){
  clearInterval(timer)
  timer = setInterval(function(){
    if(oTarget == alpha){
      clearInterval(timer);
    }
    else{
      alpha += oSpeed;
      container.style.filter = 'alpha(opacity:'+alpha+');'
      container.style.opacity = alpha/100.0;
    }
  },30);
}
