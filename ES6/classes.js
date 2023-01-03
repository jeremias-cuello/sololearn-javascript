class Rectangle {
  constructor(height, width) {
  this.height = height;
  this.width = width;
  }
}

const square = new Rectangle(2, 2);
const poster = new Rectangle(4, 2);

console.log(square);
console.log(poster);

var sameClass = class Rectangle { // las clases se pueden guardan en variables
  constructor(height, width) {
  this.height = height;
  this.width = width;
  }
}

console.log(Rectangle);
console.log(sameClass);

const square_2 = new sameClass(2, 2); // actuan de la misma forma
const poster_2 = new sameClass(4, 2);

console.log(square_2);
console.log(poster_2);

class RectangleNew {
  constructor(height, width) {
  this.height = height;
  this.width = width;
  }
  get area() {
  return this.calcArea();
  }
  calcArea = () => this.height * this.width
}

let rectangleNew = new RectangleNew(5, 6);
console.log(rectangleNew.area);

class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  static distance(p1, p2){
    const dx = p1.x - p2.x; // diferencia en x
    const dy = p1.y - p2.y; // diferencia en y

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(9, 3);
const p2 = new Point(5, 9);

console.log('Distancia:');
console.log(Point.distance(p1, p2));

// ------ PRACTICA ----------- INI

function main() {
  // var exam1 = parseInt(readLine(), 10);
  // var exam2 = parseInt(readLine(), 10);
  // var exam3 = parseInt(readLine(), 10);

  console.log(Exams.average(10, 4, 3));

}

class Exams{
  static average(...notes){
    let adder = notes.reduce((note, ac) => note + ac);
    return Math.round(adder / notes.length);
  }
}

main()

// ------ PRACTICA ----------- END

// ------ HERENCIA ----------- INI

class Animal{
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(this.name + ' hace un ruido');
  }
  walk(){
    console.log('estoy caminando');
  }
}

class Dog extends Animal{
  speak(){
    super.speak(); // super es la clase padre
    console.log(this.name + ' ladra.');
  }
}

let dog = new Dog('Juan');
dog.speak();
dog.walk();


class Human{
  constructor(name, birth){
    this.name = name;
    this.birth = birth;
  }
}

class Student extends Human{
  constructor(name, age){
    super(name);
    this.age = age;
  }
}

const student = new Student('Jeremias', 18);

console.log(student);

// ------ HERENCIA ----------- END
