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
	this.currency = 'eur';
	this.change_usd = 28.6;
	this.change_eur = 32.6; 
	this.usd = this.change_usd / this.change_usd;
	this.euro = this.change_usd / this.change_eur;
	this._crypto = [
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

	this.addPriceProposal = function(currency){
		var price = [100, 250, 1000, 3000],
			priceLength = price.length,
			i = 0,
			currency = this.currency == 'usd' ? this.usd : this.euro;
		while(i < priceLength){
			price.push(+(price[i] * currency).toFixed(1))
			i++;
		}
		price.splice(0, price.length / 2);
		return price;
	}

	this.drawData = function(currency){
		$('#pricing-packages').html('');
		var self = this;
		this.currency = currency;
		var html = '';
		$.each(this._crypto, function (index, value) {
		  	html += '<div class="pricing" id="'+value.name+'"><div class="row">';
			$.each(self.addPriceProposal(this.currency), function (index, data) {
				html += '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">'+
							'<div class="banner flex-container flex-dir-column cut">'+
								'<div class="banner__header text-center">'+
									'<h5 class="h5 currency__data">'+
										'<span class="surrency__value">'+ data / value.value +'</span>'+
										'<span class="currency__data text-uppercase ">'+ value.name +'</span>'+
									'</h5>'+
								'</div>'+
								'<div class="banner__scale"><div></div></div>'+
								'<div class="banner__body flex-container flex-dir-column align-center-middle flex-grow">'+
									'<h4 class="h4 currency__title">'+
										'<span>';
										html += self.currency == 'usd'? '$': '€'
										html +='</span>'+
										'<span class="currency__price" data="'+data+'">'+data+'</span>'+
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
			html +=	'</div></div>';
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
		$('#currency-slider').attr('range', this._crypto[activeCrypto].value);
		var min;
		var max;
		var val = this._crypto[activeCrypto].value;

		if (this.currency == 'usd') {
			$('#field-currency').val(100);
			$('#field-crypto').val(100);
			min = (this.change_usd / this.change_usd) * 100 / val;
			max = (this.change_usd / this.change_usd) * 4900 / val;
			$('#field-currency').val(((this.change_usd / this.change_usd) * 100).toFixed(2));
		}
		else{
			$('#field-currency').val(87);
			$('#field-crypto').val(100);
			min = (this.change_usd / this.change_eur) * 100  / val;
			max = (this.change_usd / this.change_eur) * 4900  / val;
			$('#field-currency').val(((this.change_usd / this.change_eur) * 100).toFixed(2));
		}
		$('#currency-slider').attr('min', min.toFixed(2));
		$('#currency-slider').attr('max', max.toFixed(2));
		$('#currency-slider').attr('value', min.toFixed(2));
		$('#field-crypto').val(min.toFixed(2));


		$('.range__min').text(min.toFixed(2));
		$('.range__middle').text(max.toFixed(2) / 2);
		$('.range__max').text(max.toFixed(2));
	}
}


var activeCrypto = $('.options .button-crypto.active').attr('data'),
	activeCurrency = $('.options .button-currency.active').attr('data');


var currency = new Currency();

currency.addPriceProposal('usd');
currency.drawData('usd');
currency.findActive();
currency.setLabel(activeCrypto, activeCurrency);

function animateNumber(){
	$('.banner__scale div').removeClass('animation');
	$('.currency__price').each(function () {
		var attr = $(this).attr('data');
		$(this).animate({ num: attr
		}, {
			duration: 3000,
			step: function(num){
				$(this).text(num.toFixed(1))
			},
			complete: function(){
				$('.banner__scale div').addClass('animation');
				this.num = 0;
			}
		});
	});
}


var timerId = setTimeout(function tick() {
	animateNumber();
  	timerId = setTimeout(tick, 60000);
}, 2000);