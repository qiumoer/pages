
$(function(){
/*===================zhuceyonghu===============*/
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
					document.cookie = 'denglu={"":""}; expires='+ aDate; 
				$(window).unload(function(){
					alert("您确定要离开此页面吗？")
				})


				})
			}
		});
	}
/*==================fanhuidingbu===========================*/

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
	
});
$butn.click(function(){
	var $scrolltop = $(window).scrollTop();
	$("html body").animate({scrollTop:0});		
});
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
	});
/*===============nav=====================*/
var $navyundong = $(".navyundong");
var $man = $(".man");
	 $navyundong.on("mouseenter",function(){
	 	var $_index = $(this).index()-1;
	 	$man.eq($_index).show();
	 }).on("mouseleave",function(){
	 	var $_index = $(this).index()-1;
	 	$man.eq($_index).hide();
	 });
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
		
	});

	$(document).click(function(){
		if($cedeBar_d.css("right")==0+"px"){
			//$cedeBar_d.css({right:-215});
			$cedeBar_d.animate({right:-215});
			$sLi.removeClass();
		}
		
	});
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
/*=====================产品展示d大小图切换=====================*/
var $mainL = $('.mainLtop').find('div');
var $fangda = $('.fangda');
var $mainLbtm =$('.mainLbtm');
var $sp = $mainLbtm.find('span');
var $aImg;
var $quanju;
var $oDiv;
	$mainL.eq(0).css({zIndex:1});//大图
	$mainLbtm.on('click','div',function(){
		//$mainL.css({zIndex:0});
		$sp.hide();
		$quanju= $(this).index();console.log($quanju)
		$mainL.eq($quanju).css({zIndex:1}).siblings().css({zIndex:0});//大图
		$sp.eq($quanju).show();
		$(this).addClass('active').siblings().removeClass('active');

	})
	/*===================fangdajing=====================*/
	 $('.mainLtop').on('mouseenter','img',function(){
	 	//var index3 = $(this).index();
	 	$fangda.empty();
		$aImg = $('<img/>');
		$aImg.attr('src',$(this).attr("src"));
		$aImg.width(860);
		$aImg.height(860);
		$aImg.appendTo($fangda);
	 	$fangda.show();	
	 	//div跟随鼠标(居中)
			var $widthDiv =  $('.mainLtop').offset().left;
			var $heightDiv =  $('.mainLtop').offset().top;
			var $bianjieWidth =  $('.mainLtop').outerWidth()-100;
			var $bianjieTop =  $('.mainLtop').outerHeight()-100;
			$oDiv  = $('.touming');
			$oDiv.show();
		$(document).on('mousemove',function(e){
			//toumingdiv的位置
			var _left = e.pageX - $widthDiv - 50;
			var _top = e.pageY - $heightDiv- 50;
			//判断大于宽度高度时改变元素的top,left
			
			if(_left > $bianjieWidth-13){
				//console.log($widthDiv- $('.mainLtop').width());
				_left= $bianjieWidth-13;//13：在图片范围内
			}else if(_left < 12){
				_left = 12;
			}
			if(_top > $bianjieTop-90 ){
				_top=$bianjieTop-90;
			}else if(_top < 80){//offset查看top值
				_top = 80;
			}
			$oDiv.css({left:_left,top:_top,zIndex:11111});
			//图片的left top值
			$aImg.css({position:"absolute",left:-_left*2,top:-_top*2});
		
		});
		
	 	
	 }).on('mouseleave',function(){
	 	$fangda.empty();
	 	$aImg.remove();
	 	$fangda.hide();
	 	$(document).remove('mousemove');
	 	$oDiv.hide();
	 	
	 	
	 });
	/*==============存入cookie值及弹框 ==========*/
	var jihe = {};
	var $num = $('#num');
	var $gouwu = $('.gouwu');
	var $baifenbai = $('.baifenbai');
	var $inum = $('#inum');
	var $emnum = $('#emnum');
	var $tankuan = $('.tankaun');
	var $zhezhao = $('.zhezhao');
	var $guanbi = $('.guanbi');
	var $imgss = $('.pigcolor').find('img');
	var $gou = $('.pigcolor').find('i');
	var $p1 = $('.p1').find('i');
	var $mainRtop = $('.mainRtop').children('h4');
	var tkLeft;
	var tkTop;
	var curentImg;//全局的src做判断
	//图片点击事件
	$imgss.eq(0).addClass('active');
	$gou.eq(0).show();
	jihe.img  = $imgss.eq(0).attr("src");
	jihe.title =  $imgss.eq(0).attr("title");
	$imgss.on('click',function(){
		$num.val(' ');
		$imgss.removeClass('active');
		$(this).addClass('active');
		$imgss.next().hide();
		$(this).next().show();
		jihe.img = $(this).attr("src");
		jihe.title = $(this).attr("title");
		curentImg = $(this).attr("src");
	})
