
window.onload=function(){
		var container = document.getElementById('container');
		var conP = container.getElementsByTagName('p');
		console.log(conP);
		var conIcon = container.getElementsByTagName('span');
		for(var i=0;i<conP.length;i++){
			conP[i].index = i;
			conIcon[i].timer = null;
			conP[i].onmouseover = function(event){
				event.stopPropagation();
				startMove(conIcon[this.index],{top:0,opacity:0},function(obj){
					//???
					startMove(obj,{top:20,opacity:100})
				});
			}
		}

		var isComplete=false;
		function startMove(obj,attrClass,cb)
		{
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				for(attr in attrClass){
					if((attr === 'opacity'?getStyle(obj,attr)*100:getStyle(obj,attr))=== attrClass[attr])
					{
						isComplete=true;
						continue;
					}
					isComplete=false;
					if(attr === 'opacity')
					{
						var speed=(attrClass[attr] - getStyle(obj,attr)*100)/10;
						speed = speed>0?Math.ceil(speed):Math.floor(speed);
						obj.style[attr]=(getStyle(obj,attr)*100+speed)/100.0;
					}
					else
					{
						var speed=(attrClass[attr] - getStyle(obj,attr))/10;
						speed = speed>0?Math.ceil(speed):Math.floor(speed);
						obj.style[attr]=getStyle(obj,attr) + speed + 'px';
					}
				}
				if(isComplete){
					clearInterval(obj.timer);
					if(cb){
						cb(obj);
					}
				}
			},10);
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

	};

