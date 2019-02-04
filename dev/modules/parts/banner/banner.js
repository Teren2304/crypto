$('.crypto').click(function(){
	var data = $(this).attr('data');
	$('.crypto').removeClass('active');
	$(this).addClass('active');

	$('.pricing').slideUp();
	$(data).slideDown();
});





function Currency(currency, cost){
	this._currency = currency;
	this._cost = cost;


	this.getCurrency = function(){
		alert(this._cost);
	}

	this.drawData = function(){
		//var crypto = ['btc','eth','xrp','ltc','bch','ada','qtum'];
		var range = [100, 250, 1000, 3000];
		var html = '';
		var banners = '';
		var crypto = [
			{
				name: "btc",
				value: 2777
			},
			{
				name: "eth",
				value: 890
			},
			{
				name: "xrp",
				value: 317
			},
			{
				name: "ltc",
				value: 0.282
			},
			{
				name: "bch",
				value: 0.80
			},
			{
				name: "ada",
				value: 2502
			},
			{
				name: "qtum",
				value: 5223
			}
		]

		
		$.each(crypto, function (index, value) {
		  	html += '<div class="pricing" id="'+value.name+'">'+
						'<div class="row">';
						$.each(range, function (index, data) {
							html += '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">'+
											'<div class="banner flex-container flex-dir-column cut">'+
												'<div class="banner__header text-center">'+
													'<h5 class="h5 currency__data">'+
														'<span class="surrency__value">'+ data / value.value +'</span>'+
														'<span class="currency__data text-uppercase ">'+ value.name +'</span>'+
													'</h5>'+
												'</div>'+
												'<div class="banner__body flex-container flex-dir-column align-center-middle flex-grow">'+
													'<h4 class="h4 currency__title">'+
														'<span>&euro;</span>'+
														'<span>'+data+'</span>'+
													'</h4>'+
													'<button class="button--primary">Buy Now</button>'+
													'<p class="font currency__data">'+
														'<span>You get '+ data / value.value +'</span>'+
														'<span class="text-uppercase">'+ value.name +'</span>'+
													'</p>'+
												'</div>'+
											'</div>'+
										'</div>';
						});
				html +=	'</div>'+
					'</div>';
		});
		$('#cha').append(html);
		benners = '';
	}
}


var currency = new Currency('btc', '2227');
currency.drawData();



