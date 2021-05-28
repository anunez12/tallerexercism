export const toRoman = (num = 0) => {
  return num
  .toString().split('')
  .map(translateMap)
  .join('')
}

const symbols = { 1:'I', 5:'V', 10:'X', 50:'L', 100:'C', 500:'D', 1000:'M' }

const translateMap = (val, i, arr) => {
  if(val === '0') return ''

  let prefix = val.toString()[0]
  let normal = ('1').padEnd(arr.length-i, '0')

  let res =
    (prefix <= 3) ? symbols[1*normal].repeat(prefix) :
    (prefix <= 5) ? symbols[1*normal].repeat(5-prefix) + symbols[5*normal] :
    (prefix <= 8) ? symbols[5*normal] + ( symbols[1*normal].repeat(prefix-5) ) :
    symbols[1*normal] + symbols[10*normal]

  return res
}