$('.button-crypto').click(function(){
	var data = $(this).attr('data');
	$('.button-crypto').removeClass('active');
	$(this).addClass('active');

	$('.pricing').slideUp();
	$(data).slideDown();
	//.label-currency
});



$('.button-currency').click(function(){
	var data = $(this).attr('data');

	$('.button-currency').removeClass('active');
	$(this).addClass('active');

	currency.drawData(data);
	currency.findActive();
});



$('.button').click(function(){
	var activeCrypto = $('.options .button-crypto.active').attr('data'),
		activeCurrency = $('.options .button-currency.active').attr('data')
	currency.setLabel(activeCrypto, activeCurrency);
});


function Currency(){
	this._currency = 'eur';
	this._crypto = [
		{
			name: "btc",
			value: 3611.54,
			min: 0.028,
			max: 1.358,
			step: 0.00001
		},
		{
			name: "eth",
			value: 114.53,
			min: 0.89,
			max: 43.59,
			step: 0.00001
		},
		{
			name: "xrp",
			value: 317,
			min: 317.734,
			max: 15568.977,
			step: 10
		},
		{
			name: "ltc",
			value: 0.282,
			min: 2.81,
			max: 137.63,
			step: 1
		},
		{
			name: "bch",
			value: 128.8,
			min: 0.805,
			max: 39.434,
			step: 0.1
		},
		{
			name: "ada",
			value: 2502,
			min: 2508.81,
			max: 122931.83,
			step: 10
		},
		{
			name: "qtum",
			value: 5223,
			min: 52.494,
			max: 2572.188,
			step: 1
		}
	]
	this.drawData = function(currency){
		$('#pricing-packages').html('');

		var self = this;
		this._currency = currency;
		var range = this._currency == 'usd' ? [100, 250, 1000, 3000] : [87, 218, 873, 2620];
		var html = '';
		$.each(this._crypto, function (index, value) {
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
	}
	this.findActive = function(){
		var active = $('.options .button-crypto.active').attr('data');
		$(active).slideDown();
	}

	this.setLabel = function(crypto, currency){
		$('.label-crypto').text(crypto.substring(1));
		$('.label-currency').text(currency);


		var activeCrypto = $('.options .button-crypto.active').attr('count');
		$('.range input').attr('min', this._crypto[activeCrypto].min);
		$('.range input').attr('max', this._crypto[activeCrypto].max);
		$('.range input').attr('value', this._crypto[activeCrypto].min);
	}
}


var activeCrypto = $('.options .button-crypto.active').attr('data'),
	activeCurrency = $('.options .button-currency.active').attr('data');


var currency = new Currency();
currency.drawData('usd');
currency.findActive();
currency.setLabel(activeCrypto, activeCurrency);
