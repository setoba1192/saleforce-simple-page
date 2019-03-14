var mainApp = angular.module("myApp", ['ngResource']);
         
         mainApp.controller('itemController', function($scope, BaseService) {
            
         BaseService.getLeads(function(data){

               $scope.leads = data;

            },function(data){


            });


            
         });