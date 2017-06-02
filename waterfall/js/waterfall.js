window.onload=function(){
	waterfall('main','box');
	//图片数据json
	var dataJson={"data":[{"src":"29.jpg"},{"src":"30.jpg"},{"src":"31.jpg"},
	{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"},{"src":"35.jpg"},{"src":"36.jpg"},{"src":"37.jpg"},{"src":"38.jpg"},
	{"src":"39.jpg"},{"src":"40.jpg"},{"src":"41.jpg"},{"src":"42.jpg"},{"src":"43.jpg"},{"src":"44.jpg"},{"src":"45.jpg"},
	{"src":"46.jpg"},{"src":"47.jpg"},{"src":"48.jpg"},{"src":"49.jpg"},{"src":"50.jpg"},{"src":"51.jpg"},{"src":"52.jpg"},
	{"src":"53.jpg"},{"src":"54.jpg"},{"src":"55.jpg"},{"src":"56.jpg"},{"src":"57.jpg"},{"src":"58.jpg"},{"src":"59.jpg"},
	{"src":"60.jpg"},{"src":"61.jpg"},{"src":"62.jpg"},{"src":"63.jpg"}]};
	//添加滚动事件
    window.onscroll=function(){
    if(checkScroll()){
    	var oParent=document.getElementById('main')
    	for (var i = 0; i < dataJson.data.length; i++) {
    		var oBox=document.createElement('div');
    		oBox.id='box';
    		oParent.appendChild(oBox);
    		var pic=document.createElement('div');
    		pic.className='pic';
    		oBox.appendChild(pic);
    		var img =document.createElement('img');
    		img.src='./images/'+dataJson.data[i].src;
    		pic.appendChild(img);
    	}
    	waterfall('main','box');
    }
   }
}

//封装waterfall函数
function waterfall(parent,box){
	var oParent=document.getElementById(parent);
	var oBox=getObox(oParent,'box');
	var boxWidth=oBox[0].offsetWidth;
	var num=Math.floor(document.documentElement.clientWidth/boxWidth);
	oParent.style.cssText="width:"+boxWidth*num+"px;margin:0 auto;"

	var boxHeights=[];
	for (var i = 0; i < oBox.length; i++) {
		var newBox= oBox[i].offsetHeight;
		if(i<num){
           boxHeights[i]=newBox;
		}else{
		   var minH=Math.min.apply(null,boxHeights);
		   var minIndex=getMinIndex(boxHeights,minH);
		   oBox[i].style.position = 'absolute';
		   oBox[i].style.top=minH+'px';
           oBox[i].style.left=oBox[minIndex].offsetLeft+'px';
           boxHeights[minIndex]+=oBox[i].offsetHeight;
		}
	}
}
//得到id是idName的所有元素
function getObox(parent,idName){
	var boxArr=[];
	var classBox=parent.getElementsByTagName('*');
	for (var i = 0; i < classBox.length; i++) {
		if(classBox[i].id==idName){
		   boxArr.push(classBox[i]);
		}
	}
	return boxArr;
}
//得到最小的高度的索引
function getMinIndex(arr,minH){
	for(var i in arr){
		if(arr[i]==minH){
			return i;
		}
	}
}
//判断是不是需要加载新的数据图片
function checkScroll(){
   var oParent=document.getElementById('main');
   var oBox=getObox(oParent,'box');
   var lastBoxH=oBox[oBox.length-1].offsetTop+oBox[oBox.length-1].offsetHeight/2;
   var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
   var clientH=document.documentElement.clientHeight;
   return (lastBoxH<scrollTop+clientH)?true:false;
}