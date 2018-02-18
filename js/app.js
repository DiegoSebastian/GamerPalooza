$(document).foundation()

jQuery(document).ready(function($) {
	const offCanvas = $('#offCanvas')
	offCanvas.find('li').on('click', function(ev) {
		offCanvas.foundation('close')
	})

	let precios = $('#precios').offset().top

	$('#comprar-boleto').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: precios - 38
		}, 500)
	})
});
