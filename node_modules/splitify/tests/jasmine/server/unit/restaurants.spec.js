'use strict';

describe('Restaurants', function() {
  beforeEach(function() {
    MeteorStubs.install();
    mock(global, 'Restaurants');
  });

  afterEach(function() {
    MeteorStubs.uninstall();
  });

  describe('service', function() {
    it('should list restaurants in ascending order by title', function() {
      var result = {};
      spyOn(Restaurants, 'find').and.returnValue(result);

      expect(RestaurantsService.list()).toBe(result);
      expect(Restaurants.find.calls.argsFor(0)).toEqual([{}, {sort: {title: 1}}]);
    });
  });
});