import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | create-task', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:create-task');
    assert.ok(route);
  });
});