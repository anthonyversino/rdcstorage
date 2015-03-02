'use strict';

/**
 * @ngdoc function
 * @name rdcstorageApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the rdcstorageApp
 */
angular.module('rdcstorageApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
