function getGroupBy(data) {
  let result = [];

  let details = data.map(element => {
    let age = element.age;

    if (!result.includes(age)) {
      result.push(age);
      let groupByAge = data.filter(el => el.age === age);
      let groupSize = groupByAge.length;

      let g = {};
      g.age = element.age;
      g.group = groupSize;
      return g;
    }
  });
  return details;
}

const data = [
  {
    age: "12",
    group: [{ club: "A" }, { club: "B" }],
    active: {
      sjbuas777: { club: "A" },
      kk7dgs: { club: "B" }
    }
  },
  {
    age: "11",
    group: [{ club: "A" }, { club: "D" }],
    active: {
      djs7skww3: { club: "C" },
      sjhsjs72k: { club: "B" }
    }
  },
  {
    age: "12",
    group: [{ club: "A" }, { club: "D" }],
    active: {
      shshs6kka: { club: "A" },
      d8jallo1: { club: "D" }
    }
  },
  {
    age: "13",
    group: [{ club: "C" }, { club: "S" }],
    active: {
      kks7sjkla: { club: "C" },
      jjs66s5as: { club: "S" }
    }
  }
];

console.log(getGroupBy(data));
