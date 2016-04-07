import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['site-header'],
  classNameBindings: ['navState:nav-open:nav-closed', 'pageScrolled:page-scrolled:not-scrolled'],
  playAnimation: false,
  scrolledTimeline: [],

  scrolledStateMap: {
    0: 'notScrolledAnimation',
    1: 'scrolledAnimation'
  },

  setupTimeline: (function() {
    let _this = this,
        context = this.get('element'),
        logoWrapper = Ember.$(context).find('.site-header__logo-wrapper');


    this.scrolledTimeline = new TimelineLite({
      paused: true,
      onComplete: function() {
        _this.set('playAnimation', true);
      }
    });

    this.scrolledTimeline.add(TweenMax.from(logoWrapper, 0.5, {
      width: 0,
      ease: Power2.easeInOut
    }), 0);

  }).on('didInsertElement'),

  notScrolledAnimation: function() {
    this.scrolledTimeline.reverse();
    this.set('playAnimation', false);
  },

  scrolledAnimation: function() {
    this.scrolledTimeline.play();
  },

  scrolledStateChanged: (function() {
    return this[this.get('scrolledStateMap')[this.get('pageScrolled')]]();
  }).observes('pageScrolled')
});
