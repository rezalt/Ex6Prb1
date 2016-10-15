
var myApp = angular.module('Prb1App', ['ngRoute']);

var persons = [
    {id: 1, name: "Jens", age: 18}
    , {id: 2, name: "Peter", age: 23}
    , {id: 3, name: "Hanne", age: 23}
];

myApp.controller('PersonsController', function ($scope, $routeParams)
{
    $scope.persons = persons;
    $scope.selectedPerson = persons[$routeParams.id - 1];


    $scope.addPerson = function () {
        $scope.selectedPerson.id = persons.length + 1;
        persons.push($scope.selectedPerson);
        $scope.selectedPerson = {};
        alert("You have added a person.");
    };

});

myApp.config(function ($routeProvider)
{
    $routeProvider
            .when('/allPersons', {
                templateUrl: 'allPersons.html',
                controller: 'PersonsController'
            })
            .when('/personDetails/:id', {
                templateUrl: 'details.html',
                controller: 'PersonsController'
            })
            .when('/newPerson', {
                templateUrl: 'newPerson.html',
                controller: 'PersonsController'
            })
            .otherwise({
                redirectTo: '/home'
            });
});

