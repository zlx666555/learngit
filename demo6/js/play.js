function play_timer(){
	var player = document.getElementById("run_play");
	getTime();
	var countTime = 0;
	function getTime(){
		setTimeout(function(){
			if(isNaN(player.duration) || player.duration == Infinity){
				getTime();
			}else{
				countTime = player.duration;
				console.log(countTime);
				$(".pro").css("width",countTime);
			}
		},10);	
	}
	setInterval(function(){
		var timer = player.currentTime;
		var timer01 = Math.floor(timer);
		var countTime01 = Math.floor(player.duration);
		$(".pro_pro").css("width",timer);
		if(timer01%60 < 10){
			$(".num").html(Math.floor(timer01/60) + ":" + 0 + timer01%60 + '/' + Math.floor(countTime01/60) + ":" +countTime01%60);
		}else{
			$(".num").html(Math.floor(timer01/60) + ":" + timer01%60 + '/' + Math.floor(countTime01/60) + ":" +countTime01%60);
		}
		console.log(Math.floor(timer01/60));
	},1000);
}
function playerInit(){
	var player = document.getElementById("run_play");
	var song = [
				{
					name : "演员",
					singer : "薛之谦",
					album : "绅士",
					url : ["music/演员 - 薛之谦.ogg","music/演员 - 薛之谦.mp3"]
				},
				{
					name : "丑八怪",
					singer : "薛之谦",
					album : "绅士",
					url : ["music/丑八怪 - 薛之谦.ogg","music/丑八怪 - 薛之谦.mp3"]
				},
				{
					name : "认真的雪",
					singer : "薛之谦",
					album : "绅士",
					url : ["music/认真的雪 - 薛之谦.ogg","music/认真的雪 - 薛之谦.mp3"]
				},
				{
					name : "一半",
					singer : "薛之谦",
					album : "绅士",
					url : ["music/一半 - 薛之谦.ogg","music/一半 - 薛之谦.mp3"]
				}
			];
			player.vol = player.volume;				
			$("#vol").val(player.vol*100);
		var urlItem = song[0].url;
		for(var i in urlItem ){
			var source = $("<source src='"+urlItem[i]+"' />");
			$(player).append(source);
		}
}
function cli_play(){
	var player = document.getElementById("run_play");
	$(".run_button").click(function(){
		if(a){
			$("a img:last-child").css({
				"transform": "rotate(0deg)"
			})
			$("a img:nth-child(2)").addClass("two_img");
			$("a img:nth-child(2)").css("animation-play-state","running");
			$(".run_button").addClass("icon-bofang");
			$(".run_button").removeClass("icon-sanjiao");
			a = false;
			player.play();
		}else{
			$("a img:last-child").css({
				"transform": "rotate(-25deg)"
			})
			//$("a img:nth-child(2)").removeClass("two_img");
			$("a img:nth-child(2)").css("animation-play-state","paused");
			$(".run_button").addClass("icon-sanjiao");
			$(".run_button").removeClass("icon-bofang");
			 a = true;
			 player.pause();
		}
		
	})
}
var a = true;//记录是否在播放


$(document).ready(function(){
	var player = document.getElementById("run_play");
	cli_play();
	playerInit();
	play_timer();
	$("#vol").on("input",function(){
		player.volume = $(this).val()/100;
		player.vol = player.volume;
	});
})