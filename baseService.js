(function() {
   'use strict'

   angular.module('myApp').factory('BaseService', BaseService);

   function BaseService($resource) {
      var resource = $resource('api/item/:id', {
         id : '@id'
      }, {
         getLeads : {
            method : 'GET',
            headers: { 'Authorization': 'Bearer 00D1U000001531A!AQwAQOgSHqJnOPk80dGgaLwah7BjfKtEmFgygvrq754jFk.dZKpjqvKi0VCzQ3dR5qSEiHMLARTJoaOQHeUfa9I4xoSEZ5Oc' },
            url : 'https://na85.salesforce.com/services/apexrest/Leads'
         },
         getItemsByLead : {
            method : 'GET',
            headers: { 'Authorization': 'Bearer 00D1U000001531A!AQwAQOgSHqJnOPk80dGgaLwah7BjfKtEmFgygvrq754jFk.dZKpjqvKi0VCzQ3dR5qSEiHMLARTJoaOQHeUfa9I4xoSEZ5Oc' },
            url : 'https://na85.salesforce.com/services/apexrest/item',
          
         },
         createItem : {
            method : 'POST',
            headers: { 'Authorization': 'Bearer 00D1U000001531A!AQwAQOgSHqJnOPk80dGgaLwah7BjfKtEmFgygvrq754jFk.dZKpjqvKi0VCzQ3dR5qSEiHMLARTJoaOQHeUfa9I4xoSEZ5Oc' },
            url : 'https://na85.salesforce.com/services/apexrest/item',
          
         }
      });
      return resource;
   }

})();