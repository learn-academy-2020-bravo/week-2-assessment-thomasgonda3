# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: It allows you to inherit variables and functions from the class you are extending from.

  Researched answer: It is used inside a sub-class method definition to call a method defined in the superclass. Private methods of the superclass cannot be called. Only public and protected methods can be called by the super keyword. It is also used by class constructors to invoke constructors of its parent class.



2. What is a virtual DOM?

  Your answer: The abstract page you are loading on websites.

  Researched answer: The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: create a tag with some text in it under a render() function.

  Researched answer: Create a class with a render method, and then return text with hello world in it.



4. What is JSX?

  Your answer: the syntax used by react.

  Researched answer: JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. ... Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.



5. What is state in React?

  Your answer: the current values of all variables.

  Researched answer: In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state.



6. STRETCH: What is hoisting in JavaScript?

  Your answer:  Moving declared variables to the top of the page before it runs so that things that use those variables don't create an error because it hasn't gotten to them yet.

  Researched answer: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods - What are React lifecycle methods? You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death. Every component in React goes through a lifecycle of events.

- API - An application programming interface is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.

- event.preventDefault() - A preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.

- DOM events - DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened.

- http verbs - The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently.

- MVC - Model–view–controller is a software design pattern commonly used for developing user interfaces which divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.
