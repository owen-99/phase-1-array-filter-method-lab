// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

const findMatching = (arr, str) => {
  str = str.toLowerCase();
  return arr.filter((item) => item.toLowerCase() == str);
};

console.log(findMatching(drivers, "Bobby"));

const fuzzyMatch = (arr, str) => {
  str = str.toLowerCase();
  return arr.filter((item) => item.toLowerCase().substr(0, 3).includes(str));
};

console.log(fuzzyMatch(drivers, "Sa"));
console.log(fuzzyMatch(drivers, "y"));
console.log(fuzzyMatch(drivers, "mm"));

const driverss = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
const matchName = (arr, str) => {
  // properties: name and hometown. The
  str = str.toLowerCase();
  return arr.filter((obj) => obj.name.toLowerCase() == str);
};

console.log(matchName(driverss, "Bobby"));
