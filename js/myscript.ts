class MyLocation {
	lId:Number;
	lName:string;
	lCity:string;
	lZip:Number;
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
}

class Restaurant extends MyLocation{
	rName:string;
	rType:string;
	rPhone:Number;

	constructor(lId,lName,lCity,lZip,lAdress,rType,rPhone){
		super(lId,lName,lCity,lZip,lAdress);
		this.rType
		this.rPhone
	}
}

class Event extends MyLocation{
	eDate:Number;
	eTime:Number;
	ePrice:Number;

	constructor(lId,lName,lCity,lZip,lAdress,eDate,eTime,ePrice){
		super(lId,lName,lCity,lZip,lAdress);
		this.eDate = eDate;
		this.eTime = eTime;
		this.ePrice = ePrice;
	}

}

var blogLocation1 = new MyLocation(1,"Prater","Vienna",1020, "Praterstern");
console.log(blogLocation1.display());
// test(blogLocation1.display());