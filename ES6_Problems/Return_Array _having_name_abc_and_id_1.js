function getNameAndId(givenArray, givenName, givenId) {
  return target.filter(el => el.name === givenName && el.id === givenId);
}

const target = [
  { name: "abc", id: 1 },
  { name: "def", id: 2 }
];

console.log(getNameAndId(target, "abc", 1));
