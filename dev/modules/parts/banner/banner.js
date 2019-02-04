$('.button-crypto').click(function(){
	var data = $(this).attr('data');
	$('.button-crypto').removeClass('active');
	$(this).addClass('active');

	$('.pricing').slideUp();
	$(data).slideDown();
});



$('.button-currency').click(function(){
	var data = $(this).attr('data');

	$('.button-currency').removeClass('active');
	$(this).addClass('active');

	currency.drawData(data);
	currency.findActive();
});


function Currency(){
	

	this._currency = 'eur';


	this.drawData = function(currency){
		$('#pricing-packages').html('');
		var self = this;
		this._currency = currency;
		var range = this._currency == 'usd' ? [100, 250, 1000, 3000] : [87, 218, 873, 2620];
		var html = '';
		var crypto = [
			{
				name: "btc",
				value: 3611.54
			},
			{
				name: "eth",
				value: 114.53
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
				value: 128.8
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
														'<span>';
														html += self._currency == 'usd'? '$': '€'
														html +='</span>'+
														'<span>'+data+'</span>'+
													'</h4>'+
													'<button class="button button--primary">Buy Now</button>'+
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
		$('#pricing-packages').append(html);
		benners = '';
	}
	this.findActive = function(){
		var active = $('.options .button-crypto.active').attr('data');
		$(active).slideDown();
	}

}

var currency = new Currency();
currency.drawData('usd');
currency.findActive();