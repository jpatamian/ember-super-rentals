import EmberRouter from '@ember/routing/router';
// gives us access to Ember's Router class as the variable EmberRouter
import config from './config/environment';
// gives us access to our app's configuration data as the variable config

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('show', { path: '/:rental_id' });
  });
});

export default Router;
