initPage();
//渲染数据
function initPage(){
	requireAjax();
	search_focus();
	isHistory();
	clearHistory();
}

//search1搜索框获取焦点,弹出第二个搜索页面
function search_focus(){
	$('#search1 .search .search_text').focus(function(){
		$('#search1').css('display','none');
		$('#search2').css('display','block');
	})
}
//请求ajax加载搜索数据
function requireAjax(){
	var _cont = $('.cont')[0];
	var search_cont = $('.deserve_search_list')[0];
	var img = null,name = null,li = null;
	var search_p = null,search_li = null,span = null,span1 = null;
	$.post('json/search.json',null,function(data,textStatus){
		for(var i = 0;i < data["search"].length;i ++){
			img = document.createElement('img');
			img.src = data["search"][i]['img'];

			p = document.createElement('p');
			p.innerHTML = data["search"][i]["name"];


			li = document.createElement('li');
			li.id = data["search"][i]["id"];
			li.appendChild(img);
			li.appendChild(p);
			_cont.appendChild(li);
		}
		for(var i = 0;i < data["deserve_search"].length;i ++){
			search_p = document.createElement('p');
			search_p.innerHTML = data["deserve_search"][i]["search_name"];

			search_li = document.createElement('li');
			search_li.id = data["deserve_search"][i]["id"];
			search_li.appendChild(search_p);
			search_cont.appendChild(search_li);
		}
		//console.log($('.deserve_search_list li').eq(0));
		span = document.createElement('span');
		span.className = 'deserveBuy';
		span.innerHTML = "超值购买";
		$('.deserve_search_list li').eq(0).append(span);
		span1 = document.createElement('span');
		span1.className = 'deserveBuy';
		span1.innerHTML = "超值购买";
		$('.deserve_search_list li').eq(1).append(span1);
	},'json');
}

//判断是否有搜索历史
function isHistory(){
	var searchGood = sessionStorage.getItem('goods');
	//console.log(searchGood);
	if(searchGood != null){
		$('.search_history').css('display','block');
		saveHistory(searchGood);
	}
	searchHistory();
}
//获取搜索框内容,并添加到历史记录中
function searchHistory(){
	var goods = [];
	$('.search_span').tap(function(){
		var searchCont = $('#search2 .search_text').val();
		var searchGood = sessionStorage.getItem('goods');
		//console.log(searchGood)
		if(searchGood != null){
			var search = searchGood.split(',');
			for(var i = 0;i < search.length;i ++){
				if(searchCont == search[i]){
					break;
				}else{
					if(i==search.length-1){
						search.push(searchCont);
						sessionStorage.setItem('goods',search);
						saveHistory(searchCont);
					}
				}
			}
		}else{
			goods.push(searchCont);
			sessionStorage.setItem('goods',goods);
			saveHistory(searchCont);
		}
		$('.search_history').css('display','block');
		referResult(searchCont);
	});
}
//将搜索内容存入到搜索历史中
function saveHistory(_search){
	var li = null;
	var search = _search.split(',');
	//console.log(search);
	for(var i = 0;i < search.length;i ++){
		li = document.createElement('li');
		li.innerHTML = search[i];
		$('.search_history_list').append(li);
	}
}

//清除搜索历史
function clearHistory(){
	$('.search_history button').tap(function(){
		$('.search_history').css('display','none');
		sessionStorage.clear();
		$('.search_history_list').empty();
	});
}

//根据搜索记录查询结果
function referResult(searchCont){
	$.ajax({
		url : "http://datainfo.duapp.com/shopdata/selectGoodes.php",
		type : 'post',
		data : 'selectText='+searchCont,
		dataType : 'JSONP',
		success : function(data){
			console.log(data);
		}
	})
}