import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | completed-tasks', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:completed-tasks');
    assert.ok(route);
  });
});
