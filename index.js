function getPairs(list, sum) {
  let map = new Map();
  const pairs = [];
  for (let idx = 0; idx < list.length; idx++) {
    if (map.has(sum - list[idx])) {
      pairs.push(`${list[idx]}, ${sum - list[idx]}`);
    }
    if (map.has(list[idx])) {
      map.set(list[idx], map.get(list[idx]) + 1);
    } else {
      map.set(list[idx], 1);
    }
  }
  return pairs;
}

const list = process.argv[2].split(",").map(Number);
const value = parseInt(process.argv[3]);

console.log("List of pairs:", getPairs(list, value));
