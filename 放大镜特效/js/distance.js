/*封装一个类，得出dom元素到body的距离，同时要兼容IE8的写法*/
            function getDistanceBody(dom){
                 var top=dom.offsetTop;
                 var left=dom.offsetLeft;
                 var not_IE8=window.navigator.userAgent.indexOf('MSIE 8');
                 if(not_IE8==-1){
                    //IE8的offsetleft和offsetHeight是包含border的宽度的
                    var borderLeft=parseInt(computedStyle(dom,"border-left-width"));
                    var borderTop=parseInt(computedStyle(dom,"border-top-width"));
                 }
                 //nodeName后面的值必须是大写的
                 while(dom.nodeName!='BODY'){
                    dom=dom.offsetParent;
                    top+=dom.offsetTop;
                    left+=dom.offsetLeft;
                    if(not_IE8==-1){
                      borderLeft+=parseInt(computedStyle(dom,"border-left-width"));
                      borderTop+=parseInt(computedStyle(dom,"border-top-width"));
                    }
                 }
                 return {
                    "top":top+borderTop,
                    "left":left+borderLeft
                 }
            }