		//Increment progress bar on continue
var value = 0;

var $animContainer = $('.animation-container');

$animContainer.css({
	'paddingBottom' : $('.js-form-step[data-step="1"]').height() + 'px'
});

//formReset function
function formReset() {
		value = 0;
		$('.form-progress-indicator').not('.one').removeClass('active');
		$('progress').val(value);
		$('form input').not('button').val('').removeClass('hasInput');
		$('.js-form-step').not('[data-step="1"]').addClass('hidden waiting');
		$('.js-form-step').removeClass('left leaving');
		$animContainer.css({
			'paddingBottom' : $('.js-form-step[data-step="1"]').height() + 'px'
		});
}

//Handle continue button clicks
var $section = $('.section');



//Reset Modal form
$('.js-reset').on('click', function() {
		formReset();
});

//Check the inputs to see if we should keep the label floating or not
$('form input').not('button').on('blur', function() {

		//Different validation for different inputs
		switch (this.tagName) {
				case 'SELECT':
						if (this.value > 0) {
								this.className = 'hasInput';
						} else {
								this.className = '';
						}
						break;

				case 'INPUT':
						if (this.value !== '') {
								this.className = 'hasInput';
						} else {
								this.className = '';
						}
						break;

				default:
						break;
		}
});