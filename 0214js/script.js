const person = {};
console.log(person);
person.name = 'kb';
console.log(person);

person.name = {
  firstName: 'kb',
  lastName: 'kbb',
};
person.likes = ['apple', 'kbbb'];
console.log(person);

const person = {
  name: 'kb',
};

delete person.name; //또는 delete person["name"]
console.log(person);

let num = 10;
let copyNum = num;
console.log(num);
console.log(copyNum);
