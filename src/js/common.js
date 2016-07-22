	/*==========top=======*/

	function huadong(oBj,child){
		oBj.on("mouseover",function(){
			child.show();

			oBj.addClass("active");
		}).on("mouseout",function(){
			//setTimeout(function(){
				child.hide();
			//},1000);
			oBj.removeClass("active");
			
		});	

	}
/*====================轮播图=================*/	
function zidonglunbo(funame,ziname,yuan,warip){//ul/li/spanfuji/移入定时
	
		//var $pic = $('.pic');
		//var $oLi = $pic.children("li");
		//var $yuan=$('.yuan');
		var now = 0;
		for(var i = 0; i < ziname.length;i++){
			$("<span/>").appendTo(yuan);
		}
		var $span = yuan.children("span");
		ziname.eq(0).css({opacity:1});
		$span.eq(0).addClass("active");
		funame[0].timer = setInterval(dingshi,2000);
		
		yuan.on('mouseenter','span',function(){
			clearInterval(funame[0].timer);
			now = $(this).index();
			lunbo(now);
		}).on('mouseleave','span',function(){
			funame[0].timer = setInterval(dingshi,2000);
			now = $(this).index();
			lunbo(now);
		});
		warip.on("mouseenter",function(){
			clearInterval(funame[0].timer);
		}).on("mouseleave",function(){
			funame[0].timer = setInterval(dingshi,2000);
		})
		function dingshi(){
			now++;
			if(now >= ziname.length){
				now = 0;
			}
			lunbo(now);

		}	
		function lunbo(now){
			ziname.eq(now).stop().animate({opacity:1},1500).siblings().stop().animate({opacity:0},1500);
			$span.eq(now).stop().addClass("active").siblings().removeClass("active");
		}
	}
	/*============================小图移动====================*/
	function pianyi(picman){
	$.each(picman,function(index,val){
		$(this).hover(function(){
			$(this).find("img").animate({left:-2,width:195})
		},function(){
			$(this).find("img").animate({left:0,width:195})
		})
	})
}