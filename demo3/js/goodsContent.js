var arr = [];
var navSwiper = new Swiper("#navSwiper",{
			resistanceRatio:0,
			onSlideChangeEnd:function(swiper){
			var index = swiper.activeIndex;
//				alert(swiper.activeIndex)
				$("#navUl").find("li").eq(index).addClass("active").siblings().removeClass("active");
			}
	});
	


$("#navUl").find("li").on("tap",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			navSwiper.slideTo(index, 300, true);
	});	
	

var banner,bannerList;	
	
	dataInit();
function dataInit(){
	banner = $(".goods-content-banner").find(".swiper-wrapper");
	bannerList = banner.find(".swiper-slide").clone(false);
	
	var goodsID = sessionStorage.getItem("goodsID");
	loadBanner(goodsID);
}

function loadBanner(goodsID){
	$.post("json/index.json",function(data){
		data = data.goodsList;
		banner.empty();
		for(var i in data){
			if(goodsID === data[i].goodsID){
				var dom = bannerList.clone(false);
				var bannerimg = data[i].bannerImg;
				var goodsname = data[i].goodsName;
				var price = data[i].price*1;
				var discount = data[i].discount*1;
				var sold = data[i].sold;
				//console.log(bannerimg);
				for(var j in bannerimg){
					var s = bannerList.clone(false);
					s.find("img").attr("src","img/bannerImg/"+bannerimg[j]);
					console.log(bannerimg[j]);
					banner.append(s);
				}
				var mySwiper = new Swiper(".goods-content-banner",{
					autoplay: 3000,
					loop : true
				});
				
				addShopCar(data[i].goodsID);
				
			}
			
		}
	});
}

//点击加入购物车
function addShopCar(_data){
	
	$('.btnCar').tap(function(){
		arr.push(_data);
		//console.log(arr);
		localStorage.setItem('goodsID',arr);
		alert('成功加入购物车');
	})
	$('.btnColor').tap(function(){
		localStorage.setItem('goodsID',arr);
		window.location.href = 'shopCar.html';
	})
}