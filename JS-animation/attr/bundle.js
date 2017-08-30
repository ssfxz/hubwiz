
window.onload=function(){
    var container = document.getElementById('container');
    container.onmouseover=function(){
        startMove(this,{width:300,height:300,opacity:100});
    }
};
var timer=null;
var isComplete=false;
function startMove(obj,attrClass)
{
    clearInterval(timer);
    timer=setInterval(function(){
        for(attr in attrClass){
            if((attr === 'opacity'?getStyle(obj,attr)*100:getStyle(obj,attr))=== attrClass[attr])
            {
                isComplete=true;
                continue;
            }
            isComplete=false;
            console.log(attr);
            if(attr === 'opacity')
            {
                var speed=(attrClass[attr] - getStyle(obj,attr)*100)/20;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                obj.style[attr]=(getStyle(obj,attr)*100+speed)/100.0;
            }
            else
            {
                var speed=(attrClass[attr] - getStyle(obj,attr))/20;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                obj.style[attr]=getStyle(obj,attr) + speed + 'px';
            }
        }
        if(isComplete){
            clearInterval(timer);
        }
    },30);
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

