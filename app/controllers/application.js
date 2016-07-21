import Ember from "ember";

export default Ember.Controller.extend({
  navigation: Ember.inject.service(),
  page: Ember.inject.service(),
  backTarget: Ember.computed.alias('navigation.backTarget'),

  resetNavState: function() {
    this.set('navigation.navState', 0);
  },

  updateCurrentPath: Ember.on('didInsertElement', function() {
    this.set('page.currentPath', this.get('currentPath'));
  }),

  updateBackTarget: function() {
    let currentPath = this.get('currentPath');

    if (currentPath === "posts.show") {
      this.get('navigation').updateBackTarget('posts');
    } else if (currentPath === "projects.show") {
      this.get('navigation').updateBackTarget('projects');
    } else {
      this.get('navigation').updateBackTarget(false);
    }
  },

  scrollToTop: function() {
    Ember.$('html, body').animate({scrollTop: 0}, 0);
  },

  routeChange: Ember.observer('currentPath', function() {
    this.resetNavState();
    this.updateCurrentPath();
    this.updateBackTarget();
    this.scrollToTop();
  })
});
