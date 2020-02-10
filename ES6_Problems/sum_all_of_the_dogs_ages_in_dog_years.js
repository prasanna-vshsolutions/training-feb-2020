function sumOfAges(data) {
  //   let result = data.filter(el => el.type === "dog");
  //   let mapping = result.map(el => {
  //     el.age = el.age * 7;
  //     return el;
  //   });

  //   let sumsOfAll = mapping.reduce((sum, el) => {
  //     return sum + el.age;
  //   }, 0);

  //   return sumsOfAll;

  let result = data
    .filter(el => el.type === "dog")
    .map(el => {
      el.age = el.age * 7;
      return el;
    })
    .reduce((sum, el) => {
      return sum + el.age;
    }, 0);

  return result;
}

data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  }
];

console.log(sumOfAges(data));
