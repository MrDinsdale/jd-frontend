import Ember from "ember";

export default Ember.Controller.extend({
  navState: 0,

  init: function() {
    let _this = this;

    this.set('navState', 0);
    this.setScrolledClass();

    Ember.$(window).scroll(function() {
      _this.onScroll();
    });
  },

  onScroll: function() {
    Ember.run.debounce(this, this.setScrolledClass, 100);
  },

  setScrolledClass: Ember.observer('currentPath', function() {
    if (Ember.$(window).scrollTop() >= 50) {
      this.set('pageScrolled', 1);
    } else {
      this.set('pageScrolled', 0);
    }
  }),

  routeChange: Ember.observer('currentPath', function() {
    this.set('navState', 0);
    Ember.$('html, body').animate({scrollTop: 0}, '20');
  })
});
