
class MyLocation {
	lId:number;
	lName:string;
	lCity:string;
	lZip:number;
	lAdress:string;
	lPicUrl:string;
	
	constructor(lId,lName,lCity,lZip,lAdress,lPicUrl) {
		this.lId = lId;
		this.lName = lName;
		this.lCity = lCity;
		this.lZip = lZip;
		this.lAdress = lAdress;
		this.lPicUrl = lPicUrl;
	}

	display(){
		return `
				<div class="card h-100">
					<img class="card-img-top d-none d-sm-block"  src="img/`+ this.lPicUrl +` " alt="Card image"> 
					<div class="card-img-overlay offset-md-8 offset-lg-8">
						<p id="loc`+this.lId+`" class=" btn btn-secondary">Location only</p>
					</div>
					<div class="card-body d-flex flex-column">
						<h4 class="card-title">`+ this.lName +`</h4>
						<p class="card-text mt-auto small">`+ this.lAdress + ` in <br> ` + this.lZip + `  ` + this.lCity +`</p>
					</div>
				</div>
				`;
	}
};

class myRestaurant extends MyLocation{
	rType:string;
	rPhone:string;
	rWww:string;

	constructor(lId,lName,lCity,lZip,lAdress,lPicUrl,rType,rPhone,rWww){
		super(lId,lName,lCity,lZip,lAdress,lPicUrl);
		this.rType = rType;
		this.rPhone = rPhone;
		this.rWww = rWww;
	}
	display(){
		return `
				<div class="card h-100">
					<img class="card-img-top d-none d-sm-block"  src="img/`+ this.lPicUrl +` " alt="Card image"> 
					<div class="card-body d-flex flex-column">
						<h4 class="card-title">`+ this.lName +`</h4>
						<p class="card-text mt-auto">our kitchen: `+ this.rType + `</p>
						<p class="card-text mt-auto">&phone;`+ this.rPhone + ` in <br><a class="btn btn-dark" href="https://www.` + this.rWww + `">our website</a></p>
						<p class="card-text mt-auto small">`+ this.lAdress + ` in <br> ` + this.lZip + `  ` + this.lCity +`</p>
					</div>
				</div>
				`;
	}
}

class myEvent extends MyLocation{
	eDate:string;
	ePrice:number;

	constructor(lId,lName,lCity,lZip,lAdress,lPicUrl,eDate,ePrice){
		super(lId,lName,lCity,lZip,lAdress,lPicUrl);
		this.eDate = eDate;
		this.ePrice = ePrice;
	}

	display(){
			let x = this.eDate.toString();
			let zielDatum = new Date(x);
			let startZeit = zielDatum.getTime();
		    let newDate = new Date();
		    let jetzt = newDate.getTime();
		    let spanne = Math.round((startZeit-jetzt)/1000);
		    var	d = Math.floor(spanne/(24*60*60)); 	        		

		return `
				<div class="card h-100">
					<img class="card-img-top d-none d-sm-block"  src="img/`+ this.lPicUrl +` " alt="Card image"> 
					<div class="card-img-overlay offset-8 offset-md-8 offset-lg-8">
						<p id="eve`+this.lId+`" class=" badge badge-warning">in <b>`+d+`</b> days</p>
					</div>
					<div class="card-body d-flex flex-column">
						<h4 class="card-title">`+ this.lName +`</h4>
						<p class="card-text mt-auto">Date: `+ this.eDate + ` <br> Pirce: ` + this.ePrice + `€</p>
						<p class="card-text mt-auto small">`+ this.lAdress + ` in <br> ` + this.lZip + `  ` + this.lCity +`</p>
					</div>
				</div>
				`;
	}
}


var blogLocation1 = new MyLocation("loc1","Prater","Vienna",1020, "Praterstern","bild.jpg");
var blogLocation2 = new myRestaurant("res2","Cactus","Vienna",1100, "Pernerstorfergasse 9","cactus2.jpg", "Wiener Küche", "01/5837920", "cactus2.at")
var blogLocation3 = new myEvent("eve3","silvesterparty", "Innsbruck", 5120, "Amrasserstrasse 43","bild.jpg","Dec 31, 2019 23:59:59", 50)
var blogLocation4 = new myEvent("eve4","silvesterparty", "Vienna", 1120, "Wurmbstrasse 36","bild.jpg","Dec 31, 2019 23:59:59", 50)
var blogLocation5 = new myRestaurant("res5","Yumi","Vienna",1040, "Naschmarkt Stand 87","yumi.jpg", "Asiatische Küche", " 01/5855996", "yumi.eatbu.com")
var blogLocation6 = new myRestaurant("res6","Santo Spirito","Vienna",1010, "Kumpfgasse 7,","20161223-225628-largejpg.jpg", "Italienische Küche", "01/5129998", "santospirito.at")

var locationArray = [];
	locationArray.push(blogLocation1);
	locationArray.push(blogLocation2);
	locationArray.push(blogLocation3);
	locationArray.push(blogLocation4);
	locationArray.push(blogLocation5);
	locationArray.push(blogLocation6);

