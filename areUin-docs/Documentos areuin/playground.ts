/*//You must not think of types as sets of object properties in this case. We can avoid the confusion about how union and intersection types work by looking at scalar variables and their sets of permissible values (instead of objects):

type A = 1 | 2
type B = 2 | 3
type I = A & B
type U = A | B

let a: A
let b: B
let i: I
let u: U

a = 1
a = 2
a = 3 // <- error

b = 1 // <- error
b = 2
b = 3

i = 1 // <- error
i = 2
i = 3 // <- error

u = 1
u = 2
u = 3
//Here the terms "union" and "intersection" correspond exactly to the set theory terms when applied to the sets of permissible values.

//Applying the notion of permissible values (instances) to object types is a bit trickier (because the set theory analogy doesn't hold well):

type A1 = {
  x: number
  y: number
}

type B1 = {
  y: number
  z: number
}

type I1 = A1 & B1
type U1 = A1 | B1
//A variable of type A can hold object instances with properties x and y (and no other properties).
//A variable of type B can hold object instances with properties y and z (and no other properties).
//In set theory the intersection of the two sets of object intances above is empty. However, a variable of intersection type I can hold objects with the properties of type A AND those of type B (i.e. x, y, and z; hence the & symbol) which corresponds to the union of properties of the two types (hence the confusion).
//In set theory the union of the two sets of object intances above does not include objects with all three properties. However, a variable of union type U can hold objects with the properties of type A OR those of type B (logical OR, not XOR, i.e. x and y, y and z, or x, y, and z; hence the | symbol) which implies that the intersection of properties of the two types (y in our example) is guaranteed to be present (hence the confusion).
let i1: I1
let u1: U1

i1 = { x: 1, y: 2 };         // <- error
i1 = { y: 2, z: 3 };         // <- error
i1 = { x: 1, y: 2, z: 3 };

u1 = { x: 1, y: 2 };
u1 = { y: 2, z: 3 };
u1 = { x: 1, y: 2, z: 3 };

//Next Topic: Unknown
//The unknown type represents any value. This is similar to the any type, but is safer because it's not legal to do anything with an unknown value:

function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
}
//Object is of type 'unknown'.
//This is useful when describing function types because you can describe functions that accept any value without having any values in your function body.

//Conversely, you can describe a function that returns a value of unknown type:

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// Need to be careful with 'obj'!
const obj = safeParse(someRandomString);
//My notes: Unknown its an any type that can't be modified after defined.
//The diference with const defines a variable and this can define the return of a function or a class when its defined and not when is used.

//Never type allows to check for paths that cannot happen in the flow of execution.
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

import { v4 as uuid } from 'uuid';
import { UniqueEntityID } from './base/domain/UniqueEntityID';
import { Guard } from './base/logic/Guard'

let testUniqueEntityID = new UniqueEntityID(35000); 
let undefinedTest;
let nullTest = null;
let notNullorUndefinedTest = {argument:2, argumentName:"Success Test"}
let nullAndUndefinedTuple = [{argument:undefinedTest,argumentName: "undefined test"},{argument:nullTest,argumentName: "null test"}]

let guardAgainstNullTest = Guard.againstNullOrUndefined({argumentName:"undefined test",argument:undefinedTest});
let guardAgainstUndefinedTest = Guard.againstNullOrUndefined({argument:nullTest,argumentName:"null test"});
let guardagainstNullOrUndefinedBuldTest = Guard.againstNullOrUndefinedBulk(nullAndUndefinedTuple);
let guardAgainstNullOrUndefinedSuccessTest = Guard.againstNullOrUndefined(notNullorUndefinedTest);

console.log("Hello, World",uuid(),testUniqueEntityID);
console.log(guardAgainstNullTest);
console.log(guardAgainstUndefinedTest);
console.log(guardagainstNullOrUndefinedBuldTest);
console.log(guardAgainstNullOrUndefinedSuccessTest); */

//import { TextUtil } from './utils/TextUtils'
//import { UniqueEntityID } from './base/domain/UniqueEntityID'
//
//
//const UUID = new UniqueEntityID();
//const UUIDtoTest: string = UUID.toString();
//console.log(UUIDtoTest)

//class a {
//  a1: number;
//  constructor() {
//    this.a1 = 1;
//  }
//  public method1() {}
//}
//
//class b extends a {
//  static afe: string;
//  b1: number;
//  constructor() {
//    super();
//    this.b1 = 2;
//  }
//}
//
//class c extends b {
//  readonly c1: number;
//  constructor() {
//    super();
//    this.c1 = 3;
//  }
//}
//
//class d implements c {
//  public a1: number;
//  public b1: number;
//  public c1: number;
//
//  constructor(a1: number, b1: number, c1: number) {
//    this.a1 = a1;
//    this.b1 = b1;
//    this.c1 = c1;
//  }
////}

//const b = moment.now();
//const arrayForDuplicates = [];
//for (let i = 0; i < 10000000; i++) {
//  const testTimestampRandom = idUtils.timestampRandomIDgenerator();
//  arrayForDuplicates.push(testTimestampRandom);
//  const success = idUtils.isTimestampRandomId(testTimestampRandom);
//  if (!success) {
//    console.log(false);
//    console.log(
//      'expected: ',
//      moment.now.toString().length,
//      'result: ',
//      testTimestampRandom.toString().length
//    );
//  }
//}
//arrayForDuplicates.sort();
//let a = 0n;
//for (const timestamp of arrayForDuplicates) {
//  if (timestamp == a) {
//    console.log('Theres a duplicate');
//  }
//  a = timestamp;
////}
////
////console.log(arrayForDuplicates.length);
////console.log((moment.now() - b) / 1000);
//import { idUtils } from './utils/idUtils';
//import * as moment from 'moment';
//
//const cycles = 100000;
//
//const UUIDArray = [];
//for (let i = 0; i < cycles; i++) {
//  UUIDArray.push(idUtils.GenerateUUID());
//}
//const startUUIDTimestamp = moment.now();
//UUIDArray.sort();
//console.log(
//  `Sorting ${UUIDArray.length} uuids took: `,
//  (moment.now() - startUUIDTimestamp) / 1000
//);
//console.log(UUIDArray.slice(500, 540));
//const timestampArray = [];
//for (let i = 0; i < cycles; i++) {
//  timestampArray.push(idUtils.GenerateTimestampRandomID());
//}
//const startTimestampRandomTimestamp = moment.now();
//console.log((startTimestampRandomTimestamp - startUUIDTimestamp) / 1000);
//timestampArray.sort();
//console.log(
//  `Sorting ${timestampArray.length} TimestampRandomIds took: `,
//  (moment.now() - startTimestampRandomTimestamp) / 1000
//);
//console.log(timestampArray.slice(500, 540));
//159501218858196220565258n
//016e8179cef9446ba8fc1726d31b92ec
