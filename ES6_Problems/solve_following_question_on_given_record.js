let addToFirst = (userArray, user) => {
  return new Promise((resolve, reject) => {
    if (userArray) resolve([user, ...userArray]);
    else reject("Error Passing Array");
  });
};

let addToLast = (userArray, user) => {
  return new Promise((resolve, reject) => {
    if (userArray) resolve([...userArray, user]);
    else reject("Error adding Array");
  });
};

let OnlyMailNoWebsiteArray = users => {
  return new Promise((resolve, reject) => {
    if (users) {
      let userInfo = users.map(({ email, phone, website }) => ({
        email,
        phone,
        website
      }));
      resolve(userInfo);
    } else reject("Error adding Array");
  });
};

let replaceUser = (id, user, users) => {
  return new Promise((resolve, reject) => {
    if (users) {
      users.splice(id, 1, user);
      resolve(users);
    } else reject("Error Replacing Array");
  });
};

let deleteUserWithId = (id, users) => {
  return new Promise((resolve, reject) => {
    if (users) {
      users.splice(id, 1);
      resolve(users);
    } else reject("Error adding Array");
  });
};

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
  id: 3,
  name: "Denomer Crazy",
  username: "crazy.1",
  email: "deno@crazy.com",
  phone: "",
  website: "crazy.app",
  password: "crazed_checker"
};

// addToFirst(users, user1)
//   .then(data => {
//     addToLast(data, user2)
//       .then(data => console.log(data))
//       .catch(er => console.log(er));
//   })
//   .catch(er => console.log(er));

// replaceUser(1, user1, users)
//   .then(data => console.log(data))
//   .catch(er => console.log(er));

// deleteUserWithId(1, users)
//   .then(data => console.log(data))
//   .catch(er => console.log(er));

// OnlyMailNoWebsiteArray(users)
//   .then(data => console.log(data))
//   .catch(er => console.log(er));

Promise.all([
  addToFirst(users, user1),
  replaceUser(1, user1, users),
  deleteUserWithId(1, users),
  OnlyMailNoWebsiteArray(users)
]).then(function(value) {
  console.log(value);
});
