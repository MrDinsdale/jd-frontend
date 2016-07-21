import Ember from "ember";

export default Ember.Controller.extend({
  extensionList: ['imageResponsive'],
  scrollToTop: function() {
    Ember.$('html, body').animate({scrollTop: 0}, 0);
  },

  routeChange: Ember.observer('post', function() {
    this.scrollToTop();
  })
});
