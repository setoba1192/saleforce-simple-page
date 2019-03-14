(function() {
   'use strict'

   angular.module('myApp').factory('BaseService', BaseService);

   function BaseService($resource) {
      var resource = $resource('api/item/:id', {
         id : '@id'
      }, {
         getLeads : {
            method : 'GET',
            headers: { 'Authorization': 'Bearer 00D1U000001531A!AQwAQL9WQlmOI__2jDvJKcSNxvUcMQciXZuu3VNrrsJEUnwIVbScFKbcdTEhvyxwHha70e9wTPz0EBcNB7g8dYDO1BUDXktj' },
            url : 'https://na85.salesforce.com/services/apexrest/Leads'
         },
         listarActasConvocatoriaPorTipo : {
            method : 'POST',
            url : 'api/acta/admin/actaConvocatoria/listar',
            isArray : true
         }
      });
      return resource;
   }

})();