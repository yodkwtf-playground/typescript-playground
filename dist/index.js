"use strict";
//# Basic Types
let id = 5;
let company = 'Dev Diary';
let isPublished = true;
let x = 'Hello';
//# Arrays - collection of data
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//# Tuple - array with specific number & type of elements
let person = [1, 'Deekayy', true];
// Tuple Array - array of tuples
let employee;
employee = [
    [1, 'Deekayy'],
    [2, 'John'],
    [3, 'Doe'],
];
//# Union - multiple types
let pid = 22;
pid = '22';
//# Enum - set of named constants used for storing values like PI
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
console.log(Direction1.Down); // 1
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up); // 1
console.log(Direction1.Down); // 2
var Config;
(function (Config) {
    Config["URL"] = "https://yodkwtf.com";
    Config["VERSION"] = "1.0.1";
})(Config || (Config = {}));
console.log(Config.URL); // https://yodkwtf.com
console.log(Config.VERSION); // 1.0.1
//# Objects - object with specific properties
const user = {
    id: 1,
    name: 'Deekayy',
};
const project = {
    id: 1,
    name: 'Dev Diary',
    isCompleted: false,
};
//# Type Assertion - type casting
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
//# Functions - optional & default params
function addNum(x, y) {
    return `The sum is:  ${x + y}`;
}
console.log(addNum(1, 2)); // "The sum is: 3"
function log(message) {
    console.log(message);
}
log('Hello'); // "Hello"
log(1); // 1
const user1 = {
    id: 1,
    name: 'Deekayy',
};
const p1 = 1;
const p2 = '1';
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// error case - doesn't comply with the interface
// const multiply: MathFunc = (x: number, y: string): string => x * y;
//# Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const p = new Person(1, 'Deekayy');
//# Access Modifiers
// private - can't be accessed outside the class
// public - can be accessed outside the class (default)
// protected - can be accessed within the class & its subclasses
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const deekayy = new Person1(1, 'Deekayy');
console.log(deekayy.register()); // "Deekayy is now registered"
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
//# Subclasses
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'John', 'Developer');
console.log(emp.register()); // "John is now registered"
//# Generics - reusable components
function getArray(items) {
    return new Array().concat(items);
}
// `T` is a placeholder for the type
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['dee', 'john', 'doe']);
console.log(numArray); // [1, 2, 3, 4]
console.log(strArray); // ["dee", "john", "doe"]
