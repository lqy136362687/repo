module.exports = function main(email, suffixes) {
  // Write your code here
  var lastwords=email.split("@")[1];
  var domain=lastwords.split(".")[0];
  for(let i=0;i<suffixes.length;i++){
    if(domain==suffixes[i].split(".")[0]){
      return true;
      break;
    }
  }
  return false;
};
