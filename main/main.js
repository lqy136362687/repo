module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.lengthlong()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    input=[6, 9, 15, -2, 92, 11];
    var intIp=new Array();
    for(let i=0;i<input.length;i++){
      intIp[i]=input[i];
    }
    var mini=intIp[0];
    var max=intIp[0];
    var sum=0;
    for(let i=0;i<input.length;i++){
      mini=Math.min(intIp[i],mini);
      max=Math.max(intIp[i],max);
      sum+=intIp[i];
    }
    this.mini=mini;
    this.maxi=max;
    this.lengths=intIp.length;
    this.aver=Math.round((sum/this.lengths)*100)/100;
  }

  minimum() {
    // Write your code here
    return this.mini;
  }
  maximum() {
    // Write your code here
    return this.maxi;
  }
  lengthlong(){
    return this.lengths;
  }
  average(){
    return this.aver;
  }
}
