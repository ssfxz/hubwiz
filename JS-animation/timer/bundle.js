
window.onload=function(){
	var Larr=document.getElementsByTagName('li');
	for (var i = 0;i<Larr.length; i++) {
		Larr[i].timer=null;
		Larr[i].onmouseover=function(){
			startMove(this,300);
		};
		Larr[i].onmouseout=function(){
			startMove(this,200);
		}
	}
   }
	function startMove(_this,Target){
	clearInterval(_this.timer);
	_this.timer=setInterval(function(){
		var speed=(Target-_this.offsetWidth)/5;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(_this.offsetWidth==Target)
	{
		clearInterval(_this.timer);
		console.log(_this.offsetWidth);
	}
	else
	{
		_this.style.width=_this.offsetWidth+speed+'px';
	}
	},30)	
}

