//创建cookei
function createCookie(name,value,expires,path,domain,secure){
	var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	//检测expires是否为Date的一个实例对象
	if(expires instanceof Date){
		//给cookie加第一个参数（过期时间）
		cookieText += ';expires=' + expires;
	}
	if(path){
		cookieText += ";path=" + path;
	}
	if(domain){
		cookieText += ";domain=" + domain;
	}
	if(secure){
		cookieText += ";secure";
	}
	document.cookie = cookieText;
}
//设置失效时间
function setCookieTime(day){
	var date = null;
	//确定形参day是一个数字且是一个大于0的数
	if(typeof day == 'number' && day > 0){
		date = new Date(); //创建日期对象
		date.setDate(date.getDate() + day); //设置日（今天的日加上一个大于0的整数）
	}
	return date;
}

//获取cookie
function getCookie(name){
	//获取用户查找的字符串
	var cookieName = encodeURIComponent(name) + '=';
	//获取查找字符串的下标
	var cookieStart = document.cookie.indexOf(cookieName);
	var cookieValue = null;
	//在可以找到用户查找的字符串的情况下，继续查找要截取字符的结束位置
	if(cookieStart > -1){
		//从用户查找的字符串开始查找;的位置
		var cookieEnd = document.cookie.indexOf(";",cookieStart);
		if(cookieEnd == -1){ //如果返回的是-1,说明没有查到;也就是已经查找到了字符串的末尾
			cookieEnd = document.cookie.length; //将整个字符串的长度作为结束位置
		}
		//截取指定范围的字符串并解码
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length,cookieEnd));
	}else{
		return "cookie中没有您要找的数据!";
	}
	return cookieValue;
}

//删除cookie
function removeCookie(name){
		document.cookie = encodeURIComponent(name) + '=;expires=' + new Date(0);
}