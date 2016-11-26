function cokie(){
	var addnum = document.getElementsByClassName("cart-num")[0];
	if(Number(getCookie("car")) >= 1){
		console.log("a");
		shopcarr(getCookie("addcar"),getCookie("car"));
		addnum.style.display = "block";
		addnum.innerHTML = getCookie("car");
	}
}
function G_T(){
	this.ut = document.getElementsByClassName("ut-box")[0];
	this.clic = function(){
		var _top = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(_top)
		this.ut.onclick = function(){
			_top = 0;
			console.log(_top)
		}
	}
}
//购物车
function shop_car(){
	$(".bar-cart-box").hover(function(){
		$(".cart-content-box").css("display","block")
	},function(){
		$(".cart-content-box").css("display","none")
	})
	$(".mobile-box").hover(function(){
		$(".app-qrcode-box").css("display","block")
	},function(){
		$(".app-qrcode-box").css("display","none")
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
}
//导航条跟随
function nav_fo(){
	var _top = document.body.scrollTop || document.documentElement.scrollTop;
	if(_top > 856){
		$(".brand-nav-wrap").addClass("brand-nav-fix");
		$(".brand-logo").css({"visibility":"visible","opacity":"1"});
		$(".tomorrow-link").css({"margin-left":"126px"});
		$(".e4").css("display","none");
	}else{
		$(".brand-logo").css({"visibility":"hidden","opacity":"0"});
		$(".brand-nav-wrap").removeClass("brand-nav-fix");
		$(".tomorrow-link").css({"margin":"0"});
		$(".e4").css("display","block");
	}
}
//动态加载page2
function imgLi(data){
	var _li = null,div_img = null,_a = null,_img = null,div_box = null,div_countdown = null;
	span_iconfont = null,_span = null,span_container = null,em_d = null,em_h = null,em_m = null,em_s = null;
	_h1 = null,_aa = null,span_box = null,span_text = null,img_icon = null;
	_s1 = null,_s2 = null,_s3 = null,_s4 = null,_aaa = null;
	div_price = null,em_price = null,span_pt = null,span_ib = null,span_pj = null;
	var _ul = document.getElementsByClassName("brand-content-lists")[0];
	for(var i = 0;i < data["image2"].length;i ++){
		_li = document.createElement("li");
		div_img = document.createElement("div");
		_a = document.createElement("a");
		_img = document.createElement("img");
		div_box = document.createElement("div");
		div_countdown = document.createElement("div");
		span_iconfont = document.createElement("span");
		_span = document.createElement("span");
		span_container = document.createElement("span");
		em_d = document.createElement("em");
		em_h = document.createElement("em");
		em_m = document.createElement("em");
		em_s = document.createElement("em");
		_h1 = document.createElement("h1");
		_aa =document.createElement("a");
		span_box = document.createElement("span");
		span_text = document.createElement("span");
		img_icon = document.createElement("img");
		div_price = document.createElement("div");
		em_price = document.createElement("em");
		span_pt = document.createElement("span");
		span_ib = document.createElement("span");
		span_pj = document.createElement("span");
		_s1 = document.createElement("span");
		_s2 = document.createElement("span");
		_s3 = document.createElement("span");
		_s4 = document.createElement("span");
		_aaa = document.createElement("a");
		_li.className = "home-brand-group";
		div_img.className = "img-box";
		_img.className = "brand-main-img";
		_img.src = "img/" + (i + 82) + ".jpg";
		div_box.className = "brand-info-box";
		div_countdown.className = "brand-info-countdown";
		span_iconfont.className = "iconfont";
		span_container.className = "countdown-container";
		em_d.className = "d";
		em_h.className = "h";
		em_m.className = "m";
		em_s.className = "s";
		_aa.className = "aa";
		span_box.className = "info-text-box";
		span_text.className = "info-text";
		img_icon.className = "more-icon";
		img_icon.src = "img/lit.jpg";
		div_price.className = "price-box";
		em_price.className = "price";
		span_pt.className = "price-text";
		span_ib.className = "iconfont-brand";
		span_pj.className = "pj-text";
		_s1.className = "s1";
		_s2.className = "s2";
		_s3.className = "s3";
		_s4.className = "s4";
		_aaa.className = "aaa";
		span_iconfont.innerHTML = "";
		_span.innerHTML = "本场剩余:";
		_s1.innerHTML = "天";
		_s2.innerHTML = "小时";
		_s3.innerHTML = "分";
		_s4.innerHTML = "秒";
		_aaa.innerHTML = data["zhuanchang"][i];
		span_text.innerHTML = data["intro"][i];
		em_price.innerHTML = data["em_price"][i];
		span_pt.innerHTML = "元起";
		span_ib.innerHTML = "";
		span_pj.innerHTML = data["span_pj"][i];
		_ul.appendChild(_li);
		_li.appendChild(div_img);
		_li.appendChild(div_box);
		div_img.appendChild(_a);
		_a.appendChild(_img);
		div_box.appendChild(div_countdown);
		div_box.appendChild(_h1);
		_h1.appendChild(_aaa);
		div_box.appendChild(_aa);
		div_box.appendChild(div_price);
		div_countdown.appendChild(span_iconfont);
		div_countdown.appendChild(_span);
		div_countdown.appendChild(span_container);
		span_container.appendChild(em_d);
		span_container.appendChild(_s1);
		span_container.appendChild(em_h);
		span_container.appendChild(_s2);
		span_container.appendChild(em_m);
		span_container.appendChild(_s3);
		span_container.appendChild(em_s);
		span_container.appendChild(_s4);
		_aa.appendChild(span_box);
		span_box.appendChild(span_text);
		span_box.appendChild(img_icon);
		div_price.appendChild(em_price);
		div_price.appendChild(span_pt);
		div_price.appendChild(span_ib);
		div_price.appendChild(span_pj);
	}
}
function infoBox(){
	var _list = $(".home-brand-group").get();
	var _arr = $(".info-text-box").get();
	for(var i = 0;i < _list.length;i ++){
		$(_list[i]).hover(function(){
		$(this).css({"border-color":"#ff6600"});
		$(this).children("div").eq(1).children("div").eq(1).addClass("pri");
		$(this).children("div").eq(1).children("a").children("span").hover(function(){
			$(this).css("overflow","visible");
			$(this).children("span").css("border","1px solid #f4f4f4");
			$(this).children("img").css("display","none");
			if($(this).children("span").height() > 114){
				$(".pri").css("display","none");
			}
		},function(){
			$(this).css("overflow","hidden");
			$(this).children("span").css("border","none");
			$(this).children("img").css("display","inline");
			$(".pri").css("display","block");
		})
		},function(){
			$(this).css({"border-color":"#f4f4f4"});
			$(this).children("div").eq(1).children("div").eq(1).removeClass("pri");
		})	
	}	
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
	this.show = function(){
		$(".hh").html(this.hours);
		$(".mm").html(this.minutes);
		$(".ss").html(this.seconds);
	}
	this.show1 = function(){
		$(".d").html(this.day);
	    $(".h").html(this.hours);
	    $(".m").html(this.minutes);
	    $(".s").html(this.seconds);
	}
}
//recommand-lists图片动画
function bord(){
	var _list = $("._li").get();
	for(var i = 0;i < _list.length;i ++){
		$(_list[i]).hover(function(){
			$(this).css("border-color","red")
		},function(){
			$(this).css("border-color","#f4f4f4")
		})
	}
}
//recommand-lists图片加载
function loadImage(){
	$.post("page2.json",null,function(data,textStatus){
		imgBox(data);
		bord();
		imgLi(data);
		infoBox();
	},"json");
}
//recommand-lists 处理函数
function imgBox(data){
	var _li = null,div_img = null,rec_a1 = null,rec_a2 = null,_img = null,p_text = null;
	var div_tip = null,p_fir = null,_p = null;
	var _ul = document.getElementsByClassName("recommand-lists")[0];
	for(var i = 0;i < data["image"].length;i ++){
		_li = document.createElement("li");
		div_img = document.createElement("div");
		rec_a1 = document.createElement("a");
		rec_a2 = document.createElement("a");
		_img = document.createElement("img");
		p_text = document.createElement("p");
		div_tip = document.createElement("div");
		p_fir = document.createElement("p");
		_p = document.createElement("p");
		_li.className = "_li"
		div_img.className = "img-box";
		rec_a1.className = "rec_a1";
		rec_a2.className = "rec_a2";
		_img.src = "img/" + (i + 78) + ".jpg";
		p_text.className = "intro-text";
		p_text.innerHTML = data["tro_text"][i];
		div_tip.className = "prom-tip";
		p_fir.className = "first-text";
		p_fir.innerHTML = data["fir_text"][i];
		_p.innerHTML = data["_p"][i];
		_ul.appendChild(_li);
		_li.appendChild(div_img);
		div_img.appendChild(rec_a1);
		div_img.appendChild(rec_a2);
		div_img.appendChild(div_tip);
		rec_a1.appendChild(_img);
		rec_a2.appendChild(p_text);
		div_tip.appendChild(p_fir);
		div_tip.appendChild(_p);
	}
}
//qq header
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
	loadImage();
	window.setInterval(function(){
			var timer1 = new Date(2016,9,28,9);
			var timer2 = new Date(2016,9,18,9);
			var countDown1 = new CountDown(timer1);
			var countDown2 = new CountDown(timer2);
			countDown1.show();
			countDown2.show1();
		},1000);
	window.onscroll = function(){
		nav_fo();
		var g_t = new G_T();
		g_t.clic();
	}
	shop_car();
	cokie();
})