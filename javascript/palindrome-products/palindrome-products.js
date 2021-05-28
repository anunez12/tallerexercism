export class Palindromes {
  static generate(obj) {
    if(obj.minFactor > obj.maxFactor) throw 'min must be <= max';

    const result = { smallest: {}, largest: {} }
    let minProduct = null, minFactors = [];
    let maxProduct = null, maxFactors = [];

    for(let i = obj.minFactor; i <= obj.maxFactor; i++) {
      for(let j = i; j <= obj.maxFactor; j++) {
        if(i * j == Number((i * j).toString().split('').reverse().join(''))) {
          if(i * j > maxProduct || maxProduct == null) {
            maxProduct = i * j;
            maxFactors[0] = Array(i, j);
          } else if(i * j == maxProduct) maxFactors.push(Array(i, j));
          if(i * j < minProduct || minProduct == null) {
            minProduct = i * j;
            minFactors[0] = Array(i, j);
          } else if(i * j == minProduct) minFactors.push(Array(i, j));
        }
      }
    }

    result.smallest.value = minProduct;
    result.smallest.factors = minFactors.filter(item => item[0] * item[1] == minProduct);

    result.largest.value = maxProduct;
    result.largest.factors = maxFactors.filter(item => item[0] * item[1] == maxProduct);

    return result;
  }
}
