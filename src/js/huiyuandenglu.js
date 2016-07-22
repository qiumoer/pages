$(function(){
	var _cookie = document.cookie;
	var $tijiao = $('#tijiao');
	var $yanzheng = $('.yanzheng');
	var name;
	var kaiguan = false;
		$tijiao.on('click',function(){
			var $password = $('#passwords').val();
			var $username = $('#username').val();
			if(_cookie){
				$.each(_cookie.split('; '), function(index,val) {
				  name = JSON.parse(val.split('=')[1]); 
				 // console.log(name.xingming);
				  if($username == name.xingming){
				  		kaiguan= true;
				  		return false;//跳出each循环
				  }
				});
			}
			
			if(!kaiguan){
				alert("对不起，您还没注册!");
			}
			var dlxm ={};
			var $yan = $('#yan').val();
			if(kaiguan){
				 if($username == name.xingming && $password == name.mima ){
				 	if($yan !="3129"){
				 		alert("请正确输入验证码");
				 	}else{
				 		alert('恭喜你登录成功');
				 		dlxm.name = $username;
				 		document.cookie = "denglu"+"="+JSON.stringify(dlxm)+'; path=/';
					 	$('#username').val('');
					 	$('#password').val('');
					 	 $yanzheng.html('');
					 	 location.href = "../index.html";
				 	}
					 	
				}else{
					 alert('用户名或密码有误');
				 }
				
			}
		})

})