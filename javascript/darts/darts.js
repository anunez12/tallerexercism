export const score = (a, b) => {
  
  let a_2 = Math.pow(a, 2)
  let b_2 = Math.pow(b, 2)
  
  if (Math.sqrt(a_2 + b_2) <= 1) return 10
  
  if (Math.sqrt(a_2 + b_2) > 10) return 0
  
  if (Math.sqrt(a_2 + b_2) <= 5) return 5
 
  return 1
}
