function updateRangeInput(elem) {
	var attr = $(elem).attr('range');
  	$('#field-crypto').val($(elem).val());
  	$('#field-currency').val(($(elem).val() * attr).toFixed(2));
}

$('#field-crypto').keyup(function(){
	var attr = $('#currency-slider').attr('range');
  	$('#currency-slider').val($(this).val());
  	$('#field-currency').val(($(this).val() * attr).toFixed(2));
});

$('#field-currency').keyup(function(){
	var attr = $('#currency-slider').attr('range');
  	$('#field-crypto').val(($(this).val() / attr).toFixed(2));
  	$('#currency-slider').val(($(this).val() / attr).toFixed(2));
});