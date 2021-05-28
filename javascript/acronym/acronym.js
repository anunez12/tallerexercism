export const parse = (input) => 
  input
    .toUpperCase()
    .match(/[A-Z']+/g)
    .map(word => word[0])
    .join('');
