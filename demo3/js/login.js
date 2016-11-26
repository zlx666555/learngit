$(function(){
	$("");
	$("#login").click(function(){
		$.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		    data:{
		    	status:"login",
		    	userID:$(".username input").val(),
		    	password:$(".password input").val(),
		    },
		    success:function(data){
		    	if(data==0){
		    		alert("用户名不存在");
		    	}else if(data==2){
		    		alert("用户名密码不符");
		    	}else{
		    		var result = JSON.parse(data);
		    	  localStorage.setItem("userID",result.userID);
		    	window.location.href="index.html";
		    	}
		    }
		});
	})
})
