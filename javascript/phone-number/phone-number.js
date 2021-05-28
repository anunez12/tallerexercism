let PhoneNumber = function (num) {
	this.num = num;
	this.number_arr = this.num.split("");
};

PhoneNumber.prototype.number = function () {
	let number_arr=this.number_arr, len = number_arr.length, return_arr=[];
  for (let i=0; i<len; i++) {
    if (/^\d+$/.test(number_arr[i])) {
      return_arr.push(number_arr[i]);
    }
  }
    
  if (return_arr.length === 10) {
    return return_arr.join("");
  } else if (return_arr.length === 11 && return_arr[0] === "1") {
    return_arr.shift();
    return return_arr.join("");
  } else {
    return "0000000000";
  }
};

PhoneNumber.prototype.areaCode = function () {
  return this.number().substring(0,3);

};

PhoneNumber.prototype.toString = function () {
	let number_arr = this.number().split("");
  number_arr.splice(0,0,"(");
  number_arr.splice(4,0,")");
  number_arr.splice(5,0," ");
  number_arr.splice(9,0,"-");
  return number_arr.join("");
  
};

module.exports = PhoneNumber;
