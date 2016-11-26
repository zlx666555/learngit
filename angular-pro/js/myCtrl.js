app.controller("myCtrl",function($scope){
	var settings = [
		{
			setting:"网站设置",
			toPath:"#/content-1"	
		},
		{
			setting:"修改密码",
			toPath:"#/content-2"
		},
		{
			setting:"单页管理",
			toPath:"#/content-3"
		},
		{
			setting:"首页轮播",
			toPath:"#/content-4"
		},
		{
			setting:"留言管理",
			toPath:"#/content-5"
		},
		{
			setting:"栏目设置",
			toPath:"#/content-6"
		}
		
	];
	var manages = [
		{
			manage:"内容管理",
			toPath:"#/content-7"	
		},
		{
			manage:"添加内容",
			toPath:"#/content-8"	
		},
		{
			manage:"分类管理",
			toPath:"#/content-9"
		}
	];

	$scope.settings = settings;
	$scope.manages = manages;
	$scope.isHide1 = false;
	$scope.isHide2 = false;
	$scope.name = "网站设置";
	
	$scope.hideContent1 = function(){
		$scope.isHide1 = !$scope.isHide1;
	}
	$scope.hideContent2 = function(){
		$scope.isHide2 = !$scope.isHide2;
	}
	
	$scope.basicSetting1 = function(setting){
//		console.log(setting.setting);
		$scope.name = setting.setting;
	}
	$scope.basicSetting2 = function(manage){
		$scope.name = manage.manage;
	}
	
	
})

$(function(){
	$(".leftnav").find("a").click(function(){
		$(".leftnav").find("a").removeClass("on");
		$(this).addClass("on");
	})
})

