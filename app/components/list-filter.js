import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

// init hook to seeds initial listings by calling the filter action with an empty value.
  init() {
    this._super(...arguments);
    this.get('filter')('').then((allResults) => {
        this.set('results', allResults.results);
      });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.get('value')) {
          this.set('results', filterResults.results);
        }
      });
    }
  }
// handleFilterEntry will apply the search term filter to the list of rentals, and set a component attribute called results.
// The results are passed to the {{yield}} helper in the template. In the yielded block component, those same results are referred to as |filteredResults|.
});

// To implement the filter function to do the actual filter of rentals by city, we'll create a rentals controller.
// Notice the then function called on the result of calling the filter function. The code expects the filter function to return a promise.
