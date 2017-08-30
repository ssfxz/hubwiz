
window.onload = function () {
	var timer=null;
	var menu = document.getElementById('menu');
	var mod_content = document.getElementById('mod_content');
	var menu_li = menu.getElementsByTagName('li');
	var mod = mod_content.getElementsByTagName('div');
	for(var i= 0 ; i<menu_li.length  ;i++)
	{
		menu_li[i].ind = i;
		menu_li[i].onmouseover = function(){
			if(timer){
				clearTimeout(timer);
			}
          	var that = this;
			timer = setTimeout(function(){
				showTab(that);
			},500);
		};
	}
	autoPlay(0);
	function autoPlay(index){
		clearInterval(timer);
		timer=setInterval(function(){
			showTab(menu_li[index]);
			index++;
			if(index>=menu_li.length)
			{
				index=0;
			}
		},2000);
	}
	function showTab(_this){
		for (var i = 0; i < menu_li.length; i++) {
			menu_li[i].className='';
			mod[i].style.display='none';
		};
		_this.className='select';
		mod[_this.ind].style.display='block';
	}
};

