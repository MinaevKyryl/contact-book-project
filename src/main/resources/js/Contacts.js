let contactsList = angular.module('contactsList', []);
contactsList.controller('contactsListController', function ($scope, $http){
    $scope.allContactsList = [];
    function getAllContacts() {
        $http({
            method: 'GET',
            url: '/contacts'
        }).then(
            function(res) { // success
                $scope.allContactsList = res.data;
            },
            function(res) { // error
                console.log("Error: " + res.status + " : " + res.data);
            }
        );
    }

})