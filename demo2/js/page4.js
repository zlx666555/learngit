//短信验证
function letter(data){
	var arrNum = data["letter"];
	var k = Math.floor(Math.random()*10);
	console.log($('#sms-btn'));
	$('#sms-btn').click(function(){
		$("#tel-validate-input").val(arrNum[k]);
	})
}
//验证码
function yan(data){
	var arr = data["yanzheng"];
	var k = Math.floor(Math.random()*10);
	$(".checkimg").html(arr[k]);
}
//随机数
	function random(){
		$.post("../json/page4.json",null,function(data,textStatus){
			yan(data);
			letter(data);
		},"json");
	}
//表单验证
function sub(){
	//console.log($('#telnum-input'));
	//用户名验证
	$('#telnum-input').bind('blur',function(){
	if( $(this).val() == '' ){
		$('#parsley-id-8081').css('opacity','1');
		$('#parsley-id-8081 .parsley-required').html("手机号不能为空");
		$("#telnum-input").css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
	}else{
		var re = /^1[34578][0-9]\d{8}$/
		var str = $(this).val();
		str = str.replace(/\s/g , '');
		if( str.length < 11 || re.test(str) == false){
			$('#parsley-id-8081').css('opacity','1');
			$('#parsley-id-8081 .parsley-required').html("手机号错误");
			$("#telnum-input").css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
		}else{
			$("#telnum-input").css({"background-color":"rgb(223,240,216)","color":"rgb(70,136,71)"});
			$('#parsley-id-8081').css('opacity','0');
		}
	}
	})
	//验证码验证
	$('#phone-checkcode-input').bind('blur',function(){
	if( $(this).val() == '' ){
		$('#parsley-id-1257').css('opacity','1');
		$('#parsley-id-1257 .parsley-required').html("验证码不能为空");
		$("#phone-checkcode-input").css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
	}else{
		var re = /^\w{4}$/
		var str = $(this).val();
		str = str.replace(/\s/g , '');
		if(re.test(str) == false || str !== $(".checkimg").html()){
			$('#parsley-id-1257').css('opacity','1');
			$('#parsley-id-1257 .parsley-required').html("验证码错误");
			$("#phone-checkcode-input").css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
		}else{
			$("#phone-checkcode-input").css({"background-color":"rgb(223,240,216)","color":"rgb(70,136,71)"});
			$('#parsley-id-1257').css('opacity','0');
		}
	}
	})
	//短信验证
	$('#tel-validate-input').bind('blur',function(){
	if( $(this).val() == '' ){
		$('#parsley-id-5769').css('opacity','1');
		$('#parsley-id-5769 .parsley-required').html("验证号不能为空");
		$(this).css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
	}else{
		var re = /^\d{6}$/
		var str = $(this).val();
		str = str.replace(/\s/g , '');
		if(re.test(str) == false){
			$('#parsley-id-5769').css('opacity','1');
			$('#parsley-id-5769 .parsley-required').html("验证号错误");
			$(this).css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
		}else{
			$(this).css({"background-color":"rgb(223,240,216)","color":"rgb(70,136,71)"});
			$('#parsley-id-5769').css('opacity','0');
		}
	}
	})
	//密码验证
	$('#pwd-input').bind('blur',function(){
	if( $(this).val() == '' ){
		$('#parsley-id-4861').css('opacity','1');
		$('#parsley-id-4861 .parsley-required').html("密码不能为空");
		$(this).css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
	}else{
		var re = /^\w{6,}$/
		var str = $(this).val();
		str = str.replace(/\s/g , '');
		if(re.test(str) == false){
			$('#parsley-id-4861').css('opacity','1');
			$('#parsley-id-4861 .parsley-required').html("密码不能小于6位");
			$(this).css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
		}else{
			$(this).css({"background-color":"rgb(223,240,216)","color":"rgb(70,136,71)"});
			$('#parsley-id-4861').css('opacity','0');
		}
	}
	})
	//确认密码
	$('#pwd-confirm').bind('blur',function(){
	if( $(this).val() == '' ){
		$('#parsley-id-0393').css('opacity','1');
		$('#parsley-id-0393 .parsley-required').html("确认密码不能为空");
		$(this).css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
	}else{
		//var re = /^\w{6,}$/
		var str = $(this).val();
		str = str.replace(/\s/g , '');
		if(str !== $('#pwd-input').val()){
			$('#parsley-id-0393').css('opacity','1');
			$('#parsley-id-0393 .parsley-required').html("两次输入密码不同");
			$(this).css({"background-color":"rgb(242,222,222)","color":"rgb(185,74,72)"});
		}else{
			$(this).css({"background-color":"rgb(223,240,216)","color":"rgb(70,136,71)"});
			$('#parsley-id-0393').css('opacity','0');
		}
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
	tencent();
	header();
	sub();
	random();
	$("#reg-submit-btn").click(function(){
		createCookie("phone",$("#telnum-input").val(),setCookieTime(3));
		createCookie("secret",$("#pwd-input").val(),setCookieTime(3));
//		alert(getCookie("手机号"));
//		alert(getCookie("密码"));	
	})
})