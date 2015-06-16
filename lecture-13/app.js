var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',['$scope',function($scope){

}])

function searchPeople(firstname,lastname,age){

}
// uses injector and annotate to recognize parameters such as $scope
console.log(angular.injector().annotate(searchPeople));
//  returns [firstname,lastname,age]

