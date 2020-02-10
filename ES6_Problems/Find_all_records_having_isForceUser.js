function findWithConditions(persons) {
  let result = persons.filter(el => {
    if (el.isForceUser === true) {
      let p = {};
      p.id = el.id;
      p.name = el.name;
      p.pilotingScore = el.pilotingScore;
      p.shootingScore = el.shootingScore;
      p.isForceUser = el.isForceUser;

      return el;
    }
  });

  let mapping = result.map(el => {
    el.addition = el.pilotingScore + el.shootingScore;
    return el;
  });

  var sumOfAll = mapping.reduce((sum, ele) => {
    return sum + ele.addition;
  }, 0);

  console.log(" summation:" + sumOfAll);

  return mapping;
}

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true
  }
];

console.log(findWithConditions(personnel));
