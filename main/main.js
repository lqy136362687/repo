const loadAllItem = require('./loadAllItems.js');

module.exports = function main(list) {
  var loadAllItems=loadAllItem();
  var  items=new Array();
  var sumPrice=0;
  var num=0;
  var str="***<没钱赚商店>购物清单***\n";
  for(let i=0;i<list.length;i++){
    var k=1;
    for(let j=0;j<items.length;j++){
      if(list[i]==items[j].barcode){
        var k=0;
      }
    }
    if(k==1){
      items[num]=new Item(list[i],list,loadAllItems);
      var Price=items[num].itemNum*items[num].itemPrice;
      sumPrice=sumPrice+Price;
      Price=Price.toFixed(2);
      str+="名称："+items[num].itemName+"，数量："+items[num].itemNum+items[num].itemUnit+"，单价："+items[num].itemPrice+"(元)，小计："+Price+"(元)\n";
      num++;
    }
  }
  sumPrice=sumPrice.toFixed(2);
  str+='----------------------\n' +'总计：'+sumPrice+'(元)\n' +'**********************';
  return  str;
};

class Item{
  constructor(input1,input2,loadAllItems){
    var itemNum=0,itemName,itemPrice,itemUnit;
    for(let i=0;i<input2.length;i++){
      if(input1==input2[i]){
        itemNum+=1;
      }
    }
    for(let i=0;i<loadAllItems.length;i++){
      if(input1==loadAllItems[i].barcode){
        itemName=loadAllItems[i].name;
        itemUnit=loadAllItems[i].unit;
        itemPrice=loadAllItems[i].price.toFixed(2);
        break;
      }
    }
    this.barcode=input1;
    this.itemNum=itemNum;
    this.itemName=itemName;
    this.itemPrice=itemPrice;
    this.itemUnit=itemUnit;
  }
}
