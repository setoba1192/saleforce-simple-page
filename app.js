var mainApp = angular.module("myApp", ['ngResource']);
         
         mainApp.controller('itemController', function($scope, BaseService) {
            
         BaseService.getLeads(function(data){


               $scope.leads = data.Data;

            },function(data){


            });


            
         });