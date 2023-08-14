//# Basic Types
let id: number = 5;
let company: string = 'Dev Diary';
let isPublished: boolean = true;
let x: any = 'Hello';

//# Arrays - collection of data
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

//# Tuple - array with specific number & type of elements
let person: [number, string, boolean] = [1, 'Deekayy', true];
// Tuple Array - array of tuples
let employee: [number, string][];
employee = [
  [1, 'Deekayy'],
  [2, 'John'],
  [3, 'Doe'],
];

//# Union - multiple types
let pid: string | number = 22;
pid = '22';

//# Enum - set of named constants used for storing values like PI
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up); // 0
console.log(Direction1.Down); // 1

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up); // 1
console.log(Direction1.Down); // 2

enum Config {
  URL = 'https://yodkwtf.com',
  VERSION = '1.0.1',
}

console.log(Config.URL); // https://yodkwtf.com
console.log(Config.VERSION); // 1.0.1

//# Objects - object with specific properties

const user: { id: number; name: string } = {
  id: 1,
  name: 'Deekayy',
};

// Type Alias
type Project = {
  id: number;
  name: string;
  isCompleted: boolean;
};

const project: Project = {
  id: 1,
  name: 'Dev Diary',
  isCompleted: false,
};

//# Type Assertion - type casting
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

//# Functions - optional & default params
function addNum(x: number, y: number): string {
  return `The sum is:  ${x + y}`;
}

console.log(addNum(1, 2)); // "The sum is: 3"

function log(message: string | number): void {
  console.log(message);
}

log('Hello'); // "Hello"
log(1); // 1

//# Interfaces - object with specific properties
interface UserInterface {
  readonly id: number; // `readonly` makes it immutable
  name: string;
  age?: number; // `?` makes it optional
}

const user1: UserInterface = {
  id: 1,
  name: 'Deekayy',
};

// type vs interface
type Point = number | string; // doesn't work with interfaces
const p1: Point = 1;
const p2: Point = '1';

//# Interface with functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// error case - doesn't comply with the interface
// const multiply: MathFunc = (x: number, y: string): string => x * y;

//# Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  protected id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const deekayy = new Person1(1, 'Deekayy');
console.log(deekayy.register()); // "Deekayy is now registered"

//# Interfaces with Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string; // method should return a string
}

class Person2 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

//# Subclasses
class Employee extends Person2 {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'John', 'Developer');
console.log(emp.register()); // "John is now registered"

//# Generics - reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

// `T` is a placeholder for the type
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['dee', 'john', 'doe']);

console.log(numArray); // [1, 2, 3, 4]
console.log(strArray); // ["dee", "john", "doe"]
