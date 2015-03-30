'use strict';

angular.module('clashApp.controllers', [])
  .controller('ArmyController', ['$scope', '$http', 'troopFactory',
    function ($scope, $http, troopFactory ){

        //Services manipulation
        $scope.services = {
            getLight: function(){
                troopFactory.getLight()
                    .success(function (data){
                        $scope.light = data;
                    });
            },
            getDark: function(){
                troopFactory.getDark()
                    .success(function (data){
                        $scope.dark = data;
                    });
            },
            getSpells: function (){
                troopFactory.getSpells()
                    .success(function (data){
                        $scope.spells = data;
                    });
            },
            getBarracks: function (){
                troopFactory.getBarracks()
                    .success(function (data){
                        $scope.light_barracks = data;
                    })
            },
            getDarkBarracks: function (){
                troopFactory.getDarkBarracks()
                    .success(function (data){
                        $scope.dark_barracks = data;
                    })
            },
            getCamps: function (){
                troopFactory.getCamps()
                    .success(function (data){
                        $scope.camps = data;
                    })
            },
            getFactory: function (){
                troopFactory.getFactory()
                    .success(function (data){
                        $scope.spell_factory = data;
                        colsole.log('spell factory: ' + $scope.spell_factory);
                    })
            }
        }
        
        //Execute services to get data
        $scope.services.getSpells();
        $scope.services.getLight();
        $scope.services.getDark();
        $scope.services.getBarracks();
        $scope.services.getDarkBarracks();
        $scope.services.getCamps();
        $scope.services.getFactory();


        //Calculate the amount of troops
        $scope.cantidad = function (option) {
            var cantidad = 0;
            var aux = 0;
            switch (option) {
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        aux = $scope.light[i].amount * $scope.light[i].space;
                        cantidad += aux;
                    }
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        aux = $scope.dark[i].amount * $scope.dark[i].space;
                        cantidad += aux;
                    }
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        aux = $scope.spells[i].amount * $scope.spells[i].space;
                        cantidad += aux;
                    }
                    break;
                case 'total.troops':
                    cantidad = $scope.cantidad('light') + $scope.cantidad('dark');
                    break;
            }
            return cantidad;
        }

        //Calculate the total cost
        $scope.costo = function (option) {
            var costo = 0;
            var aux = 0;
            var index = 0;
            switch (option) {
                case 'light':
                    if ($scope.light.length !== 'undefined'){
                        for (var i = $scope.light.length - 1; i >= 0; i--) {
                            index = $scope.light[i].lvl-1;
                            if (typeof $scope.light[i].cost[index] != 'undefined' && typeof $scope.light[i].amount != 'undefined'){
                                    aux = $scope.light[i].cost[index] * $scope.light[i].amount;
                                    costo += aux;
                            }
                        }
                    }
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        index = $scope.dark[i].lvl-1;
                        if (typeof $scope.dark[i].cost[index] != 'undefined' && typeof $scope.dark[i].amount != 'undefined'){
                            aux = $scope.dark[i].cost[index] * $scope.dark[i].amount;
                            costo += aux;
                        }
                    }
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        index = $scope.spells[i].lvl-1;
                        if (typeof $scope.spells[i].cost[index] != 'undefined' && typeof $scope.spells[i].amount != 'undefined'){
                            aux = $scope.spells[i].cost[index] * $scope.spells[i].amount;
                            costo += aux;
                        }
                    }
                    break;
                case 'total.light':
                    costo = $scope.costo('light') + $scope.costo('spells');
                    break;
            }
            return costo;
        }

        //Calculate the total time
        $scope.tiempo = function (option) {
            var tiempo = 0;
            switch (option) {
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        tiempo += ($scope.light[i].time * $scope.light[i].amount);
                    }
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        tiempo += ($scope.dark[i].time * $scope.dark[i].amount);
                    }
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        tiempo += ($scope.spells[i].time * $scope.spells[i].amount);
                    }
                    break;
            }
            return tiempo;
        }

        //Max amount of troops and spells calculation
        $scope.max_amount = function (option) {
            var max = 0;
            switch (option){
                case 'troops':
                    if (typeof $scope.camps[0].capacity[$scope.camps[0].lvl] != 'undefined') {
                        max += $scope.camps[0].capacity[$scope.camps[0].lvl];
                    }
                    if (typeof $scope.camps[1].capacity[$scope.camps[1].lvl] != 'undefined'){
                        max += $scope.camps[1].capacity[$scope.camps[1].lvl];
                    }
                    if (typeof $scope.camps[2].capacity[$scope.camps[2].lvl] != 'undefined') {
                        max += $scope.camps[2].capacity[$scope.camps[2].lvl];
                    }
                    if (typeof $scope.camps[3].capacity[$scope.camps[3].lvl] != 'undefined' ) {
                        max += $scope.camps[3].capacity[$scope.camps[3].lvl];
                    }
                    break;
                case 'spells':
                    if (typeof $scope.spell_factory[0].capacity[$scope.spell_factory[0].lvl] != 'undefined' ) {
                        max = $scope.spell_factory[0].capacity[$scope.spell_factory[0].lvl];
                    }
                    break;
            }
            return max;
            
        }

        //Troop and spells max amount exceeded check
        $scope.limit = function (option) {
            var answer = false;
            switch (option){
                case 'troops':
                    if ( $scope.max_amount('troops') < $scope.cantidad('total.troops') ){
                        answer = true;
                    }
                    break;
                case 'spells':
                    if ( $scope.max_amount('spells') < $scope.cantidad('spells') ){
                        answer = true;
                    }
                    break;
            }
            return answer;
        }

        //Barrack asigner
}
]);