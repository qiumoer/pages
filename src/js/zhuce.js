



/*var na = '{"xingming":"夏粤琳","prss":"123456"}';
document.cookie = na;*/
/*value.xingming = $("#username").val();
		value.mima = $("#password").val();
		value.mimas = $("#passwordchecked").val();
*/
$(function(){
	var $btn = $(".queren").children("input");
	var $cooke = $("#cooke");
	var $tishi = $(".tishi");

	$btn.on("click",function(){
		var name = $("#username").val();
		var prss = $("#password").val();
		var prssword = $("#passwordchecked").val();
		var yanzheng = $('.yanzheng').find("input").val();
		//var $oA = $('.yanzheng').find("a").text();console.log($oA)
		var $check = $(".zhuce").find("input");
		var regName = /^[a-zA-Z_][\w]{5,19}$/;
		var ipone = /^(135)([\d]{7})$/;
		var regPass = /^[\w]{6,20}$/;
		var value = {};
		var _cookie  =  document.cookie;
		var kaiguan = true;
			$.each(_cookie.split('; '),function(index,val){//val 是数组中的一条json 属于字符串
				if(val != ''){
					//转成json对象 取出xinging
					if(val.split('=')[0] == name){
						$tishi.html("对不起，该用户名已被注册");
						kaiguan = false;
						return false;//跳出each循环
					}
				}
				
			});
			if(kaiguan){
				
				if(!regName.test(name) || name == ""){
					$tishi.html("用户名只能包含字母、数字和下划线、长度为6-20位");
					return false;
				}else if(!regPass.test(prss) || prss == ''){
					$tishi.html("密码只能包含数组、字母和下划线");
					return false;
				}else if(prssword!=prss || prssword==''){
					$tishi.html("两次输入密码必须一致");
					return false;	
				}else if(yanzheng!="3214" || yanzheng==''){
					$tishi.html("请输入正确验证码");
					return false;
				}else if(!$check.prop("checked")){
					$tishi.html("请勾选协议书");
					return false;
				}else{
					alert("恭喜成为名鞋库会员！！！");
					var aDate = new Date();
					var sDate =new Date(aDate.setDate(aDate.getDate()+1));
					console.log(sDate);
					value.xingming = name;
					value.mima = $("#password").val();
					value.mimas = $("#passwordchecked").val();
					var biaoshi = name+"="+JSON.stringify(value)+ '; path=/';//标示 不然原来的json会被覆盖
					//document.cookie = "clr=red; expires=" + expiresDate;
					//var the_date = new Date("December 31, 2020");
//var expiresDate = the_date.toGMTString(); 转换成 GMT 格式。GMT 即格林威治标准时间，现在也称 UTC 即全球标准时间。
					//'mia_username'+"="+_username+";path=/; expires="+dDate;
					document.cookie =biaoshi;
					$tishi.html('');
					$("#password").val("") 
					$("#passwordchecked").val('');
					$("#username").val('');
					$('.yanzheng').find("input").val('');
					$(".zhuce").find("input").prop("checked",false);
					return true;
				
				}

			}

			return false;//开关是false的时候阻止浏览器默认行为页面跳转
		

	});

		
	


})