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
        return "\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<img class=\"card-img-top d-none d-sm-block\"  src=\"img/" + this.lPicUrl + " \" alt=\"Card image\"> \n\t\t\t\t\t<div class=\"card-img-overlay offset-md-8 offset-lg-8\">\n\t\t\t\t\t\t<p id=\"loc" + this.lId + "\" class=\" btn btn-secondary\">Location only</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body d-flex flex-column\">\n\t\t\t\t\t\t<h4 class=\"card-title\">" + this.lName + "</h4>\n\t\t\t\t\t\t<p class=\"card-text mt-auto small\">" + this.lAdress + " in <br> " + this.lZip + "  " + this.lCity + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t";
    };
    return MyLocation;
}());
;
var myRestaurant = /** @class */ (function (_super) {
    __extends(myRestaurant, _super);
    function myRestaurant(lId, lName, lCity, lZip, lAdress, lPicUrl, rType, rPhone, rWww) {
        var _this = _super.call(this, lId, lName, lCity, lZip, lAdress, lPicUrl) || this;
        _this.rType = rType;
        _this.rPhone = rPhone;
        _this.rWww = rWww;
        return _this;
    }
    myRestaurant.prototype.display = function () {
        return "\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<img class=\"card-img-top d-none d-sm-block\"  src=\"img/" + this.lPicUrl + " \" alt=\"Card image\"> \n\t\t\t\t\t<div class=\"card-body d-flex flex-column\">\n\t\t\t\t\t\t<h4 class=\"card-title\">" + this.lName + "</h4>\n\t\t\t\t\t\t<p class=\"card-text mt-auto\">our kitchen: " + this.rType + "</p>\n\t\t\t\t\t\t<p class=\"card-text mt-auto\">&phone;" + this.rPhone + " in <br><a class=\"btn btn-dark\" href=\"https://www." + this.rWww + "\">our website</a></p>\n\t\t\t\t\t\t<p class=\"card-text mt-auto small\">" + this.lAdress + " in <br> " + this.lZip + "  " + this.lCity + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t";
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
    myEvent.prototype.display = function () {
        var x = this.eDate.toString();
        var zielDatum = new Date(x);
        var startZeit = zielDatum.getTime();
        var newDate = new Date();
        var jetzt = newDate.getTime();
        var spanne = Math.round((startZeit - jetzt) / 1000);
        var d = Math.floor(spanne / (24 * 60 * 60));
        return "\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<img class=\"card-img-top d-none d-sm-block\"  src=\"img/" + this.lPicUrl + " \" alt=\"Card image\"> \n\t\t\t\t\t<div class=\"card-img-overlay offset-8 offset-md-8 offset-lg-8\">\n\t\t\t\t\t\t<p id=\"eve" + this.lId + "\" class=\" badge badge-warning\">in <b>" + d + "</b> days</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body d-flex flex-column\">\n\t\t\t\t\t\t<h4 class=\"card-title\">" + this.lName + "</h4>\n\t\t\t\t\t\t<p class=\"card-text mt-auto\">Date: " + this.eDate + " <br> Pirce: " + this.ePrice + "\u20AC</p>\n\t\t\t\t\t\t<p class=\"card-text mt-auto small\">" + this.lAdress + " in <br> " + this.lZip + "  " + this.lCity + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t";
    };
    return myEvent;
}(MyLocation));
var blogLocation1 = new MyLocation("loc1", "Prater", "Vienna", 1020, "Praterstern", "bild.jpg");
var blogLocation2 = new myRestaurant("res2", "Cactus", "Vienna", 1100, "Pernerstorfergasse 9", "cactus2.jpg", "Wiener Küche", "01/5837920", "cactus2.at");
var blogLocation3 = new myEvent("eve3", "silvesterparty", "Innsbruck", 5120, "Amrasserstrasse 43", "bild.jpg", "Dec 31, 2019 23:59:59", 50);
var blogLocation4 = new myEvent("eve4", "silvesterparty", "Vienna", 1120, "Wurmbstrasse 36", "bild.jpg", "Dec 31, 2019 23:59:59", 50);
var blogLocation5 = new myRestaurant("res5", "Yumi", "Vienna", 1040, "Naschmarkt Stand 87", "yumi.jpg", "Asiatische Küche", " 01/5855996", "yumi.eatbu.com");
var blogLocation6 = new myRestaurant("res6", "Santo Spirito", "Vienna", 1010, "Kumpfgasse 7,", "20161223-225628-largejpg.jpg", "Italienische Küche", "01/5129998", "santospirito.at");
var locationArray = [];
locationArray.push(blogLocation1);
locationArray.push(blogLocation2);
locationArray.push(blogLocation3);
locationArray.push(blogLocation4);
locationArray.push(blogLocation5);
locationArray.push(blogLocation6);
