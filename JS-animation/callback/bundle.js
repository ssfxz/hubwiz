
window.onload=function(){
	var container = document.getElementById('container');
	container.onmouseover=function(){
		startMove(this,400,'height',function(){
			startMove(container,400,'width');
		});
	}
};
var timer=null;
function startMove(obj,target,attr,fn)
{
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=(target - getStyle(obj,attr))/20;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if(getStyle(obj,attr) == target)
		{
			clearInterval(timer);
			if(fn)
			{
				fn();
			}
		}
		else
		{
			obj.style[attr]=getStyle(obj,attr) + speed + 'px';
		}
	},30)
}
function getStyle(obj,attr){
	if(obj.currentStyle)
	{
		return parseFloat(obj.currentStyle[attr]);
	}
	else
	{
		return parseFloat(getComputedStyle(obj,false)[attr]);
	}
}

