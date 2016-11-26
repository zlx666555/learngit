//记住密码
function rember(){
//	console.log(_s)
	if(getCookie("num") == 1){
		$("#email").val(getCookie("phone"));
		$(".i-passwd").val(getCookie("secret"));	
	}
}

//cookie
function cookie(_s){
	$(".trace-click").click(function(){
		//alert(getCookie("phone"));
		//alert(getCookie("密码"));
		if($("#email").val() !== getCookie("phone")){
			$(".youxiang-error").css("display","inline");
		}else{
			$(".youxiang-error").css("display","none");
		}
		if($(".i-passwd").val() !== getCookie("secret")){
			$(".pw-error").css("display","inline");
		}else{
			$(".pw-error").css("display","none");
		}
		if($("#email").val() == getCookie("phone") && $(".i-passwd").val() == getCookie("secret")){
			//alert("登录成功!")
			//$("#remember-me").attr({checked:"checked"});
			_s = 1;
			createCookie("num",_s,setCookieTime(3));
			//removeCookie("num");
		}
	})
	$("#remember-me").click(function(){
		removeCookie("num");
	})
}
function onfou(){
	var arr = $("#email_list li").get();
	if($("#email").val() == ""){
		$("#email_list").css({"display":"none"});
	}else{
		for(var i = 1;i < arr.length;i ++){
			$(arr[i]).click(function(){
				$("#email").val($(this).text());
				$("#email_list").css({"display":"none"});
			})
		}
	}
}
function passwd(){
	$("#email").on({
		focus:function(){
			$("#email_list").css({"display":"block"});
			var arr = $("#email_list li").get();
			//console.log(arr);
			for(var i = 1;i < arr.length;i ++){
			   $(arr[i]).hover(function(){
			   		$(this).addClass("current");
			   		$(this).css({"background-color":"rgb(113,191,234)"})
			   },function(){
			   		$(this).removeClass("current");
			   		$(this).css({"background-color":"#fff"})
			   })
			}
		},
		blur:function(){
			//$("#email_list").css({"display":"none"});
			onfou();
		}
	})
	document.getElementById("email").onkeydown = function(evt){
			var e = evt || window.event;
			var arr = $("#email_list li").get();
			var keycode = e.keyCode;
			var keynum = keycode - 48;
			//i ++;
			for(var j = 1;j < arr.length;j ++){
				if(keynum == -40){
					$(arr[j]).children("span").children("span").last().remove();
				}else{
					var _span = document.createElement("span");
					$(arr[j]).children("span").append(_span);
					$(arr[j]).children("span").children("span").last().html(keynum);
				}
			}	
		}
	//onfou();
}
$(document).ready(function(){
	passwd();
	cookie();
	rember();
})
