siteBuilder();
addPlaces();
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
	$("body").append(`<main><div id="maincontent" class="container"></div></main>`);
			$("#maincontent").append(`

			`)
	$("body").append(`<footer>&copy;</footer>`);
}
//---------------------------------------End Site Builder---------------------------------------------------


	$("#maincontent").append(`<div>${blogLocation2.display()} ${blogLocation2.displayR()} </div>`);
	$("#maincontent").append(`<div>${blogLocation3.display()} ${blogLocation3.displayHTML()}</div>`);
	$("#maincontent").append(`<div>${blogLocation4.display()} ${blogLocation4.timeUntilE()}</div>`);


function addPlaces(){
	$("body").append(`<form class="w-50">
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
						  <p class="newBtn btn btn-primary">eintragen</p>
						</form>
	`);

	$(".newBtn").on("click",function(e){
		var blogLocationX = new MyLocation(locationArray.length+1,$("#inF1").val() , $("#inF2").val() , $("#inF3").val() , $("#inF4").val() , $("#inF5").val());
		locationArray.push(blogLocationX);
		listLocation();
	});

};
function listLocation(){
	$("#maincontent").empty();
	for (item of locationArray){
		$("#maincontent").append(`<div>${item.display()}</div>`);

	}
}
