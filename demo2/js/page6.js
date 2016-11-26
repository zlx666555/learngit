//全选
function chose(){
	$('input[type = "checkbox"]').click(function(){
		//$('input[type = "checkbox"]').removeAttr("checked");
		if(getCookie("checked") == 888){
			$('input[type = "checkbox"]').removeAttr("checked");
			removeCookie("checked");
		}else{
			window.location.reload();
		}
	})
}
//刷新购物车
function shuaxin(){
	$(".cart-empty .action .iconfont").click(function(){
		window.location.reload();
	})
}
function  panduan(){
	if(Number(getCookie("car")) < 1){
		$(".p20").css("display","none");
		$(".cart-empty").css("display","block")
		//console.log("q");
	}
}
function del(){
	$(".view-DelItemBtn,.view-BatchDelBtn").click(function(){
		var r = confirm("确定删除商品吗?");
		if(r == true){
			$(".p20").css("display","none");
			$(".cart-empty").css("display","block")
			//getCoke("car");
			delCookie("car","/pc_project");
			delCookie("addcar","/pc_project");
		}else{
			$(".p20").css("display","block");
			$(".cart-empty").css("display","none")
		}	
	})
}
//动态添加
function addshopper(){
	//removeCookie("car");
	$(".view-ItemEntryNum").val(getCookie("car"));
	$(".view-EventTotal").html(Number(getCookie("price")) * Number(getCookie("car")) + ".00");
	$(".view-ItemSubtotal").html(Number(getCookie("price")) * Number(getCookie("car")) + ".00");
	$(".red").html(getCookie("car"));
	$(".cart-payment").html(Number(getCookie("price")) * Number(getCookie("car")) + ".00")
}
//加减效果
function add_re(){
	var _value =  Number($(".view-ItemEntryNum").val());
	console.log(_value)
	$(".add-num").click(function(){
		if(_value >= 1 && _value < 5){
			$(".del-num").css("background-color","#DFDFDF");
			$(".view-ItemEntryNum").val(++_value);
			if(_value == 5){
				//$(".noticeMaxBuy").css("display","inline");
			}
			createCookie("car01",_value);
			$(".view-EventTotal").html(Number(getCookie("price")) * Number(getCookie("car01")) + ".00");
			$(".view-ItemSubtotal").html(Number(getCookie("price")) * Number(getCookie("car01")) + ".00");
			$(".red").html(getCookie("car01"));
			$(".cart-payment").html(Number(getCookie("price")) * Number(getCookie("car01")) + ".00");
		}	
	})
	$(".del-num").click(function(){
		if(_value > 1){
			$(".view-ItemEntryNum").val(--_value);
			//$(".noticeMaxBuy").css("display","none");
			if(_value == 1){
				$(".del-num").css("background-color","#BBBBBB");
				$(".del-num").css("cursor","default");
				_value = 1
			}
			createCookie("car01",_value);
			$(".view-EventTotal").html(Number(getCookie("price")) * Number(getCookie("car01")) + ".00");
			$(".view-ItemSubtotal").html(Number(getCookie("price")) * Number(getCookie("car01")) + ".00");
			$(".red").html(getCookie("car01"));
			$(".cart-payment").html(Number(getCookie("price")) * Number(getCookie("car01")) + ".00")
		}
	})
	$(".del-num").hover(function(){
		if(_value > 1){
			$(".del-num").css("cursor","pointer");
		}
	})	
}
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
		$("#offer-submit").click(function(){
			alert("粘贴淘宝天猫商品标题在这，如韩都衣舍连衣裙");
		})
}
$(document).ready(function(){
	panduan();
	header();
	tencent();
	addshopper();
	add_re();
	del();
	shuaxin();
	chose();
	createCookie("checked",888);
})