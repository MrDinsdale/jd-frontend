import Ember from 'ember';

export default Ember.Service.extend({
  scrolled: 0,

  init() {
    let _this = this;

    this.updateScrolled();

    Ember.$(window).scroll(function() {
      _this.onScroll();
    });
  },

  onScroll() {
    Ember.run.debounce(this, this.updateScrolled, 100);
  },

  updateScrolled() {
    if (Ember.$(window).scrollTop() >= 50) {
      this.set('scrolled', 1);
    } else {
      this.set('scrolled', 0);
    }
  }
});
