var myScroll;
var banner,bannerList,goodsBanner,goodsList;
var flag = false;
var pullDown = 0;
var pullUp = 0;
var pageCode = 0;
loaded();
function loaded(){
//	window.opener.document.location.reload();
	myScroll = new IScroll("#wrapper",{
		probeType: 3,
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
//	actionData(pageCode,2);
	myScroll.on("scroll",judegPosition);
	myScroll.on("scrollEnd",move);
	
}

dataInit();

function dataInit(){
	banner = $(".index-banner").find(".swiper-wrapper");
	bannerList = banner.find(".swiper-slide").clone(false);
	
	goodsBanner = $(".goodsList").find("ul");
	
	goodsList = goodsBanner.find("li").clone(false);
//	console.log(goodsList);
	
	$(".footerList").find("a").on("tap",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	goodsBanner.empty();
	getData();
	fixBtn();
}

function getData(){
	$.post("json/index.json",function(data,textStatus){
		//console.log(data.goodsList.list1.discount);
//		console.log(data);
		loadBanner(data);
		loadGoods(data);
	},"json");
}

function loadBanner(data){
	//console.log(data.bannerImg[0]);
	banner.empty();
	for(var i in data.bannerImg){
		var dom = bannerList.clone(false);
		var imgSrc = data.bannerImg[i];
		//console.log(data.bannerImg[0])
		dom.find("img").attr("src","img/"+imgSrc);
		banner.append(dom);
	}
	
	var mySwiper = new Swiper(".swiper-container",{
		autoplay : 2000,
		loop : true,
		pagination : '.swiper-pagination'
	});
}

function judegPosition(){
//	console.log(myScroll.y);
	if(myScroll.y > 40){
		pullDown = 1;
		$("#pullDown").find("p").text("松开即可刷新");
		$("#pullDown").find("span.iconfont").attr("class","iconfont icon-arrowUp");
	}else if(myScroll.y < myScroll.maxScrollY - 40){
		pullUp = 1;
		
		if(pageCode >= 3){
			$("#pullUp").find("p").text("没有更多内容");
		}else {
			$("#pullUp").find("p").text("即将加载");
		}
		
	}else if(myScroll.y < -260){
		$(".fixedBar").css("display","block");
	}else {
		$(".fixedBar").css("display","none");
	}
	
}

function move(){
	if(pullDown == 1){
		$("#pullDown").find("p").text("下拉刷新");
		$("#pullDown").find("span.iconfont").attr("class","iconfont icon-arrowDown");
		pageCode = 0;
		console.log(pageCode);
		goodsBanner.empty();
		actionData(pageCode,2);
		pullDown = 0;
	}else if(pullUp == 1){
		$("#pullUp").find("p").text("上拉加载");
		pageCode ++;
//		console.log(pageCode);
		
//		console.log(pageCode);
		if(pageCode > 3){
			pageCode = 3;
			$("#pullUp").find("p").text("没有更多内容");
		}else {
			actionData(pageCode,2);
		}
		
		pullUp = 0;
	}
}

function loadGoods(data){
	
	
	for(var i = pageCode*2;i < (pageCode*2+2) && i < data.goodsList.length;i ++){
		var dom = goodsList.clone(false);
		var imgSrc = data.goodsList[i].goodsImg;
		var goodsname = data.goodsList[i].goodsName;
		var price = data.goodsList[i].price*1;
		var discount = data.goodsList[i].discount*1;
		var sold = data.goodsList[i].sold;
		var goodId = data.goodsList[i].goodsID;
		//console.log(goodId);
		var old = price;
		if(discount != 0){
			old = price / (discount/10);
		}
		old = old.toFixed(2);
		
		dom.find("img").attr("src","img/"+imgSrc);
		dom.find(".goodname").text(goodsname);
		dom.find(".price").find("span").text(price);
		dom.find(".price").find("del").text(old);
		dom.find(".price").find("b").text(discount);
		dom.attr("data-goodsid",goodId);
		
		dom.on("tap",function(){
			var gid = $(this).attr("data-goodsid");
			//console.log(typeof gid);
			console.log(gid);
//			console.log(data.goodsList[1].goodsID)
			sessionStorage.setItem("goodsID",gid);
			location.href = "goodsContent.html";
			
		})
		
		goodsBanner.append(dom);
	}
}

function actionData(pageCode,num){
	$.post("json/index.json",function(data,textStatus){
		loadGoods(data);
		myScroll.refresh();	
	});
}


function fixBtn(){
	$(".change").on("tap",function(){
	if(flag){
		$(".goodsList").attr("class","goodsList state1");
		flag = false;
	}else {
		$(".goodsList").attr("class","goodsList state2");
		flag = true;
	}
});
	$(".backTop").on("tap",function(){
		 document.body.scrollTop = 0;
	});
}






