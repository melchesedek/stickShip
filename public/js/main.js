var length = height = width = weight = null;
var $section = $('.section');
var $animContainer = $('.animation-container');
  
jQuery(document).ready(function($){

  $animContainer.css({
  	'paddingBottom' : $('.js-form-step[data-step="1"]').height() + 'px'
  });
     

  $('.btn-calculate').on('click', function(event) {
      var $that = $(this);
    	event.preventDefault();
      $('.calc-warning').addClass('hidden');
      $('#packageName').addClass('hidden');
  	  length = parseInt($('#length').val());
  	  height = parseInt($('#height').val());
  	  width = parseInt($('#width').val());
  	  weight = parseInt($('#weight').val());
  	  
  	  var errors = '';
  	  if(isNaN(length) || length <= 0) {
  	    errors += 'Please enter valid length<br>';
  	  }
  	  if(isNaN(height) || height <= 0) {
  	    errors += 'Please enter valid height<br>';
  	  }
  	  if(isNaN(width) || width <= 0) {
  	    errors += 'Please enter valid width<br>';
  	  }
  	  if(isNaN(weight) || weight <= 0) {
  	    errors += 'Please enter valid weight';
  	  }
  	 
  	  
  	  if(errors != '') {
  	    $('.calc-warning').removeClass('hidden').html(errors);
  	    return;
  	  }
  	  
  	  
  	  $.getJSON( "/data/packages.json", function( data ) {
        handleJsonData( $that, data );
       
      });
        	
  		
  
  		return false;
  });
});

function handleJsonData($this,data) {
  var matchedProduct = null;
  
  $.each( data, function( key, product ) {
    
    if( length <= product.length && width <= product.width && height <= product.height && weight <= product.weight) {
      matchedProduct = product;
      return false;
    }
  });
  
  if(matchedProduct == null) {
    $('.calc-warning').removeClass('hidden').html('Sorry, no package found!');
    return;
  }
  
  $('#packageName').html(matchedProduct.name).removeClass('hidden');
  $('#packageTxt').removeClass('hidden');
  $('.result').html(matchedProduct.name);
  $('.results').html(matchedProduct.name);
  
  setTimeout(function(){
    $('#myModal5').modal('toggle')
    formReset();
  }, 5000);
  
  
  
  var 	$currentForm = $this.parents('.js-form-step'),
  				currentFormStep = parseInt($currentForm.attr('data-step')),
  				$nextForm = $('.js-form-step[data-step="' + (currentFormStep + 1) + '"]');
  	
  		$('body').addClass('freeze');
  	
  		//Ensure top of form is in view
  		$('html,body').animate({scrollTop: $('progress').offset().top},'fast');
  	
  		//Hide current form fields
  		$currentForm
  					 .addClass('leaving')
  					 .one('webkitTransitionEnd', function() {
  			$(this).addClass('left').removeClass('leaving');
  		});
  	
  		$animContainer.css({'paddingBottom' : $nextForm.height() + 'px'})
  	
  		//Show next form fields
  		$nextForm
  			.removeClass('hidden')
  			.addClass('coming')
  			.one('webkitAnimationEnd', function() {
  			$(this).removeClass('coming waiting');
  		});
  	
  		$section.css('paddingBottom', '4rem');
  
  		//Increment value (based on 4 steps 0 - 100)
  		value += 99;
  
  		//Reset if we've reached the end
  		if (value >= 100) {
  				formReset();
  		} else {
  				$('.form-progress')
  						.find('.form-progress-indicator.active')
  						.next('.form-progress-indicator')
  						.addClass('active');
  
  				//Set progress bar to the next value
  				$('progress').val(value);
  		}
  
  		//Update hidden progress descriptor
  		$('.js-form-progress-completion').html($('progress').val() + '% complete');
  	
  		$('body').removeClass('freeze');
  		
}