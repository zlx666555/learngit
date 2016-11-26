//qqheader
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
//底部
function foot(){
	$(".bds_more").hover(function(){
		$(".bds_enter").css({
			"display":"block"
		})
	},function(){
		$(".bds_enter").css({
			"display":"none"
		})
	})
}
//触碰图片效果
function show(){
	var _sarr = $(".item-list .inner-item").get();
	//console.log(_sarr);
	for(var j = 0;j < _sarr.length; j ++){
		$(_sarr[j]).hover(function(){
			$(this).addClass("hover-tips");
			$(".hover-tips .mask-img").css("display","block");
			$(".hover-tips .intro-text").css("display","block");
			$(".hover-tips .buy-info").css("display","none");
			$(".hover-tips .go-buy").css("display","inline");
		},function(){
			$(this).removeClass("hover-tips");
			$(".mask-img").css("display","none");
			$(".intro-text").css("display","none");
			$(".buy-info").css("display","block");
			$(".go-buy").css("display","none");
		})
	}
}
//shop_top图片加载
function loadImg(){
	$.post("shop_top.json",null,function(data,textStatus){
		ddShop(data);
	},"json");
}
//shop_top 处理函数
function ddShop(data){
	//console.log("a")
	var _li = null,_a = null,_img = null,span_price = null,span_num = null;
	var span_unit = null,span_tiny = null,span_dis = null,div_shop = null,_p1 = null,_p2 = null;
	var _ul = document.getElementById("shop_ul");
	//console.log(data["img"].length);
	for(var i = 0;i < data["img"].length;i ++){
		_a = document.createElement("a");
		_li = document.createElement("li");
		_img = document.createElement("img");
		span_price = document.createElement("span");
		span_price.className = "price";
		span_unit = document.createElement("span");
		span_unit.className = "unit";
		span_unit.innerHTML = "¥";
		span_num = document.createElement("span");
		span_num.className = "num"
		span_num.innerHTML = data["span_num"][i];
		span_tiny = document.createElement("span");
		span_tiny.className = "tiny";
		span_tiny.innerHTML = data["span_tiny"][i];
		span_dis = document.createElement("span");
		span_dis.className = "discount";
		span_dis.innerHTML = data["span_dis"][i];
		div_shop = document.createElement("div");
		div_shop.className = "top-icon";
		_p1 = document.createElement("p");
		_p1.className = "p1";
		_p1.innerHTML = data["_p1"][i];
		_p2 = document.createElement("p");
		_p2.className = "p2";
		_p2.innerHTML = "TOP"
		_img.src = "img/" + (i + 73) + ".jpg";
		_ul.appendChild(_li);
		_li.appendChild(_a);
		_a.appendChild(_img);
		_a.appendChild(span_price);
		_a.appendChild(span_dis);
		_a.appendChild(div_shop);
		span_price.appendChild(span_unit);
		span_price.appendChild(span_num);
		span_price.appendChild(span_tiny);
		div_shop.appendChild(_p1);
		div_shop.appendChild(_p2);
	}
}
//瀑布流
function loadImage(){//加载图片   只负责获取数据
	$.post("fall.json",null,function(data,textStatus){
		dealData(data);
		show();
		checkImgComplete();
		resetContainerHeight();
	},"json");	
}
function dealData(data){
	var _a = null,div_item = null,div_img = null,_img = null,div_mask = null,div_text = null;
	var div_info = null,span_info = null,em_unit = null,em_big = null,em_tiny = null;
	var div_dis = null;span_icon = null,span_price = null;
	var span_buy = null,span_num = null,span_peo = null,span_go = null;
	var _container = document.getElementsByClassName("item-list")[0];
	for(var k = _s;k < _s + 12 && k < data["images"].length;k ++){
		_a = document.createElement("a");
		_a.className = "singel-item";
		_a.href = data["address"][k];
		div_item = document.createElement("div");
		div_item.className = "inner-item";
		div_img = document.createElement("div");
		div_img.className = "promo-img";
		_img = document.createElement("img");
		div_mask = document.createElement("div");
		div_mask.className = "mask-img";
		div_text = document.createElement("div");
		div_text.className = "intro-text";
		div_text.innerHTML = data["mark"][k];
		div_info = document.createElement("div");
		div_info.className = "item-sale-info";
		span_info = document.createElement("span");
		span_info.className = "item-price-info";
		em_unit = document.createElement("em");
		em_unit.className = "unit";
		em_unit.innerHTML = "¥";
		em_big = document.createElement("em");
		em_big.className = "big";
		em_big.innerHTML = data["price_int"][k];
		em_tiny = document.createElement("em");
		em_tiny.className = "tiny";
		em_tiny.innerHTML = data["price_flo"][k];
		div_dis = document.createElement("div");
		div_dis.className = "discount";
		span_icon = document.createElement("span");
		span_icon.className = "discount-icon";
		span_icon.innerHTML = data["rebate"][k];
		span_price = document.createElement("span");
		span_price.className = "org-price";
		span_price.innerHTML = data["org_price"][k];
		span_buy = document.createElement("span");
		span_buy.className = "buy-info";
		span_num = document.createElement("span");
		span_num.className = "people-num";
		span_num.innerHTML = data["people_num"][k];
		span_peo = document.createElement("span");
		span_peo.innerHTML = "人已开枪";
		span_peo.className = "peo";
		span_go = document.createElement("span");
		span_go.className = "go-buy";
		span_go.innerHTML = "去抢购";
		_img.src = "img/" + (k + 1) + ".jpg";
		_container.appendChild(_a);
		_a.appendChild(div_item);
		div_item.appendChild(div_img);
		div_item.appendChild(div_info);
		div_img.appendChild(_img);
		div_img.appendChild(div_mask);
		div_img.appendChild(div_text);
		div_info.appendChild(span_info);
		div_info.appendChild(div_dis);
		div_info.appendChild(span_buy);
		div_info.appendChild(span_go);
		span_info.appendChild(em_unit);
		span_info.appendChild(em_big);
		span_info.appendChild(em_tiny);
		div_dis.appendChild(span_icon);
		div_dis.appendChild(span_price);
		//console.log(span_buy);
		span_buy.appendChild(span_num);
		span_buy.appendChild(span_peo);
	}
}
var _arr = null;
var _s = 0;//记录当前需要从第几张图片进行加载
function checkImgComplete(){
	var _timer = 0;
	var _list = $(".item-list img").get();//图片数组
	function checking(){
		var _complete = true;
		window.clearTimeout(_timer);
		for(var i = _s;i < _list.length;i ++){
			if(!_list[i].complete){
				_complete = false;
				break;
			}
		}
		if(true){
			waterfall(_s);
		}else{
			_timer = window.setTimeout(checking,60);
		}
	}
	checking();	
}
function waterfall(s){
	var n = 0;
	var _list = $(".inner-item").get();
	for(var i = s ;i < _list.length;i ++){
		n = minHeight();
		$(_list[i]).css({"left": n * 243 + "px","top":_arr[n] + "px"});
		_arr[n] += _list[i].offsetHeight;
	}
}
function minHeight(){
	var n = 0,_min = _arr[0];
	for(var i = 0;i < _arr.length;i ++){
		if(_min > _arr[i]){
			_min = _arr[i];
			n = i;
		}
	}
	return n;
}
function resetContainerHeight(){
				var _max = _arr[0];
				for(var i = 1;i < _arr.length;i ++){
					if(_max < _arr[i]){
						_max = _arr[i];
					}
				}
				$(".item-list").css("height",_max + 'px');
			}

