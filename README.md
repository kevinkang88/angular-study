# Section 7 - Custom Directives

## Lecture 31 - HTML Aside : Reusable Components 

Html does not have a way to create custom tags for the ui 

## Lecture 32 - Javascript and Angular Aside : Variable Names and Normalization 

attributes and tag names should be all lower case, and multiple words that are connected by '-'

since '-' can't be used in javascript in variable names , since it will detact as substraction, 
Angular normalizes the attribute, and tag names to camal cased letters.

## Lecture 33 - Creating a Directive 

setting up directive 

```javascript
myApp.directive('directiveName',function(){
  return {
    restrict: 'AECM',
    template: <p>Example<p>,
    replace: true
  }
})
```

## Lecture 34 - Template

modularizing the code and separating the file with TemplateUrl attribute 

## Lecture 35 - Scope(@,=,and other symbols)

child template can access $scope from the parents template

this can be convinient but also dangerous so Angular provides Isolating Scope technique 

```javascript
scope: {
  pokeHole: "@"
}
```

```html
<sampleDir poke-hole='{{pokehole.name}}'></sampleDir>
```

## Lecture 36 - Scope 2

```javascript
scope: {
  pokeHole: "="
}
```

```html
<sampleDir poke-hole='someObj'></sampleDir>
```

'=' means that the object is two way binded

## Lecture 37 - Scope 3

to also be able to use functions in parent $scope inside custom directive, add ampersand 

```javascript
scope: {
  pokeHole: "=",
  pokeHoleFunc: "&"
}
```

remember to pass in object mapping inside template

## Lecture 38 - Repeated Directives

directive can sit inside ng-repeat, include inside directive tag

## Lecture 39 - Understanding 'Compile'

compile - changing language into more low level language
link - generating executable file with complied code

```javascript
compile:function(elem,attrs){
  console.log(elem.html())

  return {
    pre: function(scope,elem,attrs){

    },
    post: function(scope,elem,attrs){

    }
  }
  
}
```

## Lecture 40 - Understanding 'link'

short hand for post link

```javascript
link:function(scope,elem,attrs){
  
}
```
## Lecture 41 - Transclusion

tranclusion - placing a copy of one document at a particular point inside another. 

```html
<ng-transclude>
```

```javascript
transclude: true
```