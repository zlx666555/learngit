function setCookie(name, value, expires, path, domain, secure){
        document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
}
function delCookie(name,path){
    var guoqu = new Date();
    expiresTime = guoqu.setTime(guoqu.getTime() - 10000);
    setCookie(name,'',expiresTime,path) ;
}