import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';


module('Acceptance | task lists', function(hooks) {
  setupApplicationTest(hooks);

  test('should show home as the home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/home', 'should redirect automatically');
  });
  
  test('should link to create task page', async function(assert) {
    await visit('/');
    await click(".create-task");

    assert.equal(currentURL(), '/create-task', 'should navigate to task creating page');
  });

  test('should link to completed task page', async function(assert) {
    await visit('/');
    await click(".completed-task");

    assert.equal(currentURL(), '/completed-tasks', 'should navigate to completed tasks page');
  });


});
