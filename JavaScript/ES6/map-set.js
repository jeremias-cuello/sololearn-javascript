/*
  A Map object can be used to hold key/value pairs. A key or value in a map can be
  anything (objects and primitive values).
*/

function main() {
  var name = "Jeremias";
  var position = "DevOp";
  let employees = new Map([
  ["Richard", "Developer"],
  ["Maria", "SEO Specialist"],
  ["Tom", "Product Manager"],
  ["David", "Accountant"],
  ["Sophia", "HR Manager"]
  ]);

  //add the new pair to the map
  employees.set(name, position);

  for (var i of employees.entries()){
    //your code for the output
    console.log(`${i[0]} : ${i[1]}`);
  }
}
const map = new Map();
map.set('one', 1);
map.set('2', 'two');
if (map.has('two')) {
  console.log('two');
} else {
  console.log(map.get('one'));
}

/*
Methods
set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
has(key) Returns true if a specified key exists in the map and false otherwise.
delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
clear() Removes all key/value pairs from map.
keys() Returns an Iterator of keys in the map for each element.
values() Returns an Iterator of values in the map for each element.
entries() Returns an Iterator of array[key, value] in the map for each element.
*/

console.log('size de map:');
console.log(map.size);


// ------- SET -----------
/*
  un objecto SET puede ser usado para mantener valores unicos (no son permitidos las repeticiones)
  un valor en un Set puede ser cualquier cosa (objetos y valores primitivos)
  la sintaxis es: new Set([iterable]) crea un objeto Set donde iterable es un arreglo o otro objecto iterable de valores.
  la propiedad size retorna el numero de valores en un set.
*/

let array = [4, 2, 5, 6, 9, 8, 7, 4, 5, 9, 8, 6, 2, 3, 4, 8];
let set = new Set(array);

console.log(set);
console.log('array.length: ' + array.length);
console.log('set.size: ' + set.size);

/**
 * Methods:
 * -----------------------------------------------------------------------------------
 * add(value) Adds a new element with the given value to the Set.
 * delete(value) Deletes a specified value from the set.
 * has(value) Returns true if a specified value exists in the set and false otherwise.
 * clear() Clears the set.
 * values() Returns an Iterator of values in the set.
*/

let setNew = new Set();

console.log(setNew);

setNew.add(7).add(45).add(12).add(7);

console.log(setNew);
console.log(setNew.has(15));
console.log(setNew.has(12));

console.log(setNew);
console.log(setNew.values());

for (const e of setNew) {
  console.log(e);
}

for (const e of setNew.values()) {
  console.log(e);
}
