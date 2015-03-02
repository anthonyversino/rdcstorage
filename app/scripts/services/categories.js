'use strict';

/**
 * @ngdoc service
 * @name rdcstorageApp.categories
 * @description
 * # categories
 * Factory in the rdcstorageApp.
 */
 angular.module('rdcstorageApp')
 .factory('Categories', function () {
    // Service logic
    // ...

    var categories = ['Paslode Q.C.', 'Alpine Q.C.', 'Outsource Validation', 'Test Material', 'Bulk Nails', 'Chemicals', 'Product Development', 'Benchmark Fastener', 'Protected', 'Misc. Item' ];

    // Public API here
    var Categories = {
      getCategories: categories
    };

    return Categories;
  });
