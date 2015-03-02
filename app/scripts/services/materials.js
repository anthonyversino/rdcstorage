'use strict';

/**
 * @ngdoc service
 * @name rdcstorageApp.materials
 * @description
 * # materials
 * Factory in the rdcstorageApp.
 */
 angular.module('rdcstorageApp')
 .factory('Materials', function (fbutil) {
  var materials = fbutil.syncArray('materials');

  var Materials = {
    all: materials,
    create: function (material) {
      return materials.$add(material);
    },
    get: function (materialId) {
      return materials.child(materialId).$asObjectI();
    },
    delete: function (material) {
      return materials.$remove(material);
    }
  };

  return Materials;
});
