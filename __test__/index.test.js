const idx = require('../index');

describe('index test', function () {
  it('should say hello', function () {
    expect(idx.hello()).toBeDefined();
  });
});
