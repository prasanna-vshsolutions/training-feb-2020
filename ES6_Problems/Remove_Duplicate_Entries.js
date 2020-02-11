function MakeUniqArray(myarr) {
  const noDuplArr = myarr.filter((el, index, arr) => {
    return arr.indexOf(el) === index;
  });

  return noDuplArr;
}
let myArray = ["a", 1, 1, "a", 2, "1"];

console.log(MakeUniqArray(myArray));
