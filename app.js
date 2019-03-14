var mainApp = angular.module("myApp", ['ngResource']);
         
         mainApp.controller('itemController', function($scope, BaseService) {
            
         BaseService.getLeads(function(data){


               $scope.leads = data.Data;

            },function(data){


            });

         $scope.getItems = function(lead){

            BaseService.getItemsByLead({LeadID : lead.Id}, function(data){

               $scope.items = data.Data;


            },function (data){

            });
         }

         $scope.createItem = function(){

            $scope.item.Lead__c = $scope.leadAssignment.Id;

            BaseService.createItem({},$scope.item, function(data){

                  alert('Item created!');
                  $scope.item = null;

            }, function(data){

                  alert('An error has occurred: '+data.data.Message);


            })


         }


            
         });