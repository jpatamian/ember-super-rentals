import Route from '@ember/routing/route';

export default Route.extend({
  // The beforeModel hook gets executed before the data gets fetched from the model hook, and before the page is rendered.
  beforeModel() {
    this.replaceWith('rentals');
    // replaceWith will replace the current URL in the browser's history,
    // makes the home page "/" redirect to /rentals
  }
});
