export const chain = (dominoes) => {
  if (dominoes.flat().length === 2 && dominoes.flat().includes(2)) {
    return null;
  }

  const result = [];
  const used = [];
  let last;

  if (dominoes.length < 6) dominoes.reverse();
  if (dominoes.length === 6)
    [dominoes[1], dominoes[4]] = [dominoes[4], dominoes[1]];

  const first = () => {
    dominoes.forEach((stone, i) => {
      last = result.length - 1;
      if (i == 0 && !used.includes(i)) result.push(stone), used.push(i);
      else if (i > 0 && stone[0] === result[last][1] && !used.includes(i)) {
        result.push(stone), used.push(i);
        console.log(used);
      }
    });
  };

  const second = () => {
    const clone = JSON.parse(JSON.stringify(dominoes));
    clone.forEach((stone, j) => {
      last = result.length - 1;
      const reverseStone = stone.reverse();
      if (reverseStone[0] === result[last][1] && !used.includes(j)) {
        result.push(reverseStone), used.push(j);
      }
    });
  };

  first(), second(), first(), second(), first(), second();

  if (result.length === dominoes.length) return result;
  else return null;
};


