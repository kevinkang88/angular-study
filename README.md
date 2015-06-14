# Section 2 - Model, View, Whatever

## Lecture 4 - The Problem(s) AngularJS is Trying to Solve

the problem of using vanila Javascript is complexities of managing both DOM and all the logic and variables simpler

AngularJS and other front end frameworks are created to mainly solve this problem.

## Lecture 5 - Model, View, * (Whatever)

(*),Whatever is in case is a componenet that is used to bind model and view together. 

whatever happens in a view affects model and the other way around as well. 

## Lecture 6 - HTML Aside: Custom Attributes

see the folder 

## Lecture 7 - Javascript Aside: The Global Namespace

when declaring functions, variables, ect in global level, they may share same name with other third party libraries causing errors and unexpected results.

To stop polluting global namespace you can encapsulate related function in an object. 

'''javascript
var myApp = {}
myApp.person = 'Kevin'
'''