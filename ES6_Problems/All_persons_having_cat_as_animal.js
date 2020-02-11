let AllCatPersons = persons => {
  return new Promise((resolve, reject) => {
    if (!!persons) {
      let catPersons = [];
      persons.filter(el => {
        el.animals.forEach(element => {
          if (element.species == "cat") return catPersons.push(el);
        });
      });
      resolve(catPersons);
    } else {
      reject("Error Passing Array");
    }
  });
};

const persons = [
  {
    name: "Joe",
    animals: [
      { species: "dog", name: "Bolt" },
      { species: "cat", name: "Billy" }
    ]
  },
  {
    name: "Bob",
    animals: [{ species: "dog", name: "Snoopy" }]
  }
];

AllCatPersons(persons)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
