import Ember from 'ember';

export default Ember.Component.extend({
  navigation: Ember.inject.service(),
  classNames: ['nav-button__toggle'],
  classNameBindings: ['navigation.navState:clicked:unclicked'],

  click: function() {
    if (this.get('navigation.navState') === 0) {
      this.get('navigation').updateNavState(1);
    } else {
      this.get('navigation').updateNavState(0);
    }
  },
});
