//destructuring + rest
const { a, c, ...rest } = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(a);
console.log(c);
console.log(rest);

//Nested Object Destructuring
//1
const room = {
  building: {
    id: "LX1001",
    name: "ActiveLearning",
    location: {
      id: "North1",
      street: "Prachauthid",
    },
  },
};
const {
  building: {
    location: { id: result },
  },
} = room;
console.log(result);

//2 - 3
const userProfile = {
  name: "John Doe",
  contact: {
    email: "johndoe@example.com",
    phone: {
      home: {
        main: "123-456",
      },
      work: {
        main: "987-654",
      },
    },
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
};
const {
  preferences: { notifications },
} = userProfile;
console.log(notifications);

const {
  contact: {
    phone: {
      home: {
        main: result1 ,
      },
      work: {
         main: result2 
      },
    },
  },
} = userProfile;
console.log(result1);
console.log(result2);