/*========================点击购买数量==================*/
	var $jian = $("#jian");
	var $jia = $('#jia');
	var $shuliang = $('.shuliang');
	$jian.on('click',function(){
		var sum = Number($num.val());
		sum--;
		if(sum<0){
			return;
		}
		$num.val(sum);
		$shuliang.html(sum);

	}).on("mousedown",function(){
		$(this).addClass('active');
	}).on('mouseup',function(){
		$(this).removeClass('active');
	});

	$jia.on('click',function(){
		var sum = Number($num.val());
			sum++;
			$num.val(sum);
			$shuliang.html(sum);
		
	}).on("mousedown",function(){
		$(this).addClass('active');
	}).on('mouseup',function(){
		$(this).removeClass('active');
		$num.empty();

	});

	
	/*============加入购物车==================*/
	$gouwu.on('click',function(e){
		//取得上一条cookie中img的src做 判断
		var _cookie = document.cookie;
		if(_cookie){//不加判断条件，浏览器报错，一开始cookie值是空;
			$.each(_cookie.split('; '),function(index,val){
				var name = 	JSON.parse(val.split('=')[1]);
				if(name.img == curentImg){
					name.shuliang += $num.val();
				}else{
					name.shuliang = $num.val();
				}
			})//判断如果上一条cookie里面有这张图片val就跟原来的相加
		}
			
	
		if($num.val() != "" ){
			var dcoHeight = $(document).height();
			$baifenbai.show()
			$zhezhao.css({height:dcoHeight,zIndex:0});
			$inum.html($num.val());
			jihe.shumu = $num.val();
			var zongji = (139.00*$num.val()).toFixed(2);
			jihe.jaige = zongji;
			$emnum.html(zongji);
			jihe.xiangqiang = $mainRtop.html();
			jihe.shoujia = $p1.html();
			$imgss.removeClass('active');//图片清楚类
			$gou.hide();
			
			var pic = jihe.img +"="+JSON.stringify(jihe);
			document.cookie =  pic;
			weizhi();
			$(window).on("resize scroll",weizhi);
			//关闭弹框
			$guanbi.on('click',function(){
				$baifenbai.hide();
				$num.val('');
				$imgss.eq(0).addClass('active');
				$gou.eq(0).show();
			});
			
			
		}else{
			alert("请选择商品数量");
		}
		e.preventDefault();
	});
	//点击购物车跳转页面
	$rigBot.eq(0).click(function(){
		location.href = "gouwuche.html";
		$num.val('');
		//$imgss.removeClass('active');
	});
	function weizhi(){
		tkLeft = ($(window).width()-$tankuan.outerWidth())/2+$(window).scrollLeft();
		tkTop = ($(window).height()-$tankuan.outerHeight())/2+$(window).scrollTop();
		$tankuan.css({left:tkLeft,top:tkTop,zIndex:999999});
	}
	
	/*===================jieshaoqiehuan================*/
	var $dingwei  = $('.dingwei');
	var $list = $('.list').children('div');
	$dingwei.on('click','li',function(){
		var index3 = $(this).index();
		$list.eq(index3).show().siblings().hide();
		$(this).addClass('active').siblings().removeClass('active');
		
	});
	
})