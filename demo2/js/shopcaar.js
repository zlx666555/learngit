function shopcarr(car,kee){
	if(car == 123){
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
	}
	//removeCookie("addcar");
}