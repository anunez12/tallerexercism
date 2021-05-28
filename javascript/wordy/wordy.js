export const answer = (input) => {
  const isMathQuestion = input.split(' ')[0] === 'What'
  const numbers = (input.match(/(-[0-9]+)|([0-9]+)/g) || []).map(value => parseInt(value))
  const operators = input.match(/(plus|minus|multiplied|divided)/g) || []

  if (!isMathQuestion) {
    throw new Error('Unknown operation')
  }

  // "What is 1 plus plus 2?"

  if (numbers.length === 0 && operators.length === 0) {
    throw new Error('Syntax error')
  }

  if (numbers.length === 0) {
    throw new Error('Unknown operation')
  }

  if (numbers.length === 1 && operators.length === 0) {
    return numbers[0]
  } else if (numbers.length === 1 && operators.length === 1) {
    throw new Error('Syntax error')
  }

  let accumulator = numbers[0]

  operators.forEach((operator, index) => {
    accumulator = operate(accumulator, operator, numbers[index+1])
  })

  return accumulator
};

const operate = (left, operator, right) => {
  if (operator === 'plus') {
    return left + right
  } else if (operator === 'minus') {
    return left - right
  } else if (operator === 'multiplied') {
    return left * right
  } else if (operator === 'divided') {
    return left / right
  } else {
    throw new Error('Unknown operation')
  }
}



