app.controller("content-4-Ctrl",function($scope){
	$scope.records = [
		{
			myVar:false,
			id:1,
			img:'img/11.jpg',
			name:'首页焦点图',
			dec:'这是描述1',
			sort:1,
			sli:'修改',
			shift:'删除'
		},{
			myVar:false,
			id:2,
			img:'img/11.jpg',
			name:'首页焦点图',
			dec:'这是描述2',
			sort:2,
			sli:'修改',
			shift:'删除'
		}
	]
	$scope.myVar = localStorage.getItem("$scope.swi")=="true"?true:false;
	$scope.cli = function(x){
		$scope.myVar = !$scope.myVar;
		$scope.count = $scope.myVar;
		localStorage.setItem('$scope.swi',$scope.count);
	}
});
