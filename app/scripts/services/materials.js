/* Global Firebase */
'use strict';

/**
 * @ngdoc service
 * @name rdcstorageApp.materials
 * @description
 * # materials
 * Factory in the rdcstorageApp.
 */
 angular.module('rdcstorageApp')
 .factory('Materials', function (fbutil, $firebase, FBURL) {
  var materials = fbutil.syncArray('materials');

  var ref = new Firebase(FBURL);

  var Materials = {
    all: materials,
    create: function (material) {
      return materials.$add(material);
    },
    get: function (materialId) {
      return $firebase(ref.child('materials').child(materialId)).$asObject();
    },
    delete: function (material) {
      return materials.$remove(material);
    }
  };

  return Materials;
});
