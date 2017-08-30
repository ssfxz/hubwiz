window.onload = function(){
  var container=document.getElementById('container');
  var btn=document.getElementById('btn');
  btn.onclick = function(){
    if(container.offsetLeft==-200)
    {
      moveOut();
    }
    else{
      moveBack();
    }
  };
};
var timer=null;
function moveOut(){
  clearInterval(timer);
  timer=setInterval(function(){
    if(container.offsetLeft == 0)
    {
      clearInterval(timer);
    }
    else{
      container.style.left=container.offsetLeft+10+'px';
    }
  },30);
}

function moveBack(){
	clearInterval(timer);
  timer=setInterval(function(){
    if(container.offsetLeft == -200)
    {
      clearInterval(timer);
    }
    else{
      container.style.left=container.offsetLeft-10+'px';
    }
  },30);
}
