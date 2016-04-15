import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['site-navigation'],
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

    this.timeline.append(TweenMax.to( Ember.$('#nav-left'), 0.3, {
      left: "0vw",
      ease: Power2.easeInOut
    }), 0);

    this.timeline.append(TweenMax.to( Ember.$('#nav-right'), 0.3, {
      right: "0vw",
      ease: Power2.easeInOut
    }), -0.3);
  }).on('didInsertElement'),

  navStateChanged: (function() {
    return this[this.get('navStateMap')[this.get('navState')]]();
  }).observes('navState')
});