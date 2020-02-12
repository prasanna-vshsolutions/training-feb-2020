function displayAllParts(data) {
  let result = [];
  data.forEach(element => {
    element.parts.forEach(el => {
      result.push(el);
    });
  });

  return result;
}

let getAllParts = data => {
  return new Promise((resolve, reject) => {
    if (data) {
      const result = data.reduce((parts, course) => {
        return [...parts, ...course.parts];
      }, []);
      resolve(result);
    } else reject("Something wrong with data");
  });
};

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

getAllParts(courses)
  .then(data => console.log(data))
  .catch(er => console.log(er));
