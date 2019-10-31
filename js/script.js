var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyLocation = /** @class */ (function () {
    function MyLocation(lId, lName, lCity, lZip, lAdress, lPicUrl) {
        this.lId = lId;
        this.lName = lName;
        this.lCity = lCity;
        this.lZip = lZip;
        this.lAdress = lAdress;
        this.lPicUrl = lPicUrl;
    }
    MyLocation.prototype.display = function () {
        return this.lName + " " + this.lCity;
    };
    MyLocation.prototype.displayHTML = function () {
        return "<p>" + this.lName + " some extratext" + this.lZip + "</p>";
    };
    MyLocation.prototype.displayIMG = function () {
        return "<img src=\"img/" + this.lPicUrl + "\" alt=\"" + this.lName + "\">";
    };
    return MyLocation;
}());
var myRestaurant = /** @class */ (function (_super) {
    __extends(myRestaurant, _super);
    function myRestaurant(lId, lName, lCity, lZip, lAdress, lPicUrl, rType, rPhone, rWww) {
        var _this = _super.call(this, lId, lName, lCity, lZip, lAdress, lPicUrl) || this;
        _this.rType = rType;
        _this.rPhone = rPhone;
        _this.rWww = rWww;
        return _this;
    }
    myRestaurant.prototype.displayR = function () {
        return this.rPhone + " " + this.rWww;
    };
    return myRestaurant;
}(MyLocation));
var myEvent = /** @class */ (function (_super) {
    __extends(myEvent, _super);
    function myEvent(lId, lName, lCity, lZip, lAdress, lPicUrl, eDate, ePrice) {
        var _this = _super.call(this, lId, lName, lCity, lZip, lAdress, lPicUrl) || this;
        _this.eDate = eDate;
        _this.ePrice = ePrice;
        return _this;
    }
    myEvent.prototype.timeUntilE = function () {
        var x = this.eDate.toString();
        var zielDatum = new Date(x);
        var startZeit = zielDatum.getTime();
        var newDate = new Date();
        var jetzt = newDate.getTime();
        var spanne = Math.round((startZeit - jetzt) / 1000);
        var d = Math.floor(spanne / (24 * 60 * 60));
        return "noch " + d + " Tage";
    };
    return myEvent;
}(MyLocation));
var blogLocation1 = new MyLocation(1, "Prater", "Vienna", 1020, "Praterstern", "bild.jpg");
var blogLocation2 = new myRestaurant(2, "Cactus2", "Vienna", 1100, "Reumanplatz", "bild.jpg", "Wiener Küche", "01/5837920", "www.cactus2.at");
var blogLocation3 = new myEvent(3, "silvesterparty", "Innsbruck", 5120, "Amrasserstrasse 43", "bild.jpg", "Dec 31, 2019 23:59:59", 50);
var blogLocation4 = new myEvent(4, "silvesterparty", "Vienna", 1120, "Wurmbstrasse 36", "bild.jpg", "Dec 31, 2019 23:59:59", 50);
var locationArray = [];
locationArray.push(blogLocation1);
locationArray.push(blogLocation2);
locationArray.push(blogLocation3);
locationArray.push(blogLocation4);
