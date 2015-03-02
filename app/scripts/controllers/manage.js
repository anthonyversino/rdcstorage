'use strict';

/**
 * @ngdoc function
 * @name rdcstorageApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the rdcstorageApp
 */
 angular.module('rdcstorageApp')
 .controller('ManageCtrl', function ($scope, $modal, Materials, Owners, Categories) {
    $scope.materials = Materials.all;
    $scope.owners = Owners.getOwners;
    $scope.categories = Categories.getCategories;

    $scope.material = {};

    $scope.submitMaterial = function() {
      Materials.create($scope.material).then(function(){
        $scope.material = {
          datereceived: '',
          description: '',
          disposaldate: '',
          owner: '',
          category: '',
          location: '',
          project: ''
        };
      });
    };

    $scope.deleteMaterial = function (material) {
      Materials.delete(material);
    };

    $scope.open = function(materialId) {
      var modalInstance = $modal.open({
        templateUrl: 'views/partials/addmaterialmodal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          id: function () {
            return materialId; 
          }
        }
      });


    };


  });