function initCss(){
				var _c = Math.floor(($(".item-list").width())/243)
				//计算每行可以放入多少张图片后排列图片 
				var _w = _c*243;//当前浏览器窗口的宽度
				$(".item-list").css("width",_w + 'px');
				return _c;
			}
function initArray(c){
				_arr = new Array(c);
				for(var i = 0;i < c;i ++){
					_arr[i] = 0;
				}
	}
function Go_Top(){
	this.up = document.getElementById("go-top");
	this.cli = function(){
		var _top = document.body.scrollTop || document.documentElement.scrollTop;
		if(_top > 20){
			this.up.style.display = "block";
		}else{
			this.up.style.display = "none";
		}
		$("#go-top").click(function(){
		_top = 0;
	})
		$("#go-top").hover(function(){
			$(this).css("background-position","-98px -437px")
			$(this).html("回顶部")
		},function(){
			$(this).css("background-position","-18px -437px")
			$(this).html("")
		})
	}
}

function countTime(timer){
	var now = new Date;
	var will = new Date(timer);
	var c = Math.floor((will-now)/1000);
	var day = Math.floor(c / 60 / 60 / 24);
	var hours = Math.floor((c - day * 86400 ) / 3600);
	var minutes = Math.floor((c - day * 86400 - hours * 3600 ) /60);
	var seconds = c % 60;
	$("em").eq(0).html(hours);
	$("em").eq(1).html(minutes);
	$("em").eq(2).html(seconds);
}
function big(){//图片变大
	$(".repair-side1").hover(function(){
		$(".repair-side1").animate({
			"width":"270px"
		},200)
	})
	$(".repair-side1").mouseleave(function(){
		$(".repair-side1").animate({
			"width":"260px"
		},200)
	})
	$(".repair-side2").hover(function(){
		$(".repair-side2").animate({
			"width":"270px",
			"height":"170px"
		},200)
	})
	$(".repair-side2").mouseleave(function(){
		$(".repair-side2").animate({
			"width":"260px",
			"height":"160px"
		},200)
	})
}
function hov(){//轮播   小圆形
	if(swi == true){	
		$(".nohover-li").css({
			"background-position":"-252px -634px"
		})
		$(".hover-li").css({
			"background-position":"-252px -605px"
		})
	}
	else if(swi == false){
		$(".hover-li").css({
			"background-position":"-252px -634px"
		})
		$(".nohover-li").css({
			"background-position":"-252px -605px"
		})
	}	
}
function sanjiao(){//移入移出函数
	function yiru(){//移入函数
			$(".promo-wrap").mouseenter(function(){
			window.clearInterval(_timer);//停止自动轮播 
			$(".arrow").css({
				"display":"block"
			})
		})
	}		
	function yichu(){//移出函数
		$(".promo-wrap").mouseleave(function(){
			ban();
			$(".arrow").css({
				"display":"none"
			})
		})
	}
	yiru();
	yichu();
}	
function cli(){//点击函数
		$(".left-arrow").click(function(){
			$(".promo-largebox").css({
				"left":"-580px"
				})
			if(swi == true){
					$(".promo-largebox").prepend($(".a2"));
					swi = false;
				}
			else if(swi == false){
				$(".promo-largebox").prepend($(".a1"));
				swi = true;
			}
			$(".promo-largebox").animate({
				"left":"0px"
			},300,function(){
				
			})	
		})
		$(".right-arrow").click(function(){
			move();
		})
		$(".hover-li").mouseenter(function(){
			$(".promo-largebox").css({
				"left":"-580px"
				})
			$(".promo-largebox").prepend($(".a1"));
			$(".promo-largebox").animate({
				"left":"0px"
			},300,function(){
				$(".hover-li").css({
					"background-position":"-252px -605px"
				})
				$(".nohover-li").css({
					"background-position":"-252px -634px"
				})
			})
			swi = true;
		})
		$(".nohover-li").mouseenter(function(){
			$(".promo-largebox").css({
				"left":"-580px"
			})
			$(".promo-largebox").prepend($(".a2"));
			$(".promo-largebox").animate({
				"left":"0px"
			},300,function(){
				$(".nohover-li").css({
					"background-position":"-252px -605px"
				})
				$(".hover-li").css({
					"background-position":"-252px -634px"
				})
			})
				swi = false;
		})
	}
var swi = true;
var _timer = null;
function move(){//改变视图
			$(".promo-largebox").animate({
				"left":"-580px"
			},300,function(){
				if(swi == true){
					$(".promo-largebox").append($(".a1"));
					swi = false;
				}
				else if(swi == false){
					$(".promo-largebox").append($(".a2"));
					swi = true;
				}
				$(".promo-largebox").css({
					"left":"0"
				})
				hov();
				
			})
	}
	function ban(){//定时器
		_timer = window.setInterval(function(){
			move();
		},2000);	
	}
$(document).ready(function(){
	tencent();
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
		ban();
		sanjiao();
		cli();
		big();
		window.setInterval(function(){
			var timer = new Date(2016,9,28,12);
			countTime(timer);
		},1000);
		loadImg();
		loadImage();
		var _c = initCss();
		initArray(_c);
		window.onscroll = function(){
			var go_top = new Go_Top();
			go_top.cli();
				var _total = $(document).height();
				var s_t = Math.ceil($(document).scrollTop());
				var w_h = $(window).height();
				if(_total <= s_t + w_h){
					_s = _s + 12;
					loadImage();
					
				}
		}
		foot();
});


	

	
