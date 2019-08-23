
 //基类鞋子
 class Make {
    public ShoesName: string;
    public MakeName: string;
    public shoesNum: number;
    public Discount: number;
    public InsideMoney: number;
    public OutsideMoney: number;
    public money: number;
    public size:any={};
    public ID:string;
    Display() {
        return "鞋子价格：" + this.SimplMoney() + "<br><br>鞋子内部价格：" + this.InMoney() + "<br><br>鞋子外部最低价格：" + this.OutMoney();
    }
    InMoney() {

    }
    OutMoney() {

    }
    SimplMoney() {
        return this.money = this.money * this.Discount;
    }

}




//类型计算

//Nike
class NikeRun extends Make {
    
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 100;
    }
    OutMoney() {
        return this.OutsideMoney = this.money * this.Discount - 50;
    }

}
class AdidasRun extends Make {
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 200;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 150;

    }
}
class PIKERun extends Make {
  
    InMoney() {
        return this.InsideMoney = this.money - 300;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 50;

    }

}

class NikeFoot extends Make {
   
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 200;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 150;
    }

}
class AdidasFoot extends Make {
    
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 120;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 70;
    }
}
class PIKEFoot extends Make {
   
    InMoney() {
        return this.InsideMoney = (this.money - 200) * this.Discount;
    }
    OutMoney() {
        this.OutsideMoney = (this.money - 20) * this.Discount;
    }

}

class NikeBask extends Make {
   
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 120;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 70;
    }

}
class AdidasBask extends Make {
    
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 120;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 80;
    }

}
class PIKEBask extends Make {
   
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 100;
    }
    OutMoney() {
        this.OutsideMoney = (this.money - 40) * this.Discount;
    }

}

class NikeRest extends Make {
   
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 50;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 20;
    }

}


class AdidasClim extends Make {
   
    InMoney() {
        return this.InsideMoney = this.money * this.Discount - 100;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 50;
    }

}

class PIKETuo extends Make {
   
    InMoney() {
        return this.InsideMoney = (this.money - 100) * this.Discount;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 50;
    }

}

 class Onther extends Make {
    InMoney() {
        return this.InsideMoney = (this.money - 50) * this.Discount;
    }
    OutMoney() {
        this.OutsideMoney = this.money * this.Discount - 10;
    }
}


//功能块
export class Loading {
    private static lod = new Loading();
    //各种鞋子对象
    private make: any = {};
    //鞋子品牌对象
    private shoesma:any= [];
    private constructor() {
    }
    static getLod(): Loading {
        return Loading.lod;
    }

    ReturnShoeMak(){
        return this.shoesma;
    }
    ReturnShoeSiz(na:string){
        return  this.make[na].size;
    }

