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