getPageInit();
var goodsBox;
var pullDownFlag = 0;
var pullUpFlag = 0;
function loaded(){
	myScroll = new IScroll("#wrapper",{
		/*probeType：1  滚动不繁忙的时候触发
		probeType：2  滚动时每隔一定时间触发
		probeType：3  每滚动一像素触发一次*/
		probeType: 3,
		//        momentum: false,//关闭惯性滑动
		mouseWheel: true, //鼠标滑轮开启
		scrollbars: false, //滚动条可见
		fadeScrollbars: true, //滚动条渐隐
		interactiveScrollbars: true, //滚动条可拖动
		shrinkScrollbars: 'scale', // 当滚动边界之外的滚动条是由少量的收缩
		useTransform: true, //CSS转化
		useTransition: true, //CSS过渡
		bounce: true, //反弹-----切记不要设置为false,否则不会上拉和下拉
		freeScroll: false, //只能在一个方向上滑动
		startX: 0,
		startY: 0
	});
//	pllUpAction();
	myScroll.on("scroll",judgedPostion);
	myScroll.on("scrollEnd",action);
}
//页面初始化
function getPageInit(){
	var classID = 1;
	//创建商品列表容器对象,以及复制单个商品列表对象
	goodsBox = $(".goods-main");
	goodsList = goodsBox.find(".goods-list").clone(false);
	loadClassNav();
	loadImg(classID);
}
//scroll ---滚动事件
function judgedPostion(){
	console.log(myScroll.y);
	if(myScroll.y > 50){//40是指下拉刷新的高度
//		console.log("可以刷新啦");
		pullDownFlag = 1;
		document.getElementById("pullDown").innerHTML = "松开即可刷新";
	}else if(myScroll.y < myScroll.maxScrollY - 10){//40是指上拉加载的高度
//		console.log("可以加载啦");
		pullUpFlag = 1;
		document.getElementById("pullUp").innerHTML = "松开即可加载";
	}
}
function action(){
	if(pullDownFlag == 1){
		console.log("刷新操作");
		document.getElementById("pullDown").innerHTML = "下拉刷新";
		pullDownFlag = 0;
	}else if(pullUpFlag == 1){
		console.log("加载操作");
		document.getElementById("pullUp").innerHTML = "上拉加载";
		pullUpFlag = 0;
	}
}
//分类导航的加载
function loadClassNav(){
	//给商品分类绑定点击事件
		$(".goods-class").find("li").on('tap',function(){

			//获取当前被点击的商品分类ID
			var classID = $(this).attr("data-classID");

			//渲染加载相应的列表,默认跳转到第一页
			loadImg(classID);

			//更新选中样式
			$(".goods-class").find(".active").removeClass("active");

			$(".goods-class").find("li[data-classID='"+classID+"']").addClass("active");

		});
}
//加载图片
function loadImg(classID){
	$.post("json/buyhot.json",null,function(data,textStatus){
		addGoodsData(data,classID);
		myScroll.refresh();
	},"json");
}
function addGoodsData(data,classID){
	console.log(classID);
//	console.log(data.goodList01);
	goodsBox.empty();
	if(classID == 1){
		goodsBox.removeClass("back");
		var myData = data.goodList01;
		xunran();
	}else if( classID == 2){
		goodsBox.removeClass("back");
		var myData = data.goodList02;
		xunran();
	}else{
		//goodsBox.css("background-image","url(img/noresult.png)")
		goodsBox.addClass("back");
	}
	//动态加载数据
		function xunran(){
			for(var i in myData){
			//创建将要添加到商品列表当中的dom对象
			var dom = goodsList.clone(false);
			//获取数据
			var imgSrc = myData[i].images;
	//		console.log(imgSrc);
			var spanText = myData[i].price_int;
			var spanRebate = myData[i].rebate;
			var h1 = myData[i].hh;
			for(var k in h1){
				dom.find("h1").find("span").eq(k).text(h1[k]);
			}
			for(var j in imgSrc){
	//			console.log(j);
				dom.find("img").eq(j).attr("src",imgSrc[j]);
				dom.find(".img-box").find(".pro").eq(j).find("span").eq(0).text(spanText[j]);
				dom.find(".img-box").find(".pro").eq(j).find("span").eq(1).text(spanRebate[j]);
			}
			//把标签加入到页面对应的dom当中去
			goodsBox.append(dom);
		} 
	}
}


