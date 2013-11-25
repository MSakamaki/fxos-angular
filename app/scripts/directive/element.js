'use strict';

angular.module('fxelement', [])
    .directive('fxmenu', function(){
        return {
            restrict:'E',
            templateUrl : '/scripts/directive/template/fxmenu.html'
          };
      })
    .directive('fxfooter', function(){
        return {
            restrict : 'E',
            templateUrl : 'scripts/directive/template/fxfooter.html'
          };
      });
