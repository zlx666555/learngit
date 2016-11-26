
//结算点击
function  jiesuan(){
	$(".goPayText").click(function(){
		$(".view-AddBtn").attr("href","html/page6.html")
	})
}

function cokie(){
	var addnum = document.getElementsByClassName("cart-num")[0];
	if(Number(getCookie("car")) >= 1){
		console.log("a");
		shopcarr(getCookie("addcar"),getCookie("car"));
		addnum.style.display = "block";
		addnum.innerHTML = getCookie("car");
	}
}
//添加到购物车
function shopcarr(car,kee){
	//if(car == 123){
		$(".cart-title").html("购物车中有" + getCookie("car") + "件商品");
		$(".cart-item-lists").removeClass("no-item");
		$(".no-item-text").css("display","none");
		var _li = document.createElement("li");
		var _a = document.createElement("a");
		var _img = document.createElement("img");
		_img.src = "img/1111.jpg";
		_img.className = "cart-face-img"
		var div_tro = document.createElement("div");
		div_tro.className = "intro-box";
		var a_mi = document.createElement("a");
		var _p = document.createElement("p");
		_p.className = "main-intro-text";
		_p.innerHTML = "爱仕达22cm六保险不锈钢压力锅燃气电磁炉通用 WG1822DN";
		var p_text = document.createElement("p");
		p_text.className = "main-sku-text";
		p_text.innerHTML = "不锈钢";
		var div_price = document.createElement("div");
		div_price.className = "price-box";
		var p_price = document.createElement("p");
		p_price.className = "real-price";
		p_price.innerHTML = "¥199.00";
		var p_buy = document.createElement("p");
		p_buy.className = "buy-num";
		p_buy.innerHTML = "x" + kee;
		var _ul = document.getElementsByClassName("cart-item-lists")[0];
		_ul.appendChild(_li);
		_li.appendChild(_a);
		_a.appendChild(_img);
		_li.appendChild(div_tro);
		div_tro.appendChild(a_mi);
		div_tro.appendChild(p_text);
		a_mi.appendChild(_p);
		_li.appendChild(div_price);
		div_price.appendChild(p_price);
		div_price.appendChild(p_buy);
		$(".subtotal-money").html("¥" + 199 * Number(kee) + ".00")
	//}
	//removeCookie("addcar");
}
//立即抢购
function quibuy(){
	var _top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop);
	var osp = document.getElementById("sport");
	var addnum = document.getElementsByClassName("cart-num")[0];
	var num = _top + 430;
	$(".add-to-cart-btn").click(function(){
		$(this).css({"background-color":"rgb(102,186,4)","border-color":"rgb(80,147,1)"})
		$(".addCartText").css("display","none");
		$(".goPayText").css("display","inline");
		$(".continue-buy-btn").css("display","inline")
			var carnum = $(".view-BuyNum").val();
			var price = $(".now-price").html();
			createCookie("car",carnum);
			//setCookie("car",carnum,"/");
			carr ++;
			createCookie("addcar",carr,setCookieTime(3));
			createCookie("price",price);
			if(Number(getCookie("car")) >= 1){
				shopcarr(getCookie("addcar"),getCookie("car"));	
			}
			
			//运动
		startMove(osp,"top",num,function(){
			osp.style.opacity = 1;
			startMove(osp,"left",1107,function(){
				osp.style.opacity = 0;
				addnum.style.display = "block";
				addnum.innerHTML = getCookie("car");
			});
		})
	})
	$(".continue-buy-btn").click(function(){
		$(".add-to-cart-btn").css({"background-color":"#ff6600","border-color":"rgb(255,51,0)"})
		$(".continue-buy-btn").css("display","none");
		$(".goPayText").css("display","none");
		$(".addCartText").css("display","inline");
	})
}
var carr = 0;
//var keep = 0;
//动态加载推荐
function tuijian(data){
	var div_item = null,_a = null,_img = null,div_info = null,div_title = null;
	var span_price = null,span_yen = null,_span = null;
	var oDiv = document.getElementById("bfd-sidebar-inner");
	for(var i = 0;i < data["image"].length;i ++){
		div_item = document.createElement("div");
		div_item.className = "item";
		_a = document.createElement("a");
		_img = document.createElement("img");
		div_info = document.createElement("div");
		div_info.className = "item-info";
		div_title = document.createElement("div");
		div_title.className = "item-title";
		span_price = document.createElement("span");
		span_price.className = "item-price"
		span_yen = document.createElement("span");
		span_yen.className = "yen";
		_span = document.createElement("span");
		oDiv.appendChild(div_item);
		div_item.appendChild(_a);
		div_item.appendChild(div_info);
		_a.appendChild(_img);
		_img.src = "img/" + (i + 110) + ".jpg";
		div_info.appendChild(div_title);
		div_title.innerHTML = data["tro"][i];
		div_info.appendChild(span_price);
		span_price.appendChild(span_yen);
		span_yen.innerHTML = "¥";
		span_price.appendChild(_span);
		_span.innerHTML = data["price"][i];	
	}
}
function loadImg(){
	$.post("json/page3.json",null,function(data,textStatus){
		tuijian(data);
	},"json");
}
//购物车
function shop_car(){
	$(".bar-cart-box").hover(function(){
		$(".cart-content-box").css("display","block");
		$(".cart-link").css("color","#ff6600");
		//removeCookie("addcar");
	},function(){
		$(".cart-content-box").css("display","none");
		$(".cart-link").css("color","rgb(161,161,161)");
		
	})
	$(".mobile-box").hover(function(){
		$(".app-qrcode-box").css("display","block");
		$(".mobile-link").css("color","#ff6600");
	},function(){
		$(".app-qrcode-box").css("display","none");
		$(".mobile-link").css("color","rgb(161,161,161)");
	})
	$(".service-box").hover(function(){
		$(this).children("a").addClass("main-link-hover")
		$(".main-link-hover .icon-mini").css("display","none")
		$(".hover-text").css({"display":"block","background-color":"#ff6600"})
	},function(){
		$(".hover-text").css("display","none")
		$(".main-link-hover .icon-mini").css("display","inline")
		$(this).children("a").removeClass("main-link-hover")
	})
	$(".ut-box").hover(function(){
		$(".go-t .iconfont").css("color","#ff6600");
	},function(){
		$(".iconfont").css("color","rgb(161,161,161)");
	})
}
//导航条跟随
function nav_fo(){
	var _top = document.body.scrollTop || document.documentElement.scrollTop;
	if(_top > 800){
		$(".nav-menu-wrap").addClass("nav-bar-fixed");
		$(".cart-duplication").css({"display":"block"});
	}else{
		$(".nav-menu-wrap").removeClass("nav-bar-fixed");
		$(".cart-duplication").css({"display":"none"});
	}
}
//加减效果
function add_re(){
	var _value =  Number($(".view-BuyNum").val());
	console.log(_value)
	$(".add-num").click(function(){
		if(_value >= 1 && _value < 5){
			$(".del-num").css("background-color","#DFDFDF");
			$(".view-BuyNum").val(++_value);
			if(_value == 5){
				$(".noticeMaxBuy").css("display","inline");
			}
		}	
	})
	$(".del-num").click(function(){
		if(_value > 1){
			$(".view-BuyNum").val(--_value);
			$(".noticeMaxBuy").css("display","none");
			if(_value == 1){
				$(".del-num").css("background-color","#BBBBBB");
				$(".del-num").css("cursor","default");
				_value = 1
			}
		}
	})
	$(".del-num").hover(function(){
		if(_value > 1){
			$(".del-num").css("cursor","pointer");
		}
	})	
}
//优惠效果
function youhui(swi){
	$(".youhui").hover(function(){
		$(".view-PromotionsMoreInfo").css("display","block");
	},function(){
		$(".view-PromotionsMoreInfo").css("display","none");
	})
	$(".view-SkuSelectItemValue").click(function(){
		if(swi == true){
			$(".current-box").css("display","none");
			swi = false;
		}else if(swi == false){
			$(".current-box").css("display","inline-block");
			swi = true;
		}
	})
}
var swi = true;
//放大镜
function fangdajing(){
	var oDiv = document.getElementsByClassName("main-img-cont")[0];
	var oMark = document.getElementsByClassName("mark")[0];
	var oFloat = document.getElementsByClassName('float_layer')[0];
	var oBig = document.getElementsByClassName('big-img')[0];
	var oSmall = document.getElementsByClassName('small-img')[0];
	var oImg = document.getElementById("big_img");
	//给遮罩层添加鼠标移入事件
		oMark.onmouseover = function(){
			oFloat.style.display = 'block';  //让小块显示出来
			oBig.style.display = 'block';   //同时让大图显示出来
			oSmall.style.cursor = "move"
		};
		//给遮罩层添加鼠标移出事件
		oMark.onmouseout = function(){
			oFloat.style.display = 'none';  //让小块隐藏
			oBig.style.display = 'none';   //同时让大图隐藏
		};
		//给遮罩层添加鼠标移动事件
		oMark.onmousemove = function(evt){
			var e = evt || window.event;
			//鼠标页面位置-最外面div到页面左边的距离 - 小图到oDiv的距离 - oFloat的宽度/2 (使鼠标到oFloat的中心位置);
			//document.title = e.clientX - oDiv.offsetLeft - oSmall.offsetLeft;
			var l = e.clientX - oDiv.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth/2;
			var t = e.clientY - oDiv.offsetTop - oSmall.offsetTop - oFloat.offsetHeight/2;
		    //限制边界
			if(l < 0){
				l = 0;
			}else if(l > oMark.offsetWidth - oFloat.offsetWidth){
				l = oMark.offsetWidth - oFloat.offsetWidth;
			}
				
			if(t < 0){
				t = 0;
			}else if( t > oMark.offsetHeight - oFloat.offsetHeight){
				t = oMark.offsetHeight - oFloat.offsetHeight;
			}	
			oFloat.style.left = l + 'px';
			oFloat.style.top = t + 'px';
				
			//小块活动的距离（移动比例）（大图显示比例）
			var percentX = l / (oMark.offsetWidth - oFloat.offsetWidth);
			var percentY = t / (oMark.offsetHeight - oFloat.offsetHeight);
				 
			//大图的left值 = 移动比例 * （大图的宽度 - 大图所在Div的宽度）（大图所能移动的距离）
			oImg.style.left = -percentX * (oImg.offsetWidth - oBig.offsetWidth) + 'px';
			oImg.style.top = -percentY * (oImg.offsetHeight - oBig.offsetHeight) + 'px';
			//console.log(oImg.offsetWidth);	
		};		
}
//面向对象时间
function CountDown(timer){
	this.now = new Date;
	this.will = new Date(timer);
	//console.log(this.now);
	this.c = Math.floor((this.will-this.now)/1000);
	this.day = Math.floor(this.c / 60 / 60 / 24);
	this.hours = Math.floor((this.c - this.day * 86400 ) / 3600);
	this.minutes = Math.floor((this.c - this.day * 86400 - this.hours * 3600 ) /60);
	this.seconds = this.c % 60;
	this.show1 = function(){
		$(".da").html(this.day);
	    $(".ho").html(this.hours);
	    $(".mi").html(this.minutes);
	    $(".se").html(this.seconds);
	}
}
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
function header(){
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
}
$(document).ready(function(){
	tencent();
	header();
	window.setInterval(function(){
			var timer1 = new Date(2016,9,22,2);
			var countDown1 = new CountDown(timer1);
			countDown1.show1();
		},1000);
	fangdajing();
	youhui(swi);
	add_re();
	window.onscroll = function(){
		nav_fo();
//		quibuy();
	}
	shop_car();
	loadImg();
	quibuy();
	cokie();
	jiesuan();
})


