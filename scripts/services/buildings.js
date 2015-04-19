//Factory for troops and buildings data.

angular.module('clashApp.services')
   .factory('buildingFactory', ['$http',
      function ($http) {
         var location = window.location.protocol + '//' + 'localhost';
         return {
            getBarracks: function () {
               var response = [];
               return $http.get( location + '/clash/resources/barracks.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getDarkBarracks: function () {
               var response = [];
               return $http.get( location + '/clash/resources/darkBarracks.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getCamps: function () {
               var response = [];
               return $http.get( location + '/clash/resources/camps.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getFactory: function () {
               var response = [];
               return $http.get( location + '/clash/resources/spellsFactory.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            }

         }
      }
   ]);