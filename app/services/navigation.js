import Ember from 'ember';

export default Ember.Service.extend({
  navState: 0,

  init() {
    this.set('navState', 0);
  },

  updateNavState(state) {
    this.set('navState', state);
  }
});
