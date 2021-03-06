import Ember from 'ember';

export default Ember.Component.extend({
  navigation: Ember.inject.service(),
  navState: Ember.computed.alias('navigation.navState'),
  tagName: 'nav',
  classNames: ['site-nav'],
  classNameBindings: ['navState:opened:closed'],
  timeline: [],

  navStateMap: {
    0: 'navCloseAnimation',
    1: 'navOpenAnimation'
  },

  navCloseAnimation: function() {
    this.timeline.reverse();
  },

  navOpenAnimation: function() {
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