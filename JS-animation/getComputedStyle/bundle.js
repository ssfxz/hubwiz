window.onload = function(){
	var container=document.getElementById('container');
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	}
	alert(getStyle(container,'width'));
};
