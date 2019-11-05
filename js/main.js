var typeArray = [["loc","res","eve"],["Location only","Restaurants","Events"],["MyLocation","myRestaurant","myEvent"]];
var argumentsArr = [["lId","lName","lCity","lZip","lAdress","lPicUrl"],["id", "Location Name", "City", "Zip Code", "Adress", "Picture URL"]];
var argumentsArrres= [["rType","rPhone","rWww"],["Restaurant Typ", "Phone", "www"]];
var argumentsArreve=[["eDate","ePrice"],["Dec 31, 2019 23:59:59","Price for Entrance"]];
var addId="";

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
	$("#maincontent").append(`
					<form class=" container ">
						<h3> add a new Place</h3>
						<ul class="addLocList nav nav-tabs"></ul>
						<div class="tab-content"></div>
						<p class="newBtn btn btn-primary">eintragen</p>
					</form>
	`);
	//-----------add tabs for input-------------------------
	
	for(i=0; i<typeArray[0].length; i++){
		$(".addLocList").append(`<li><p class=" btn btn-light" data-toggle="tab" href="#`+typeArray[0][i]+`">`+typeArray[1][i]+`</p></li>`);
	};	


	$(".addLocList p").click(function(e){
		addId=$(this).attr("href").slice(1);
		$(".tab-content").empty();
		$(".tab-content").append(`
				<div id="`+addId+`" class="tab-pane fade"">
				</div>
		`);
		for (let i =1; i<argumentsArr[0].length;i++){
			$(".tab-pane ").append(`
				<div class="form-group">
					    <input type="text" class="form-control" id="inF`+i+`" placeholder="`+argumentsArr[1][i]+`">
				</div>
			`);
		};
		if(addId!="loc"){
			for (let i =0; i<window["argumentsArr"+addId][0].length;i++){
				console.log(argumentsArr[0].length + i)
				$(".tab-pane ").append(`
					<div class="form-group">
						    <input type="text" class="form-control" id="inF`+(argumentsArr[0].length+i)+`" placeholder="`+window["argumentsArr"+addId][1][i]+`">
					</div>
				`);	
			};
		};
	});

	//-------------------------------------------
	$(".newBtn").on("click",function(e){

		var classConstr = typeArray[2][positionFinder(typeArray,addId)];
		console.log(classConstr)

		var blogLocationX = new MyLocation(addId+(locationArray.length+1),$("#inF1").val() , $("#inF2").val() , $("#inF3").val() , $("#inF4").val() , $("#inF5").val());
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
//--------------------------
function positionFinder(obj, value) {
    for(var i = 0; i < obj.length; i ++) {
        if(obj[0][i] === value) {
            return i;
        }
    }
    return -1;
}
//----------------testarea---------
	dumpArguments(MyLocation);	
	function dumpArguments(...args) {
	  for (var i = 0; i < args.length; i++)
	    console.log(args[i]);
	  return args;
	}
    //$("body").append('<ul>' + args + '</ul>');
