let allAbove18 = givenArray => {
  return new Promise((resolve, reject) => {
    if (givenArray) {
      let allAboveAge = givenArray.filter(el => el.age > 18);
      resolve(allAboveAge);
    } else reject("Error adding Array");
  });
};

const family = [
  { name: "Jack", age: 26 },
  { name: "Jill", age: 22 },
  { name: "James", age: 5 },
  { name: "Jenny", age: 2 }
];

allAbove18(family)
  .then(data => console.log(data))
  .catch(err => console.log(err));
