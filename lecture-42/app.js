var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']); 

weatherApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      controller:'homeCtrl',
      templateUrl:'pages/home.html'
    })
    .when('/forecast',{
      controller:'forecastCtrl',
      templateUrl:'pages/forecast.html'
    })
})

weatherApp.controller('homeCtrl',['$scope',function($scope){

}])

weatherApp.controller('forecastCtrl',['$scope',function($scope){

}])

