export function compare(a, b) {
  const pokeA = a.id;
  const pokeB = b.id;

  let comparison = 0;
  if (pokeA > pokeB) {
    comparison = 1;
  } else if (pokeA < pokeB) {
    comparison = -1;
  }
  return comparison;
}
