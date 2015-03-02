'use strict';

/**
 * @ngdoc function
 * @name rdcstorageApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the rdcstorageApp
 */
angular.module('rdcstorageApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, $filter, id, Materials, Owners, Categories) {
    $scope.id = id;
    $scope.material ={};
    $scope.owners = Owners.getOwners;
    $scope.categories = Categories.getCategories;
    $scope.datepickers = {
      datereceived: false,
      disposaldate: false
    };


    if (angular.isDefined(id)) {
      $scope.material = Materials.get(id);
      $scope.material.id = id;
    }


    $scope.today = function () {
      $scope.material.datereceived = $filter('date')(new Date(), 'yyyy-MM-dd');
    };

    $scope.today();

    $scope.open = function($event, which) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.datepickers[which] = true;
    };

    $scope.save = function () {
      $scope.material.$save();
      $modalInstance.dismiss('cancel');
    };

    $scope.add = function () {
      Materials.create($scope.material);
      $modalInstance.dismiss('cancel');
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };


  });
