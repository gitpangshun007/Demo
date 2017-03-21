//定义元素
		var small=document.getElementById("small");
		var glass=document.getElementById("glass");
		var big=document.getElementById("big");
        //定义系数
		var ratio=400/800;
        //鼠标移动到盒子内监听onmousemove
		small.onmouseover=function(e){
            //兼容IE8写法
			var event=e||window.event;
			glass.style.display='block';
			big.style.display="block";
		}
		small.onmousemove=function(e){
            //兼容IE8写法
			var e=e||window.event;
            var not_IE8=window.navigator.userAgent.indexOf('MSIE 8');
             var mouseX=e.clientX;
             var pageY;
             //IE8自带e的属性pageX和pageY。非IE浏览器，clientY是不包含scrollTop距离的
             if(not_IE8==-1){
                 pageY=document.documentElement.scrollTop+e.clientY;
                 var x=mouseX-getDistanceBody(small).left-glass.clientWidth/2;
                 var y=pageY-getDistanceBody(small).top-glass.clientHeight/2;
             }else{
                 var x=e.pageX-getDistanceBody(small).left-glass.clientWidth/2;
                 var y=e.pageY-getDistanceBody(small).top-glass.clientHeight/2;
             }
             if(x>100){
             	x=100;
             }else if(x<0){
             	x=0
             }
             if(y>100){
             	y=100;
             }else if(y<0){
             	y=0;
             }
             glass.style.left=x+'px';
             glass.style.top=y+'px';
             big.style.background ="url(img/car_big.jpg) no-repeat "+(-x/ratio)+"px "+(-y/ratio)+"px";
         }
         small.onmouseout=function(){
         	glass.style.display='none';
         	big.style.background="none";
         	big.style.border='none';
         }