    //PHP数据处理
    MyJson(na:string) {
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
        }.bind(this)
    }


    //查询价格根据品牌+类型
    Sel(name:string){
       return this.make[name].Display();
    }






  
    


    //添加鞋子
    InsertShoes(num: string, ty: string, makes: string, pr: number, disc: number) {
        var ss = new Onther();
        ss.ShoesName = ty;
        ss.MakeName = makes;
        ss.money = pr;
        ss.Discount = disc;
        ss.ID = num;
        console.log(ss.ID)
        this.make[ss.ID] = ss;
        this.EndJson();

    }

    //修改鞋子

    UpdataShoes(shoId: string, ty: string, makes: string, pr: number, disc: number) {
        this.make[shoId].ShoesName = ty;
        this.make[shoId].MakeName = makes;
        this.make[shoId].money = pr;
        this.make[shoId].Discount = disc;
        this.EndJson();
    }
    EndJson() {
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
        }
    }

    FindSize(ps: any, shoes: any) {
       shoes.size = ps.S30;
       shoes.size +=ps.S31;
       shoes.size +=ps.S35;
       shoes.size +=ps.S38;
       shoes.size +=ps.S40;
       shoes.size +=ps.S42; 
    }








    //遍历
    Double(json_s: any) {
        for (let jsonobj in json_s) {
            switch (json_s[jsonobj].ID) {
                case "Nike_Run": {
                    let shoes = new NikeRun();
                    shoes.ID = "Nike_Run";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    this.shoesma = "Nike_Run";
                    let ps = json_s[jsonobj].num;
                    
                    this.FindSize(ps, shoes);
                    console.log("1", shoes);
                    break;

                }
                case "Adidas_Run": {
                    let shoes = new AdidasRun();
                    shoes.ID = "Adidas_Run";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.shoesma = "Adidas_Run";
                    this.shoesma = shoes.MakeName;
                    this.FindSize(ps, shoes);
                    console.log("2", shoes);
                    break;
                }
                case  "PIKE_Run": {
                    let shoes = new PIKERun();
                    shoes.ID = "PIKE_Run";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.shoesma = shoes.MakeName;
                    this.shoesma = "PIKE_Run";
                    this.FindSize(ps, shoes);
                    console.log("3", shoes);
                    break;
                }
                case "NIKE_Foot": {
                    let shoes = new NikeFoot();
                    shoes.ID = "NIKE_Foot";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = "NIKE_Foot";
                    console.log("4", shoes);
                    break;

                }
                case "Adidas_Foot": {
                    let shoes = new AdidasFoot();
                    shoes.ID = "Adidas_Foot";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = "Adidas_Foot";
                    console.log("5", shoes);
                    break;
                }
                case "PIKE_Foot": {
                    let shoes = new PIKEFoot();
                    shoes.ID = "PIKE_Foot";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.shoesma = "PIKE_Foot";
                    this.FindSize(ps, shoes);

                    console.log("6", shoes);
                    break;

                }
                case "NIKE_Bask": {
                    let shoes = new NikeBask();
                    shoes.ID = "NIKE_Bask";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.shoesma = "NIKE_Bask";
                    this.FindSize(ps, shoes);

                    console.log("7", shoes);
                    break;

                }
                case "Adidas_Bask": {
                    let shoes = new AdidasBask();
                    shoes.ID = "Adidas_Bask";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.shoesma = "Adidas_Bask";
                    this.FindSize(ps, shoes);
                    console.log("8", shoes);
                    break;

                }
                case "PIKE_Bask": {
                    let shoes = new PIKEBask();
                    shoes.ID = "PIKE_Bask";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    console.log("9", shoes);
                    let ps = json_s[jsonobj].num;
                    this.shoesma = "PIKE_Bask";
                    this.FindSize(ps, shoes);

                    break;

                }
                case "NIKE_Rest": {
                    let shoes = new NikeRest();
                    shoes.ID = "NIKE_Rest";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = "NIKE_Rest";
                    console.log("10", shoes);
                    break;
                }
                case "Adidas_Clim": {
                    let shoes = new AdidasClim();
                    shoes.ID = "Adidas_Clim";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    console.log("11", shoes);
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.shoesma = "Adidas_Clim";
                    this.FindSize(ps, shoes);

                    break;
                }
                case "PIKE_Tuo": {
                    let shoes = new PIKETuo();
                    shoes.ID = "PIKE_Tuo";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = "PIKE_Tuo";
                    console.log(12, shoes);
                    break;
                }
                default: {
                    let shoes = new Onther();
                    shoes.ID = "onther_make";
                    shoes.money = json_s[jsonobj].money;
                    shoes.Discount = json_s[jsonobj].Discount;
                    shoes.MakeName = json_s[jsonobj].MakeName;
                    shoes.ShoesName = json_s[jsonobj].ShoesName;
                    shoes.ID = json_s[jsonobj].ID;
                    this.make[shoes.ID] = shoes;
                    let ps = json_s[jsonobj].num;
                    this.FindSize(ps, shoes);
                    this.shoesma = shoes.MakeName;
                    this.shoesma = "onther_make";
                    console.log(shoes.ID, shoes);
                    break;
                }
            }

        }

    }








}


