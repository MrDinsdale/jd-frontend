import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['site-nav'],
  classNameBindings: ['navState:clicked:unclicked'],
  timeline: [],

  navStateMap: {
    0: 'navCloseAnimation',
    1: 'navOpenAnimation'
  },

  navCloseAnimation: function() {
    Ember.$('.nav-button__toggle').removeClass("clicked");
    this.timeline.reverse();
  },

  navOpenAnimation: function() {
    Ember.$('.nav-button__toggle').addClass("clicked");
    this.timeline.play();
  },

  navAnimation: (function() {
    this.timeline = new TimelineLite({ paused: true });
    const _this = this;
    const navLinks = Ember.$('.site-nav').find('.site-nav__link');


    navLinks.each(function(index) {
      let offset = 0;
      if (index > 0) {
        offset = -0.5;
      }

      _this.timeline.append(TweenLite.to(Ember.$(this), 0.6, {
        height: '100vh',
        ease: Power2.easeOut
      }), offset);
    });
  }).on('didInsertElement'),

  navStateChanged: (function() {
    return this[this.get('navStateMap')[this.get('navState')]]();
  }).observes('navState')
});