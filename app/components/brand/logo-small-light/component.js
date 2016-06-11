import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['brand__logo-small'],
  timeline: [],

  initTimeline: (function() {
    let context = this.get('element'),
        logoJ = Ember.$(context).find('.jd-logo__j'),
        logoD = Ember.$(context).find('.jd-logo__d');

    this.timeline = new TimelineLite({
      paused: true
    });

    this.timeline.add(TweenLite.to(logoJ, 1, {
      strokeDashoffset: 0,
      ease: Power2.easeInOut
    }), 0);

    this.timeline.add(TweenLite.to(logoD, 1, {
      strokeDashoffset: 0,
      ease: Power2.easeInOut
    }), 0.1);
  }).on('didInsertElement'),

  triggerAnimation: (function() {
    if (this.get('play') === true) {
      this.timeline.play();
    } else {
      this.timeline.reverse();
    }
  }).observes('play'),

  willDestroy: function() {
    this.timeline.clear();
    this.timeline.stop();
  }
});
