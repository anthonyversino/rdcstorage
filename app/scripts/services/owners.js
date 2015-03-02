'use strict';

/**
 * @ngdoc service
 * @name rdcstorageApp.owners
 * @description
 * # owners
 * Factory in the rdcstorageApp.
 */
 angular.module('rdcstorageApp')
  .factory('Owners', function () {
    // Service logic
    // ...

    var owners = ['Anthony Versino', 'Miguel Mendez', 'Vivian Sandoval', 'John Croll', 'Chris Horst', 'Henry Schniedermeier', 'Stu Lewis', 'Kevin Kraft', 'Yash Sidhartha', 'Sakif Ferdous'];

    // Public API here
    var Owners = {
      getOwners: owners
    };

    return Owners;
});
