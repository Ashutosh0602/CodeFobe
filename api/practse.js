let strs = ["flower", "flow", "flight"];

let smallest = strs[0];

for (let i = 0; i < strs.length; i++) {
  if (strs[i].length < smallest) {
    smallest = strs[i];
  }
}
