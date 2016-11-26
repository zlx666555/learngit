app.controller("content-5-Ctrl",function($scope){
	$scope.del = '全部删除';
	$scope.records1 = [
		{
			id:1,
			name:'卡卡西',
			tel:'132223333',
			com:'564379992@sina.com',
			add:'东北市民治街道',
			txt:'这是一套后台UI，喜欢的朋友请多多支持谢谢.',
			time:'2016-02-14'
		},{
			id:2,
			name:'鸣人',
			tel:'13420925611',
			com:'564379992@qq.com',
			add:'安徽市民治街道',
			txt:'这是一套后台UI，喜欢的朋友请多多支持谢谢.',
			time:'2012-03-15'
		},{
			id:3,
			name:'佐助',
			tel:'1342637373',
			com:'564379992@163.com',
			add:'广东市民治街道',
			txt:'这是一套后台UI，喜欢的朋友请多多支持谢谢.',
			time:'2012-04-11'
		},{
			id:4,
			name:'小樱',
			tel:'134949732',
			com:'564379992@51.com',
			add:'山东市民治街道',
			txt:'这是一套后台UI，喜欢的朋友请多多支持谢谢.',
			time:'2016-03-21'
		},{
			id:5,
			name:'木叶丸',
			tel:'1342889233',
			com:'564379992@qq.com',
			add:'天津市民治街道',
			txt:'这是一套后台UI，喜欢的朋友请多多支持谢谢.',
			time:'2015-07-15'
		},
	]
	$scope.myVar1 = localStorage.getItem("$scope.swi")=="true"?true:false;
	$scope.cli1 = function(x){
		$scope.del = localStorage.getItem('$scope.swi') == 'true'?'全部删除':'全部恢复';
		$scope.myVar1 = !$scope.myVar1;
		$scope.count = $scope.myVar1;
		localStorage.setItem('$scope.swi',$scope.count);
	}
	
	$scope.changesearch = function(){
		$scope.searchTxt = $(".input").val();
		
		
	}
	
	
});
$(function(){
	console.log($('#checkall'));
	window.setTimeout(function(){
		$('#checkall').click(function(){
			$("input[name='id[]']").each(function(){
			  if(this.checked){
				  this.checked = false;
			  	}
			  else {
				  this.checked = true;
			  	}
  			});
		})
//		shi();
	
	var removeBtn = $("#removeBtn");
	console.log(removeBtn.length);



	},1000);

})
//function shi(){
//	console.log("aaa");
//	var btn_num = $('.btn');
//	for(var i = 0;i < btn_num.length;i ++){
//		btn_num[i].click(function(){
//			this.remove();
//		})
//	}
//}


