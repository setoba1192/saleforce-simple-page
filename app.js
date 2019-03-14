var mainApp = angular.module("myApp", ['ngResource']);
         
         mainApp.controller('itemController', function($scope, BaseService) {
            
         BaseService.getLeads(function(data){


               $scope.leads = data.Data;

            },function(data){


            });

         $scope.getItems = function(lead){

            BaseService.getItemsByLead({LeadID : lead.id}, function(data){

               $scope.items = data.Data;


            },function (data){

            });
         }


            
         });