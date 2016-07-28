import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    return 'Joe Dinsdale' + ' | ' + tokens.join();
  }
});
