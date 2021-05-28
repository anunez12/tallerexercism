export const prime = (/** number */nthprime) => {
  if (nthprime !== 0) {
    let numero = 0;
    let primeFound = function isPrime(/** number */numeroPrimo) {
      let IsPrime = true;
      if (numeroPrimo > 1) {
        for (let i = 2; i < numeroPrimo; i++) {
            let resto = numeroPrimo % i;
            if (resto === 0 && i !== numeroPrimo) {
              IsPrime = false;
                break;
            }
        }
      }
      else {
        return false;
      }
      return IsPrime;
    };
    while (nthprime > 0) {
      if(primeFound(numero) === true) {
        nthprime--;
      }
      numero++;
    }
    numero--;
    return numero;
  } 
  else {
    throw(new Error('no es un numero primo'));
  }
};
