$(function(){
	/*================top----------------------*/
	huadong($('.topR_02'),$('.dingdan'),$(".myxie"));
	huadong($('.topR_03'),$('.fuwu'),$('.mayxiejs'));
	
	function huadong(oBj,child,firte){//父级元素 要显示的元素
		oBj.on("mouseover",function(){
			firte.addClass("active")
			child.show();
			//oBj.addClass("active");
		}).on("mouseout",function(){
			firte.removeClass("active")
				child.hide();
			//},1000);
			//oBj.removeClass("active");
			
		});	

	}
	/*===================cookie======================*/
	//var $badel = $('#tBodys');
	var $taBles = $('#taBles');
	var kaiguan = false;
	//var $table = $
	var _cookie = document.cookie;
		if(_cookie){

			var acookie = _cookie.split('; ');
			$.each(acookie,function(index,val){
				var arr = val.split('=');
				var chaifen = arr[0];
				if(chaifen.indexOf('../images')!= -1){
					//生成tr;
					var $tr = $('<tr/>');
					var jSonss = JSON.parse(arr[1]);
					//图片生成及写入td1
					var $dA = $('<td/>').addClass('dA')
					var $imgs = $('<img/>').attr("src",jSonss.img);
						$imgs.addClass('imgs');
						$dA.append($imgs);
					//生成p<a + span +td2
					var $dBu = $('<td/>').addClass('dBu')
					var oa = '<a href="">'+ jSonss.xiangqiang + "</a>";
					var ospan = '<span>' + jSonss.title + '</span>';
					$dBu.append([$('<p/>').append(oa),ospan]);
					//生成td3 
					var $dB = $('<td/>').addClass('dB').html('0');
					//td4
					var $dC = $('<td/>').addClass('dC').html(jSonss.shoujia);
					//td5 + button*2 + input
					var $dD = $('<td/>').addClass('dD')
					var $prev = $('<button/>').attr('data-jian',"jian").text('-');
						//$jian.addClass('jian');
					var $ipt = $('<input/>').val(jSonss.shumu);
					var $next = $('<button/>').attr('data-jian','jia').text('+');
						//$jia.addClass('jia');
					$dD.append([$prev,$ipt,$next]);
					//td6 
					var $dE = $('<td/>').addClass('dE').html('-');
					//td7
					var $dF = $('<td/>').addClass('dF').html(jSonss.jaige);
					///td8 + a + p
					var $dG = $('<td/>').addClass('dG');
					var $ssA = $('<a/>').html('收藏');
						$ssA.addClass('shouchang');
					var $oP = $('<P/>').html('删除');
						$oP.addClass('removs');
					 	$dG.append([$ssA,$oP]);
					$tr.append([$dA,$dBu,$dB,$dC,$dD,$dE,$dF,$dG]);
					$taBles.append($tr);
					kaiguan = true;
				}
			});
		}

			/*if(_cookie){
				$.each(_cookie.split('; '),function(index,val){
				//生成tr;
				var $tr = $('<tr/>');
				var jSonss = JSON.parse(val.split('=')[1]);
				//图片生成及写入td1
					var $dA = $('<td/>').addClass('dA')
					var $imgs = $('<img/>').attr("src",jSonss.img);
						$imgs.addClass('imgs');
						$dA.append($imgs);
				//生成p<a + span +td2
					var $dBu = $('<td/>').addClass('dBu')
					var oa = '<a href="">'+ jSonss.xiangqiang + "</a>";
					var ospan = '<span>' + jSonss.title + '</span>';
					$dBu.append([$('<p/>').append(oa),ospan]);
				//生成td3 
					var $dB = $('<td/>').addClass('dB').html('0');
				//td4
					var $dC = $('<td/>').addClass('dC').html(jSonss.shoujia);
				//td5 + button*2 + input
					var $dD = $('<td/>').addClass('dD')
					var $prev = $('<button/>').attr('data-jian',"jian").text('-');
						//$jian.addClass('jian');
					var $ipt = $('<input/>').val(jSonss.shumu);
					var $next = $('<button/>').attr('data-jian','jia').text('+');
						//$jia.addClass('jia');
					$dD.append([$prev,$ipt,$next]);
				//td6 
					var $dE = $('<td/>').addClass('dE').html('-');
				//td7
					var $dF = $('<td/>').addClass('dF').html(jSonss.jaige);
				///td8 + a + p
					var $dG = $('<td/>').addClass('dG');
					var $ssA = $('<a/>').html('收藏');
						$ssA.addClass('shouchang');
					var $oP = $('<P/>').html('删除');
						$oP.addClass('removs');
					 	$dG.append([$ssA,$oP]);
					$tr.append([$dA,$dBu,$dB,$dC,$dD,$dE,$dF,$dG]);
					$taBles.append($tr);
					kaiguan = true;
				})

			}*/

		/*======================点击事件===========================*/
		if(kaiguan){
			/*var $jianyi = $('.dD').children('button[data-jian=jian]');//.filter('[data-jian=jian]')
			var $jiayi = $('.dD').children('button[data-jia = jia]');//不能空格*/
			var shu = $('tr').find('input');
			var $zonge = $('.zonge').find('em');
			var $shuliang  = $('.shuliang').find('i');
			zongji(shu);
			
			$taBles.on('click',"button[data-jian]",function(){
				//alert(11)
				var $tr = $(this).closest('tr');
				var $input = $tr.find('input');
				var $xiaoji = $tr.children('.dF');
				var $shoujia = $tr.children('.dC').text();
				var num = Number($input.val());
				//点击加高亮
				$(this).on("mousedown",function(){
						$(this).addClass('jia');
					}).on('mouseup',function(){
						$(this).removeClass('jia');
					});

				if($(this).attr('data-jian') == 'jian'){
					num--;
					if(num<0){
						num=0;
					}
					$input.val(num);
					$xiaoji.html((num*Number($shoujia)).toFixed(2));
					zongji(shu);

				}else{
					num++;
					$input.val(num);
					$xiaoji.html((num*Number($shoujia)).toFixed(2));
					zongji(shu);

				};
				
			});
			//删除整条购物内容
			$taBles.on('click','.removs',function(e){
				var $tr = $(this).closest('tr');
				$tr.remove();
				e.stopPropagation();

			})
			
			//	商品总计/数量
			function zongji(iputs){
				var zonglaing = 0;
				$.each(iputs,function(index,vals){
					if($(vals).val()){
						zonglaing += Number($(vals).val());	
					}
				});
				$shuliang.html(zonglaing);
				$zonge.html((zonglaing*139.00).toFixed(2));
			}
		}

		
})
