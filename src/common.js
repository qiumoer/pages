
/*============================================字符串截取封装==================================*/
function jiequ(string,strlength,end){
		var sString = string.substr(0,strlength);
		var eEnd = string.substr(string.length-end,end);//用原来的长度减要保留的数字再减1，减是因为下标从0开始，（小于长度1个数）所以要减一//错误 不需要减1
		var xing = "";
		for( var i = 0;i<string.length-strlength-end;i++){//不能写被赋值了的；length是传进来的数，所以减得是是传进来的
			xing += '*';
		}

		return sString + xing + eEnd;
	}
/*============================================完整的时间封装==================================*/

/*============================================获取日期封装==================================*/

function dDates(dDate,sFu){
	
	var dFullyear = dDate.getFullYear();//获取年份
	
	var dMonth = ling(dDate.getMonth()+1);//获取月份
	var dDay = ling(dDate.getDate());//获取日期
	 if(sFu){
		return dFullyear+sFu+dMonth+sFu+dDay;
	}else{
		return dFullyear+'年'+dMonth+'月'+dDay+'日';
	}

}
/*============================================月份、日期小于10前面加0==================================*/
function ling(sum){
	if (sum<10) {
		sum = '0'+sum
	}
	return sum;
}
/*============================================时、分、秒封装==================================*/
function times(time,sFu){
		var dhours = ling(time.getHours());
		var dminutes = ling(time.getMinutes());
		var dseconds = ling(time.getSeconds());
		if(sFu){
		return dhours+sFu+dminutes+sFu+dseconds;
	}else{
		return dhours+'时'+dminutes+'分'+dseconds+'秒';
	}
}
/*============================================自动生成星期几==================================*/
function dates(week){
	
	var time = week.getDay();
	var arr = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
		return arr[time];
	
}
/*============================================生成完整时间==================================*/
function allDatd(date,dDatess,time,week,fu1,fu2){//dDatess,time,week控制打印的内容（开关）；如果ture则执行这行代码，函数则被调用执行
	
	var str = '';//空字符串用来拼接得到的日期和时间和星期,如果参数得到的是fase则不会执行,如果不写符号得到的时flase，执行的时if语句的第二条；

	if(dDatess){//条件判断的表达式里面必须要跟行参一致；
		str += dDates(date,fu1);//可以传字符，需要改变符号就传参数，不传参数则得到的时年月日

	}
	if(time){
		str +=' '+ times(date,fu2);

	}
	if(week){
	str +=' '+ dates(date);
	}
	return str;
//HTML写获取当前的日期，在用个变量装函数的值然后打印；

}

/*===========================================生成的日期由字符串转为数组===============================*/
function shuzu(riqi){
		var strDate = [];
		var sday = dDates(riqi,'/').split('/');//从’/‘开始分割；
		var stime = times(riqi,'*').split('*');

		var sweek = 
		dates(riqi);
		var array = strDate.concat(sday,stime);
		strDate.push(array);
		strDate.push(sweek);
		
		//strDate.push(concat.(sday,times));写法错误
		//alert(strDate)
		return  strDate;
	}
/*===================================scrollTOP在一定距离时显示或隐藏===================================================*/
function scrollShow(boxDiv,showHeight){ // 第一个参数为元素ID名 第二个是距离浏览器顶部的距离
	

		var boxs = document.getElementById(boxDiv);//接受实参时不需要加引号
		var sScoroll = document.body.scrollTop || document.documentElement.scrollTop;
			boxs.style.top = sScoroll + 'px';
			
		if(sScoroll > showHeight){
			boxs.style.display = 'block';
		}else if(sScoroll < showHeight){
			boxs.style.display = 'none';
		}	
}
/*======================================滚动时不同位置固定定位（ie不兼容fixed）=============*/
function scrFixedIENo(nameID,numeHie){//元素id名和距离顶部的距离
		var scrID = document.getElementById(nameID);
		var scrolls = document.body.scrollTop || document.documentElement.scrollTop;//初始得到的是0
		
		if(numeHie===true){//如果有高度的参数那么就将这个高度重新赋值；（在同一个页面不同位置显示，需要减）
			scrID.style.bottom = 0; 
			//numeHie = document.documentElement.clientHeight - scrID.clientHeight ;//该ID名距离body的高度（client：获取当前元素的高度）
		
		}console.log(scrolls,numeHie,scrolls+ numeHie );
		scrID.style.top = numeHie+ 'px';// 不全等于true时scrolls 的距离加上传入的参数得到距离的top值

	}
