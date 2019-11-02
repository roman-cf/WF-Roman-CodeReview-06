var typeArray = [["loc","res","eve"],["Location","Restaurant","Event"]];

siteBuilder();
addPlaces();
listLocation();
//-------------------------------------------Site Builder---------------------------------------------------
function siteBuilder(){
	$("title").text("Travel blog");
	$("body").append(`
					<header id="header" class=" d-flex justify-content-between text-white  bg-primary p-2">
						<p class="h2 m-1">My Travelblog</p>
						<nav class=" navbar navbar-expand-md p-2 justify-content-end">
							<button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarContent"
							    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon text-white" >&#8801;</span>
							</button>
							<div class="collapse navbar-collapse "  id="navbarContent">
								<ul class="navbar-nav justify-content-end">
								</ul>
							</div>
						</nav>	
					</header>
		`);
	$("body").append(`<main id="maincontent" class="container"></main>`);
	$("#maincontent").append(`
					<div id="showLocation" class="container row d-flex">
					</div>
	`)
	$("body").append(`<footer>&copy;</footer>`);
}
//---------------------------------------End Site Builder---------------------------------------------------


//---------------------------------------Adding Places---------------------------------------------------
function addPlaces(){
	$("#maincontent").append(`<form class=" container ">
							<h3> add a new Place</h3>
							<ul class="nav nav-tabs">
							    <li><p class="btn btn-light" data-toggle="tab" href="#">Location only</p></li>
							    <li><p class="btn btn-light" data-toggle="tab" href="#eventinput">Events</p></li>
							    <li><p class="btn btn-light" data-toggle="tab" href="#restinput">Restaurant</p></li>
							</ul>

						  <div class="form-group">
						    <input type="text" class="form-control" id="inF1" placeholder="Location Name">
						  </div>
						  <div class="form-group">
						    <input type="text" class="form-control" id="inF2" placeholder="City">
						  </div>
						  <div class="form-group">
						    <input type="text" class="form-control" id="inF3" placeholder="Zip Code">
						  </div>
						  <div class="form-group">
						    <input type="text" class="form-control" id="inF4" placeholder="Adress">
						  </div>
						  <div class="form-group">
						    <input type="text" class="form-control" id="inF5" placeholder="Picture URL">
						  </div>

						<div class="tab-content">
							<div id="eventinput" class="class="tab-pane fade"">	
								<div class="form-group">
							   		<input type="text" class="form-control" id="inF6" placeholder="Date">
								</div>
								<div class="form-group">
					   				<input type="text" class="form-control" id="inF7" placeholder="Price">
								</div>
							</div>
							<div id="restinput" class="class="tab-pane fade"">	
								<div class="form-group">
							   		<input type="text" class="form-control" id="inF6" placeholder="Restauranttype">
								</div>
								<div class="form-group">
					   				<input type="text" class="form-control" id="inF7" placeholder="www">
								</div>
							</div>
						</div>

							<p class="newBtn btn btn-primary">eintragen</p>

						</form>
	`);

	$(".newBtn").on("click",function(e){
		var blogLocationX = new MyLocation(locationArray.length+1,$("#inF1").val() , $("#inF2").val() , $("#inF3").val() , $("#inF4").val() , $("#inF5").val());
		locationArray.push(blogLocationX);
		$(".form-control").val("");
		listLocation();
	});
};

//---------------------------------------list all Locations--------------------------------------------------

function listLocation(){
	$("#showLocation").empty();
	for(i=0; i<typeArray[0].length; i++){
		$("#showLocation").append(`<h2 class="col-12">`+typeArray[1][i]+`</h2>`);
		for (item of locationArray){
			if((item.lId).slice(0,3) == typeArray[0][i]){
				$("#showLocation").append(`	<div id="card${item.lId}" class="col-lg-4 col-md-6 col-sm-12 mb-3" style="width: 28rem;"">
												${item.display()}
											</div>`);
			}
		}
	}
}
