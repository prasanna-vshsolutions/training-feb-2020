function AddTofirstAndLast(firstObj, LastObj, userArray) {
  userArray = [firstObj, ...userArray];
  userArray = [...userArray, LastObj];
  return userArray;
}

function getEmailNoWebsiteArray(users) {
  let userInfo = users.map(({ email, phone, website }) => ({
    email,
    phone,
    website
  }));

  let userInfo = users.map(el => {
    let user = {};
    user.email = el.email;
    user.phone = el.phone;
    user.website = el.website;
    return user;
  });
  return userInfo;
}

function replaceValue(key, value, users) {
  return users.splice(key, 1, value);
}

function deleteUsingKey(key, users) {
  users.splice(key, 1);

  return users;
}

const users = [
  {
    id: 1,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password"
  },
  {
    id: 2,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password"
  }
];

const user1 = {
  id: 0,
  name: "Shubham Holkar",
  username: "shubhamholkar",
  email: "shubham@google.com",
  phone: "1-123-543-1857 474747",
  website: "google.com",
  password: "Dean_hashed_password"
};

const user2 = {
  id: 4,
  name: "Denomer Crazy",
  username: "crazy.1",
  email: "deno@crazy.com",
  phone: "",
  website: "crazy.app",
  password: "crazed_checker"
};

console.log(AddTofirstAndLast("A] " + user1, user2, users));
console.log(getEmailNoWebsiteArray("B]" + users));
console.log(replaceValue("C]" + 1, user1, users));
console.log(deleteUsingKey("D]" + 0, users));