/*=========================================滚动时不同位置固定定位让ie兼容fixed====================*/	
function scrFixed(nameID,numeHie){//元素id名和距离顶部的距离
		var scrID = document.getElementById(nameID);
		var scrolls = document.body.scrollTop || document.documentElement.scrollTop;//初始得到的是0
		
		if(numeHie===true){//如果有高度的参数那么就将这个高度重新赋值；（在同一个页面不同位置显示，需要减）
			//scrID.style.bottom = 0; //ie不兼容
			numeHie = document.documentElement.clientHeight - scrID.clientHeight ;//该ID名距离body的高度（client：获取当前元素的高度）
		
		}
		//scrID.style.top = numeHie+ 'px';ie不兼容
			scrID.style.top = scrolls + numeHie + 'px';// 不全等于true时scrolls 的距离加上传入的参数得到距离的top值

	}
	/*==============================================元素js获该元素css样式(行间样式) 兼容IE============================*/
	function getClssName(idName,className){//第一个是要传进来的元素ID名；第二个是该元素的class属性;
			var oBox = document.getElementById(idName);//已经传进来的参数在这里不用加引号；
				var sStyle = '';
				//alert(window.getComputedStyle);
			if(window.getComputedStyle){//必须添加window；否则iE不是别，会报错，加上window.ie得到是是undefined；
				
				sStyle = window.getComputedStyle(oBox,false)[className];//参数中间用逗号隔开。前面不用写oBox；或者window：因为是它下的方法

			}else{
				
				sStyle = oBox.currentStyle[className];//复式不支持并且要大写
			}
			return sStyle;
		}
	/*==========================================元素获取class名的元素并给它绑定点击事件==========================================*/
	function qiehuan(idName,classNames,htmlName){//第一个参数是父元素divd的id名，第二个是style上class的名字，第三个是要赋class名的元素（ui下的li）
		var boX = document.getElementById(idName);
		var oLi = boX.getElementsByTagName(htmlName);
				
			oLi[0].className = classNames;

			for(var i = 0;i<oLi.length;i++){
				oLi[i].onclick = function(){
					
					for( var i = 0;i<oLi.length;i++){
						
						oLi[i].className = '';
					}
					this.className = classNames;
				}

			}
	}
	/*===============================================获取文本节点或元素节点===========================*/
	function getNodes(oObj, nNodeType){
//参数：父节点, 节点类型（1,2,3,）
	var childNodes = oObj.childNodes;
	//获取所有节点
	var childs = [];
	//创建数组接受新节点
	for(var i=0; i<childNodes.length; i++){
		if(childNodes[i].nodeType == nNodeType){
		//如果符合节点类型
			childs.push(childNodes[i]);
			//则放到数组中
		}
	}
	return childs;//返回新数组
}
	/*============================================添加事件============================================*/
	//添加事件
function addEvent(oBox, sEvent, fn, bOpen){
//参数：元素, 事件名称, 事件处理函数, 添加或移除（true/false）
	if(bOpen){
		if(oBox.attachEvent){
			oBox.attachEvent("on"+sEvent, fn);//IE添加事件
		}else{
			oBox.addEventListener(sEvent, fn, false);//高版本添加事件
		}
	}else{
		if(oBox.dettachEvent){
			oBox.dettachEvent("on"+sEvent, fn);
		}else{
			oBox.removeEventListener(sEvent, fn, false);//高版本添加事
		}
	}
}

	/*===============================================轮播图============================================*/
	function lunbotu(idName,idNameChild,leftL,rightR,idBtnName,idBtnChild,sum){//第一个参数装ul>li>img的id名，第二个参数li，第三个参数上一页，第四个是下一页；第五个是图片下面的点击事件id名，第六个参数是该id名所有可以触发点击事件的子元素，第七个是定时器的时间****如果传参数量没有那么多可能会出错，需要做判断
		var oBox = document.getElementById(idName);alert(111)
		var oLi = oBox.getElementsByTagName(idNameChild);
		var oPrev = document.getElementById(leftL);
		var oNext = document.getElementById(rightR);
		var oDoc = document.getElementById(idBtnName);
		var oSpan = oDoc.getElementsByTagName(idBtnChild);



		var timer;
		var num = 0;//因为只用到一个变量（全局变量），所以可以不传参，num的值会一直改变，不管进行哪一步操作，当前操作中num都是同一个值//传参的方便之处封装好函数如果声明不同变量名也可以用
		/*============第一个li设置class名=======================*/
			oLi[0].className = 'active';
			oSpan[0].className = 'active';
			/*=============定时器让图片自动轮播=================*/
			oBox.timer = setInterval(next,sum)//不带括号是传一个函数，由定时器触发

			/*============鼠标滑动时清除定时器================*/
			oBox.onmouseover =function(){
				clearInterval(oBox.timer)
			}
			/*============鼠标滑过后继续轮播==================*/
			oBox.onmouseout = function(){
				oBox.timer = setInterval(next,sum)
			}
			/*===========向左点击时图片上一页=================*/
			oPrev.onclick = prev;//有事件触发的函数不调用时不用带括号。带括号是直接调用,事件在执行时函数已经有值了。不带括号的只是函数，有事件触发时调用
			/*========== 向右点击时触发函数===================*/
			oNext.onclick = next;
			/*=============设置span标签自动轮播===============*/
			for(var i=0;i<oSpan.length;i++){
				oSpan[i].index = i;//给每一个span一个属性，存储没次循环的i的值；这样每个span都有个下标，否则
				oSpan[i].onclick = function(){
					num = this.index;//点击哪个span遍将它的下标赋值给num；再传参给claName函数;
					claName(num);

				}
			}

			/*==================点击按钮向左走函数======================*/
			function prev(){
					num--;
				if(num<0){
					num = oLi.length-1;
				}

				claName(num);//可省略

			}

			function next(){//封装图片往上加的函数
					num++;
				//大于时做判断，需要length-1
					if(num>oLi.length-1){
						num = 0;
					}
					claName(num);//不传参数，
				}
			function claName(){
				for(var j = 0;j<oLi.length;j++){
					oLi[j].className = '';
					oSpan[j].className = '';//点击之前先将所有的span的class名清空；
				}
				oLi[num].className = 'active';
				oSpan[num].className = 'active';//num值是点击哪个span时的下标
				}
			}




