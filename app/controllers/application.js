import Ember from "ember";

export default Ember.Controller.extend({
  navigation: Ember.inject.service(),
  page: Ember.inject.service(),

  routeChange: Ember.observer('currentPath', function() {
    this.set('navigation.navState', 0);
    this.set('page.currentPath', this.get('currentPath'));
    Ember.$('html, body').animate({scrollTop: 0}, 0);
  })
});
