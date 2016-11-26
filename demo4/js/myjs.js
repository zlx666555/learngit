var swiper = new Swiper(".swiper-container",{
	direction : 'vertical',
	speed : 1000,
	pagination : '.swiper-pagination',
	paginationClickable :true,
	noSwipingClass : 'stop-swiping',
	mousewheelControl : true,
	
	onInit : function(swiper){
		var index = swiper.activeIndex + 1;
		$("#page-" + index).addClass("active");
	},
	
	onSlideChangeStart : function(swiper){
		
		$(".pageChange").find("a").removeClass("active");
   		var index = swiper.activeIndex + 1;
      	$("#page-" + index).addClass("active");
      	
      	
		if(swiper.activeIndex == 0){
			$(".panel").attr("class","panel");
			$("p.index").stop().animate({"opacity":"1"});
			$(".action").addClass("move1");
			$(".page2").attr("class","page2");
		}else {
			$("p.index").stop().animate({"opacity":"0"});
			$(".panel").attr("class","panel state"+swiper.activeIndex);
			$(".action").removeClass("move1");
			
			if(swiper.activeIndex == 1){
				$(".page2").attr("class","page2 move2")
			}else {
				$(".page2").attr("class","page2");
			}
			if(swiper.activeIndex == 2){
				$(".p3_img").attr("class","p3_img move3");
			}else {
				$(".p3_img").attr("class","p3_img");
			}
			if(swiper.activeIndex == 3){
				$(".p4_img").addClass("move4");
			}else {
				$(".p4_img").removeClass("move4");
			}
			if(swiper.activeIndex == 4){
				$(".p5_img").addClass("move5");
			}else {
				$(".p5_img").removeClass("move5");
			}
			
			
		}
	}
});

$(".pageChange").find("a").click(function(){
	var index = $(this).attr("id");
	index = index.split("-")[1] - 1;
	swiper.slideTo(index);
})
function autoplay(){
	window.clearInterval(timer);
	var _list = document.getElementsByClassName("i");
	for(var i = 0;i < _list.length;i++){
		_list[i].index = i;
		if(_list[i].style.display == "block"){
			_list[i].style.display = "none";
			_list[i + 1].style.display = "inline";//?	
		}
	}
}
function timer(){
	var timer = window.setInterval(function(){
		autoplay();
	},1000);
}
$(document).ready(function(){
	timer();
})


