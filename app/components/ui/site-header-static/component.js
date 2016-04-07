import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['site-header-static'],
  playAnimation: false,
  timeline: [],

  setupTimeline: (function() {
    let _this = this,
        context = this.get('element'),
        title = Ember.$(context).find('.jd-block__title'),
        subtitle = Ember.$(context).find('.jd-block__subtitle'),
        hr = Ember.$(context).find('.jd-block__rule'),
        border = Ember.$(context).find('.site-header-static__border');

    this.timeline = new TimelineLite({
      onComplete: function() {
        _this.set('playAnimation', true);
      }
    });

    this.timeline.add(TweenMax.from(title, 0.75, {
      opacity: 0,
      ease: Power2.easeInOut
    }), 0.5);

    this.timeline.add(TweenMax.from(subtitle, 0.75, {
      opacity: 0,
      ease: Power2.easeInOut
    }), 0.75);

    this.timeline.add(TweenMax.from(hr, 0.75, {
      width: 0,
      ease: Power2.easeInOut
    }), 1);

    this.timeline.add(TweenMax.from(border, 2, {
      maxHeight: '0',
      ease: Power2.easeOut
    }), 0.25);
  }).on('didInsertElement')
});
