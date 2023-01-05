// setTimeout(() => {
//   console.log('Work 1');
//   setTimeout(() => {
//     console.log('Work 2');
//   }, 1000);
// }, 1000);

// console.log('End');

/*
new Promise(function(resolve, reject) {
  let sucess = true;
  let result = 15;

  if(sucess) resolve(result);
  else reject(Error("failure"));
});
*/

function asynFunction(work) {
  return new Promise(function(resolve, reject) {
  if(work === ''){
    reject(Error('Nothing'));
  }

  setTimeout(() => {
    resolve(work);
  }, 1000);
  });
}
/*
asynFunction('tarea 1')
  .then(function(result) {
  console.log(result);
  return asynFunction("tarea 2");
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    console.log('finalizando tarea 1')
  })
  .then((result) => {
  console.log(result);
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    console.log('finalizando tarea 2')
  })

console.log('End');
*/

// ------ Itherators y Generators -------

/**
 * una funcion generadora es una funcion especial que como que
 * en lugar de tener un return tiene yield.
 */
function* idMaker(){
  let index = 0;

  while (index < 5) {
  yield index++;
  }
}

let gen  = idMaker();

console.log(idMaker);
console.log(idMaker());

for (let i = 1; i <= 6; i++) {
  console.log(gen.next().value);
}

// gen.return() // El método return() regresa el valor dado y finaliza al generador.

function* generador(){
  yield 1;
  yield 2;
  yield 3;
}

const genObj = generador();

console.log(genObj);
console.log(genObj.next());
// console.log(genObj.return().value);
// console.log(genObj.return(8).value);
console.log(genObj.next());
// console.log(genObj.return().done = false);
console.log(genObj.next());
console.log(genObj.next());

console.log('---------------------------');

let myIterableObj = {
  [Symbol.iterator]: function*(){
  yield 1;
  yield 2;
  yield 3;
  }
};

console.log(Symbol.iterator);

let sim = Symbol();
let sim2 = Symbol('Jere');
console.log(sim);
console.log(sim2);
console.log(Symbol.for('Lo que sea'));
console.log(Symbol('Jere') === Symbol('Jere'));

let unObjeto = {
  nombre: "jeremias",
  age: 18
}

console.log(myIterableObj);
console.log(myIterableObj[Symbol.iterator]);
console.log(unObjeto[Symbol.iterator]);

console.log([...myIterableObj]);

for (const m of myIterableObj) {
  console.log(m);
}


let index = 0;

let myIterableObj2 = {
  [Symbol.iterator]: function*(){
  let index = 0;
  while (index < 5) {
    yield index++;
  }
  },

  nombre: 'jere'
};

console.log([...myIterableObj2]);

console.log('-------------------------------------');

class Foo {
  *[Symbol.iterator]() {
  yield 1;
  yield 2;
  yield 3;
  }
}

const someObj = {
  *[Symbol.iterator]() {
  yield "a";
  yield "b";
  },
};

console.log(...new Foo()); // 1, 2, 3
console.log(...someObj); // 'a', 'b'

let foo = new Foo();
for (const key in foo) { // no funcka
  const element = foo[key];

  console.log(element);
  console.log(key);
}

for (const i of foo) {
  console.log(i);
}

let obj = {
  ['nombre']: 'jeremias'
}

let numbers = new Set([1, 1, 2, 3, 6, 5, 9, 6])

let iterator = numbers[Symbol.iterator]();
// el iterador de numbers al ser un set es una funcion generadora
console.log(iterator);
console.log([...numbers]);

// caso util

const arr = ['0', '1', '4', 'a', '9', 'c', '16'];

const my_obj = {
  *[Symbol.iterator]() {
  for (const index of arr) {
    yield `${index}`;
  }
  }
};

console.log([...my_obj]);
const all = [...my_obj]
  .map(i => parseInt(i))
  .map(Math.sqrt) // es lo mismo que .map(n => Math.sqrt(n))
  .filter((i) => i < 5)
  .reduce((e, ac) => e + ac);

console.log(all);

console.log(["a", "b", "c"].join(' - ')); // une todos los elementos poniendo un string entre los elementos

let string = "><";
let stringRepeated = string.repeat(3);
console.log(stringRepeated);

/* const arr2 = ['3', '5', '8'];
console.log(
  arr2.find(x => x == 8).repeat(2)
); */

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6];
const func = (...rest) => {
  console.log(rest.length);
}
func(...arr1);
func(...arr2);

const user = {

  name: 'David',

  age: 28,

  id: 1234

};

let newUser = Object.assign({}, { name, age } = user, { id: 9999 });
console.log(newUser);

class Add {
  constructor(...words) {
  this.words = words;
  }
  //your code goes here
  print(){
  console.log('$' + this.words.join('$') + '$');
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();

var score = 12;
/*
88 and above => excellent
40-87   => good
0-39 => fail
*/
// your code goes here

let table = [
  {range: [88, null], result: 'excellent'},
  {range: [40, 87], result: 'good'},
  {range: [0, 39], result: 'fail'}
];

for(const t of table){
  if(t.range[1] == null){
    if(score >= t.range[0]){
      console.log(t.result)
    }
  }
  if(score >= t.range[0] && score <= t.range[1]){
    console.log(t.result)
  }
}

