import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tasks/show-task', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tasks/show-task');
    assert.ok(route);
  });
});
