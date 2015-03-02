'use strict';

describe('Service: owners', function () {

  // load the service's module
  beforeEach(module('rdcstorageApp'));

  // instantiate service
  var owners;
  beforeEach(inject(function (_owners_) {
    owners = _owners_;
  }));

  it('should do something', function () {
    expect(!!owners).toBe(true);
  });

});
