//封装一个函数用来返回页面的指定位置或者最顶部
function rollTop(targetTop,time){
             var nowScrollTop=document.body.scrollTop;
             var targetTop=targetTop;
             var time=time;
             var sub_time=50;
             var count=0;
             var need_count=time/sub_time;
             var distance=targetTop-nowScrollTop;
             var sub_distance=distance/need_count;
             var timer;
             timer=setInterval(function(){
                  count++;
             	if(count>=need_count){
             	clearInterval(timer);
             }
             	document.body.scrollTop+=sub_distance;
             }, sub_time);
		}