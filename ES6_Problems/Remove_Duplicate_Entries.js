let myArray = ["a", 1, 1, "a", 2, "1"];

let removeDuplicates = myarr => {
  return new Promise((resolve, reject) => {
    if (myarr) {
      const noDuplArr = myarr.filter((el, index, arr) => {
        return arr.indexOf(el) === index;
      });
      resolve(noDuplArr);
    } else {
      reject({ message: "error" });
    }
  });
};

removeDuplicates(myArray)
  .then(function(result) {
    console.log(result); // "Stuff worked!"
  })
  .catch(function(err) {
    console.log(err); // Error: "It broke"
  });
