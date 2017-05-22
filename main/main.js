module.exports = function main(input) {
    console.log("Debug Info");
    var numLed=new Array();
    numLed=["._." , "...",  "|.|",  "..|",  "._|",  "|_|","|_."];
    var up,middle,down;
    up=[0,1,0,0,1,0,0,0,0,0];
    middle=[2,3,4,4,5,6,6,3,5,5];
    down=[5,3,6,4,3,4,5,3,5,3];//初始化0~9led组成
    var charNum=input.toString().split("");
    var first=parseInt(charNum[0]);
    var ledU=numLed[up[first]],ledM=numLed[middle[first]],ledD=numLed[down[first]];
    for(let i=1;i<charNum.length;i++){
        var a=parseInt(charNum[i]);
       ledU+=" "+numLed[up[a]];
       ledM+=" "+numLed[middle[a]];
       ledD+=" "+numLed[down[a]];
    }
     return ledU+"\n"+ledM+"\n"+ledD+"\n";

};