/*===================================拖拽==============================*/
function tuozhuai(oBox){//元素id名；传参需要带引号；
			//var oBox = document.getElementById(oBox);
			oBox.onmousedown = function(e){//代表obox
					var e = window.event?window.event:evt;
					//var nX = e.offsetX;ie的火狐低版本不兼容//放到上面获取鼠标距离元素边距是因为，如果move事件对象是document，元素鼠标距离边框的值即offset会发生改变，此时和鼠标距离就是一样的即client的值；因为对象都是document；如果move事件对象是oBox；则可以实现拖动；但是在拖动的过程中如果速度太快，会更不上（鼠标脱离该元素）。因此以document为对象更合适；但是box的值需要在鼠标按下时取出来；****相对于documentofeset和slient的值是一样的
					var nX = e.clientX - oBox.offsetLeft;//鼠标距离元素的边距
					var nY = e.clientY - oBox.offsetTop;
						
					//var nY = e.offsetY;

					//alert('qqq')
				document.onmousemove = function(e){//代表document的

					var e = window.event?window.event:evt;
					var nWidth = document.documentElement.clientWidth - oBox.clientWidth;//document的宽度
					var nHiegth =  document.documentElement.clientHeight - oBox.clientHeight;
					var nLeft =  e.clientX - nX;//鼠标距离document的边距减去鼠标距离元素的边距的空间
					var nTop =  e.clientY - nY;


					if(nLeft<0){
						nLeft = 0;

					}else if(nLeft > nWidth){
						nLeft = nWidth;
					}
					if(nTop<0){
						nTop = 0;
					}else if(nTop > nHiegth){
						nTop = nHiegth;
					}
					oBox.style.left = nLeft +'px';
					oBox.style.top = nTop +'px';

				}
				document.onmouseup = function(){//如果写的box 当鼠标将box拖出document的时候box的onmouseup的清除就起不到作用，以为move是绑定给document的
					document.onmousemove =null;
					document.onmouseup = null;
				}

			}

		}
/*================================ cookie ===================================*/
/* 存储用户信息*/
		function setCookie(cookieName,cookieValue,outTime){//第一个参数为cooke的名字；第二个是对应的值；第三个是清空的时间
			//var nuame = '张三';
			var dDate = new Date();
			 dDate.setDate(dDate.getDate()+outTime);//设置过去时间
			document.cookie = cookieName+" =" +cookieValue+'; expires=' + dDate;//浏览器存储
			//document.cookie = "user1 =" + 'xiayuelin' +'; expires=' + dDate;
			//document.cookie = "usme2 =" + 'dog '+'; expires=' + dDate;
			
		}
		/* 查看每个键的值*/
		function chekCookie(cookieName){//参数是要查看的属性名
			var aCookie = document.cookie.split('; ');//将每个浏览器存储的信息切割成数组类型，cookie是字符串类型；
			for(var i = 0;i < aCookie.length; i++){
				var sCookie = aCookie[i].split('=');//数组里面的；隔开得到的数组从 = 分割，生成小数组；
				if(sCookie[0] == cookieName ){
					return sCookie[1];
				}
			}	
		}
		/*删除及时间过期*/
		function removeCookie(cookieName){//参数是要删除的属性名；
			setCookie(cookieName,'',-1)//调用函数，将键的值为空；-1时将时间设为昨天，所有存储信息会消失
		}
		/*===============================Ajax=========================================*/
		function fnAjax(sUrl,fnSucc,fnFail){//第一个参数：json地址；第二个参数：服务器响应成功的函数调用；第三个参数：服务器响应失败的函数调用
	console.log(sUrl)
			if(typeof(XMLHttpRequest) != "undefined"){
				var xhr = new XMLHttpRequest();
			}else{
				var xhr = new ActiveXObject("MXSML2.XMLHttp");
			}
			xhr.open("GET",sUrl,true);//向服务器发送请求
			xhr.send(null);//null:让所有浏览器兼容；有些浏览器必须要有一个参数//将请求发送到服务器
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){//判断数据在服务器响应后是否接受完成
					if(xhr.status == 200){//判断发送的内容是否正确有效
						//alert(1)
						fnSucc(xhr.responseText);//函数写在外面
					}else{
						fnFail(xhr.status)//函数写在外面
					}
				}
			}
		}