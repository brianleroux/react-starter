var test = require('prova')
  , Text = require('./text')

test('System sanity check', function (assert) {
  assert.plan(1)
  assert.equal(true, true)
});

test('Component sanity check', function (assert) {
  assert.plan(1)
  assert.ok(Text, 'Text object exists')
});
