1. Primitive Datatypes:- Being stored in a variable,predefined e.g:- number,string,boolean,null,undefined,bigint
   <br/>
   2.Non-primitive:- Ref data types location data types e.g. object,array,stack,queue,heap etc...

<br/>
<br/>

### Execution Context

1. Global Execution Context

- Javascript engine receives a script file and it is creates a default execution context knows as GEC.

2. Function Execution Context

- Execution context where all Javascript code that inside of a function executed.

### Two Phases

1. Creation Phase

- Hoisting and Function Code displayed not executed

2. Execution Phase

- Assigning value and Function executed

### Mutable and Immutable

1. Mutable

- Type of variable that can be changed. only object,arrays are mutable not primitive value

1. Immutable

- Type of variable that can't be changed. Strings and Numbers are Immutable

### What is Asynchronous Programming?

`Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.`

### Hoisting

```bash
function runLoop(){
    for(var i=0;i<10;i++){
        console.log(i);
    }
}
runLoop();

//After Hoisting

runLoop();

function runLoop(){
    var i;
    for(i=0;i<10;i++){
      console.log(i)
    }
}
```

in let and const hoisting happen in temporal dead zone.

#### Temporal Dead Zone:

`Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed. Temporal Dead Zone starts when the code execution enters the block which contains the let or const declaration and continues until the declaration has executed. It is time between let,const are hoisted and till initialization. When you try to console variable in temporal dead zone gives you ref error`

#### Callback Hell:

- This issue caused by coding with complex nested callbacks and Javascript provides an easy way of escaping from callback hell. This is done by event queue and promises.

## SetTimeout + Closure

```bash
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Namaste JavaScript");
}
x();


function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Namaste JavaScript");
}
x();

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }

  console.log("Namaste JavaScript");
}
```

### Default Binding

`Method: Function written inside an Object, this refers to owner Object. In Function this refers to the global Object`

### Implicit Binding

`Applied When you Invoke Function is an Object using the dor notation. This in such scenarios will point to the object using which the function was invoked. Dot Notation`

```bash
function myFunc(){
    console.log(this);
}
const obj={someKey:1,myFunc:myFunc};
obj.myFunc() => {someKey:1,myFunc:myFunc}
```

### Explicit Binding

`Object passed in first parameter call,apply,bind`

### Default Binding

1.Method :- Owner Object
2.Function :- Window Object

### What Comes in Microtask queue and Callback Queue?

`Microtask Queue: All Callback Function who return promises and Mutation Observer`
`Callback Queue: Timer Function,setTimeout`

### What Starvation?

`When One function executed in microtask then it creates another microtask queue so cb queue never gets chance`

### What is Side Effects?

`When we modify something in js we cause side effects. This simply means modifying or changing our code causing it to have unpredictable behavior and mutability`

```bash
function add(arr,element){
    arr.push(element) // Impure Function
}

function add(arr,element){
   return [...arr,element] // pure Function
}
```

## Questions

1.Read about ES6 Classes

2.Everything object in JS?

3.What iS IIFE?

4.Event Bubbling and Event Capturing and Event
Delegation

5.Pros and Cons of IIFE,Closure and Promises.

6.What is Async and Await?

7.What is Debouncing and Throttling

8.Constructor

9.Prototype and Inheritance

10.Encapsulation

11.Error Object, Throw

12.First Class Function and Callback Function and First Class Citizen

13.Pure Function :- Doesn't Have any Side Effects

14.How Web Works

15.Authentication,JWT,Authorization

16.Cookies, IndexDB, LocalStorage, SessionStorage

17.Concurrency In Javascript

18.What is DOM AND BOM AND VDOM

## LLD QUESTION

1.Design Parking System

2.Design Parking Lot OOD

3.Design Conference Room

4.Design Soda Vending Machine

5.Design Twitter

6.Design Coffee Machine

7.Design Deck of cards
