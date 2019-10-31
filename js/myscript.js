class MyLocation {
	lId;
	lName;
	lCity;
	lZip;
	lAdress;
	
	constructor(lId,lName,lCity,lZip,lAdress,lPicUrl) {
		this.lId = lId;
		this.lName = lName;
		this.lCity = lCity;
		this.lZip = lZip;
		this.lAdress = lAdress;
		this.lPicUrl = lPicUrl;
	}

	display(){
		return this.lName + " " + this.lCity;
	}
	displayHTML(){
		return `<p>`+ this.lName + ` some extratext` + this.lZip + `</p>`;
	}

}

class Restaurant extends MyLocation{
	rType;
	rPhone;
	rWww;

	constructor(lId,lName,lCity,lZip,lAdress,rType,rPhone,rWww){
		super(lId,lName,lCity,lZip,lAdress);
		this.rType = rType;
		this.rPhone = rPhone;
		this.rWww = rWww;
	}
	displayR(){
		return this.rPhone + " " + this.rWww;
	}
}

class Event extends MyLocation{
	eDate;
	eTime;
	ePrice;

	constructor(lId,lName,lCity,lZip,lAdress,eDate,eTime,ePrice){
		super(lId,lName,lCity,lZip,lAdress);
		this.eDate = eDate;
		this.eTime = eTime;
		this.ePrice = ePrice;
	}

	timeUntilE(){

		let x = this.eDate.toString();
		console.log(x)
		const zielDatum = new Date(x);
		console.log(zielDatum);

		const startZeit = zielDatum.getTime();
		console.log(startZeit);


	    var newDate = new Date();
	    var jetzt = newDate.getTime();
	    var spanne = Math.round((startZeit-jetzt)/1000);
	    var d = Math.floor(spanne/(24*60*60));
	    	    
	    return  "noch "+ d+" Tage";
	}
}

var blogLocation1 = new MyLocation(1,"Prater","Vienna",1020, "Praterstern");
var blogLocation2 = new Restaurant(2,"Cactus2","Vienna",1100, "Reumanplatz", "Wiener Küche", "01/5837920", "www.cactus2.at")
var blogLocation3 = new Event(3,"silvesterparty", "Vienna", 1120, "Wurmbstrasse 36","Dec 31, 2019 12:00:00","", 50)
var blogLocation4 = new Event(4,"silvesterparty", "Vienna", 1120, "Wurmbstrasse 36","Dec 31, 2019 23:59:59","", 50)


	$("body").append(`<div>${blogLocation1.display()}</div>`);
	$("body").append(`<div>${blogLocation2.display()} ${blogLocation2.displayR()} </div>`);
	$("body").append(`<div>${blogLocation3.display()} ${blogLocation3.displayHTML()}</div>`);
	$("body").append(`<div>${blogLocation4.display()} ${blogLocation4.timeUntilE()}</div>`);


var locationArray = [];
	locationArray.push(blogLocation1);
	locationArray.push(blogLocation2);
	locationArray.push(blogLocation3);
	locationArray.push(blogLocation4);

console.log(locationArray);
