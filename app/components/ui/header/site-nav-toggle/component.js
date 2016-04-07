import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['nav-button__toggle'],

  click: function() {
    if (this.get('navState') === 0) {
      this.set('navState', 1);
    } else {
      this.set('navState', 0);
    }
  },
});
