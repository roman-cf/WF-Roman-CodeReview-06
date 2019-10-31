siteBuilder();

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
	$("body").append(`<footer>&copy;</footer>`);
}
//---------------------------------------End Site Builder---------------------------------------------------


function test(mystring1){
	$("body").append(`<div>${mystring1}</div>`);

}