function MakeUniqArray(myarr) {
  let noDuplArr = [];

  myarr.forEach(element => {
    if (!noDuplArr.includes(element)) noDuplArr.push(element);
  });
  return noDuplArr;
}
let myArray = ["a", 1, "a", 2, "1"];

console.log(MakeUniqArray(myArray));
