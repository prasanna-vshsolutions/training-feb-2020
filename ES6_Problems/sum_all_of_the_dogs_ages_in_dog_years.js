let getAllDogs = data => {
  return new Promise((resolve, reject) => {
    if (data) resolve(data.filter(el => el.type == "dog"));
    else reject("Something wrong with data");
  });
};

let convertToDogAges = typeDogArray => {
  return new Promise((resolve, reject) => {
    if (typeDogArray) resolve(typeDogArray.map(el => (el.age *= 7)));
    else reject("Something wrong with Type dog array");
  });
};

let getsumOfAges = convertedAgeArray => {
  return new Promise((resolve, reject) => {
    if (convertedAgeArray) {
      let finalSum = convertedAgeArray.reduce((sum, el) => {
        return sum + el;
      }, 0);
      resolve(finalSum);
    } else reject("Something wrong with Type dog array");
  });
};

let data = [
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

getAllDogs(data)
  .then(result => {
    // console.log(result);
    convertToDogAges(result)
      .then(convertedArray => {
        //console.log(convertedArray);

        getsumOfAges(convertedArray)
          .then(sum => console.log("sum of dog ages:" + sum))
          .catch(error => console.log(error));
      })
      .catch(er => console.log(er));
  })
  .catch(err => console.log("sum:" + err));
