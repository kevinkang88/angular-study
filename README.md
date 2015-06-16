# Section 3 - Services and Dependency Injection

## Lecture 10 - Javascript Aside: Dependency Injection

Dependency Injection - giving function an object, instead of creating an object inside a function, you pass it to the function.

instead of below which is creating an object inside a function...
```javascript

var Person = function(firstname,lastname){
  this.firstname = firstname ; 
  this.lastname = lastname ; 
}

function logPerson(){
  var john = new Person('John','Smith');
  console.log(john); 
}

logPerson();

```

this way describes dependency injection
```javascript

var Person = function(firstname,lastname){
  this.firstname = firstname ; 
  this.lastname = lastname ; 
}

function logPerson(person){
  console.log(person); 
}

logPerson(new Person('John','Smith'));

```

## Lecture 11 - The Scope Service 

It is a mechanism that binds model to the view

scope is an object from scope service

you can use dependency injection to use it inside controller, and add variables and functions to the $scope object.

```javascript
var myApp = angular.module('myApp',[])
myApp.controller('myCtrl',['$scope',function($scope){
  $scope.name = 'Kevin';
  $scope.occupation = 'Coder';
  $scope.getname = function(){
    return $scope.name ; 
  }
}])
```

## Lecture 12 - Javascript Aside: Functions and Strings

function when it is not invoked with batman symbol it returns raw string version

## Lecture 13 - How Does Angular Do Dependency Injection 

look at the folder

## Lecture 14 - Getting Other Services

$log service contains many functionalities such as ..
```javascript
$log.log
$log.debug
$log.error
$log.warn
$log.info
```

$filter service 
```javascript
$scope.yell = $filter('uppercase')($scope.name)
```

search for other popular modules at 
[http://ngmodules.org/](http://ngmodules.org/)

## Lecture 15 - Javascript Aside: Arrays and Functions 

javascript array can contain any type of object including javascript functions

```javascript
var collec = [1,'2',function(){alert('hello')}]
collec[2](); => 'should alert hello'
```

## Lecture 16 - Dependency Injection and Minification

always use the following format while declaring Angular controller

```javascript
var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',['$scope','$log',function($scope,$log){

}])
```

Because when minifying the code won't break. An important thing to watch out here is ordering of the argument in the function because the naming is not relavent. It will look at the string values and match according to the order. 