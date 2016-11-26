$("#btn-submit").on("click",function(){
//	console.log(1);
//console.log($())
	var userData = {
		userID:$("#username").val(),
		pass:$("#password").val(),
		code:$("#code").val()
	}
//	console.log(data.pass);

	if(!userData.userID){
//		console.log(2);
		$("#username").css("border-color","red").siblings(".input-help").css({"display":"block","color":"red"}).text("请填写账号");	
		$("#username").siblings(".icon").css("color","red");	
	}else if(!userData.pass){
		$("#password").css("border-color","red").siblings(".input-help").css({"display":"block","color":"red"}).text("请填写密码");	
		$("#password").siblings(".icon").css("color","red");
	}else if(!userData.code){
		$("#code").css("border-color","red").siblings(".input-help").css({"display":"block","color":"red"}).text("请填写右侧的验证码");	
	}else if(userData.code != Number($("#code").siblings("img").attr("name"))){
		$("#code").css("border-color","red").siblings(".input-help").css({"display":"block","color":"red"}).text("验证码输入错误");
	}else {
		$.post("../json/login.json",function(data,textStatus){
			console.log(data.userInfo);
			var flag1 = false;
			var flag2 = false;
			data = data.userInfo;
			for(var i in data){
				if(userData.userID === data[i].userID){
					flag1 = true;
					if(userData.pass === data[i].password){
						flag2 = true;
						location.href = "../index.html";
					}
				}
			}
			if(!flag1){
				$("#username").css("border-color","red").siblings(".input-help").css({"display":"block","color":"red"}).text("账号不存在");	
				$("#username").siblings(".icon").css("color","red");
			}else if(!flag2){
				$("#password").css("border-color","red").siblings(".input-help").css({"display":"block","color":"red"}).text("密码错误");	
				$("#password").siblings(".icon").css("color","red");
			}
			
		},"json")
	}
	
	
	
	
})
