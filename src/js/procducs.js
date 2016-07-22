$(function(){
/*==================yonghuqiehuan==================*/
	var $yonghu = $('#huanying');
	var $zhuce = $('#zhuce');
	var $tuichu = $('#tuichu');
	var _cookie = document.cookie.split('; ');
		if(document.cookie){
			$.each(_cookie,function(index,val){
			var names = val.split('=');
			var json = JSON.parse(names[1]);
			if("denglu" == names[0]){
				 var xingming = json.name;
				$yonghu.html(xingming);
				$zhuce.hide();
				$tuichu.show();
				$tuichu.on('click',function(){
					$yonghu.html("您好！欢迎登陆");
					$zhuce.show();
					$tuichu.hide();
					//下次打开时清楚当前的用户（删除cookie）
					var aDate = new Date();
						aDate.setDate(aDate.getDate()-1);
					document.cookie =  'denglu={"":""}; expires='+ aDate; 

				})
			}
		});
	}
/*==================topwarip===========================*/
var $fanhuiTop = $('.fanhuiTop');
var $butn = $fanhuiTop.find('.butn');
$(window).on('resize scroll',function(){
	var $scrolltop = $(window).scrollTop();
	$butn.css({bottom:0});
	if($scrolltop > 100){
			$fanhuiTop.show();
	}else{
		$fanhuiTop.hide();
	}
	
})
$butn.click(function(){
	var $scrolltop = $(window).scrollTop();
	$("html body").animate({scrollTop:0});		
})

/*--==============top=====================--*/

huadong($(".myding"),$(".dingdan"));

huadong($(".listA"),$(".erweima"));
/*=============caidanlan==================*/
var $candanUl =$(".caidanUl");
var $caidanRight = $candanUl.find(".caidanRight");
	$candanUl.on("mouseenter","li",function(){
		var $index = $(this).index();
		$caidanRight.eq($index).show();
	}).on("mouseleave","li",function(){
		var $index = $(this).index();
		$caidanRight.eq($index).hide();
	})
/*===============nav=====================*/
var $navyundong = $(".navyundong");
var $man = $(".man");
	 $navyundong.on("mouseenter",function(){
	 	var $_index = $(this).index()-1;
	 	$man.eq($_index).show();
	 }).on("mouseleave",function(){
	 	var $_index = $(this).index()-1;
	 	$man.eq($_index).hide();
	 })

	/*=================huanye=============*/
	var $pic = $('.paixuR').find('input');
	var $fenshu = $('#fenshu');//自动变换第几页
	var $jiaxu = $('#jiaxu');//j价格排序
	var now=0;
	//默认状态
	jiazai(now);

	var $div = $('.pic');
		//下一页点击加载
		$pic.eq(1).on('click',function(){
			$pic.eq(0).show();
			$div.empty();
			now ++;	
			//alert(now);
			if(now >= 4){
				now = 0;	
			}
			jiazai(now);
			$fenshu.html((now+1)+'/4');
		});
		//上一页
		$pic.eq(0).on('click',function(){
			$div.empty();
			now --;	
			if(now < 0){
				now = 3;
			}
			jiazai(now);
			$fenshu.html((now+1)+'/4');
		})
		//j价格排序;
		$jiaxu.on('click',function(){
			fnAjax("../json/chanpin"+now+".txt?sDate =" + new Date().getTime(),fnA,fnB);
			function fnA(res){
				var Sdate = JSON.parse(res);
				//生成数组遍历
				var jiage=[];
				$.each(Sdate,function(index,val){
				    var zifu = val.xianjia.substr(1,3);
				    jiage.push(zifu);
				})
				for(var i= 0;i< jiage.length;i++){
					for(var j = i+1;j< jiage.length;j++){
						if(jiage[i] > jiage[j]){
							jiage[i] = jiage[j];
							jiage[j] = jiage[i];
						}
					}
				}
				 alert(jiage);
			}
			function fnB(){
			alert('服务器繁忙');
		}
		})
		
	function jiazai(){
		fnAjax("../json/chanpin"+now+".txt?sDate =" + new Date().getTime(),fnA,fnB);//时间是毎会时间变动充新加载json的内容
		 function fnA(res){
		 //转换获取的res类型
			var aDate = JSON.parse(res);
				$.each(aDate,function(index,val){
					var  $img = $('<img/>').attr({"src":'../images/'+val.img +".jpg"});
					var $oA = $('<a>/').attr("href","chanpinjieshao.html").append($img);
					//生成dt
					var $dt = $("<dt/>").append($oA);
					
					//dd内容
					//span
					var $span = $("<span/>").text(val.xianjia);
				
					//s
					var $s = $('<s/>').text(val.yuanjia);
					//写入p标签
					var $ps = $('<p/>').addClass('jiage').html([$span,$s]);
							
					//pre
					var $pre = $('<pre/>').text(val.jieshao);
					var $p = '<p class="shouchu">'+val.yishou +'<i>'+val.chushou+"</i>"+val.jian+"</p>";
						
					//写入dd
					var $dd = $('<dd/>').html([$ps,$pre,$p]);
					
					var $dl = $('<dl/>').html([$dt,$dd]);
					//console.log( $dl)
					
					$div.append($dl);
				})
				
		 }
		function fnB(){
			alert('服务器繁忙');
		}
	}
	
	/*===============youcelan==================*/

var $cedeBar = $('.cedeBar');//第二层div
var $cedeBar_d = $cedeBar.parents();//最外层
var $dUl = $cedeBar.find("ul");
var $sLi = $dUl.children('li');
var $cedeBar_Right = $(".pink").children("div");//div
var $rigBot = $('.rigBot');
	$rigBot.addClass('rigBot');
var $current;
//console.log($cedeBar_Right)
	var kaiguan = true;
	//$cedeBar_Right.eq(0).css({zIndex:1});
	$dUl.on('click','li',function(e){
		
		
		if($(this).hasClass('active')){
			$cedeBar_d.animate({right:-215});
			$(this).removeClass('active');
			return;
		}
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$cedeBar_d.animate({right:0});
		$current = $cedeBar_Right.eq(index);

		$current.css({width:106,height:250,left:"25%",top:"25%",zIndex:9}).stop().animate({height:500,width:215,left:0,top:0}).siblings().css({zIndex:0});
		e.stopPropagation();
		
	})

$(document).click(function(){
	if($cedeBar_d.css("right")==0+"px"){
		//$cedeBar_d.css({right:-215});
		$cedeBar_d.animate({right:-215});
		$sLi.removeClass();
	}
	
})
	//侧边栏 滑过
	$rigBot.on('mouseenter','p',function(){
		$rigBot.addClass('rigBot');
		var $this = $(this).index();
		var $spans = $(this).children('span');
		$(this).addClass('hong');
		 $spans.css({right:50}).show().stop().animate({right:35});
		 
	}).on('mouseleave','p',function(){
		$rigBot.addClass('rigBot');
		var $this = $(this).index();
		$(this).removeClass('hong');
		var $spans = $(this).children('span');
		$spans.hide().css({right:50});
	})

	
})