var eg={};
eg.$=function(id){
	return document.getElementById(id);
}
eg.regCheck=function(){
	var user=eg.$('user');
	var pwd1=eg.$('pwd1');
	var pwd2=eg.$('pwd2');
	var topic=eg.$('topic');
	var age=eg.$('age');
	var like=document.getElementsByClassName('like');
	var likeNum=0;
	
	//对用户名和密码的判断
	if(user.value==''){
		alert('用户名不可为空');
        eg.err();
		return false;
	}
	if(pwd1.value==''){
	    alert('请输入密码');
	    eg.err();
	    return false;
	}
	if(pwd1.value!=pwd2.value){
		alert('两次输入密码不一致');
		eg.err();
	    return false;
	}
	//判断年龄
	if(age.value=='0'){
		alert('请选择年龄');
		eg.err();
	    return false;

	}
	//判断爱好
	for (var i = 0; i < like.length; i++) {
		if(like[i].checked){
			likeNum++;
		}
	}
	if(likeNum==0){
	     alert('请至少选择一个爱好');
	     eg.err();
	     return false;
	}
	return true;
	
}
//记录错误的次数
	eg.err=function(){
       var err=eg.$('errCount');
       var old=parseInt(err.value)+1;
       err.value=old;
       eg.lock();
	}
	eg.lock=function(){
		var err=eg.$('errCount');
		var unlock=eg.$('unlock');
		var reg=eg.$('reg');
		if(parseInt(err.value)>2){
			reg.disabled=true;
            unlock.style.display='block';
		}
	}
	eg.unlock=function(){
		var reg=eg.$('reg');
		var err=eg.$('errCount');
		var unlock=eg.$('unlock');
		err.value='0';
        reg.disabled=false;
        unlock.style.display='none';
	}