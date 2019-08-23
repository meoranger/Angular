"use strict";
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
exports.__esModule = true;
//基类鞋子
var Make = /** @class */ (function () {
    function Make() {
        this.size = {};
    }
    Make.prototype.Display = function () {
        return "鞋子价格：" + this.SimplMoney() + "<br><br>鞋子内部价格：" + this.InMoney() + "<br><br>鞋子外部最低价格：" + this.OutMoney();
    };
    Make.prototype.InMoney = function () {
    };
    Make.prototype.OutMoney = function () {
    };
    Make.prototype.SimplMoney = function () {
        return this.money = this.money * this.Discount;
    };
    return Make;
}());
//类型计算
//Nike
var NikeRun = /** @class */ (function (_super) {
    __extends(NikeRun, _super);
    function NikeRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NikeRun.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 100;
    };
    NikeRun.prototype.OutMoney = function () {
        return this.OutsideMoney = this.money * this.Discount - 50;
    };
    return NikeRun;
}(Make));
var AdidasRun = /** @class */ (function (_super) {
    __extends(AdidasRun, _super);
    function AdidasRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdidasRun.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 200;
    };
    AdidasRun.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 150;
    };
    return AdidasRun;
}(Make));
var PIKERun = /** @class */ (function (_super) {
    __extends(PIKERun, _super);
    function PIKERun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PIKERun.prototype.InMoney = function () {
        return this.InsideMoney = this.money - 300;
    };
    PIKERun.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 50;
    };
    return PIKERun;
}(Make));
var NikeFoot = /** @class */ (function (_super) {
    __extends(NikeFoot, _super);
    function NikeFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NikeFoot.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 200;
    };
    NikeFoot.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 150;
    };
    return NikeFoot;
}(Make));
var AdidasFoot = /** @class */ (function (_super) {
    __extends(AdidasFoot, _super);
    function AdidasFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdidasFoot.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 120;
    };
    AdidasFoot.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 70;
    };
    return AdidasFoot;
}(Make));
var PIKEFoot = /** @class */ (function (_super) {
    __extends(PIKEFoot, _super);
    function PIKEFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PIKEFoot.prototype.InMoney = function () {
        return this.InsideMoney = (this.money - 200) * this.Discount;
    };
    PIKEFoot.prototype.OutMoney = function () {
        this.OutsideMoney = (this.money - 20) * this.Discount;
    };
    return PIKEFoot;
}(Make));
var NikeBask = /** @class */ (function (_super) {
    __extends(NikeBask, _super);
    function NikeBask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NikeBask.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 120;
    };
    NikeBask.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 70;
    };
    return NikeBask;
}(Make));
var AdidasBask = /** @class */ (function (_super) {
    __extends(AdidasBask, _super);
    function AdidasBask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdidasBask.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 120;
    };
    AdidasBask.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 80;
    };
    return AdidasBask;
}(Make));
var PIKEBask = /** @class */ (function (_super) {
    __extends(PIKEBask, _super);
    function PIKEBask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PIKEBask.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 100;
    };
    PIKEBask.prototype.OutMoney = function () {
        this.OutsideMoney = (this.money - 40) * this.Discount;
    };
    return PIKEBask;
}(Make));
var NikeRest = /** @class */ (function (_super) {
    __extends(NikeRest, _super);
    function NikeRest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NikeRest.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 50;
    };
    NikeRest.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 20;
    };
    return NikeRest;
}(Make));
var AdidasClim = /** @class */ (function (_super) {
    __extends(AdidasClim, _super);
    function AdidasClim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdidasClim.prototype.InMoney = function () {
        return this.InsideMoney = this.money * this.Discount - 100;
    };
    AdidasClim.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 50;
    };
    return AdidasClim;
}(Make));
var PIKETuo = /** @class */ (function (_super) {
    __extends(PIKETuo, _super);
    function PIKETuo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PIKETuo.prototype.InMoney = function () {
        return this.InsideMoney = (this.money - 100) * this.Discount;
    };
    PIKETuo.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 50;
    };
    return PIKETuo;
}(Make));
var Onther = /** @class */ (function (_super) {
    __extends(Onther, _super);
    function Onther() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Onther.prototype.InMoney = function () {
        return this.InsideMoney = (this.money - 50) * this.Discount;
    };
    Onther.prototype.OutMoney = function () {
        this.OutsideMoney = this.money * this.Discount - 10;
    };
    return Onther;
}(Make));
//功能块
var Loading = /** @class */ (function () {
    function Loading() {
        //各种鞋子对象
        this.make = {};
        //鞋子品牌对象
        this.shoesma = [];
    }
    Loading.getLod = function () {
        return Loading.lod;
    };
    Loading.prototype.ReturnShoeMak = function () {
        return this.shoesma;
    };
    Loading.prototype.ReturnShoeSiz = function (na) {
        return this.make[na].size;
    };
    //PHP数据处理
    Loading.prototype.MyJson = function (na) {
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost/save2.php");
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send();
        //回调
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                console.log(request.responseText);
                console.log(typeof request.responseText);
                var json = JSON.parse(request.responseText);
                this.Double(json);
                //console.log("size",this.ShoesSize[""]);
                //console.log("size2",this.ShoesSize[2].num)
                // for (let i = 1; i < 1000; i++) {
                console.log("tt", this.make[1].size30);
                document.getElementById("pricerun").innerHTML += this.Sel(na);
                // }
            }
        }.bind(this);
    };
    //查询价格根据品牌+类型
    Loading.prototype.Sel = function (name) {
        return this.make[name].Display();
    };
    //添加鞋子
    Loading.prototype.InsertShoes = function (num, ty, makes, pr, disc) {
        var ss = new Onther();
        ss.ShoesName = ty;
        ss.MakeName = makes;
        ss.money = pr;
        ss.Discount = disc;
        ss.ID = num;
        console.log(ss.ID);
        this.make[ss.ID] = ss;
        this.EndJson();
    };
    //修改鞋子
    Loading.prototype.UpdataShoes = function (shoId, ty, makes, pr, disc) {
        this.make[shoId].ShoesName = ty;
        this.make[shoId].MakeName = makes;
        this.make[shoId].money = pr;
        this.make[shoId].Discount = disc;
        this.EndJson();
    };
    Loading.prototype.EndJson = function () {
        console.log("ss", JSON.stringify(this.make));
        // console.log("st",list);
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost/save.php");
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send('val=' + JSON.stringify(this.make));
        //回调
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                alert("操作成功,请刷新");
            }
        };
    };
    Loading.prototype.FindSize = function (ps, shoes) {
        shoes.size = ps.S30;
        shoes.size += ps.S31;
        shoes.size += ps.S35;
        shoes.size += ps.S38;
        shoes.size += ps.S40;
        shoes.size += ps.S42;
    };
    //遍历
    Loading.prototype.Double = function (json_s) {
        for (var jsonobj in json_s) {
            switch (json_s[jsonobj].ID) {
                case "Nike_Run": {
                    var shoes = new NikeRun();
                    shoes.ID = "Nike_Run";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    this.shoesma = "Nike_Run";
                    var ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    console.log("1", shoes);
                    break;
                }
                case "Adidas_Run": {
                    var shoes = new AdidasRun();
                    shoes.ID = "Adidas_Run";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.shoesma = "Adidas_Run";
                    this.shoesma = shoes.MakeName;
                    this.FindSize(ps, shoes);
                    console.log("2", shoes);
                    break;
                }
                case "PIKE_Run": {
                    var shoes = new PIKERun();
                    shoes.ID = "PIKE_Run";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.shoesma = shoes.MakeName;
                    this.shoesma = "PIKE_Run";
                    this.FindSize(ps, shoes);
                    console.log("3", shoes);
                    break;
                }
                case "NIKE_Foot": {
                    var shoes = new NikeFoot();
                    shoes.ID = "NIKE_Foot";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = "NIKE_Foot";
                    console.log("4", shoes);
                    break;
                }
                case "Adidas_Foot": {
                    var shoes = new AdidasFoot();
                    shoes.ID = "Adidas_Foot";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = "Adidas_Foot";
                    console.log("5", shoes);
                    break;
                }
                case "PIKE_Foot": {
                    var shoes = new PIKEFoot();
                    shoes.ID = "PIKE_Foot";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.shoesma = "PIKE_Foot";
                    this.FindSize(ps, shoes);
                    console.log("6", shoes);
                    break;
                }
                case "NIKE_Bask": {
                    var shoes = new NikeBask();
                    shoes.ID = "NIKE_Bask";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.shoesma = "NIKE_Bask";
                    this.FindSize(ps, shoes);
                    console.log("7", shoes);
                    break;
                }
                case "Adidas_Bask": {
                    var shoes = new AdidasBask();
                    shoes.ID = "Adidas_Bask";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.shoesma = "Adidas_Bask";
                    this.FindSize(ps, shoes);
                    console.log("8", shoes);
                    break;
                }
                case "PIKE_Bask": {
                    var shoes = new PIKEBask();
                    shoes.ID = "PIKE_Bask";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    console.log("9", shoes);
                    var ps = json_s[jsonobj].num;
                    this.shoesma = "PIKE_Bask";
                    this.FindSize(ps, shoes);
                    break;
                }
                case "NIKE_Rest": {
                    var shoes = new NikeRest();
                    shoes.ID = "NIKE_Rest";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = "NIKE_Rest";
                    console.log("10", shoes);
                    break;
                }
                case "Adidas_Clim": {
                    var shoes = new AdidasClim();
                    shoes.ID = "Adidas_Clim";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    console.log("11", shoes);
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.shoesma = "Adidas_Clim";
                    this.FindSize(ps, shoes);
                    break;
                }
                case "PIKE_Tuo": {
                    var shoes = new PIKETuo();
                    shoes.ID = "PIKE_Tuo";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = "PIKE_Tuo";
                    console.log(12, shoes);
                    break;
                }
                default: {
                    var shoes = new Onther();
                    shoes.ID = "onther_make";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    shoes.ID = json_s[jsonobj].ID;
                    this.make[shoes.ID] = shoes;
                    var ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = shoes.MakeName;
                    this.shoesma = "onther_make";
                    console.log(shoes.ID, shoes);
                    break;
                }
            }
        }
    };
    Loading.lod = new Loading();
    return Loading;
}());
exports.Loading = Loading;
