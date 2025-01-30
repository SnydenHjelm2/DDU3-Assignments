const db = [
  {name: "Gurkan", age: 44, country: "Sweden"},
  {name: "Osiris", age: 100, country: "Egypt"},
  {name: "Alban", age: 68, country: "Kenya"},
  {name: "Jonas", age: 20, country: "Sweden"},
  {name: "Peder", age: 32, country: "Denmark"},
  {name: "Ole", age: 57, country: "Norway"},
  {name: "Mario", age: 34, country: "Italy"},
  {name: "Paulus", age: 48, country: "Greece"},
  {name: "Zeus", age: 97, country: "Greece"},
  {name: "Rafael", age: 29, country: "Portugal"},
  {name: "Justinas", age: 24, country: "Lithuania"},
  {name: "Nicolau", age: 76, country: "Romania"},
  {name: "Kjell", age: 53, country: "Norway"},
  {name: "Karsten", age: 34, country: "Denmark"},
  {name: "Ivan", age: 21, country: "Romania"},
  {name: "Grigorij", age: 28, country: "Ukraine"},
]

function array_filter (targetArray, callback) {
  let result = [];
  for (let element of targetArray) {
    if (callback(element)) result.push(element);
  }
  return result;
}

function array_map(target, callback) {
  let result = [];
  for (let item of target) {
    result.push(callback(item));
  }
  return result;
}

function array_find(target, callback) {
  for (let item of target) {
    if (callback(item)) {return item};
  }
  return false;
}

function array_findIndexOf(target, callback) {
  for (i=0; i<target.length; i++) {
    if (callback(target[i])) {return i};
  }
  return -1;
}

function array_some(target, callback) {
  for (let item of target) {
    if (callback(item)) {return true};
  }
  return false;
}

function array_every(target, callback) {
  for (let item of target) {
    if (!callback(item)) {return false};
  }
  return true;
}

console.log(array_filter(db, (x) => x.name === "Gurkan"));
console.log(array_map(db, (x) => x.country));
console.log(array_find(db, (x) => x.country === "Lithuania"));
console.log(array_findIndexOf(db, (x) => x.name === "Rafael"));
console.log(array_some(db, (x) => x.name === "Zeus"));
console.log(array_every(db, (x) => x.age > 10));