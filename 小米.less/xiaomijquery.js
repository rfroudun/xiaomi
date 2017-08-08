$(function(){
//	顶部导航二级菜单开始
	var seew=$("body").width();
	$(".zhongjian .zjerji").css({"width":seew+"px","margin-left":-seew/2+"px"});
	$(window).resize(function(){
		var seew=$("body").width();
		$(".zhongjian .zjerji").css({"width":seew+"px","margin-left":-seew/2+"px"});
	})
	$(".zhongjian .zjnr").mouseenter(function(){
		$(this).find(".zjerji").show().stop().animate({"height":"230px"},300);
		$(this).siblings(".zjnr").find(".zjerji").hide().css({"height":"230px"});
		
	})
	$(".zhongjian").mouseleave(function(){
		$(this).find(".zjerji").stop().animate({"height":"0px"},300)
	})
//	顶部导航二级菜单结束


//	轮播图开始
	var num=0;
	function public(){
		$("#lbt .a").eq(num).find("img").stop().fadeIn(500);
		$("#lbt .a").eq(num).siblings(".a").find("img").stop().fadeOut(500);
		$("#lbt ul li").eq(num).addClass("xiaodian").siblings("li").removeClass("xiaodian");
	}
	function flash(){
		num++;
		if (num==6) {
			num=0;
		}
		public();
	}
	var ds=setInterval(flash,1000);
	
	$("#lbt").hover(function(){
		clearInterval(ds);
	},function(){
		ds=setInterval(flash,1000)
	})
	
	$("#left").click(function(){
		num--;
		if (num==-1) {
			num=5;
		}
		setTimeout(function(){
			public();
		},500)
	})
	
	$("#right").click(function(){
		num++;
		if (num==6) {
			num=0;
		}
		setTimeout(function(){
			public();
		},500)
	})
	
	$("#lbt ul li").click(function(){
		num=$(this).index();
		setTimeout(function(){
			public();
		},500)
	})
//	轮播图结束


//明星单品滑动轮播开始
	var ber=0;
	var dingshi=setInterval(function(){
		ber++;
		if (ber==2) {
//			$(".danpin").css({"left":"0px"})
			ber=0;
		}
		if (ber==0) {
			$("#title .mingx").eq(ber).addClass("mxyanse").siblings().removeClass("mxyanse");
		}else if (ber==1) {
			$("#title .mingx").eq(ber).addClass("mxyanse").siblings().removeClass("mxyanse");
		}
		
		$(".danpin").animate({"left":-1226*ber+"px"},500);
	},3000);
	
	$(".mingx").hover(function(){
		clearInterval(dingshi);
	},function(){
		dingshi=setInterval(function(){
		ber++;
		if (ber==2) {
			ber=0;
		}
		$(".danpin").animate({"left":-1226*ber+"px"},500);
	},3000)
	});
	
	$("#mxleft").click(function(){
		$(this).addClass("mxyanse").siblings().removeClass("mxyanse");
		$(".danpin").stop().animate({"left":0+"px"},500);	
	})
	
	$("#mxright").click(function(){
		$(this).addClass("mxyanse").siblings().removeClass("mxyanse");
		$(".danpin").stop().animate({"left":-1226+"px"},500);
		
	});
	
//明星单品滑动轮播结束

//主内容tab切换开始

	$("#zhuneirong .biaotiyou li").mouseenter(function(){
		var aa =$(this).index();
		$(this).parents(".biaoti").siblings(".neirong").find(".nryou").eq(aa).show().siblings(".nryou").hide();
		$(this).addClass("znr_yanse").siblings("li").removeClass("znr_yanse");
	})
//主内容tab切换结束

//主内容为你推荐开始
var tuij=0;
	$("#tjleft").click(function(){
		tuij--;
		if (tuij<0) {
			tuij=0;
		}
		$(this).addClass("tjyanse").siblings().removeClass("tjyanse");
		$(".tuijian").stop().animate({"left":-1226*tuij+"px"},500);	
	})
	
	$("#tjright").click(function(){
		tuij++;
		if (tuij>3) {
			tuij=3;
		}
		$(this).addClass("tjyanse").siblings().removeClass("tjyanse");
		$(".tuijian").stop().animate({"left":-1226*tuij+"px"},500);
		
	});
//主内容为你推荐开始

//内容切换开始

	
//	图书
//var ts=0;
//	$(".tsleft").click(function(){
//		ts--;
//		if (ts==-1) {
//			ts=0;
//		}
//		$(".tshu").stop().animate({"left":-296*ts+"px"},500);
//		$(".kuang .ts li").eq(ts).addClass("dianset").siblings("li").removeClass("dianset");
//	})
//	
//	$(".tsright").click(function(){
//		ts++;
//		if (ts==3) {
//			ts=2;
//		}
//		$(".tshu").stop().animate({"left":-296*ts+"px"},500);
//		$(".kuang .ts li").eq(ts).addClass("dianset").siblings("li").removeClass("dianset");
//	})
//	
//	$(".kuang .ts li").click(function(){
//		ts=$(this).index();
//		setTimeout(function(){
//			$(".tshu").stop().animate({"left":-296*ts+"px"},500);
//			$(".kuang .ts li").eq(ts).addClass("dianset").siblings("li").removeClass("dianset");
//		},500)
//	})
//	
////	主题
//var  zt=0;
//	$(".ztleft").click(function(){
//		zt--;
//		if (zt==-1) {
//			zt=0;
//		}
//		$(".zti").stop().animate({"left":-296*zt+"px"},500);
//		$(".kuang .zt li").eq(zt).addClass("diansez").siblings("li").removeClass("diansez");
//	})
//	
//	$(".ztright").click(function(){
//		zt++;
//		if (zt==4) {
//			zt=3;
//		}
//		$(".zti").stop().animate({"left":-296*zt+"px"},500);
//		$(".kuang .zt li").eq(zt).addClass("diansez").siblings("li").removeClass("diansez");
//	})
//	
//	$(".kuang .zt li").click(function(){
//		zt=$(this).index();
//		setTimeout(function(){
//			$(".zti").stop().animate({"left":-296*zt+"px"},500);
//			$(".kuang .zt li").eq(zt).addClass("diansez").siblings("li").removeClass("diansez");
//		},500)
//	})
//	
////	游戏
//var yx=0;
//	$(".yxleft").click(function(){
//		yx--;
//		if (yx==-1) {
//			yx=0;
//		}
//		$(".yxi").stop().animate({"left":-296*yx+"px"},500);
//		$(".kuang .yx li").eq(yx).addClass("diansey").siblings("li").removeClass("diansey");
//	})
//	
//	$(".yxright").click(function(){
//		yx++;
//		if (yx==4) {
//			yx=3;
//		}
//		$(".yxi").stop().animate({"left":-296*yx+"px"},500);
//		$(".kuang .yx li").eq(yx).addClass("diansey").siblings("li").removeClass("diansey");
//	})
//	
//	
//	$(".kuang .yx li").click(function(){
//		yx=$(this).index();
//		setTimeout(function(){
//			$(".yxi").stop().animate({"left":-296*yx+"px"},500);
//			$(".kuang .yx li").eq(yx).addClass("diansey").siblings("li").removeClass("diansey");
//		},500)
//	})
////	应用
//var yy=0;
//	$(".yyleft").click(function(){
//		yy--;
//		if (yy==-1) {
//			yy=0;
//		}
//		$(".yyong").stop().animate({"left":-296*yy+"px"},500);
//		$(".kuang .yy li").eq(yy).addClass("dianseyong").siblings("li").removeClass("dianseyong");
//	})
//	
//	$(".yyright").click(function(){
//		yy++;
//		if (yy==4) {
//			yy=3;
//		}
//		$(".yyong").stop().animate({"left":-296*yy+"px"},500);
//		$(".kuang .yy li").eq(yy).addClass("dianseyong").siblings("li").removeClass("dianseyong");
//	})
//	
//	$(".kuang .yy li").click(function(){
//		yy=$(this).index();
//		setTimeout(function(){
//			$(".yyong").stop().animate({"left":-296*yy+"px"},500);
//			$(".kuang .yy li").eq(yy).addClass("dianseyong").siblings("li").removeClass("dianseyong");
//		},500)
//	})


	$(".nrong .nr").each(function(){
		var jsthis=$(this)[0];
		jsthis.n=0;
	})

	$(".nrong .you").click(function(){
		var jsthis=$(this).siblings('.nr')[0];
		jsthis.n++;
		var changd= $(this).siblings('.nr').find('li').length;
		if (jsthis.n==changd) {
			jsthis.n=changd-1
		}
		$(this).siblings(".nr").stop().animate({"left":-296*jsthis.n+"px"});
		$(this).siblings(".dian").find("li").eq(jsthis.n).addClass("dianse").siblings("li").removeClass("dianse");
	})

	$(".nrong .zuo").click(function(){
		var jsthis=$(this).siblings(".nr")[0];
		jsthis.n--;
//		var chnagd=$(this).siblings("nr").find("li").length;
		if(jsthis.n==-1){
			jsthis.n=0;
		}
		$(this).siblings(".nr").stop().animate({"left":-296*jsthis.n+"px"});
		$(this).siblings(".dian").find("li").eq(jsthis.n).addClass("dianse").siblings("li").removeClass("dianse");
	})

	$(".nrong ").hover(function(){
		$(".jiantou").show();
	},function(){
		$(".jiantou").hide();
	});


	$(".kuang .dian li").click(function(){
		var jsthis=$(this).parent().siblings(".nr")[0];
		jsthis.n=$(this).index();
		
		$(this).parent().siblings(".nr").stop().animate({"left":-296*jsthis.n+"px"},500);
		$(this).addClass("dianse").siblings("li").removeClass("dianse");
		
	})
//内容切换结束
})