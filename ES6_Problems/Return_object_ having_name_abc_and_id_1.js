let getSpecificRecord = (givenArray, givenId) => {
  return new Promise((resolve, reject) => {
    if (!!givenArray) resolve(givenArray.find(el => el.id === givenId));
    else reject("Error Passing Array");
  });
};

const target = [
  { name: "abc", id: 1 },
  { name: "def", id: 2 }
];

getSpecificRecord(target, 1)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
