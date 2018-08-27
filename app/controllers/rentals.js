import Controller from '@ember/controller';
//  Controllers contain actions and properties available to the template of its corresponding route.

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store')
          .query('rental', { city: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.get('store')
          .findAll('rental').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
 // This action takes in the value property, and filters the rental data for records in data store that match what the user has typed thus far.
