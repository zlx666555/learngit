//点击事件
function cliEvent(){
	var _list = $(".tab-item").get();
	var _list2 = $(".text-box").get();
		$(_list[1]).click(function(){
			$(this).addClass("selected");
			$(_list[0]).removeClass("selected");
			$(".selected").css({"border-left":"1px solid #ddd","border-right":"none"});
			$(_list2[1]).css("display","block");
			$(_list2[0]).css("display","none");
		})
		$(_list[0]).click(function(){
			$(this).addClass("selected");
			$(_list[1]).removeClass("selected");
			$(this).css({"border-right":"none"});
			$(_list2[0]).css("display","block");
			$(_list2[1]).css("display","none");
		})
}
function header(){
	$(".main-search .n-search-tabs").hover(function(){
		$(".main-search .n-search-tabs li").show()
			},function(){
			$(".main-search .n-search-tabs li:not(.current)").hide()
		});
		$(".drop-div").hover(function(){
			$(".watch-app").addClass("hover-menu");
			$(".watch-wrap").show()
		},function(){
			$(".watch-app").removeClass("hover-menu");
			$(".watch-wrap").hide()
		})
}
//qq header
function tencent(){
	$(".login-type").hover(function(){
		$(".open-login").slideDown(100);
		var _list = $(".login-option").get();
		for(var i = 0;i < _list.length;i ++){
			$(_list[i]).hover(function(){
				$(this).css("color","red")
			},function(){
				$(this).css("color","rgb(102,102,102)")
			})
		}
	},function(){
		$(".open-login").slideUp(100);
	})
}
$(document).ready(function(){
	tencent();
	header();
	cliEvent();
})
