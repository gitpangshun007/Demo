/* 再次封装一个类，用来识别CSS标识*/
        function computedStyle(dom,propertyName){ 
        //定义正则表达式    负责将用户传进来的css写法转成驼峰式的写法
        var regexp = /-[a-z]/g;
        //因为IE6 、7 、8 不认识getComputedStyle会报错
        //高级浏览器不认识currentStyle属性，报undefined
        if(window.getComputedStyle){//如果是高级浏览器 那么window身上会有getComputedStyle方法
            //根据js的语法规则会认为是true
            //获取dom参数的css样式
            var cssStyleObject = window.getComputedStyle(dom);
            //获取指定的propertyName
            return cssStyleObject[propertyName] 
        }else{//如果是ie6/7/8
            //获取样式要从currentStyle属性上来获取
            //获取
            var IEstyle = dom.currentStyle;
            var newName = propertyName.replace(regexp,function(match){ 
                return match.replace(match,match.charAt(1).toUpperCase())
            }) 
            //因为ie只认识驼峰写法
            return IEstyle[newName] 
        }
    }