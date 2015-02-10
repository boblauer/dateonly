var assert   = require('assert')
  , DateOnly = require('../')
  ;

describe('DateOnly', function() {

  it('should accept a DateOnly as a parameter', function() {
    var dateOnly = new DateOnly(20000001);
    dateOnly = new DateOnly(dateOnly);
    assert.equal(dateOnly.year, 2000);
    assert.equal(dateOnly.month, 0);
    assert.equal(dateOnly.date, 1);
  });

  it('should accept a string as a parameter', function() {
    var dateOnly = new DateOnly('1/1/2000');
    assert.equal(dateOnly.year, 2000);
    assert.equal(dateOnly.month, 0);
    assert.equal(dateOnly.date, 1);
  });

  it('should accept a timestamp as a parameter', function() {
    var dateOnly = new DateOnly(new Date('1/1/2000').valueOf());
    assert.equal(dateOnly.year, 2000);
    assert.equal(dateOnly.month, 0);
    assert.equal(dateOnly.date, 1);
  });

  it('should accept a datestamp as a parameter', function() {
    var dateOnly = new DateOnly(20000001);
    assert.equal(dateOnly.year, 2000);
    assert.equal(dateOnly.month, 0);
    assert.equal(dateOnly.date, 1);
  });

  it('should accept a Date as a parameter', function() {
    var dateOnly = new DateOnly(new Date('1/1/2000'));
    assert.equal(dateOnly.year, 2000);
    assert.equal(dateOnly.month, 0);
    assert.equal(dateOnly.date, 1);
  });

  it('should accept an empty parameter', function() {
    assert.ok(new DateOnly());
  });

  it('should be an Invalidate DateOnly when a bad parameter is passed in', function() {
    var dateOnly = new DateOnly('bad value');
    assert.equal(dateOnly.year.toString(), 'NaN');
    assert.equal(dateOnly.month.toString(), 'NaN');
    assert.equal(dateOnly.date.toString(), 'NaN');
    assert.equal(dateOnly.valueOf().toString(), 'NaN');
    assert.equal(dateOnly.toString(), 'Invalid Date');
  });

  it('should implement get/set functions the same as the Date object', function() {
    var dateOnly = new DateOnly('1/1/2000');

    dateOnly.setDate(12);
    dateOnly.setMonth(5);
    dateOnly.setFullYear(2020);

    assert.equal(dateOnly.getDate(), 12);
    assert.equal(dateOnly.getMonth(), 5);
    assert.equal(dateOnly.getFullYear(), 2020);
    assert.equal(dateOnly.getDay(), 5);
    assert.equal(dateOnly.valueOf(), 20200512);
  });

  it('should implement a static toDate method', function() {
    var date = 20120215;
    assert.equal(DateOnly.toDate(date).valueOf(), new Date('03/15/2012').valueOf());
  });
});
