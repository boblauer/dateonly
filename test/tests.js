var assert = chai.assert;

describe('DateOnly', function() {

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

  it('should be an Invalidate DateOnly when a bad parameter is passed in', function() {
    var dateOnly = new DateOnly('bad value');
    assert.equal(dateOnly.year.toString(), 'NaN');
    assert.equal(dateOnly.month.toString(), 'NaN');
    assert.equal(dateOnly.date.toString(), 'NaN');
    assert.equal(dateOnly.valueOf().toString(), 'NaN');
    assert.equal(dateOnly.toString(), 'Invalid Date');
  });

});
