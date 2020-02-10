function findCatPersons(personArray) {
  let catPersons = [];
  personArray.filter(el => {
    el.animals.forEach(element => {
      if (element.species == "cat") return catPersons.push(el);
    });
  });

  return catPersons;
}

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

console.log(findCatPersons(persons));
