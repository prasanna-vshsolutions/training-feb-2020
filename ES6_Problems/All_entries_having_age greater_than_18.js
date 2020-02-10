function find18Above(givenArray) {
  let allAboveAge = givenArray.filter(el => el.age > 18);
  return allAboveAge;
}

const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 }
];

console.log(find18Above(family));
