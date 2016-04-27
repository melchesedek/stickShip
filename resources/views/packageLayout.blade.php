<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Package Selection</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="/css/app.css" type="text/css" />
        <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </head>
    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="https://www.shipsticks.com/">
            <img src="/images/logo.png" alt="ShipStix">
          </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Package Selection</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
        <div class="container-fluid">
        <div class="row">
          <div class="container shipWrap">
            <h1> Launch Calculator to select your package !</h1>
               

  <div class="action">
    <button class="btn btn-success btn-lg main" data-toggle="modal" data-target="#myModal5">
      Launch Calculator 
    </button>
    <button type="reset" class="btn btn-warning btn-lg main" value="Reset" onClick="window.location.reload()">Reset</button>

  </div>
  <p id="packageTxt" class="hidden">Your recommended shipping package is: </p>
  <h2 id="packageName" class="hidden"></h2>
<!-- Modal -->
  <div class="modal fade" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="myModal5Label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <section class="section">
	<h1>Please enter your package weight and dimensions</h1>

	<div class="form-progress">
		<progress class="form-progress-bar" min="0" max="100" value="0" step="33" aria-labelledby="form-progress-completion"></progress>
		
		<div class="form-progress-indicator one active"></div>
		<div class="form-progress-indicator two"></div>
		
		<p id="form-progress-completion" class="js-form-progress-completion sr-only" aria-live="polite">0% complete</p>
	</div>
	
	
	<div class="animation-container">
		<!-- Step one -->
		<div class="js-form-step" data-step="1">
      <div class="alert alert-warning calc-warning hidden"></div>
			<form action="#" name="form-of-forms">
				<div class="fieldgroup">
					<input type="text" name="length" id="length" />
					<label for="length">Length</label>
				</div>

				<div class="fieldgroup">
					<input type="text" name="height" id="height" />
					<label for="height">Height</label>
				</div>

				<div class="fieldgroup">
					<input type="text" name="width" id="width" />
					<label for="width">Width</label>
				</div>

				<div class="fieldgroup">
					<input type="text" name="weight" id="weight" />
					<label for="weight">Weight</label>
				</div>

				<div class="buttons">
							<button type="button" class="btn btn-alt js-reset">Reset</button>

						<button type="submit" class="btn btn-calculate">Calculate</button>
				</div>
			</form>

		</div>
		
			<!-- Step two -->
			<div class="js-form-step waiting hidden" data-step="2">

				<form action="#" name="form-of-forms">
				<div class="action">
				  <h2 class="results"></h2>
			
								<button type="button" class="btn btn-alt js-reset">Reset</button>
        </div>
        
        

				</form>

		</div>
		</div>
	
</section>
          </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->

               
 
                  
          </div>
        </div>
        </div>
        
        <script type="text/javascript" src="/js/form.js"></script>
        <script type="text/javascript" src="/js/modal.js"></script>
        <script type="text/javascript" src="/js/main.js"></script>
    </body>
</html>


