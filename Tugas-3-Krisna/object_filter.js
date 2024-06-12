let obj = {};

let people= [
    { name: 'krisna', age: 22 },
    { name: 'suaba', age: 28 },
    { name: 'mahendra', age: 27 }
]

let people25 = people.filter(function(people) {
    return people.age > 25;
    });
  console.log(people25);