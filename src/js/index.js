$(function(){
/*==================yonghuqiehuan===========*/
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

			});
		}
	});
}
/*$(window).unload(function(){
	alert("您好？要离开此页面吗？")
});*/
$(window).unload( function () { alert("Bye now!"); } );
/*=================gundongtiao==================*/
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
/*=================banenr=================*/
	var $pic = $('.pic');
	var $oLi = $pic.children("li");
	var $yuan=$('.yuan');
	var $touming = $(".touwrip");
	//zidonglunbo($pic,$oLi,$yuan,$touming);
		var now = 0;
		for(var i = 0; i < $oLi.length;i++){
			$("<span/>").appendTo($yuan);
		}
		var $span = $yuan.children("span");
		 $oLi.eq(0).css({opacity:1});
		$span.eq(0).addClass("active");
		$pic[0].timer = setInterval(dingshi,2000);
		
		$yuan.on('mouseenter','span',function(){
			clearInterval($pic[0].timer);
			now = $(this).index();
			lunbo(now);
		}).on('mouseleave','span',function(){
			$pic[0].timer = setInterval(dingshi,2000);
			now = $(this).index();
			lunbo(now);
		});
		$touming.on("mouseenter",function(){
			clearInterval($pic[0].timer);
		}).on("mouseleave",function(){
			$pic[0].timer = setInterval(dingshi,2000);
		});
		function dingshi(){
			now++;
			if(now >= $oLi.length){
				now = 0;
			}
			lunbo(now);

		}	
		function lunbo(now){
			$oLi.eq(now).stop().animate({opacity:1},1500).siblings().stop().animate({opacity:0},1500);
			$span.eq(now).stop().addClass("active").siblings().removeClass("active");
		}



/*===================xialunbo==========================*/
	
	var $xiaoyuan=$('.xiaoyuan').children("span");
	var $aLi = $(".xiaopic").find('li');
	$aLi.eq(0).css({display:"block"})
	
	$xiaoyuan.on("mouseenter",function(){
		var indexs = $(this).index();console.log(indexs)
		$aLi.eq(indexs).css({display:'block'}).siblings().css({display:"none"});
		$(this).addClass("active").siblings().removeClass("active");
		
	}).on("mouseleave",function(){
		$xiaoyuan.removeClass("active");
		
	});

/*========================main==========================*/
	var $fanzhuan = $(".fanzhuan");
	//var $fanLi =  $fanzhuan.children("li");
	//var $fspan = $fanzhuan.find("span");
	$.each($fanzhuan,function(index,val){
		var $fanLi =  $(this).children("li");
		var $fspan = $(this).find("span");
		$(this).on("mouseenter",'li',function(){	
				$(this).children('a').hide().next().show();
		}).on("mouseleave",'li',function(){
			
				$(this).children('a').show().next().hide();
		})
		
	});

/*================center=====================*/
var $loutiCen = $(".loutiCen");
	$.each($loutiCen,function(index,val){
		$(this).hover(function(){
			$(this).find("img").animate({left:-10,width:395})
		},function(){
			$(this).find("img").animate({left:0,width:393})
		})
	});
	

/*==============right=================*/
var $picman = $(".picman").children("a");
	pianyi($picman);

var $picnv = $(".picnv").children("a");
	pianyi($picnv);


/*===============youcelan==================*/

var $cedeBar = $('.cedeBar');//第二层div
var $cedeBar_d = $cedeBar.parents();//最外层
var $dUl = $cedeBar.find("ul");
var $sLi = $dUl.children('li');
var $cedeBar_Right = $(".pink").children("div");//div
var $current;
//console.log($cedeBar_Right)
	var kaiguan = true;
	//$cedeBar_Right.eq(0).css({zIndex:1});
	$dUl.on('click','li',function(e){
		if($(this).hasClass('active')){
			$cedeBar_d.animate({right:-215});
			$(this).removeClass();
			return;
		}
		$(this).addClass('active').siblings().removeClass();
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

})



