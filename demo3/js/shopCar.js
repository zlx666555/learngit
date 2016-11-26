var shopDetail,shopLi;
pageInit();
//渲染页面
function pageInit(){
	shopDetail = $(".shopList");
	shopLi = $(".shopList").find('.shopLi').clone(false);
	shopCar();
}
//根据加入购物车的数据加载购物车
function shopCar(){
	var good = localStorage.getItem('goodsID');
	$.post("json/index.json",null,function(data,textStatus){
		shopDetail.empty();
		var _price = 0;
		for(var i = 0;i < data['goodsList'].length;i ++){
			if(data['goodsList'][i]['goodsID'] == good){
				if(data['goodsList'][i]['discount'] != 0){
					_price = data['goodsList'][i]['price'] / (data['goodsList'][i]['discount'] / 10);
				}else{
					_price = data['goodsList'][i]['price'];
				}
				_price = Number(_price).toFixed(2);
				var oLi = shopLi.clone(false);
				//console.log(data['goodsList'][i]['bannerImg']);
				oLi.attr('id',good);
				oLi.find(".merImg").attr("src",'img/'+data['goodsList'][i]['goodsImg']);
				oLi.find('.merName').html(data['goodsList'][i]['goodsName']);
				oLi.find('.priceNowCur').html(data['goodsList'][i]['price']);
				oLi.find('.priceOriCur').html(_price);
				shopDetail.append(oLi)
			}else{
				continue;
			}
		}
		$('.header .num').html($('.shopLi').length);
		//点击编辑,实现编辑功能
		function edit(){
			//var onOff = true;
			var list = $('.edit1').get();
			for(var i = 0;i < list.length; i++){
				list[i].index = i;
				list[i].myoff = true;
				list[i].onclick = function(){

					if(this.myoff){
						$('.storeDetail').eq(this.index).css('display','none');
						$('.storeEdit').eq(this.index).css('display','block');
						$('.edit1').eq(this.index).html('完成');
						$('.storeEditDel').eq(this.index).tap(function(){
							$(this).parents('li').remove();
							//localStorage.removeItem()
							edit();
						})
						
					}else{
						$('.storeDetail').eq(this.index).css('display','block');
						$('.storeEdit').eq(this.index).css('display','none');
						$('.edit1').eq(this.index).html('编辑');
					}
					this.myoff = !this.myoff;
					changeNum();
				}
			}
		}
		edit();
		//点击加减改变数量
		function changeNum(){
			var subList = $('.storeSub').get();
			var addList = $('.storeAdd').get();
			for(var i = 0;i < subList.length;i ++){
				subList[i].index = i;
				subList[i].onclick = function(){
					if($('.storeNum').eq(this.index).val() > 1){
						$('.storeNum').eq(this.index).val(Number($('.storeNum').eq(this.index).val()) - 1) ;
						$('.numb').html($('.storeNum').eq(this.index).val());
					}
				}
				
			}
			for(var i = 0;i < addList.length;i ++){
				addList[i].index = i;
				addList[i].onclick = function(){
					console.log(typeof Number($('.storeNum').eq(this.index).val()));
					$('.storeNum').eq(this.index).val(Number($('.storeNum').eq(this.index).val()) + 1);
					$('.numb').html($('.storeNum').eq(this.index).val());
				}

			}

		}
		changeNum();
	},"json");
}

