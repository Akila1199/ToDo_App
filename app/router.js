import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', function() {});
  this.route('tasks', function() {
    this.route('show-task', {path: '/:task_id'});
  });
  this.route('create-task');
  this.route('completed-tasks');
  this.route('login');
});
