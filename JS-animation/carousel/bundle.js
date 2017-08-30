
window.onload=function(){
	var select=0;
	var timer = null;
	var autotimer = null;
	var pic=document.getElementById('pic');
	var menu = document.getElementById('menu');
	var img=pic.getElementsByTagName('li');
	var menu_li=menu.getElementsByTagName('a');
	for(var i =0 ; i< img.length ; i++)
	{
		img[i].index=i;
		menu_li[i].index=i;
		menu_li[i].onmouseover=function(){
			clearInterval(autotimer);
			play(this.index);
		};
		menu_li[i].onmouseout=function(){
			auto(this.index);
		}
	}
	auto(1);
	function auto(start){
		clearInterval(autotimer);
		var i = start;
		autotimer=setInterval(function(){
			console.log(i);
			play(i);
			i++;
			if(i == img.length)
			{
				i=0;
			}
		},3000);
	}
	function play(i){
		clearInterval(timer);
        var target=-i * 490;
		menu_li[select].className='';
		select=i;
		menu_li[select].className='select';
		timer=setInterval(function(){
			var speed= (target - pic.offsetLeft )/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(pic.offsetLeft == target)
			{
				clearInterval(timer);
			}
			pic.style.left=pic.offsetLeft+speed+'px';
		},20);
	}
};

