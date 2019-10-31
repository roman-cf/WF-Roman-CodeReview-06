class MyLocation {
	lId:number;
	lName:string;
	lCity:string;
	lZip:number;
	lAdress:string;
	
	constructor(lId,lName,lCity,lZip,lAdress) {
		this.lId = lId;
		this.lName = lName;
		this.lCity = lCity;
		this.lZip = lZip;
		this.lAdress = lAdress;
	}

	display(){
		return this.lName + " " + this.lCity;
	}

	displayHTML(){
		return `<p>`+ this.lName + ` some extratext` + this.lZip + `</p>`;
	}

}

class Restaurant extends MyLocation{
	rType:string;
	rPhone:string;
	rWww:string;

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

class myEvent extends MyLocation{
	eDate:string;
	ePrice:number;

	constructor(lId,lName,lCity,lZip,lAdress,eDate,ePrice){
		super(lId,lName,lCity,lZip,lAdress);
		this.eDate = eDate;
		this.ePrice = ePrice;
	}

	timeUntilE(){

		let x = this.eDate.toString();
		let zielDatum = new Date(x);
		let startZeit = zielDatum.getTime();
	    let newDate = new Date();
	    let jetzt = newDate.getTime();
	    let spanne = Math.round((startZeit-jetzt)/1000);
	    let d = Math.floor(spanne/(24*60*60));
	    	    
	    return  "noch "+ d+" Tage";
	}
}

var blogLocation1 = new MyLocation(1,"Prater","Vienna",1020, "Praterstern");
var blogLocation2 = new Restaurant(2,"Cactus2","Vienna",1100, "Reumanplatz", "Wiener Küche", "01/5837920", "www.cactus2.at")
var blogLocation3 = new myEvent(3,"silvesterparty", "Vienna", 1120, "Wurmbstrasse 36","Dec 31, 2019 12:00:00", 50)
var blogLocation4 = new myEvent(4,"silvesterparty", "Vienna", 1120, "Wurmbstrasse 36","Dec 31, 2019 23:59:59", 50)


var locationArray = [];
	locationArray.push(blogLocation1);
	locationArray.push(blogLocation2);
	locationArray.push(blogLocation3);
	locationArray.push(blogLocation4);

console.log(locationArray);
