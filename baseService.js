(function() {
   'use strict'

   angular.module('myApp').factory('BaseService', BaseService);

   function BaseService($resource) {
      var resource = $resource('api/item/:id', {
         id : '@id'
      }, {
         getLeads : {
            method : 'JSONP',
            headers: { 'Authorization': 'Bearer 00D1U000001531A!AQwAQPi.ZwLs30MQXnFtg3jfog81lpC0c1Bx9MXyoC7QqVytFr49n.KPIMj8iUSLCCvdBB7Gp3BBoERG54ytWTXyOMQnTDcM' },
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