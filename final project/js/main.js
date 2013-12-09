$('.circle_text').hide().removeClass('circle_text').addClass('circle_text-js');

$('.small_circle').hover(function(){
	$(this).find('.circle_text-js').fadeToggle();
});


$('#contact').click(function () {
	window.location.href = 'contact.html';
});
$('#pt').click(function () {
	window.location.href = 'parktudor.html';
});
$('#msu').click(function () {
	window.location.href = 'msu.html';
});
$('#crowe').click(function () {
	window.location.href = 'crowe.html';
});
$('#fb').click(function () {
	window.location.href = 'facebook.html';
});
$('#wic').click(function () {
	window.location.href = 'wic.html';
});
$('#ict').click(function () {
	window.location.href = 'ict.html';
});